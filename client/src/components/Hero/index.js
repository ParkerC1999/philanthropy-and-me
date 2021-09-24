import React, {useState} from 'react';
import { HeroContainer, VideoBox, VideoBG, 
HeroContent, H1, Span1, HeroP, Wrapper, Button,
ArrowForward, ArrowRigth } from './HeroStyles';
import Video from '../../videos/video.mp4';


const Hero = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  return (
  <HeroContainer id="Main">
    <VideoBox>
      <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
    </VideoBox>
    <HeroContent>
      <H1>Not for self<Span1>,</Span1> but for others</H1>
      <HeroP>
        Feeling charitable? Reach out and make a difference.
      </HeroP>
      <Wrapper>
        <Button to='Charitycauses' onMouseEnter = {onHover}
        onMouseLeave = {onHover} >
          Find a cause {hover ? <ArrowForward /> : <ArrowRigth />}
        </Button>
      </Wrapper>

    </HeroContent>

  </HeroContainer>
  )
};

export default Hero;