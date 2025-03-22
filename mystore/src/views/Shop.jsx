import React from "react";
import { Filter } from "../components/shopComponents/Filter";
import { ProductGrid } from "../components/shopComponents/ProductGrid";

export const Shop = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            Coleção Sustentável
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Descubra roupas que unem estilo, qualidade e responsabilidade ambiental
          </p>
        </header>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-1/4">
            <Filter />
          </aside>
          <div className="w-full lg:w-3/4">
            <ProductGrid />
          </div>
        </div>
      </div>
    </main>
  );
};
