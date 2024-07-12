import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Shop } from "./views/Shop";
import { Contact } from "./views/Contact";
import { Products } from "./views/Products";
import { CartProvider } from './contexts/CartProvider';
import NavBar from "./components/genericComponents/NavBar";
import Footer from "./components/genericComponents/Footer";

export default function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/products/:id`} element={<Products />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/shop`} element={<Shop />} />
          <Route path={`/contact`} element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
