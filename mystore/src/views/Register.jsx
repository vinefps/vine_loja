// Register.jsx - Corrigido
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
        // Registro bem-sucedido
        alert('Conta criada com sucesso!');
        navigate('/login');
      }
    } catch (error) {
      setError("Falha ao criar conta. Por favor, tente novamente.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-orange-600 text-2xl mb-6">CRIAR CONTA</h1>
        
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
            {error}
          </div>
        )}
        
        <form id="registerForm" onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            id="name"
            placeholder="Nome completo"
            required
            value={formData.name}
            onChange={handleChange}
            className="mb-4 p-3 border border-gray-300 rounded-md text-lg"
          />
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            required
            value={formData.email}
            onChange={handleChange}
            className="mb-4 p-3 border border-gray-300 rounded-md text-lg"
          />
          <input
            type="password"
            id="password"
            placeholder="Crie sua senha"
            required
            value={formData.password}
            onChange={handleChange}
            className="mb-4 p-3 border border-gray-300 rounded-md text-lg"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`
              bg-orange-600 text-white p-3 rounded-md text-lg font-medium 
              transition duration-300 ease-in-out hover:bg-orange-500
              ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {isLoading ? 'PROCESSANDO...' : 'CONTINUAR'}
          </button>
          <Link to="/login" className="text-gray-500 text-sm">
            <div className='flex justify-center p-4'>
                <div className=''>Efetuar login</div>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
