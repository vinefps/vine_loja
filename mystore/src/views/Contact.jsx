import React from "react";
import { ContactInfo } from "../components/contactComponents/ContactInfo";
import { ContactForm } from "../components/contactComponents/ContactForm";

export const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Entre em Contato
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Estamos aqui para ajudar. Diga-nos como podemos tornar sua experiência melhor.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8 md:p-10 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Vamos conversar
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Preencha o formulário abaixo e entraremos em contato o mais rápido possível.
            </p>
          </div>
          
          <div className="px-6 py-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
