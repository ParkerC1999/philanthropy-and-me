import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import { homeObjOne } from '../components/About/template';


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header toggle={toggle} />
      <Hero />
      <About {...homeObjOne} />
    
      <Footer />
    </>
  );
}

export default Home;