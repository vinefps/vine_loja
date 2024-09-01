import { useState} from 'react';
import { loginUser } from '../controllers/LoginController';
// import { useUserContext } from '../contexts/UserProvider'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');

  // const {userLogin, setUserLogin} = useUserContext();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  async function loginStatus(e) {
    e.preventDefault();

    const formData = {
        email: getEmail,
        password: getPassword
    };

    const res = await loginUser(formData);
    localStorage.setItem('userInfo', JSON.stringify(res));
    console.log(storedValue)
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-orange-600 text-xl font-bold uppercase mb-6 border-b-2 border-orange-600 pb-2">
          Acesse sua conta
        </h1>
        <form onSubmit={loginStatus}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail, CPF ou CNPJ"
            value={getEmail}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-lg"
          />
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={getPassword}
              className="w-full p-3 mb-4 border border-gray-300 rounded-md text-lg"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? '👁️‍🗨️' : '👁️'}
            </span>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-orange-600 text-white rounded-md text-lg font-medium transition duration-300 ease-in-out hover:bg-orange-500 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="mr-2"
            >
              <path d="M8.5 10c-.276 0-.5-.224-.5-.5v-5c0-.276.224-.5.5-.5s.5.224.5.5v5c0 .276-.224.5-.5.5z" />
              <path d="M10.828 5.172a.5.5 0 0 1 0 .707L7.707 9h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V5.525a.5.5 0 0 1 1 0v2.768l3.121-3.121a.5.5 0 0 1 .707 0z" />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3z" />
            </svg>
            ENTRAR
          </button>
        </form>
        <div className="text-right mt-2">
          <a href="recuperar-senha" className="text-gray-500 text-sm">
            Esqueceu a senha?
          </a>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-500 mb-2">
            Quero acessar com minhas redes sociais
          </p>
          <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md p-3 transition duration-300 ease-in-out hover:bg-gray-100">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            Google
          </button>
        </div>
        <div className="text-center mt-4 text-sm">
          Novo no Vine's store?{' '}
          <a href="/register" className="text-orange-600 font-bold">
            CADASTRE-SE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
