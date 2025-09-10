import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiPhp,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiPython,
  SiNextdotjs,
} from "react-icons/si";

// dados
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programação & Desenvolvimento",
        icons: [
          <SiPhp key="php" />,
          <SiJavascript key="javascript" />,
          <FaReact key="react" />,
          <SiNodedotjs key="node" />,
          <SiPython key="python" />,
          <SiMysql key="mysql" />,
          <SiNextdotjs key="next" />,
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Landing Page de Alta Conversão – Destaque",
        stage: "2024",
      },
      {
        title: "Reconhecimento em Marketing Digital – Projetos Autorais",
        stage: "2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Desenvolvedor Web & Funis de Vendas – Projetos Próprios",
        stage: "2023 - Presente",
      },
      {
        title: "Gestor de Tráfego Pago – Produtos Digitais",
        stage: "2023 - Presente",
      },
      {
        title: "Criação de Landing Pages Profissionais – Freelance",
        stage: "2022 - Presente",
      },
      { 
        title: "Desenvolvimento Back-end (APIs & Integrações)",
        stage: "2023 - Presente",
      },
      {
        title: "Automação de Processos Digitais e Sistemas",
        stage: "2023 - Presente",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Engenharia de Software - Uninter",
        stage: "2025 - Presente",
      },
      {
        title: "Informática para Internet - Técnico",
        stage: "2023 - Concluído",
      },
      {
        title: "Formação em Desenvolvimento Web & Programação",
        stage: "2022 - Concluído",
      },
      {
        title: "Marketing Digital & Vendas Online - Autodidata",
        stage: "2021 - Concluído",
      },
    ],
  },
];

// componentes externos
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      {/* Conteúdo */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Cabeçalho */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Histórias <span className="text-accent">cativantes </span> 
            criam grandes projetos
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl-mb-12 px-2 xl:px-0"
          >
            Desde 2022 atuo como desenvolvedor e estrategista digital, unindo
            tecnologia e marketing para criar experiências que realmente geram
            impacto. Minha jornada envolve o desenvolvimento de landing pages,
            funis de vendas e automações que ajudam negócios a se conectarem com
            pessoas e venderem mais.
          </motion.p>

          {/* Counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Anos de Experiência
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Clientes Satisfeitos
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={650} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projetos Finalizados
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Prêmios Conquistados
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navegação entre seções */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              const isActive = index === itemIndex;

              return (
                <div
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                  className={`
                    ${isActive
                      ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                      : ""}
                    cursor-pointer capitalize xl:text-lg relative 
                    after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0
                  `}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          {/* Conteúdo dinâmico */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* título */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* ícones */}
                    {item.icons?.map((icon, i) => {
                      return (
                        <div key={i} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
