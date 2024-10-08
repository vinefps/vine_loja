
export const ProductCard = ({ product, handleAddItem }) => {


  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {product.title}
        </h3>
        <div className="flex-grow">
          <p className="text-gray-600 dark:text-gray-300 mt-2">{`R$ ${product.price.toFixed(2)}`}</p>
        </div>
        <button onClick={() => handleAddItem({ id: product.id, image: product.image, title: product.title, price: product.price })} className="bg-blue-400 mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          COMPRAR
        </button>
      </div>
    </div>
  );
};
