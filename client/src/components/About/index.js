import React from 'react';
import {
  AboutContainer, AboutWrapper,
  AboutRow, Box1, Box2, ImgWrap, Img, TextWrapper,
  TopLine, Heading, Subtitle, BtnWrap, Btn
} from './AboutStyles';
import Fade from 'react-reveal/Fade';


const About = ({ lightBg, id, imgStart, topLine, lightText,
  headline, darkText, description, buttonLabel, img, alt }) => {
  return (
    <Fade left>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Box1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Btn to='home'>{buttonLabel}</Btn>
                </BtnWrap>
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
    </Fade>
  )
};

export default About;