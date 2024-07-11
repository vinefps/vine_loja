import React from "react";
import { useEffect } from "react";

export const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Nossa História
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Redefinindo a Moda para o Mundo Moderno
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            A Eclipse Apparel nasceu de uma paixão pelo estilo e um compromisso com a sustentabilidade.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Inspiração Global
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                Nossos designs são inspirados por culturas e tendências de todo o mundo, trazendo uma perspectiva global para o seu guarda-roupa.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Produção Ética
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                Garantimos salários justos e condições de trabalho seguras para todos os nossos trabalhadores, trabalhando apenas com fabricantes éticos.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Materiais Sustentáveis
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                Usamos tecidos e embalagens ecológicas, minimizando nosso impacto ambiental sem comprometer o estilo ou a qualidade.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Tamanhos Inclusivos
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                Acreditamos que a moda deve ser para todos. Nossos tamanhos variam de XS a 4XL, garantindo que todos possam encontrar o ajuste perfeito.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
            Nossa Visão
          </h3>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Na Eclipse Apparel, imaginamos um mundo onde a moda é uma força para o bem. Estamos comprometidos em criar roupas que não apenas tenham uma ótima aparência, mas também contribuam positivamente para a sociedade e o meio ambiente. Nosso objetivo é liderar a indústria em práticas sustentáveis, trabalho justo e design inovador.
          </p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Acreditamos que cada compra é um voto para o tipo de mundo em que você deseja viver. Ao escolher a Eclipse Apparel, você está apoiando um futuro onde estilo e sustentabilidade andam de mãos dadas.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
            Junte-se à Nossa Jornada
          </h3>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Estamos sempre procurando por indivíduos apaixonados para se juntar à nossa equipe. Se você compartilha nossa visão e deseja fazer a diferença na indústria da moda, adoraríamos ouvir de você.
          </p>
          <div className="mt-8">
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700"
            >
              Ver Posições Abertas
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
