import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/CartProvider';
import { FilterProvider } from './contexts/FilterContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
          <App />
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>
);
