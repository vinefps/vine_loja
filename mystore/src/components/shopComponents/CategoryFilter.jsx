export const CategoryFilter = () => {
  return (
    <div className="dark:text-white">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Categoria</h3>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox text-primary" />
          <span className="ml-2 text-gray-700 dark:text-gray-300">T-Shirts</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox text-primary" />
          <span className="ml-2 text-gray-700 dark:text-gray-300">Jeans</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox text-primary" />
          <span className="ml-2 text-gray-700 dark:text-gray-300">Vestidos</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox text-primary" />
          <span className="ml-2 text-gray-700 dark:text-gray-300">Acessórios</span>
        </label>
      </div>
    </div>
  );
};