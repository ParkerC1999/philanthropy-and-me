import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { Container, DivT, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import {Link} from 'react-router-dom';
const Header = () =>  (
 
  <Container>
    <DivT>
      <Link to="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"rgb(249, 250, 136)", textDecoration:"none" }}>
           <span>Philanthropy and Me</span>
        </a>
      </Link>
    </DivT>
    {/* Tabs for the Header Menu */}
    <Div2>
      
      <li>
        <Link className ="LinksS" to="/organizations">
          <NavLink>Organizations</NavLink>
        </Link>
      </li>
      <li>
        <Link className ="LinksS" to="/charity">
          <NavLink>Charity Causes</NavLink>
        </Link>
      </li>  
      <li>
        <Link className ="LinksS" to="/sign">
          <NavLink>Signup</NavLink>
        </Link>
      </li>         
      <li>
        <Link className ="LinksS" to="/about">
          <NavLink>About</NavLink>
        </Link>
      </li>   
      <li>
        <Link className ="LinksS" to="/contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>   
  
    </Div2>
      <Div3>
        <SocialIcons href="https://github/Scuobahia.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://facebook.com">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;