import { Button } from '../genericComponents/Button';
import { useCartContext } from '../../contexts/CartProvider';
import { useEffect, useState } from 'react';

export function Modal({ handleOpenModal }) {
    const { cartItems, setItems } = useCartContext();
    const [totalPrice, setTotal] = useState(0)

    // Definindo a altura máxima para o contêiner de itens
    const maxItemsBeforeScroll = 3;
    const itemContainerStyle = {
        maxHeight: `${maxItemsBeforeScroll * 100}px`, // Ajuste a altura conforme necessário
        overflowY: cartItems.length > maxItemsBeforeScroll ? 'auto' : 'hidden'
    };

    useEffect(() => {
        const total = cartItems.reduce((acc, currentValue) => {
            return acc + currentValue.price
        }, 0)

        setTotal(total)
        console.log(total)

    }, [cartItems])

    return (
        <div className="flex flex-col rounded-lg bg-white fixed w-96">
            <div className="flex justify-between mb-4 ml-8">
                <div className="tracking-tight font-extrabold text-gray-900 dark:text-white">Seu Carrinho</div>
                <div className="modal-close cursor-pointer z-50" onClick={handleOpenModal}>
                    <svg className="fill-current text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center" style={itemContainerStyle}>
                {cartItems.map((item) => (
                    <div className="flex justify-between w-full p-4" key={item.id}>
                        <img className="cover w-1/4" src={item.image} alt={item.name} />
                        <div className="ml-4">
                            <div className="tracking-tight font-extrabold text-gray-900 dark:text-white">{item.name}</div>
                            <div>{`Price: ${item.price}`}</div>
                        </div>
                        <div className="flex items-center">
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </button>
                            <span className="text-gray-700 dark:text-gray-300 mx-2">1</span>
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
                <hr className="w-full my-4" />
            </div>
            <div className="flex items-center justify-around mb-4">
                <div className="tracking-tight font-extrabold text-gray-900 dark:text-white">{`R$ ${totalPrice}`}</div>
                <Button title={'COMPRAR'} />
            </div>
        </div>
    );
}
