import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../controllers/RegisterController';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '' // Adicionando confirmação de senha
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação de senhas iguais
    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem. Por favor, verifique.");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Remover confirmPassword antes de enviar para API
      const { confirmPassword, ...dataToSubmit } = formData;
      const response = await registerUser(dataToSubmit);
      
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
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Coluna de imagem (visível apenas em telas médias e maiores) */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="w-full h-full bg-gradient-to-r from-blue-900/80 to-blue-600/60 flex flex-col justify-center px-12">
          <div className="max-w-md">
            <h2 className="text-white text-4xl font-bold mb-6">Bem-vindo à VINE's Store</h2>
            <p className="text-white/90 text-lg mb-8">
              Junte-se à nossa comunidade para ter acesso a produtos exclusivos, promoções especiais e muito mais.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-500/30 p-2 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="ml-4 text-white">Acesso a produtos exclusivos</p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500/30 p-2 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="ml-4 text-white">Descontos e ofertas especiais</p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-500/30 p-2 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="ml-4 text-white">Frete grátis para membros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Formulário */}
      <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Criar uma conta
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Ou{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                entrar na sua conta existente
              </Link>
            </p>
          </div>
          
          {error && (
            <div className="rounded-md bg-red-50 dark:bg-red-900/30 p-4 border border-red-200 dark:border-red-800">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800 dark:text-red-300">
                    Ocorreu um erro
                  </h3>
                  <div className="mt-1 text-sm text-red-700 dark:text-red-400">
                    <p>{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Nome completo</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none rounded-t-md relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Senha</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Senha"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">Confirmar senha</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none rounded-b-md relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Confirmar senha"
                />
              </div>
            </div>

            <div className="text-xs text-gray-600 dark:text-gray-400">
              <p>
                Ao se registrar, você concorda com nossos{' '}
                <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                  Termos de Serviço
                </a>{' '}
                e{' '}
                <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                  Política de Privacidade
                </a>
                .
              </p>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processando...
                  </span>
                ) : 'Criar conta'}
              </button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  Ou continue com
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.635 15.751c-.259.628-.689.962-1.243.962-.643 0-1.141-.512-1.141-1.256 0-.635.213-1.155.474-1.644.292-.551.693-1.154 1.028-1.471l.55-.551c.395-.394.925-.897 1.849-.956.732-.047 1.38.058 1.849.631.433.529.433 1.266.433 1.913 0 1.644-.732 3.23-2.208 4.287-1.293.923-2.8 1.204-4.272 1.204-1.849 0-3.542-.577-4.707-1.874-1.047-1.168-1.6-2.77-1.6-4.531 0-1.646.395-3.174 1.226-4.442.991-1.527 2.526-2.603 4.539-3.1 1.574-.393 3.254-.393 4.856-.13.616.099 1.222.267 1.786.502l.502.234-.528 3.1-.573-.305c-1.067-.568-2.235-.784-3.46-.784-2.498 0-4.117 1.461-4.117 3.751 0 2.063 1.512 3.342 3.854 3.342.476 0 1.345-.089 1.965-.318l.288-.105.142-.348c.064-.157.13-.317.194-.51.189-.565.283-1.063.283-1.644 0-.317 0-.675-.085-.897-.086-.221-.215-.347-.49-.347-.245 0-.467.099-.723.362l-.15.182-.213.183-.185.134-.634.462-.204-1.468.246-.139c.688-.39 1.334-.572 2.067-.572.899 0 1.638.266 2.022.731.362.435.455 1.064.455 1.754 0 .72-.102 1.394-.274 2.034l-.068.248.19.066c.755.265 1.595.408 2.511.408.36 0 .718-.026 1.068-.08l.63-.101-.137.593c-.154.673-.428 1.691-.867 2.318-.68.967-1.647 1.477-2.864 1.477-1.067 0-1.881-.417-2.333-1.185l-.086-.147.37-1.356.16.134c.237.195.51.406.922.406.292 0 .559-.105.764-.302.246-.233.444-.663.576-1.235l.071-.313.414-.123c-.068.187-.132.375-.2.563zm11.635-3.753c0 3.31-2.689 6-6 6s-6-2.69-6-6 2.689-6 6-6 6 2.69 6 6zm-9.268 5.25h.012c.525 0 .95-.425.95-.95 0-.524-.425-.95-.95-.95-.525 0-.95.426-.95.95 0 .525.425.95.938.95zm0-3.17h.012c.525 0 .95-.424.95-.95 0-.524-.425-.95-.95-.95-.525 0-.95.426-.95.95 0 .526.425.95.938.95zm0-3.17h.012c.525 0 .95-.423.95-.95 0-.523-.425-.95-.95-.95-.525 0-.95.427-.95.95 0 .527.425.95.938.95zm4.018 6.34h4.5v-.949h-4.5v.949zm0-3.17h4.5v-.95h-4.5v.95zm0-3.17h4.5v-.95h-4.5v.95z"/>
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
