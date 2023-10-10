import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faCog,
  faTruck,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "./InfoCard";

function Service() {
  return (
    <section className='py-12' id='services'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-wine mb-8 text-center'>
          Nossos Serviços
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
          <InfoCard
            icon={<FontAwesomeIcon icon={faTruck} size='2x' />}
            title='Transporte Rodoviário'
            description='Oferecemos soluções em transporte rodoviário para todo o Brasil.'
          />
          <InfoCard
            icon={<FontAwesomeIcon icon={faChartBar} size='2x' />}
            title='Transporte Intermodal'
            description='Combinamos diferentes modos de transporte para eficiência.'
          />
          <InfoCard
            icon={<FontAwesomeIcon icon={faCog} size='2x' />}
            title='Consultoria Logística'
            description='Oferecemos consultoria especializada para otimizar sua logística.'
          />
          <InfoCard
            icon={<FontAwesomeIcon icon={faBoxOpen} size='2x' />}
            title='Armazenamento'
            description='Garanta a segurança da sua carga com nossos serviços de armazenagem.'
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
