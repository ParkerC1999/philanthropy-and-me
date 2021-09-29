import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import {Link} from 'react-scroll'
// Hero Container
export const HeroContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
padding: 0 30px;
height: 1350px;
position: relative;
`
// Container of the video on the hero section
export const VideoBox = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
z-index:1;
`
export const VideoBG = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit:cover;
background: #232a34;
`
// Text container on the hero section
export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24 px;
display: flex;
flex-direction: column;
align-items: center;
`
// Not for self....
export const H1 = styled.h1`
color: var(--fith-color);
font-size: 5rem;
margin-bottom:50px;
text-align: center;
font-family:'Special Elite', cursive;
@media screen and (max-width: 768px) {
    font-size: 40px;
}
@media screen and (max-width: 780px) {
    font-size: 32px;
}
`
// Coma Span change color
export const Span1 = styled.span`
color:val(--secondary-color);
`
// Feeling charitable...
export const HeroP = styled.p`
margin-bottom: 270px;
color: var(--fith-color);
font-size: 2.5rem;
font-family: 'Bebas Neue', cursive;
text-align:center;
display: flex;
align-items: center;
justify-content: center;
max-width:800px;
@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 780px) {
    font-size: 18px;
}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 70px; 
font-family:'Special Elite', cursive;
`
export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size:20px;
`
export const ArrowRigth = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size:20px;
`
export const Button = styled(Link)`
border-radius: 10px;
background: ${({primary}) => (primary ? 'rgb(83, 152, 204)' : 'rgb(254, 74, 73)')
};
white-space:nonwrap;
padding: ${({big}) => (big ? '14px 78px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : 'rgb(238, 248, 124)')};
font-size: ${({fontBig}) => (fontBig ? '30px' : '26px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
letter-spacing: 3px;
align-items: center;
transition: all 0.4s ease-in-out;


&:hover {
    transition: all 0.4s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : 'rgb(26,45,71)')};
}
`
