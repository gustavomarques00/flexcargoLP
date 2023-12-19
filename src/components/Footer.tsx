export const Footer = () => {
  return (
    <footer className='bg-wine mt-16 py-8 md:py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-8 md:mb-0 space-y-4 md:space-y-0'>
          {/* Logo e nome da empresa */}
          <div className='flex items-center mb-4 md:mb-0 '>
            <img src='public\images\flexcargoLogo.png' alt='Logo Flexcargo' className='h-8 mr-3 bg-white rounded' />
          </div>

          {/* Links rápidos */}
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 mt-4 md:mt-0'>
            <a href='#home' className='text-white hover:text-wine-light'>
              Home
            </a>
            <a href='#about' className='text-white hover:text-wine-light'>
              Sobre
            </a>
            <a href='#services' className='text-white hover:text-wine-light'>
              Serviços
            </a>
            <a href='#FAQ' className='text-white hover:text-wine-light'>
              FAQ
            </a>
            <a href='#contact' className='text-white hover:text-wine-light'>
              Contato
            </a>
          </div>
        </div>

        {/* Barra inferior do footer */}
        <div className='flex flex-col md:flex-row justify-between mt-8 items-center space-y-4 md:space-y-0'>
          <div className='text-white'>
            © {new Date().getFullYear()} Flexcargo. Todos os direitos
            reservados.
          </div>

          <div className='text-white mt-4 md:mt-0'>
            Desenvolvido por{" "}
            <a
              href='https://www.linkedin.com/in/gustavo-marques-00/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-wine-light'
            >
              Gustavo Marques de Lima
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
