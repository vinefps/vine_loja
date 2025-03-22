// PriceFilter.jsx
import { useFilterProvider } from '../../contexts/FilterContext';

export const PriceFilter = () => {
  const { FilterPrice } = useFilterProvider();
  
  const handleRangeChange = (event) => {
    FilterPrice.setPriceFilter(parseInt(event.target.value, 10));
  };
  
  // Calcular porcentagem para preenchimento do fundo
  const fillPercentage = (FilterPrice.priceFilter / 200) * 100;
  
  return (
    <div className="py-3 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Preço Limite</h3>
      
      <div className="relative mb-6">
        <input
          type="range"
          min="0"
          max="200"
          value={FilterPrice.priceFilter}
          onChange={handleRangeChange}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${fillPercentage}%, #d1d5db ${fillPercentage}%, #d1d5db 100%)`
          }}
        />
        
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
          <span>R$0</span>
          <span>R$200</span>
        </div>
      </div>
      
      <div className="text-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-md">
        <p className="font-medium text-blue-600 dark:text-blue-300">
          Valor: R${FilterPrice.priceFilter}
        </p>
      </div>
    </div>
  );
};
