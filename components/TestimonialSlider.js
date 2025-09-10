// testimonial data
const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Stefany dos Santos',
    position: 'Empresária',
    message:
      'Trabalhar com o Gabriel foi uma das melhores decisões que tomei para o meu negócio. Ele conseguiu transformar minhas ideias em um site profissional que realmente converte visitantes em clientes.',
  },
  {
    image: '/perfil11.png',
    name: 'Marcos Antonio',
    position: 'Gestor de Tráfego',
    message:
      'A landing page criada ficou impecável! Design moderno, copy estratégica e performance incrível. Meu ROI aumentou em poucas semanas após implementar o projeto.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Matheus Ferreira',
    position: 'Consultor de Marketing',
    message:
      'Profissional ágil, criativo e extremamente dedicado. Ele não apenas desenvolveu o projeto, mas também trouxe ideias que levaram meu funil de vendas a outro nível.',
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, nome, posição */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt={person.name} />
                  </div>
                  {/* nome */}
                  <div className="text-lg font-semibold">{person.name}</div>
                  {/* posição */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>

              {/* quote & mensagem */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* ícone de citação */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* mensagem */}
                <div className="xl:text-lg text-center md:text-left italic">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
