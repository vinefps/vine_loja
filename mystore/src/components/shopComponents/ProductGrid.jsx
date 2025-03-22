// ProductGrid.jsx
import { ProductCard } from "../genericComponents/ProductCard";
import { getProducts } from "../../controllers/ProductController";
import { useState, useEffect } from "react";
import { useCartContext } from "../../contexts/CartProvider";
import { useFilterProvider } from '../../contexts/FilterContext';
import { FailAlert } from "../genericComponents/FailAlert";

export const ProductGrid = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cartItems, setItems } = useCartContext();
  const { CheckBoxFilter, FilterPrice, FilterSize } = useFilterProvider();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Adicionar produto ao carrinho com validação melhorada
  function handleAddItem({ id, image, title, price }) {
    if (FilterSize.sizeFilter === '') {
      setAlertMessage("Selecione um tamanho primeiro!");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }
    
    const name = title.split(' ').slice(0, 3).join(' ');
    const itemCart = {
      id,
      image,
      name,
      price,
      quantity: 1,
      size: FilterSize.sizeFilter
    };
    
    // Verificar se já existe no carrinho com mesmo ID e tamanho
    const existingItemIndex = cartItems.findIndex(
      item => item.id === id && item.size === FilterSize.sizeFilter
    );
    
    if (existingItemIndex >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1
      };
      setItems(updatedCart);
    } else {
      setItems(prevItems => [...prevItems, itemCart]);
    }
    
    FilterSize.setSizeFilter('');
    setAlertMessage("Produto adicionado ao carrinho!");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  }
  
  // Carregar produtos com tratamento de erros
  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const res = await getProducts();
      setAllProducts(res);
      setFilteredProducts(res);
      setError(null);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setError('Falha ao carregar os produtos. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    loadProducts();
  }, []);
  
  // Aplicar filtros quando o estado de filtro mudar
  useEffect(() => {
    if (allProducts.length === 0) return;
    
    let filtered = [...allProducts];
    
    // Filtrar por preço para todos os produtos
    filtered = filtered.filter(product => product.price <= FilterPrice.priceFilter);
    
    // Aplicar filtros de categoria
    const categoryFilters = {
      women: CheckBoxFilter.women.womenFilterCategory,
      men: CheckBoxFilter.men.menFilterCategory,
      jewelery: CheckBoxFilter.jewelery.jeweleryFilterCategory,
      electronics: CheckBoxFilter.eletronic.eletronicFilterCategory
    };
    
    const isAnyCategoryFilterActive = Object.values(categoryFilters).some(Boolean);
    
    if (isAnyCategoryFilterActive) {
      filtered = filtered.filter(product => {
        if (categoryFilters.women && product.category === "women's clothing") return true;
        if (categoryFilters.men && product.category === "men's clothing") return true;
        if (categoryFilters.jewelery && product.category === "jewelery") return true;
        if (categoryFilters.electronics && product.category === "electronics") return true;
        return false;
      });
    }
    
    setFilteredProducts(filtered);
  }, [allProducts, CheckBoxFilter.women.womenFilterCategory, CheckBoxFilter.men.menFilterCategory, 
      CheckBoxFilter.eletronic.eletronicFilterCategory, CheckBoxFilter.jewelery.jeweleryFilterCategory, 
      FilterPrice.priceFilter]);
  
  return (
    <div className="w-full md:w-3/4">
      {showAlert && <FailAlert title={alertMessage} />}
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p className="font-bold">Erro</p>
          <p>{error}</p>
          <button 
            onClick={loadProducts}
            className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          >
            Tentar Novamente
          </button>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddItem={handleAddItem}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Nenhum produto encontrado</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Tente ajustar seus filtros.</p>
        </div>
      )}
    </div>
  );
};
