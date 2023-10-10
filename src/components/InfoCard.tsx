type InfoCardProps = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {
  return (
      <div className='flex flex-col items-center text-center'>
          {icon}
          <h3 className='text-xl font-bold text-wine'>{title}</h3>
          <p className='mt-2 text-black leading-5'>{description}</p>
      </div>
  );
};

export default InfoCard;
