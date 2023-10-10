import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChartBar,
  faCog,
  faGlobeAmericas,
  faWarehouse,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

function Service() {
  return (
    <section className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-wine mb-8 text-center'>
          Nossos Serviços
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          <div className='flex flex-col items-center text-center'>
            <FontAwesomeIcon icon={faSearch} size='2x' /> {/* Lupa */}
            <h3 className='text-xl font-bold text-wine'>
              Transporte Rodoviário
            </h3>
            <p className='mt-2 text-black leading-5'>
              Oferecemos soluções em transporte rodoviário para todo o Brasil.
            </p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <FontAwesomeIcon icon={faChartBar} size='2x' />{" "}
            {/* Gráfico de Barra */}
            <h3 className='text-xl font-bold text-wine'>
              Transporte Intermodal
            </h3>
            <p className='mt-2 text-black leading-5'>
              Combinamos diferentes modos de transporte para eficiência.
            </p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <FontAwesomeIcon icon={faCog} size='2x' /> {/* Engrenagem */}
            <h3 className='text-xl font-bold text-wine'>
              Consultoria Logística
            </h3>
            <p className='mt-2 text-black leading-5'>
              Oferecemos consultoria especializada para otimizar sua logística.
            </p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <FontAwesomeIcon icon={faPlane} size='2x' />
            <h3 className='text-xl font-bold text-wine'>Transporte Aéreo</h3>
            <p className='mt-2 text-black leading-5'>
              Oferecemos soluções rápidas em transporte aéreo nacional e
              internacional.
            </p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <FontAwesomeIcon icon={faWarehouse} size='2x' />
            <h3 className='text-xl font-bold text-wine'>
              Armazenamento e Distribuição
            </h3>
            <p className='mt-2 text-black leading-5'>
              Soluções completas de armazenagem e distribuição de produtos.
            </p>
          </div>

          <div className='flex flex-col items-center text-center'>
            <FontAwesomeIcon icon={faGlobeAmericas} size='2x' />
            <h3 className='text-xl font-bold text-wine'>
              Logística Internacional
            </h3>
            <p className='mt-2 text-black leading-5'>
              Suporte em importações e exportações, facilitando processos
              aduaneiros.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Service;
