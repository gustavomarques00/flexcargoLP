import React from 'react';

type SectionTitleProps = {
  title: string;
  subTitle?: string;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle, className }) => {
  return (
    <div className={`text-center mb-4 md:mb-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-extrabold text-wine">{title}</h2>
      {subTitle && <p className="mt-2 text-lg md:text-xl text-black">{subTitle}</p>}
    </div>
  );
};

export default SectionTitle;
