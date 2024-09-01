import { useEffect, useState } from 'react';

export default function User() {
    // Declare um estado para armazenar o valor do localStorage
    const [valor, setValor] = useState(null);

    useEffect(() => {
        const storedValue = localStorage.getItem('userInfo');
        if (storedValue !== null && storedValue !== undefined) {
            try {
                setValor(JSON.parse(storedValue));
            } catch (error) {
                console.error('Erro ao fazer parse do JSON:', error);
            }
        }
    }, []);

    return (
        <div className="flex justify-center items-center border-2 w-24 h-8 rounded-full">
            <div>{valor ? valor.name : "User"}</div>
        </div>
    );
}
