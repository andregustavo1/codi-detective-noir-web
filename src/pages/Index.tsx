
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Timeline from '../components/Timeline';
import Testimonials from '../components/Testimonials';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scroll to sections
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-detective-black text-white">
      <Header />
      <Hero />
      <About />
      <Features />
      <Timeline />
      <Testimonials />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Index;
