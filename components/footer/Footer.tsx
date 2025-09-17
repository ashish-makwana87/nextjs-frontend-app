import React from 'react'; 
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Logo from '../hero/Logo';

function Footer() {

  return (
    <footer className='w-full h-[18rem] z-40 bg-black relative'>
     <div className='alignment py-16 px-10 md:py-20'>
     {/* socials section */}
     <div className='grid md:grid-cols-[1fr_auto] md:justify-between md:items-center gap-y-6 mb-10 md:mb-20'>
     <Logo /> 
     <div className='flex gap-x-4 items-end'>
     <FaLinkedin className='w-5 h-5 md:w-6 md:h-6' />
     <FaXTwitter className='w-5 h-5 md:w-6 md:h-6' />
     <FaInstagram className='w-5 h-5 md:w-6 md:h-6' />
     </div>
     </div>
     {/* copyright section */}
     <div className='grid md:grid-cols-[1fr_auto] md:justify-between md:items-center gap-y-2'>
     <p className='text-sm text-white/50'>©CirriNote 2025</p>
     <p className='text-sm text-white/50'>Crafted with passion by <a href="https://www.ashishmakwana.in/" target='_blank'>Ashish Makwana</a></p>
     </div>
     </div>
    </footer>
  )
}

export default Footer