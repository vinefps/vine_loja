// Modal.jsx
import { useCartContext } from '../../contexts/CartProvider';
import { useEffect, useState } from 'react';
import { FailAlert } from '../genericComponents/FailAlert';
import { Button } from '../genericComponents/Button';

export function Modal({ handleOpenModal }) {
    const { cartItems, setItems } = useCartContext();
    const [totalPrice, setTotal] = useState(0);
    const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
    
    // Calcular altura máxima com base no número de itens
    const maxItemsBeforeScroll = 3;
    const itemContainerStyle = {
        maxHeight: `${maxItemsBeforeScroll * 100}px`,
        overflowY: cartItems.length > maxItemsBeforeScroll ? 'auto' : 'hidden'
    };
    
    // Calcular preço total quando o carrinho muda
    useEffect(() => {
        const total = cartItems.reduce((acc, currentValue) => {
            return acc + (currentValue.price * currentValue.quantity);
        }, 0);
        
        setTotal(total);
    }, [cartItems]);
    
    // Função para lidar com mudanças de quantidade
    function updateQuantity(item, action) {
        // Criar uma cópia profunda dos itens do carrinho
        const updatedCart = [...cartItems];
        
        // Encontrar o item específico por ID e tamanho
        const itemIndex = updatedCart.findIndex(
            cartItem => cartItem.id === item.id && cartItem.size === item.size
        );
        
        if (itemIndex === -1) return;
        
        if (action === 'decrease') {
            if (updatedCart[itemIndex].quantity > 1) {
                // Diminuir quantidade se for maior que 1
                updatedCart[itemIndex] = {
                    ...updatedCart[itemIndex],
                    quantity: updatedCart[itemIndex].quantity - 1
                };
                setItems(updatedCart);
            } else {
                // Remover item se quantidade seria menor que 1
                removeItem(item);
            }
        } else if (action === 'increase') {
            // Aumentar quantidade
            updatedCart[itemIndex] = {
                ...updatedCart[itemIndex],
                quantity: updatedCart[itemIndex].quantity + 1
            };
            setItems(updatedCart);
        }
    }
    
    // Função para remover item completamente
    function removeItem(item) {
        setItems(prevItems => 
            prevItems.filter(cartItem => 
                !(cartItem.id === item.id && cartItem.size === item.size)
            )
        );
        
        showNotification('Item removido do carrinho');
    }
    
    // Função para exibir notificações
    function showNotification(message) {
        setNotification({ show: true, message });
        setTimeout(() => setNotification({ ...notification, show: false }), 3000);
    }
    
    return (
        <div className="flex flex-col rounded-lg bg-white dark:bg-gray-800 shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
            {/* Cabeçalho */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Seu Carrinho ({cartItems.length})
                </h2>
                <button 
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    onClick={handleOpenModal}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            {/* Itens do Carrinho */}
            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                    <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Seu carrinho está vazio</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Comece a comprar para adicionar itens ao seu carrinho</p>
                </div>
            ) : (
                <div className="flex-1 overflow-y-auto" style={itemContainerStyle}>
                    {cartItems.map((item) => (
                        <div key={`${item.id}-${item.size}`} className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                                <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                            </div>
                            <div className="ml-4 flex-1">
                                <div className="flex justify-between">
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</h3>
                                    <button 
                                        onClick={() => removeItem(item)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Tamanho: {item.size}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                        R$ {(item.price * item.quantity).toFixed(2)}
                                    </p>
                                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                                        <button 
                                            className="px-2 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                            onClick={() => updateQuantity(item, 'decrease')}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <span className="px-2 py-1 text-gray-700 dark:text-gray-300 min-w-[30px] text-center">
                                            {item.quantity}
                                        </span>
                                        <button 
                                            className="px-2 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                            onClick={() => updateQuantity(item, 'increase')}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {/* Rodapé com total e botão de checkout */}
            {cartItems.length > 0 && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Subtotal</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">R$ {totalPrice.toFixed(2)}</span>
                    </div>
                    <Button 
                        title="FINALIZAR COMPRA"
                        className="w-full"
                        icon={
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        }
                    />
                </div>
            )}
            
            {/* Notificação */}
            {notification.show && (
                <div className="absolute bottom-4 left-0 right-0 mx-auto w-max">
                    <FailAlert title={notification.message} />
                </div>
            )}
        </div>
    );
}
