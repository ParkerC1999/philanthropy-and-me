import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: var(--fith-color);
`;

export const Wrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const LinkTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 16px;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 3px;
  color:var(--fourth-color);
`;

export const FooterLink = styled(Link)`
  color: var(--third-color);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-family: "Special Elite", cursive;

  &:hover {
    color: var(--fourth-color);
    transition: 0.5s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: var(--secondary-color);
  justify-self: start;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  font-family: "Special Elite", cursive;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  &:hover {
    color: var(--fourth-color);
    transition: 0.5s ease-out;
  }
`;

export const WebsiteRights = styled.div`
  color:var(--fourth-color);
  margin-bottom: 20px;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 3px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const SocialIconLink = styled.a`
  color:var(--secondary-color);
  font-size: 2rem;
  &:hover {
    color: var(--fourth-color);
    transition: 0.5s ease-out;
  }
`;