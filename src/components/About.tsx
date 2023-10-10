import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section className='pt-12 md:pt-16' id='about'>
      <div className='container mx-auto px-4'>
        {/* Título da Seção */}
        <SectionTitle title="Sobre a Flexcargo" />

        {/* Texto Descritivo */}
        <p className='text-lg md:text-xl mb-6'>
          Fundada em 2010, a Flexcargo tem sido líder em soluções logísticas no
          Brasil, conectando negócios e superando expectativas com eficiência e
          expertise.
        </p>
        <p className='text-lg md:text-xl mb-6'>
          Com nossa matriz estrategicamente localizada em Santos-SP e uma filial
          em Fortaleza-CE, nos orgulhamos de nossa extensa rede e capacidade de
          atender nossos clientes em qualquer canto do país.
        </p>

        {/* Valores da Empresa */}
        <div className='my-8 flex flex-col md:flex-row justify-center'>
          {/* Valores - Lado Esquerdo */}
          <div className='w-full text-center md:text-left md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0'>
            <h3 className='text-2xl md:text-3xl font-semibold text-wine mb-4'>
              Nossos Valores
            </h3>
            <ul className='list-disc pl-6'>
              <li className='text-lg mb-2'>Compromisso com a Excelência</li>
              <li className='text-lg mb-2'>Integridade e Transparência</li>
              <li className='text-lg mb-2'>Foco no Cliente</li>
              <li className='text-lg mb-2'>Inovação Contínua</li>
              <li className='text-lg mb-2'>
                Responsabilidade Social e Ambiental
              </li>
            </ul>
          </div>

          {/* Imagem ou Ilustração - Lado Direito */}
          <div className='w-full md:w-1/2 justify-center md:block hidden'>
            <img
              src='/images/ilustration.jpg'
              alt='Descrição da imagem'
              className='rounded-lg shadow-lg h-64 w-full md:w-auto'
            />
          </div>
        </div>

        {/* Estatísticas */}
        <div className='my-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='text-center'>
            <h4 className='text-xl md:text-2xl font-bold text-wine mb-2'>
              +10,000
            </h4>
            <p>Cargas entregues</p>
          </div>
          <div className='text-center'>
            <h4 className='text-xl md:text-2xl font-bold text-wine mb-2'>
              +10 Anos
            </h4>
            <p>Atendendo o Brasil</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
