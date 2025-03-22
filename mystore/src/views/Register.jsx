import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../controllers/RegisterController';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await registerUser(formData);
      if (response) {
        navigate('/login', { 
          state: { message: 'Conta criada com sucesso! Faça login para continuar.' } 
        });
      } else {
        throw new Error("Falha na resposta do servidor");
      }
    } catch (error) {
      setError(error.message || "Falha ao criar conta. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="m-auto w-full max-w-md p-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-500">Criar Conta</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Junte-se a nós e descubra nossa coleção exclusiva
              </p>
            </div>
            
            {error && (
              <div className="mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-r-md dark:bg-red-900/30 dark:text-red-400 dark:border-red-700">
                <p className="font-medium">Erro</p>
                <p className="text-sm">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`
                  w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md 
                  text-white text-lg font-medium bg-gradient-to-r from-orange-500 to-orange-600 
                  hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 
                  focus:ring-offset-2 focus:ring-orange-500 shadow-md
                  transition-all duration-300 ease-in-out
                  ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
                `}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processando...
                  </>
                ) : 'Criar conta'}
              </button>
            </form>
            
            <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              Já tem uma conta?{' '}
              <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-500 dark:hover:text-orange-400">
                Faça login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
