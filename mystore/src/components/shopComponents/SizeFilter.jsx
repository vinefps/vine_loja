import { useState } from 'react';
import { useFilterProvider } from '../../contexts/FilterContext';
import { SucessAlert } from '../genericComponents/SucessAlert';

export const SizeFilter = () => {
  const { FilterSize } = useFilterProvider();
  const [showAlert, setShowAlert] = useState(false);

  function handleSetSize(size) {
    FilterSize.setSizeFilter(size);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // Oculta o alerta após 2 segundos
  }

  return (
    <div className="dark:text-white">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        Tamanho
      </h3>
      <div className="grid grid-cols-3 gap-2">
        <button onClick={() => handleSetSize('XS')} className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          XS
        </button>
        <button onClick={() => handleSetSize('S')} className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          S
        </button>
        <button onClick={() => handleSetSize('M')} className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          M
        </button>
        <button onClick={() => handleSetSize('L')} className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          L
        </button>
        <button onClick={() => handleSetSize('XL')} className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          XL
        </button>
        <button onClick={() => handleSetSize('XXL')} className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          XXL
        </button>
      </div>
      {showAlert && <SucessAlert title="Tamanho Disponível!"/>}
    </div>
  );
};
