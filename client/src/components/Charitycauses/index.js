import React from "react";
import { CharityContainer } from "./CharitycausesStyles";
import icon_6 from "../../images/svg5.svg";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Charitycauses = () => {
  return (
    <>
      <CharityContainer>
        <ParallaxProvider>
          <Parallax y={[20, 150]}></Parallax>
          {/* icon parallax */}
          <Parallax
            y={[-100, 100]}
            styleInner={{
              backgroundColor: "rgb(254, 74, 73)",
              width: "100%",
              height: "1000px",
              display: "block",
            }}
          />
          <h1>Hello</h1>
          <Parallax y={[-300, 100]} x={[0, 200]}>
            <img src={icon_6} width={200} height={200} />
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
      </CharityContainer>
    </>
  );
};
export default Charitycauses;
