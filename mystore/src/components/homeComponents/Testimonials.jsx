import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            imgSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            name="Sarah J."
            role="Cliente Fiel"
            feedback="Eu amo absolutamente a qualidade e o estilo da VINE's STORE. As roupas deles não são apenas elegantes, mas também incrivelmente confortáveis. Nunca me senti tão confiante!"
          />
          <TestimonialCard
            imgSrc="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            name="Michael R."
            role="Entusiasta da Moda"
            feedback="A VINE's STORE transformou completamente meu guarda-roupa. Seus designs modernos e atenção aos detalhes são incomparáveis. Sempre recebo elogios quando uso suas roupas!"
          />
          <TestimonialCard
            imgSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            name="Emily L."
            role="Profissional Estilosa"
            feedback="Como uma profissional ocupada, preciso de roupas que sejam elegantes e práticas. A VINE's STORE entrega em ambos os aspectos. Suas peças são perfeitas para o escritório e eventos pós-trabalho!"
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ imgSrc, name, role, feedback }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <img src={imgSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{feedback}</p>
    </div>
  );
};

export default Testimonials;
