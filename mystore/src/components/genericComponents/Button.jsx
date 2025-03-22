// Button.jsx
export function Button({ title, onClick, variant = 'primary', size = 'md', isLoading = false, icon = null, className = '' }) {
    // Estilos base
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200";
    
    // Variações de tamanho
    const sizeStyles = {
        sm: "py-1 px-3 text-sm",
        md: "py-2 px-4 text-base",
        lg: "py-3 px-5 text-lg"
    };
    
    // Estilos de variante
    const variantStyles = {
        primary: "bg-primary text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50",
        secondary: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50",
        outline: "bg-transparent border border-primary text-primary hover:bg-blue-50 dark:hover:bg-blue-900 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
    };
    
    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            className={`
                ${baseStyles}
                ${sizeStyles[size]}
                ${variantStyles[variant]}
                ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
                ${className}
            `}
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Carregando...
                </>
            ) : (
                <>
                    {icon && <span className="mr-2">{icon}</span>}
                    {title}
                </>
            )}
        </button>
    );
}
