export const Footer = () => {
  return (
    <footer className='bg-wine mt-16 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo e nome da empresa */}
          <div className='flex items-center'>
            <img
              src='/logo.svg'
              alt='Logo Flexcargo'
              className='h-8 mr-3'
            />
            <span className='text-white font-bold text-xl'>Flexcargo</span>
          </div>

          {/* Links rápidos */}
          <div className='flex space-x-8'>
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
        <div className='mt-8 flex justify-between'>
          <div className='text-white'>
            © {new Date().getFullYear()} Flexcargo. Todos os direitos
            reservados.
          </div>

          <div className='text-white'>
            Desenvolvido por{" "}
            <a
              href='https://www.linkedin.com/in/gustavo-marques-00/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-wine-light'
            >
              Gustavo Marques de Lima
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};
