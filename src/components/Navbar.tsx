import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-full top-0 z-50 align-middle px-4 sm:px-0'>
      <div className='container mx-auto sm:px-6 lg:px-8 py-8 flex md:flex-row items-center justify-between'>
        {/* Logo à esquerda */}
        <a href='#home' className='text-xl'>
          <img src='images\flexcargoLogo.png' alt='Logo da Empresa' className='h-12' />
        </a>

        {/* Opções de menu ao centro */}
        <div
          className={`hidden md:flex space-x-8 text-black text-xl justify-center`}
        >
          <a href='#home' className='hover:text-wine-light'>
            Home
          </a>
          <a href='#about' className='hover:text-wine-light'>
            Sobre
          </a>
          <a href='#services' className='hover:text-wine-light'>
            Serviços
          </a>
          <a href='#FAQ' className='hover:text-wine-light'>
            FAQ
          </a>
          <a href='#contact' className='hover:text-wine-light'>
            Contato
          </a>
        </div>

        {/* Botão do hambúrguer */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                size='2x'
                className='text-wine-light'
              />
            ) : (
              <FontAwesomeIcon icon={faBars} size='2x' className='text-wine-light' />
            )}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className='flex flex-col space-y-4 mt-4 md:hidden text-black text-xl'>
            <a href='#home' className='hover:text-wine-light'>
              Home
            </a>
            <a href='#about' className='hover:text-wine-light'>
              Sobre
            </a>
            <a href='#services' className='hover:text-wine-light'>
              Serviços
            </a>
            <a href='#FAQ' className='hover:text-wine-light'>
              FAQ
            </a>
            <a href='#contact' className='hover:text-wine-light'>
              Contato
            </a>
          </div>
        )}

        {/* Call to action à direita */}
        <div className='hidden md:block'>
          <a
            href='#contact'
            className=' text-white bg-wine-light px-5 py-2 rounded hover:bg-wine-light'
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
