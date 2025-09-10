import Image from 'next/image';

// componentes
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variantes
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* título */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h1'
          >
            Transformando <br /> Ideias em{' '}
            <span className='text-accent'>Realidade</span>
          </motion.h1>

          {/* subtítulo */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            Do conceito ao resultado: eu crio experiências digitais modernas, criativas e estratégicas 
            que conectam marcas e pessoas. Seu projeto pode ser o próximo a ganhar vida no mundo online.
          </motion.p>

          {/* botão único, centralizado em qualquer tela */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex justify-center xl:justify-start'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* fundo da imagem */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar imagem */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute bottom-0 right-[8%] w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[590px]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
