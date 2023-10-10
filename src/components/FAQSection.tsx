import { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questionsAndAnswers = [
    {
      question: "Quais tipos de cargas vocês transportam?",
      answer: "Transportamos uma variedade ampla de cargas, incluindo cargas secas, refrigeradas, perigosas, além de cargas especiais e maquinários."
    },
    {
      question: "Vocês oferecem rastreamento em tempo real?",
      answer: "Sim, oferecemos rastreamento em tempo real para todas as nossas remessas. Você pode acompanhar sua carga através do nosso website ou aplicativo."
    },
    {
      question: "Como é calculado o custo de transporte?",
      answer: "O custo é determinado com base na distância, tipo de carga, peso e requisitos especiais de transporte. Entre em contato para obter uma cotação exata."
    },
    {
      question: "Qual é o prazo médio de entrega?",
      answer: "O prazo de entrega varia de acordo com a distância e a localidade. Entretanto, sempre nos esforçamos para garantir que suas cargas sejam entregues no prazo estipulado."
    },
    {
      question: "Vocês possuem seguro para as mercadorias transportadas?",
      answer: "Sim, todas as mercadorias transportadas são cobertas por nosso seguro. Em caso de danos ou perda, sua mercadoria estará protegida."
    },
    {
      question: "Como posso agendar um transporte?",
      answer: "Você pode agendar um transporte através do nosso site, por telefone ou via e-mail. Nossa equipe estará pronta para atendê-lo!"
    },
    {
      question: "Vocês realizam entregas internacionais?",
      answer: "No momento, focamos em entregas nacionais, cobrindo todo o território brasileiro."
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-wine mb-8 text-center">
          Perguntas Frequentes
        </h2>
        <div className="bg-white p-6 rounded shadow-lg">
          {questionsAndAnswers.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="text-left w-full text-black font-semibold py-2 px-4 rounded-lg border border-wine hover:bg-wine hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-wine"
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              >
                {item.question}
              </button>
              {activeIndex === index && (
                <div className="mt-2 p-4 rounded-lg bg-gray-200 border border-wine transition-all duration-300 leading-5">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;