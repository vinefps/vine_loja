import { Link } from "react-router-dom";
import { getSpecificProducts } from "../controllers/ProductController";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCartContext } from "../contexts/CartProvider";

export function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);
  const { cartItems, setItems } = useCartContext();
  
  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const res = await getSpecificProducts(id);
        setProduct(res);
        setError(null);
      } catch (err) {
        setError("Não foi possível carregar o produto. Por favor, tente novamente.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    if (!size && product.category?.includes('clothing')) {
      setError("Por favor, selecione um tamanho");
      return;
    }
    
    const itemToAdd = {
      id: product.id,
      image: product.image,
      name: product.title,
      price: product.price,
      quantity,
      size: size || "Único"
    };
    
    // Verificar se o item já está no carrinho
    const existingItemIndex = cartItems.findIndex(
      item => item.id === product.id && item.size === itemToAdd.size
    );
    
    if (existingItemIndex >= 0) {
      // Atualizar quantidade se o item já existir
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + quantity
      };
      setItems(updatedCart);
    } else {
      // Adicionar novo item se não existir
      setItems([...cartItems, itemToAdd]);
    }
    
    setAddedToCart(true);
    setError(null);
    
    // Resetar a notificação após 3 segundos
    setTimeout(() => setAddedToCart(false), 3000);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }
  
  if (error && !addedToCart) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900">
        <div className="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 text-red-700 dark:text-red-400 p-6 rounded-r-md max-w-md">
          <h3 className="text-lg font-medium mb-2">Erro</h3>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/shop" className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Voltar para a loja
          </Link>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Imagem do produto */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden p-8 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-h-96 object-contain transition-all duration-500 hover:scale-105"
            />
          </div>
          
          {/* Detalhes do produto */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              {product.title}
            </h1>
            
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    className={`h-5 w-5 ${
                      rating < Math.round(product.rating?.rate || 0)
                        ? 'text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {product.rating?.rate || 0} ({product.rating?.count || 0} avaliações)
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <h2 className="sr-only">Informações do produto</h2>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                R$ {product.price?.toFixed(2)}
              </p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Descrição</h3>
              <div className="mt-2 prose prose-sm text-gray-700 dark:text-gray-300">
                <p>{product.description}</p>
              </div>
            </div>
            
            {/* Seleção de tamanho (apenas para roupas) */}
            {product.category?.includes('clothing') && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Tamanho</h3>
                  <span className="text-xs text-gray-500 underline cursor-pointer">Guia de tamanhos</span>
                </div>
                
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((sizeOption) => (
                    <button
                      type="button"
                      key={sizeOption}
                      onClick={() => setSize(sizeOption)}
                      className={`
                        py-2 px-4 rounded-md text-center text-sm font-medium
                        ${size === sizeOption
                          ? 'bg-primary text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }
                      `}
                    >
                      {sizeOption}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Seleção de quantidade */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Quantidade</h3>
              <div className="flex items-center mt-2 border border-gray-300 dark:border-gray-600 rounded-md w-32">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  className="w-full text-center text-gray-900 dark:text-white bg-transparent border-none focus:ring-0"
                />
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Botão de compra */}
            <div className="mt-8 flex">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex items-center justify-center w-full px-8 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-md shadow-md transition-colors"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Adicionar ao Carrinho
              </button>
            </div>
            
            {/* Notificação de sucesso */}
            {addedToCart && (
              <div className="mt-4 bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 text-green-700 dark:text-green-400 p-4 rounded-r-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Produto adicionado ao carrinho!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
