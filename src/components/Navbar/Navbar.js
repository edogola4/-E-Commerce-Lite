import React, { useState } from 'react';
import styled from 'styled-components';
import CartButtons from '../CartButtons';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import NavLinks from './NavLinks';
import { APP_THEME, NAV_LINKS } from '../../utils/constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Logo />
          <button 
            className='nav-toggle'
            aria-label='Navigation Toggle'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
        
        <NavLinks 
          className={`nav-links ${isMobileMenuOpen ? 'show-links' : ''}`} 
          links={NAV_LINKS}
        />
        
        <div className='cart-btn-wrapper'>
          <CartButtons />
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  background: ${APP_THEME.colors.neutral};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: ${APP_THEME.spacing.maxWidth};
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: ${APP_THEME.colors.primary};
    cursor: pointer;
    padding: 0.5rem;
    transition: ${APP_THEME.transitions.default};
    
    &:hover {
      transform: scale(1.1);
    }

    svg {
      font-size: 2rem;
    }
  }

  .nav-links {
    display: none;
    transition: ${APP_THEME.transitions.default};

    &.show-links {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 5rem;
      left: 0;
      right: 0;
      background: ${APP_THEME.colors.neutral};
      padding: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  }

  .cart-btn-wrapper {
    display: none;
    gap: 1rem;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-left: 2rem;

      li {
        margin: 0;
      }

      a {
        color: ${APP_THEME.colors.dark};
        font-family: ${APP_THEME.fonts.secondary};
        font-weight: 500;
        padding: 0.5rem;
        transition: ${APP_THEME.transitions.default};
        position: relative;

        &:hover {
          color: ${APP_THEME.colors.primary};
          &::after {
            width: 100%;
          }
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: ${APP_THEME.colors.primary};
          transition: ${APP_THEME.transitions.default};
        }
      }
    }

    .cart-btn-wrapper {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      margin-right: 0rem;
      margin-left: 2rem;
    }
  }

  @media (max-width: 991px) {
    .nav-center {
      grid-template-columns: auto 1fr;
    }

    .cart-btn-wrapper {
      display: none;
    }
  }
`;

export default Navbar;