import { ProductCard } from "../genericComponents/ProductCard";
import {
  getWomenCategory,
  getMenCategory,
} from "../../controllers/ProductController";
import { useState, useEffect, } from "react";
import { useCartContext } from "../../contexts/CartProvider";      //USANDO O HOOK DO CONTEXT

export const ProductGrid = () => {
  const [womenProducts, setWomenProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const { cartItems, setItems } = useCartContext();                //DESESTRUTURANDO O CONTEXT

  function handleAddItem({ id, image, title, price }) {
    const name = title.split(' ').slice(0, 3).join(' ')            //REDUZINDO O TAMANHO DO NOME DO ITEM
    const itemCart = {
      id,
      image,
      name,
      price,
      quantity: 1
    }
    const haveItem = cartItems.find((item) => {
      return item.id === id
    })

    if (haveItem) {
      setItems((prev) => prev.map((item) => {
        if (item.id === itemCart.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }));
    } else {
      setItems((prev) => [...prev, itemCart]); //FORMA CORRETA DE ADICIONAR UM NOVO ITEM
      // const newList = [...cartItems, itemCart]
      // setItems(newList);                       FORMA "ERRADA" DE ADICIONAR UM NOVO ITEM
    }
  }


  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);


  const loadProducts = async () => {
    const res = await getWomenCategory();
    const resM = await getMenCategory();
    setWomenProducts(res);
    setMenProducts(resM);
  };

  useEffect(() => {
    loadProducts();
    console.log(womenProducts, menProducts)
  }, []);

  return (
    <div className="w-full md:w-3/4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {womenProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleAddItem={handleAddItem}
          />
        ))}
        {menProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleAddItem={handleAddItem}
          />
        ))}
      </div>
      {/* <Pagination /> */}
    </div>
  );
};
