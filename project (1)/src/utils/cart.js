export const addToCart = (product, setCart) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.id === product.id);
    if (existingItem) {
      return prevCart.map(item =>
        item.id === product.id
          ? {...item, quantity: item.quantity + 1}
          : item
      );
    }
    // Asegurarse de que todos los datos necesarios se copien al item del carrito
    return [...prevCart, {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image // Incluir la URL de la imagen
    }];
  });
};

export const removeFromCart = (productId, setCart) => {
  setCart(prevCart => prevCart.filter(item => item.id !== productId));
};

export const updateCartItem = (productId, newQuantity, setCart) => {
  if (newQuantity < 1) {
    // Si la cantidad es 0 o menos, eliminar el item
    removeFromCart(productId, setCart);
    return;
  }
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === productId
        ? {...item, quantity: newQuantity}
        : item
    )
  );
};

export const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getCartItemCount = (cart) => {
  return cart.reduce((count, item) => count + item.quantity, 0);
};