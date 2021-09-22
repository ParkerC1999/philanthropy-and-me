import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
`;
export const DivT = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  font-family: 'Special Elite', cursive;
  font-size: 3rem;

`
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  margin-left: 100px;
  font-family: 'Special Elite', cursive;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};
  &:hover {
    opacity: 1;
  }
`
// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: var(--secondary-color);
  margin-bottom:50px;
  transition: 0.4s ease;
  &:hover {
    color: var(--third-color);
    opacity: 1;
    cursor: pointer;
  }
`;

// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color:var(--third-color);
border-radius: 50px;
  padding: 8px;
&:hover {
    color:var(--secondary-color);
    transform: scale(1.2);
    cursor: pointer;
    
  }
`