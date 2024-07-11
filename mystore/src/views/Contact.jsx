import React from "react";
import { ContactInfo } from "../components/contactComponents/ContactInfo";
import { ContactForm } from "../components/contactComponents/ContactForm";

export const Contact = () => {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Nos contate
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">
            Gostariamos de te ouvir! 
          </p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
