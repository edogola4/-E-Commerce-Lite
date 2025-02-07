// src/components/Footer.js
// --------------------------------------------------------------------
// Enhanced Footer Component
// Now includes social links, quick navigation, and company information
// --------------------------------------------------------------------


// src/components/Footer.js
// --------------------------------------------------------------------
// Enhanced Footer Component
// Now includes social links, quick navigation, and company information
// --------------------------------------------------------------------

/*import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, NAV_LINKS, CONTACT_INFO } from '../utils/constants';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-content">
        {/* Quick Links Section *}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link to={link.url} className="footer-link">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information *}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p>
              <FaEnvelope className="icon" />
              {CONTACT_INFO.email}
            </p>
            <p>
              <FaPhoneAlt className="icon" />
              {CONTACT_INFO.phone}
            </p>
            <div className="social-links">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.name === 'facebook' && <FaFacebook />}
                  {link.name === 'instagram' && <FaInstagram />}
                  {link.name === 'twitter' && <FaTwitter />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription *}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Subscribe to newsletter"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright Section *}
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} TinyTots Boutique. All rights reserved.
        </p>
        <p>Designed with ❤️ by Bran Don</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-black);
  padding: 3rem 1rem 1rem;
  border-top: 2px solid var(--clr-primary-5);

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .footer-section {
    padding: 1rem;
    text-align: center;

    h4 {
      color: var(--clr-primary-5);
      margin-bottom: 1rem;
      font-size: 1.2rem;
      text-transform: uppercase;
    }
  }

  .footer-links {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;
    }
  }

  .footer-link {
    color: var(--clr-white);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--clr-primary-5);
    }
  }

  .contact-info {
    p {
      color: var(--clr-white);
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .icon {
      color: var(--clr-primary-5);
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
      color: var(--clr-white);
      font-size: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--clr-primary-5);
      }
    }
  }

  .newsletter-form {
    display: flex;
    gap: 0.5rem;
    max-width: 300px;
    margin: 0 auto;

    input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid var(--clr-grey-5);
      border-radius: 4px;
    }

    button {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: var(--clr-primary-6);
      }
    }
  }

  .copyright {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-5);

    p {
      color: var(--clr-white);
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
    }
  }
`;

export default Footer;
*/
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-content">
        <h5>
          &copy; {new Date().getFullYear()}{' '}
          <span>TinyTots Boutique, Nairobi</span>
        </h5>
        <h5>All rights reserved</h5>
        <p>Designed with ❤️ by Bran Don</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: linear-gradient(135deg, #91908d, #1a1a1a);
  padding: 2rem;
  text-align: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  h5,
  p {
    color: #fff;
    margin: 0;
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
  }

  h5 span {
    color: #ff9800; /* A warm accent color to highlight the brand name */
    font-weight: bold;
  }

  p {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    .footer-content {
      flex-direction: row;
      justify-content: center;
    }
    h5,
    p {
      margin: 0 1rem;
    }
  }
`;

export default Footer;
