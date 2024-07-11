export const SizeFilter = () => {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        Tamanho
      </h3>
      <div className="grid grid-cols-3 gap-2">
        <button className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          XS
        </button>
        <button className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          S
        </button>
        <button className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          M
        </button>
        <button className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          L
        </button>
        <button className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          XL
        </button>
        <button className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
          XXL
        </button>
      </div>
    </div>
  );
};
