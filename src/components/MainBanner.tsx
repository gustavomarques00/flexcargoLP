import Container from "./Container";

function MainBanner() {
  return (
    <div
      className='hero-section bg-cover bg-center relative text-center py-12 md:py-20 h-[calc(100vh-4rem)]'
      style={{ backgroundImage: "url('/images/Banner.jpg')" }}
      
    >
      <Container>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 shadow-text'>
          Flexcargo: Movimentando o Futuro do Transporte
        </h1>

        <h2 className='text-lg md:text-xl lg:text-2xl text-white mb-6 shadow-text sm:text-left'>
          Conectando o Brasil com soluções logísticas de ponta. Com matriz em
          Santos-SP e uma estratégica filial em Fortaleza-CE, estamos prontos
          para atender suas necessidades em qualquer canto do país.
        </h2>

        <a
          href='#contact'
          className='text-wine bg-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow hover:bg-wine-light transition-colors'
        >
          Entre em Contato Agora
        </a>
      </Container>
    </div>
  );
}

export default MainBanner;
