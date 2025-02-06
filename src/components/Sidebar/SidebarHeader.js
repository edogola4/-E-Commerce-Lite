import React from 'react';
import logo from '../../assets/logo_white.png';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useProductsContext } from '../../context/products_context';

const SidebarHeader = ({
  customLogo,         // Optional custom logo image source
  logoAlt = 'TinyTots Boutique', // Default alt text for the logo
  customOnClose,      // Optional custom close function
  headerClass = 'sidebar-header',
  buttonClass = 'close-btn',
  logoClass = 'logo'
}) => {
  const { closeSidebar } = useProductsContext();
  const handleClose = () => {
    if (customOnClose) {
      customOnClose();
    } else {
      closeSidebar();
    }
  };

  return (
    <div className={headerClass}>
      <Link to='/' onClick={handleClose}>
        <img src={customLogo || logo} className={logoClass} alt={logoAlt} />
      </Link>
      <button type='button' className={buttonClass} onClick={handleClose}>
        <FaTimes />
      </button>
    </div>
  );
};

export default SidebarHeader;
