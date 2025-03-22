import React from "react";
import { ProductCard } from "./ProductCard";
import { Link } from 'react-router-dom';
import { getWomenCategory, getMenCategory } from "../../controllers/ProductController";
import { useState, useEffect } from "react";

const ProductListing = ({ showTitle = true }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        // Carregar produtos em paralelo para melhor performance
        const [womenProducts, menProducts] = await Promise.all([
          getWomenCategory(),
          getMenCategory()
        ]);

        // Limitar a 4 produtos de cada categoria para o destaque
        const limitedWomen = womenProducts.slice(0, 4);
        const limitedMen = menProducts.slice(0, 4);

        // Combinar e embaralhar para exibição variada
        const combinedProducts = [...limitedWomen, ...limitedMen];
        setProducts(combinedProducts.sort(() => 0.5 - Math.random()));
        
        setError(null);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
        setError("Não foi possível carregar os produtos. Por favor, tente novamente.");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showTitle && (
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
              Produtos em Destaque
            </h2>
          )}
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showTitle && (
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
              Produtos em Destaque
            </h2>
          )}
          <div className="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 text-red-700 dark:text-red-400 p-4 rounded-md max-w-lg mx-auto">
            <p className="font-medium">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Produtos em Destaque
          </h2>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-600 transition-colors"
          >
            Ver todos os produtos
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
