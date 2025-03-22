// ProductCard.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product, handleAddItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Truncar título para manter as alturas dos cards mais consistentes
  const truncatedTitle = product.title.length > 40 
    ? `${product.title.substring(0, 40)}...` 
    : product.title;
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: '250px' }}>
        <img 
          src={product.image} 
          alt={product.title} 
          className={`w-full h-full object-contain transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} 
        />
        
        <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Link to={`/products/${product.id}`} className="bg-white text-primary font-semibold px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200">
            Ver Detalhes
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 h-14">
          {truncatedTitle}
        </h3>
        
        <div className="flex-grow mt-2">
          <p className="text-lg font-bold text-primary dark:text-blue-400">{`R$ ${product.price.toFixed(2)}`}</p>
          <div className="mt-1 flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star} 
                className={`h-4 w-4 ${star <= Math.floor(product.rating?.rate || 0) ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-xs text-gray-500">{product.rating?.count || 0} avaliações</span>
          </div>
        </div>
        
        <button 
          onClick={() => handleAddItem({ id: product.id, image: product.image, title: product.title, price: product.price })} 
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-indigo-700 transition duration-300 flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          COMPRAR
        </button>
      </div>
    </div>
  );
};
