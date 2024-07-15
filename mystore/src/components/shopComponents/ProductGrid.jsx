import { ProductCard } from "../genericComponents/ProductCard";
import { getProducts } from "../../controllers/ProductController";
import { useState, useEffect } from "react";
import { useCartContext } from "../../contexts/CartProvider";
import { useFilterProvider } from '../../contexts/FilterContext';

export const ProductGrid = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cartItems, setItems } = useCartContext();
  const { CheckBoxFilter } = useFilterProvider();

  function handleAddItem({ id, image, title, price }) {
    const name = title.split(' ').slice(0, 3).join(' ');
    const itemCart = {
      id,
      image,
      name,
      price,
      quantity: 1
    };
    const haveItem = cartItems.find((item) => item.id === id);

    if (haveItem) {
      setItems((prev) => prev.map((item) => {
        if (item.id === itemCart.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }));
    } else {
      setItems((prev) => [...prev, itemCart]);
    }
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const loadProducts = async () => {
    const res = await getProducts();
    setAllProducts(res);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = allProducts;
    if (CheckBoxFilter.women.womenFilterCategory) {
      filtered = filtered.filter(product => product.category === "women's clothing");
    }
    if (CheckBoxFilter.men.menFilterCategory) {
      filtered = filtered.filter(product => product.category === "men's clothing");
    }
    if (CheckBoxFilter.eletronic.eletronicFilterCategory) {
      filtered = filtered.filter(product => product.category === "electronics");
    }
    if (CheckBoxFilter.jewelery.jeweleryFilterCategory) {
      filtered = filtered.filter(product => product.category === "jewelery");
    }
    setFilteredProducts(filtered);
  }, [allProducts, CheckBoxFilter]);

  return (
    <div className="w-full md:w-3/4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleAddItem={handleAddItem}
          />
        ))}
      </div>
    </div>
  );
};
