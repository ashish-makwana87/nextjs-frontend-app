'use client'
import Navbar from './Navbar'
import Ribbon from './Ribbon'
import Octopus from './Octopus'
import React, { useEffect, useState } from 'react'

function HeroSection() {
 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='border h-screen'>
     <Navbar sticky={scrolled}  />
     <Octopus />
     <Ribbon visible={!scrolled} />
    </section>
  )
}

export default HeroSection