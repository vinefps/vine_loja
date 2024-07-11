import React from "react";
import { Filter } from "../components/shopComponents/Filter";
import { ProductGrid } from "../components/shopComponents/ProductGrid";

export const Shop = () => {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
        Compre nossa coleção sustentável
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Filter />
        <ProductGrid />
      </div>
    </main>
  );
};
