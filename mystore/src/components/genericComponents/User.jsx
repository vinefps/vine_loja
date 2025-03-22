// User.jsx
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function User() {
    const [userData, setUserData] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    
    useEffect(() => {
        // Carregar dados do usuário do localStorage
        const storedValue = localStorage.getItem('userInfo');
        if (storedValue) {
            try {
                setUserData(JSON.parse(storedValue));
            } catch (error) {
                console.error('Erro ao analisar dados do usuário:', error);
            }
        }
        
        // Fechar menu ao clicar fora
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    function handleLogout() {
        localStorage.removeItem('userInfo');
        setUserData(null);
        setIsMenuOpen(false);
    }
    
    // Gerar iniciais para o avatar
    function getInitials(name) {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    }
    
    return (
        <div className="relative" ref={menuRef}>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`
                    flex items-center justify-center rounded-full transition-all duration-200
                    ${userData ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}
                    hover:ring-2 hover:ring-primary hover:ring-opacity-50 focus:outline-none focus:ring-2 focus:ring-primary
                    h-10 w-10
                `}
            >
                {userData ? getInitials(userData.name) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                )}
            </button>
            
            {/* Menu dropdown do usuário */}
            {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                    {userData ? (
                        <>
                            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{userData.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{userData.email}</p>
                            </div>
                            <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                Perfil
                            </Link>
                            <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                Pedidos
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Sair
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                Entrar
                            </Link>
                            <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                Criar conta
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
