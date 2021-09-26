import React from "react";
import { H1 } from "./CharitycausesStyles";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Charitycauses = () => {
  return (
    <Parallax pages={5} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <H1>Hey!</H1>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Charitycauses;
