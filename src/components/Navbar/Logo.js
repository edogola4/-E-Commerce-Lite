import React from 'react';
import { Link } from 'react-router-dom';
//import whiteLogo from '../../assets/logo_white.png';

const Logo = ({
 
  logoSrc,              // Optional custom logo image source
  altText = 'TinyTots Boutique', // Default alt text
  linkTo = '/',         // Default link destination
  containerClass = '',  // Optional container class name
  imgClass = ''         // Optional image class name
}) => {
  return (
    <Link to={linkTo} className={containerClass}>
      {/*<img src={logoSrc || whiteLogo} alt={altText} className={imgClass} />*/}
      <img src="/assets/logo_white.png" alt="logo" />
    </Link>
  );
};

export default Logo;
