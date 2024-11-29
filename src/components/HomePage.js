import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Header from './Header';

const HomePage = () => {
  return (
    <div>
      < Header/>
      <HeroSection />
      <AboutUs />
      <Features/>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
