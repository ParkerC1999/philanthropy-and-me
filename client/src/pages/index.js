import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
// import Donation from "../components/Donation";
import Footer from "../components/Footer";
import Charitycauses from "../components/Charitycauses"
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/About/template";
import Organizations from "../components/Organizations";

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
      <About {...homeObjTwo} />
      <About {...homeObjThree} />
      {/* <Donation /> */}
  
     
    </>
  );
}

export default Home;
