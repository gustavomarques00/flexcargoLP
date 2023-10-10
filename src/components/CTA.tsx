import Button from "./Button";

export const CTA = () => {
  return (
    <div className='text-center py-8 bg-wine shadow-lg'>
      <p className='text-2xl text-white mb-4 font-semibold'>
        Interessado em nossos serviços? Gostaríamos muito de ouvir de você!
      </p>
      <Button
        label="Entre em Contato"
        href="#contact"
        className='text-xl text-wine bg-white px-8 py-3 rounded-full shadow hover:bg-gray-100 transition-colors duration-300'
      />
    </div>
  );
};
