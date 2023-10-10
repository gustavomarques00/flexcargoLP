import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className='bg-light-gray py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-wine mb-8 text-center'>
          Entre em Contato
        </h2>

        <p className='text-center mb-8 leading-5'>
          Tem alguma pergunta? Gostaria de solicitar um orçamento? Entre em
          contato conosco através do formulário abaixo ou diretamente por nossos
          canais de atendimento.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Formulário */}
          <ContactForm />

          {/* Detalhes de Contato */}
          <div className='bg-white p-8 rounded shadow-lg max-w-md mx-auto'>
            <h3 className='text-2xl font-bold text-wine mb-6 text-center'>
              Outras Formas de Contato
            </h3>
            <ul className='space-y-4 text-black'>
              <li>
                <strong>Email: </strong>
                <span className='transition duration-300 ease-in-out hover:text-wine'>
                  contato@flexcargo.com.br
                </span>
              </li>
              <li>
                <strong>Telefone: </strong>
                <span className='transition duration-300 ease-in-out hover:text-wine'>
                  (13) 1234-5678
                </span>
              </li>
              <li>
                <strong>Endereço Matriz: </strong>
                <span className='transition duration-300 ease-in-out hover:text-wine'>
                  Rua dos Transportes, Santos - SP
                </span>
              </li>
              <li>
                <strong>Filial: </strong>
                <span className='transition duration-300 ease-in-out hover:text-wine'>
                  Avenida Logística, Fortaleza - CE
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
