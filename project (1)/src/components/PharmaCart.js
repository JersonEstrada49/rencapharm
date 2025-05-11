import React, { useState } from 'react';
import { calculateTotal, updateCartItem } from '../utils/cart';

const PharmaCart = ({ cart, setCart }) => {
  const [showCart, setShowCart] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'processing', 'success', 'error'

  const handlePayment = async () => {
    if (cart.length === 0) return;

    setPaymentStatus('processing');

    // --- SIMULACIÓN DE INTEGRACIÓN DE PASARELA DE PAGOS ---
    // Aquí iría la lógica real para interactuar con Stripe, MercadoPago, etc.
    // Esto implicaría enviar los detalles del carrito a tu backend,
    // crear una sesión de pago y redirigir al usuario.
    // Como no podemos hacer peticiones reales ni usar librerías externas,
    // simulamos un proceso exitoso.

    try {
      // Simular una llamada a tu backend para crear una orden de pago
      // const response = await fetch('/api/create-payment-intent', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ items: cart, total: calculateTotal(cart) }),
      // });
      // const data = await response.json();

      // if (data.url) {
      //   window.location.href = data.url; // Redirigir a la pasarela real
      // } else {
      //   throw new Error('Error al crear la sesión de pago');
      // }

      // --- SIMULACIÓN DE ÉXITO ---
      setTimeout(() => {
        setPaymentStatus('success');
        // Enviar detalles de compra
        sendOrderDetails(cart, calculateTotal(cart));
        // Limpiar carrito después de pago exitoso simulado
        setTimeout(() => {
          setCart([]);
          setPaymentStatus(null);
          setShowCart(false);
        }, 3000);
      }, 2000);

    } catch (error) {
      console.error('Error en el proceso de pago:', error);
      setPaymentStatus('error');
      setTimeout(() => setPaymentStatus(null), 3000);
    }
  };

  const sendOrderDetails = (orderItems, orderTotal) => {
    const details = orderItems.map(item => 
      `▪ ${item.name} - ${item.quantity} x $${item.price} = $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    const message = `¡Hola Rencapharm! Quisiera realizar este pedido:\n\n${details}\n\nTotal: $${orderTotal.toFixed(2)}\n\nMis datos:\nNombre:\nDirección:\nTeléfono:`;

    // Enviar por WhatsApp
    // Usar un enlace más genérico que a veces funciona mejor
    window.open(`https://api.whatsapp.com/send?phone=525555555555&text=${encodeURIComponent(message)}`, '_blank');

    // Enviar por correo (requiere backend o servicio de email)
    // window.location.href = `mailto:tuemail@rencapharm.com?subject=Nueva Orden de Compra&body=${encodeURIComponent(message)}`;
  };

  const handleQuantityChange = (id, change) => {
    const item = cart.find(i => i.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        setCart(prevCart =>
          prevCart.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
        );
      } else {
        // Si la cantidad llega a 0, eliminar el producto
        setCart(prevCart => prevCart.filter(item => item.id !== id));
      }
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <button 
        onClick={() => setShowCart(!showCart)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center"
      >
        🛒
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>
      
      {showCart && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">Tu Carrito</h3>
            <button 
              onClick={() => {
                setShowCart(false);
                setPaymentStatus(null);
              }}
              className="text-gray-500 hover:text-gray-700 transition dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          
          {paymentStatus === 'success' ? (
            <div className="text-center py-6">
              <div className="text-green-500 text-5xl mb-3">✓</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">¡Pago Exitoso!</h4>
              <p className="text-gray-600 dark:text-gray-300">Tu pedido ha sido procesado correctamente.</p>
            </div>
          ) : paymentStatus === 'error' ? (
            <div className="text-center py-6">
              <div className="text-red-500 text-5xl mb-3">✗</div>
              <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">Error en el Pago</h4>
              <p className="text-gray-600 dark:text-gray-300">Hubo un problema al procesar tu pago. Intenta de nuevo.</p>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 text-5xl mb-3">🛒</div>
              <p className="text-gray-500 dark:text-gray-400">Tu carrito está vacío</p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Agrega productos para continuar</p>
            </div>
          ) : (
            <>
              <div className="max-h-64 overflow-y-auto mb-4 space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="border-b pb-4 dark:border-gray-700">
                    <div className="flex gap-3">
                      <div className="w-14 h-14 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center dark:bg-gray-700">
                        {item.image ? (
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://via.placeholder.com/150/CCCCCC/999999?text=No+Image'; // Fallback a placeholder genérico
                            }}
                          />
                        ) : (
                          <span className="text-gray-400">📦</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">{item.name}</h4>
                        <p className="text-gray-600 text-sm dark:text-gray-400">${item.price} c/u</p>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border rounded-md dark:border-gray-600">
                            <button 
                              onClick={() => handleQuantityChange(item.id, -1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition dark:text-gray-400 dark:hover:bg-gray-700"
                            >
                              -
                            </button>
                            <span className="px-2 text-sm text-gray-800 dark:text-gray-200">{item.quantity}</span>
                            <button 
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition dark:text-gray-400 dark:hover:bg-gray-700"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setCart(prev => prev.filter(i => i.id !== item.id))}
                      className="text-red-500 text-sm hover:text-red-700 transition mt-1 flex items-center dark:text-red-400 dark:hover:text-red-600"
                    >
                      <span className="mr-1">🗑️</span> Eliminar
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 dark:border-gray-600">
                <div className="flex justify-between font-bold text-lg mb-4 text-gray-800 dark:text-gray-200">
                  <span>Total:</span>
                  <span>${calculateTotal(cart).toFixed(2)}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => {
                      const message = `¡Hola Rencapharm! Quisiera realizar este pedido:\n\n${cart.map(item => 
                        `▪ ${item.name} - ${item.quantity} x $${item.price} = $${(item.price * item.quantity).toFixed(2)}`
                      ).join('\n')}\n\nTotal: $${calculateTotal(cart).toFixed(2)}\n\nMis datos:\nNombre:\nDirección:\nTeléfono:`;
                      window.open(`https://api.whatsapp.com/send?phone=525555555555&text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg transition flex items-center justify-center text-sm dark:bg-green-600 dark:hover:bg-green-700"
                  >
                    <span className="mr-1">📱</span> Pedir por WhatsApp
                  </button>
                  <button 
                    onClick={handlePayment}
                    disabled={paymentStatus === 'processing' || cart.length === 0}
                    className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition flex items-center justify-center text-sm ${
                      paymentStatus === 'processing' ? 'opacity-75' : ''
                    } dark:bg-blue-700 dark:hover:bg-blue-800`}
                  >
                    {paymentStatus === 'processing' ? (
                      <>
                        <span className="mr-1">⏳</span> Procesando...
                      </>
                    ) : (
                      <>
                        <span className="mr-1">💳</span> Pagar Ahora
                      </>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PharmaCart;

// DONE