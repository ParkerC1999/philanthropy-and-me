import React, { useState } from 'react';
import { Button } from './Button';
import Dropdown from './Dropdown';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar slogan' onClick={closeMobileMenu}>
          Philanthropy and Me
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Charitablecauses'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Charitable Causes
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/Organizations'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Organizations
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/About'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              About us
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Header;