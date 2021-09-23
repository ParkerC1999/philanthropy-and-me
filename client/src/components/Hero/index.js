import React from 'react';
import { HeroContainer, VideoBox, VideoBG, H1, HeroP, HeroBtnWrapper, CalltoActionbtn } from './HeroStyles';
import Video from '../../videos/video.mp4';

const Hero = () => (
  <HeroContainer id="home">
    <VideoBox>
      <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
    </VideoBox>
    <HeroContent>
      <H1>Not for self, but for others</H1>
      <HeroP>
        Feeling charitable? Find a cause and make a difference.
      </HeroP>
      <HeroBtnWrapper>
        <CalltoActionbtn to= 'charitablecauses'>

        </CalltoActionbtn>
      </HeroBtnWrapper>

    </HeroContent>

  </HeroContainer>
);

export default Hero;