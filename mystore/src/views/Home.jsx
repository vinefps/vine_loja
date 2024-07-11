import { getCategories } from "../controllers/ProductController";
import { useEffect } from "react";
import "../App.css";

import HeroSection from "../components/homeComponents/HeroSection";
import ProductListing from "../components/genericComponents/ProductListing";
import Testimonials from "../components/homeComponents/Testimonials";

export function Home() {
  const getCats = async () => {
    const cats = await getCategories();
    console.log(cats);
  };
  useEffect(() => {
    getCats();
  }, []);
  return (
    <main>
      <HeroSection />
      <ProductListing />
      <Testimonials />
    </main>
  );
}
