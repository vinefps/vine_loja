export const ContactForm = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Nos envie uma mensagem:
      </h2>
      <form
        action="#"
        method="POST"
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Primeiro nome
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
              placeholder="Digite seu Nome"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Sobrenome
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
              placeholder="Digite seu Sobrenome"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
              placeholder="Digite seu E-mail"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Telefone
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
              placeholder="Digite seu Telefone"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Mensagem
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows="4"
              className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
              placeholder="Digite sua Mensagem"
            ></textarea>
          </div>
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Enviar mensagem
          </button>
        </div>
      </form>
    </div>
  );
};
