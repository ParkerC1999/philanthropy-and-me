import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) =>
    lightBg ? "rgb(83,152,204)" : "rgb(202, 193, 238)"};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1350px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 25px;
  justify-content: center;
`;
export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 2fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Box1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Box2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  margin: auto;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: var(--fith-color);
  font-size: 2rem;
  font-family: "Special Elite", cursive;
  text-align: center;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 5rem;
  font-family: "Bebas Neue", cursive;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? "rgb(202, 193, 238)" : "rgb(238, 248, 124)"};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 2rem;
  letter-spacing: 3px;
  font-family: "Special Elite", cursive;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "rgb(26,45,71)" : "rgb(26,45,71")};
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
export const Btn = styled.button`
  border-radius: 10px;
  background: ${({ primary }) =>
    primary ? "rgb(83, 152, 204)" : "rgb(254, 74, 73)"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 78px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "rgb(238, 248, 124)")};
  font-size: ${({ fontBig }) => (fontBig ? "30px" : "26px")};
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
    background: ${({ primary }) => (primary ? "#fff" : "rgb(26,45,71)")};
  }
`;
