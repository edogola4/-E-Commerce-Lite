import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartButtons from '../CartButtons';
import Logo from './Logo';
import { Squash as Hamburger } from 'hamburger-react';
import NavLinks from './NavLinks';
import { APP_THEME, NAV_LINKS } from '../../utils/constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavContainer $isScrolled={isScrolled}>
      <div className='nav-center'>
        <div className='nav-header'>
          <Logo />
          <button 
            className='nav-toggle'
            aria-label='Navigation Toggle'
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Hamburger toggled={isMobileMenuOpen} color={APP_THEME.colors.primary} />
          </button>
        </div>
        
        <div className={`nav-content ${isMobileMenuOpen ? 'show-content' : ''}`}>
          <NavLinks 
            className='nav-links' 
            links={NAV_LINKS}
            onLinkClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className='cart-btn-wrapper'>
            <CartButtons variant='minimal' />
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: ${({ theme }) => theme.spacing.navHeight};
  background: ${({ $isScrolled }) => 
    $isScrolled ? `rgba(${APP_THEME.colors.neutralRGB}, 0.95)` : APP_THEME.colors.neutral};
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid ${APP_THEME.colors.border};

  .nav-center {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    max-width: ${APP_THEME.spacing.maxWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 1001;
  }

  .nav-toggle {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-content {
    display: flex;
    gap: 3rem;
    align-items: center;

    @media (max-width: 991px) {
      position: fixed;
      top: ${APP_THEME.spacing.navHeight};
      left: 0;
      right: 0;
      bottom: 0;
      background: ${APP_THEME.colors.neutral};
      flex-direction: column;
      align-items: stretch;
      padding: 2rem;
      transform: translateY(-100%);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
      overflow-y: auto;

      &.show-content {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    transition: all 0.3s ease;

    a {
      color: ${APP_THEME.colors.dark};
      font-family: ${APP_THEME.fonts.secondary};
      font-weight: 500;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      position: relative;
      transition: all 0.2s ease;

      &:hover {
        color: ${APP_THEME.colors.primary};
        background: rgba(${APP_THEME.colors.primaryRGB}, 0.1);
      }

      &.active {
        color: ${APP_THEME.colors.primary};
        font-weight: 600;
      }
    }

    @media (max-width: 991px) {
      flex-direction: column;
      gap: 1rem;

      a {
        padding: 1rem;
        border-radius: 0;
        border-bottom: 1px solid ${APP_THEME.colors.border};
      }
    }
  }

  .cart-btn-wrapper {
    display: flex;
    gap: 1.5rem;

    @media (max-width: 991px) {
      margin-top: auto;
      padding-top: 2rem;
      justify-content: center;
    }
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
  }
`;

export default Navbar;