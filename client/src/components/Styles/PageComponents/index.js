import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1040px;
  font-family: "Special Elite", cursive;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: var(--secondary-color);
  font-family: "Permanent Marker", cursive;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  font-family: "Special Elite", cursive;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgb(228, 140, 75);
`;
