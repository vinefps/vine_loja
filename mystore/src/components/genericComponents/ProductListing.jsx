import React from "react";
import { ProductCard } from "./ProductCard";
import {Link} from 'react-router-dom'
import {
  getWomenCategory,
  getMenCategory,
} from "../../controllers/ProductController";
import { useState, useEffect } from "react";

const ProductListing = () => {
  const [womenProducts, setWomenProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);

  const loadProducts = async () => {
    const res = await getWomenCategory();
    const resM = await getMenCategory();
    setWomenProducts(res);
    setMenProducts(resM);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {womenProducts.map((product, index) => (
            <Link to="/shop">
               <ProductCard
                key={product.id}
                product={product}
              />
            </Link>
          ))}
          {menProducts.map((product, index) => (
            <Link to="/shop">
              <ProductCard
              key={product.id}
              product={product}
            />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;

