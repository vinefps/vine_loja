import { ProductCard } from "../genericComponents/ProductCard";
import {
  getWomenCategory,
  getMenCategory,
} from "../../controllers/ProductController";
import { useState, useEffect } from "react";

export const ProductGrid = () => {
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
    <div className="w-full md:w-3/4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {womenProducts.map((product, index) => (
          <ProductCard
            key={index}
            imgSrc={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
        {menProducts.map((product, index) => (
          <ProductCard
            key={index}
            imgSrc={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      {/* <Pagination /> */}
    </div>
  );
};
