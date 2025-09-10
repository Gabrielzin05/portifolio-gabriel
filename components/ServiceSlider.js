// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// importar componentes do Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// importar estilos do Swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// importar módulos necessários
import { FreeMode, Pagination } from "swiper";

// dados
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Desenvolvimento Web",
    description: "Criação de websites e aplicativos modernos, responsivos e com foco em performance e experiência do usuário.",
  },
  {
    icon: <RxPencil2 />,
    title: "Marketing Digital",
    description: "Planejamento e execução de estratégias digitais, incluindo análise de métricas, SEO, e otimização de presença online para gerar resultados concretos.",
  },
  {
    icon: <RxDesktop />,
    title: "Design UI/UX",
    description: "Criação de interfaces elegantes e intuitivas para web e mobile, com atenção total à experiência do usuário.",
  },
  {
    icon: <RxReader />,
    title: "Automação de Processos",
    description: "Implementação de scripts e sistemas que automatizam tarefas repetitivas, economizando tempo e reduzindo erros.",
  },
  {
    icon: <RxRocket />,
    title: "Back-end & Integrações",
    description: "Desenvolvimento de sistemas, APIs e integração entre plataformas para otimizar processos e conectar aplicações.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169, 0.15)] transition-all duration-300 ">
              {/* ícone */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* título e descrição */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>

              {/* seta */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
