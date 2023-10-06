// Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="w-full top-0 z-50 align-middle bg-wine-dark">
      <div className="container mx-auto sm:px-6 lg:px-8 py-8 flex items-center justify-between">
        
        {/* Logo à esquerda */}
        <div className='text-xl'>
          <img src='/logo.svg' alt="Logo da Empresa" className="h-10" />
        </div>

        {/* Opções de menu ao centro */}
        <div className="hidden md:flex space-x-8 text-white text-xl justify-center">
          <a href="#" className="hover:text-wine-light">Home</a>
          <a href="#" className="hover:text-wine-light">Sobre</a>
          <a href="#" className="hover:text-wine-light">Serviços</a>
          <a href="#" className="hover:text-wine-light">Contato</a>
        </div>

        {/* Call to action à direita */}
        <div>
          <a href="#" className="bg-white text-xl text-wine px-5 py-2 rounded hover:bg-wine-light hover:text-white">
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
