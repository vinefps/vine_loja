export const PriceFilter = () => {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Preço Limite</h3>
      <input type="range" min="0" max="200" defaultValue="100" className="w-full" />
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>R$0</span>
        <span>R$200</span>
      </div>
    </div>
  );
};