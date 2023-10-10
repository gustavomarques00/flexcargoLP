import React from 'react';

type ButtonProps = {
  label: string;
  href?: string; // Adicione esta linha
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, href, className, onClick }) => {
  // Se 'href' estiver presente, renderizar o botão como um link
  if (href) {
    return (
      <a href={href} className={`px-6 py-3 rounded-lg transition-colors ${className}`}>
        {label}
      </a>
    );
  }

  // Caso contrário, renderizar como um botão comum
  return (
    <button onClick={onClick} className={`px-6 py-3 rounded-lg transition-colors ${className}`}>
      {label}
    </button>
  );
}

export default Button;
