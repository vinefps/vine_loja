import { getCategories } from "../controllers/ProductController";
import { useEffect } from "react";
import "../App.css";
import HeroSection from "../components/homeComponents/HeroSection";
import ProductListing from "../components/genericComponents/ProductListing";
import Testimonials from "../components/homeComponents/Testimonials";

export function Home() {
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories();
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };
    
    fetchCategories();
  }, []);
  
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors">
      <HeroSection />
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Produtos em Destaque
          </h2>
          <ProductListing showTitle={false} />
        </div>
      </div>
      <Testimonials />
    </main>
  );
}
