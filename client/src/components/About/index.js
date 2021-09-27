import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Box1,
  Box2,
  ImgWrap,
  Img,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Btn,
} from "./AboutStyles";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const About = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Box1>
              <TextWrapper>
                <Fade left>
                  <TopLine>{topLine}</TopLine>
                </Fade>

                <Heading lightText={lightText}>{headline}</Heading>
                <Fade bottom>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </Fade>

                <Fade right>
                  <BtnWrap>
                    <Btn to="">{buttonLabel}</Btn>
                  </BtnWrap>
                </Fade>
              </TextWrapper>
            </Box1>
            <Box2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Box2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
