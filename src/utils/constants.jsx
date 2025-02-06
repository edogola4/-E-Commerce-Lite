import React from 'react';
import { GiClothes, GiPresent } from 'react-icons/gi';
import { MdOutlineLocalShipping, MdEco } from 'react-icons/md';
import { FaBaby, FaRegHeart, FaInstagram, FaTiktok } from 'react-icons/fa';
import { RiCustomerService2Line } from 'react-icons/ri';

// Branding constants
export const BRAND_NAME = 'TinyTots Boutique';
export const BRAND_TAGLINE = 'Big Style for Little Ones';

// Navigation links
export const NAV_LINKS = [
  {
    id: 1,
    text: 'Discover',
    url: '/',
    icon: <GiPresent className="nav-icon" />,
  },
  {
    id: 2,
    text: 'Collections',
    url: '/collections',
    icon: <GiClothes className="nav-icon" />,
  },
  {
    id: 3,
    text: 'New Arrivals',
    url: '/new',
    icon: <FaBaby className="nav-icon" />,
  },
  {
    id: 4,
    text: 'Sustainability',
    url: '/eco',
    icon: <MdEco className="nav-icon" />,
  },
];

// Value propositions
export const OUR_PROMISE = [
  {
    id: 1,
    icon: <MdOutlineLocalShipping />,
    title: 'Swift Shipping',
    text: 'Free next-day delivery on orders over $50',
  },
  {
    id: 2,
    icon: <RiCustomerService2Line />,
    title: 'Expert Stylists',
    text: '24/7 chat support from parenting experts',
  },
  {
    id: 3,
    icon: <MdEco />,
    title: 'Eco-Friendly',
    text: '100% organic cotton & sustainable packaging',
  },
  {
    id: 4,
    icon: <FaRegHeart />,
    title: 'Giving Back',
    text: 'We donate 5% of profits to children\'s charities',
  },
];

// API configuration
export const SANITY_CONFIG = {
  ENDPOINT: 'https://bqk6gkzk.api.sanity.io/v1/graphql/production/default',
  QUERY: `#graphql
    query GetProducts {
      allProduct {
        _id
        name
        slug { current }
        material
        price
        stock
        ecoBadge
        sizeRange
        featured
        collections
        images {
          asset {
            url
            metadata { dimensions }
          }
        }
        details {
          careInstructions
          safetyCertifications
          sustainabilityFeatures
        }
      }
    }
  `,
  FRAGMENTS: `#graphql
    fragment productDetails on Product {
      _id
      name
      price
      material
      ecoBadge
    }
  `,
};

// Promotions
export const LIMITED_OFFERS = [
  {
    code: 'TINYTOTS20',
    discount: 20,
    message: '20% off first order',
    expires: '2024-12-31',
  },
  {
    code: 'BUNDLE15',
    discount: 15,
    message: '15% off bundle purchases',
    expires: '2024-11-30',
  },
];

// Social media
export const SOCIAL_LINKS = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/tinytotsboutique',
    icon: <FaInstagram />,
    handle: '@tinytotsboutique',
  },
  {
    platform: 'TikTok',
    url: 'https://tiktok.com/@tinytotsboutique',
    icon: <FaTiktok />,
    handle: '@tinytotsboutique',
  },
];

// Featured categories
export const FEATURED_CATEGORIES = [
  {
    name: 'Organic Basics',
    slug: 'organic-basics',
    color: '#B8E1D1',
  },
  {
    name: 'Party Outfits',
    slug: 'party-outfits',
    color: '#F9D4D4',
  },
  {
    name: 'Adventure-Ready',
    slug: 'outdoor-gear',
    color: '#D4E3F9',
  },
];

// Theme constants
export const APP_THEME = {
  colors: {
    primary: '#FFA8C2',
    secondary: '#A2D9D1',
    accent: '#FFD700',
    neutral: '#F5F5F5',
    dark: '#2B2B2B',
  },
  fonts: {
    primary: '"Comic Neue", cursive',
    secondary: '"Nunito Sans", sans-serif',
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  },
};