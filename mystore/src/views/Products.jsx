// Products.jsx - Corrigido
import { Link } from "react-router-dom";
import { getSpecificProducts } from "../controllers/ProductController";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const res = await getSpecificProducts(id);
        setProduct(res);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar o produto");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadProduct();
  }, [id]); // Adicionada dependência id

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500 flex justify-center items-center min-h-screen">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
        {product.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            R$ {product.price?.toFixed(2)}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>
          <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
