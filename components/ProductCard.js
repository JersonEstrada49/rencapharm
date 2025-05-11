export default function ProductCard({ name, price, description, image }) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white dark:bg-gray-900 dark:text-white">
      <img src={image} alt={name} className="h-32 w-full object-contain" />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-sm">{description}</p>
      <p className="text-green-600 font-bold text-lg">${price}</p>
      <button className="mt-2 px-4 py-2 bg-green-700 text-white rounded">Agregar al carrito</button>
    </div>
  );
}