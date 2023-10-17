import ContactForm from "./ContactForm";
import EmailComponent from "./EmailComponent";
import TelefoneComponent from "./PhoneComponent";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section className='bg-light-gray py-12' id='contact'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionTitle title='Entre em Contato' className='mb-4 md:mb-8' />

        <p className='text-center mb-8 leading-5'>
          Tem alguma pergunta? Gostaria de solicitar um orçamento? Entre em
          contato conosco através do formulário abaixo ou diretamente por nossos
          canais de atendimento.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Formulário */}
          <ContactForm />

          {/* Detalhes de Contato */}
          <div className='bg-white p-4 md:p-8 rounded shadow-lg max-w-md mx-auto'>
            <SectionTitle
              title='Outras Formas de Contato'
              className='mb-4 md:mb-8'
            />

            <ul className='space-y-4 text-black'>
              <li>
                <EmailComponent />
              </li>
              <li>
                <TelefoneComponent />
              </li>
              <li>
                <strong>Endereço Matriz: </strong>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=R.+Barão+de+Paranapiacaba,+233+-+Sala+1101+-+Centro,+Santos+-+SP,+11050-251'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition duration-300 ease-in-out hover:text-wine'
                >
                  R. Barão de Paranapiacaba, 233 - Sala 1101 - Centro, Santos -
                  SP, 11050-251
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
