'use client'
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/hero/Navbar";
import Ribbon from "@/components/hero/Ribbon";
import Introduction from "@/components/introduction/Introduction";
import React, { useEffect, useState } from 'react';


export default function Home() {
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <>
  <Navbar sticky={scrolled}  />
  <Ribbon visible={!scrolled} />
  <HeroSection />
  <Introduction />
  <Features />
  <Footer />
  </>
  );
}
