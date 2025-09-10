//links
import Link from "next/link";

//icons
import {

  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine,
} from 'react-icons/ri'; 

const Socials = () => {
  return ( 
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.instagram.com/ogabrielurbano?igsh=MWYyYWVuNXk0czB4ag== '} className='hover:text-accent transition-all duration-300'>
    <RiInstagramLine />
    </Link>
    <Link href={'https://github.com/Gabrielzin05'} className='hover:text-accent transition-all duration-300'>
    <RiGithubLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/gabriel-henrique-urbano-200297375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '} className='hover:text-accent transition-all duration-300'>
    <RiLinkedinLine />
    </Link>
  </div>
  );
};

export default Socials;
