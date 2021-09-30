import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1500px;
  font-family: "Special Elite", cursive;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  background-color:var(--secondary-color);
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  max-width: 100%;
  color:var(--fourth-color);
  background: transparent;
  font-family: "Bebas Neue", cursive;
  text-align: center;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};
`;
// Image Styles
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px;
`;
// Card Container
export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 3rem;
  row-gap: 5rem;
`;
export const BlogCard = styled.div`
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

// Card Title
export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 3px;
  color: var(--fourth-color);
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;
// Line divider between card title and description
export const Hr = styled.hr`
  width: 60px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: var(--fourth-color);
`;

export const CardInfo = styled.p`
  width: 100%;
  color: var(--fith-color);
  line-height: 30px;
  text-align: center;
`;

// Container for the Link buttons
export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;
// Link buttons for the projects
export const ExternalLinks = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  background: var(--third-color);
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: var(--secondary-color);
  }
`;
// Technologies use tags
export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: black;
  font-size: 1rem;
  list-style: none;
`;
export const Button = styled.button`
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