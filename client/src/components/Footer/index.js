import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  Wrap,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterStyles";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <Wrap>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About Us</LinkTitle>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </LinkItems>
            <LinkItems>
              <LinkTitle>Contact Us</LinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </LinkItems>
          </LinksWrapper>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>Videos</LinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </LinkItems>
            <LinkItems>
              <LinkTitle>Social Media</LinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Philanthropy and me
            </SocialLogo>
            <WebsiteRights>
              © 2021 All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              {/* Facebook */}
              <SocialIconLink
                href="www.facebook.com"
                target="_blank"
                ria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              {/* Instagram */}
              <SocialIconLink
                href="www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              {/* Youtube */}
              <SocialIconLink
                href="//www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
                {/* twitter */}
              </SocialIconLink>
              <SocialIconLink
                target="_blank"
                aria-label="Twitter"
                href="//www.twitter.com"
              >
                <FaTwitter />
                {/* Linkedin */}
              </SocialIconLink>
              <SocialIconLink
                href="www.linkedin.com"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrap>
    </FooterContainer>
  );
};

export default Footer;
