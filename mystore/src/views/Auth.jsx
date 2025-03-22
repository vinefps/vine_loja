import { authUser } from "../controllers/AuthController";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export function Auth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        setIsLoading(true);
        const res = await authUser();
        if (res && res.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Erro de autenticação:", error);
        setError("Falha na autenticação");
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    verifyAuth();
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
        <div className="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 text-red-700 dark:text-red-400 p-4 rounded-r-md">
          <h3 className="font-bold">Erro de Autenticação</h3>
          <p>{error}</p>
          <button 
            onClick={() => window.location.href = "/login"}
            className="mt-2 text-primary hover:underline"
          >
            Voltar para login
          </button>
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center p-4">
      <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Área Autenticada
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Bem-vindo! Você está logado e tem acesso a esta área protegida.
        </p>
        <div className="flex justify-between">
          <button 
            onClick={() => window.location.href = "/"}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Ir para Home
          </button>
          <button 
            onClick={() => {
              localStorage.removeItem('userInfo');
              window.location.href = "/login";
            }}
            className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
