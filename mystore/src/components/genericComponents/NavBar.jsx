import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [openMenu, setOpenMenu] = useState(false);
  
  const openNavigator = () =>{
    setOpenMenu(!openMenu)
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    script.onload = () => {
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#3B82F6",
              secondary: "#10B981",
            },
          },
        },
      };
    };
    document.head.appendChild(script);
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <div className="">
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <svg className="md:hidden relative z-10 " width="40" height="80" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" onClick={openNavigator}>
                  <rect width="100" height="20" fill="#3E85F6"></rect>
                  <rect y="30" width="100" height="20" fill="#3E85F6"></rect>
                  <rect y="60" width="100" height="20" fill="#3E85F6"></rect>
                </svg>
                <Link
                  to="/"
                  className={`${openMenu ? 'hidden' : 'block'} md:block text-2xl font-bold text-primary dark:text-white ml-8 md:ml-0 `}
                >
                  VINE's Store
                </Link>
                <div className={`${openMenu ? 'block' : 'hidden'} w-full absolute md:hidden flex justify-center`}>
                  <ul className="flex flex-row justify-center h-full">
                    <Link to="/" onClick={() => handleMenuClick("Home")}>
                       <li className={`${activeMenu === "Home" ? "border-primary" : "border-transparent"} ml-2 text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>HOME</li>
                    </Link>
                    <Link to="/shop" onClick={() => handleMenuClick("Shop")}>
                       <li className={`${activeMenu === "Shop" ? "border-primary" : "border-transparent"} ml-2  text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>COMPRA</li>
                    </Link>
                    <Link to="/contact" onClick={() => handleMenuClick("Contact")}>
                        <li className={`${activeMenu === "Contact" ? "border-primary" : "border-transparent"} ml-2  text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>CONTATO</li>
                    </Link>
                    <Link to="/about" onClick={() => handleMenuClick("About")}>
                      <li className={`${activeMenu === "About" ? "border-primary" : "border-transparent"} ml-2  text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>SOBRE</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="hidden sm:ml-6 md:flex sm:space-x-8">
                <Link
                  to="/"
                  className={`${activeMenu === "Home" ? "border-primary" : "border-transparent"} text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  onClick={() => handleMenuClick("Home")}
                >
                  Inicio
                </Link>
                <Link
                  to="/shop"
                  className={`${activeMenu === "Shop" ? "border-primary" : "border-transparent"} text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  onClick={() => handleMenuClick("Shop")}
                >
                  Comprar
                </Link>
                <Link
                  to="/about"
                  className={`${activeMenu === "About" ? "border-primary" : "border-transparent"} text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  onClick={() => handleMenuClick("About")}
                >
                  Sobre
                </Link>
                <Link
                  to="/contact"
                  className={`${activeMenu === "Contact" ? "border-primary" : "border-transparent"} text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  onClick={() => handleMenuClick("Contact")}
                >
                  Contato
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                id="darkModeToggle"
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
