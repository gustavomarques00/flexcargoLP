import React from 'react';

type SectionTitleProps = {
  title: string;
  subTitle?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold text-wine">{title}</h2>
      {subTitle && <p className="mt-2 text-xl text-black">{subTitle}</p>}
    </div>
  );
};

export default SectionTitle;