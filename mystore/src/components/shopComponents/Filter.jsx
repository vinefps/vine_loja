import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { SizeFilter } from "./SizeFilter";

export const Filter = () => {
  return (
    <div className="w-full md:w-1/4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Filtros:
      </h2>
      <div className="space-y-4">
        <CategoryFilter />
        <PriceFilter />
        <SizeFilter />
      </div>
    </div>
  );
};
