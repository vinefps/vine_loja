import { useState, createContext,useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
    const context = useContext(CartContext);
    return context;
}

export function CartProvider({ children }) {
    const [cartItems, setItems] = useState([]);
    return (
        <CartContext.Provider value={{ cartItems, setItems }}>
            {children}
        </CartContext.Provider>
    )
}