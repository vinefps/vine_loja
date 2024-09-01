import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/CartProvider';
import { FilterProvider } from './contexts/FilterContext';
import { UserProvider } from './contexts/UserProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <UserProvider>
        <FilterProvider>
            <App />
        </FilterProvider>
      </UserProvider>
    </CartProvider>
  </React.StrictMode>
);
