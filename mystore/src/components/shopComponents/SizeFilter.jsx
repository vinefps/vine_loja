// SizeFilter.jsx
import { useState } from 'react';
import { useFilterProvider } from '../../contexts/FilterContext';
import { SucessAlert } from '../genericComponents/SucessAlert';

export const SizeFilter = () => {
  const { FilterSize } = useFilterProvider();
  const [showAlert, setShowAlert] = useState(false);
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  function handleSetSize(size) {
    FilterSize.setSizeFilter(size);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  }
  
  return (
    <div className="py-3 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
        Tamanho
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {sizes.map(size => (
          <button 
            key={size}
            onClick={() => handleSetSize(size)} 
            className={`
              border rounded-md py-2 text-sm font-medium transition-all duration-200
              ${FilterSize.sizeFilter === size 
                ? 'bg-primary text-white border-primary' 
                : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:text-primary'
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
      {showAlert && <SucessAlert title="Tamanho Disponível!"/>}
    </div>
  );
};
