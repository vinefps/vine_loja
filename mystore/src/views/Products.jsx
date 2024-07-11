import { Link } from "react-router-dom";
import { getSpecificProducts } from "../controllers/ProductController";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const loadProduct = async () => {
    const res = await getSpecificProducts(id);
    setProduct(res);
    console.log(product);
  };
  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div>
      <div className="bg-red-400">{product.title}</div>
      <div>{product.price}</div>
    </div>
  );
}
