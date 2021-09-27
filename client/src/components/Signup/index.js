import React from 'react';
import {H1} from './SignupStyles';
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Signup = () => {
  return (
    <ParallaxProvider>
      <Parallax y={[-20, 20]}>
        <H1>Hey!</H1>
      </Parallax>

      <Parallax
        y={[-100, 100]}
        styleInner={{
          backgroundColor: "#ff6d6d",
          width: "100%",
          height: "1000px",
          display: "block",
        }}
      />

      <Parallax y={[-300, 100]} x={[0, 200]}>
        
      </Parallax>

      <Parallax
        y={[-400, 400]}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <p>Bye</p>
      </Parallax>
    </ParallaxProvider>
  );
};

export default Signup;