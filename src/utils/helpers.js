//import { sampleProducts, validateProductSchema } from './productData';

// Brand-specific configuration
const SHOP_CONFIG = {
    currency: 'THB',
    locale: 'th-TH',
    sizeOrder: ['preemie', 'newborn', '0-3m', '3-6m', '6-12m', '12-18m', '18-24m'],
    ageGroups: ['infant', 'toddler', 'preschool', 'school-age']
  };
  
  // Enhanced price formatting with optional discount display
  export const formatPrice = (
    price,
    options
  ) => {
    const { showDecimals = true, originalPrice, discountBadge = false } = options || {};
    
    const formatted = Intl.NumberFormat(SHOP_CONFIG.locale, {
      style: 'currency',
      currency: SHOP_CONFIG.currency,
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0
    }).format(price);
  
    if (originalPrice && price < originalPrice) {
      const discount = calculateDiscount(originalPrice, price);
      return `${formatted} ${discountBadge ? `(Save ${discount}%)` : ''}`;
    }
    
    return formatted;
  };
  
  // Calculate discount percentage
  export const calculateDiscount = (original, discounted) => {
    return Math.round(((original - discounted) / original) * 100);
  };
  
  // Enhanced unique value generator
  export const getUniqueValues = (
    data,
    categoryKey,
    options
  ) => {
    const { excludeAll = false, sort, customOrder } = options || {};
    
    const values = data
      .flatMap(item => {
        const value = item[categoryKey];
        return Array.isArray(value) ? value : [value];
      })
      .filter(value => value !== undefined && value !== null);
  
    const uniqueValues = Array.from(new Set(values));
  
    let sortedValues = uniqueValues;
    if (sort === 'numeric') {
      sortedValues = sortByNumericValue(uniqueValues);
    } else if (sort === 'custom' && customOrder) {
      sortedValues = sortByCustomOrder(uniqueValues, customOrder);
    } else if (sort === 'alphabetical') {
      sortedValues = uniqueValues.sort((a, b) => String(a).localeCompare(String(b)));
    }
  
    return excludeAll ? sortedValues : ['all', ...sortedValues];
  };
  
  // Brand-specific category sorting
  export const sortCategories = (
    categories,
    type = 'size'
  ) => {
    const order = type === 'size' ? SHOP_CONFIG.sizeOrder : SHOP_CONFIG.ageGroups;
    return [...categories].sort((a, b) => {
      const indexA = order.indexOf(a.toLowerCase());
      const indexB = order.indexOf(b.toLowerCase());
      return indexA - indexB;
    });
  };
  
  // Product size validation helper
  export const validateSize = (size, ageGroup) => {
    const sizeMap = {
      infant: ['preemie', 'newborn', '0-3m', '3-6m'],
      toddler: ['6-12m', '12-18m', '18-24m'],
      preschool: ['2T', '3T', '4T'],
      'school-age': ['XS', 'S', 'M']
    };
  
    return sizeMap[ageGroup].includes(size);
  };
  
  // Helpful baby clothing size formatter
  export const formatSizeForDisplay = (size) => {
    const sizeFormats = {
      '0-3m': '0-3 Months',
      '3-6m': '3-6 Months',
      '6-12m': '6-12 Months',
      '12-18m': '12-18 Months',
      '18-24m': '18-24 Months',
      '2T': '2 Toddler',
      '3T': '3 Toddler',
      '4T': '4 Toddler'
    };
  
    return sizeFormats[size] || size.toUpperCase();
  };
  
  // Utility functions
  const sortByNumericValue = (values) => {
    return [...values].sort((a, b) => {
      const numA = typeof a === 'string' ? parseFloat(a.replace(/[^\d.]/g, '')) || 0 : a;
      const numB = typeof b === 'string' ? parseFloat(b.replace(/[^\d.]/g, '')) || 0 : b;
      return Number(numA) - Number(numB);
    });
  };
  
  const sortByCustomOrder = (values, order) => {
    return [...values].sort((a, b) => {
      const indexA = order.indexOf(String(a));
      const indexB = order.indexOf(String(b));
      return indexA - indexB;
    });
  };
  
  // New feature: Bundle price calculator
  export const calculateBundlePrice = (items, bundleSize) => {
    const discountRates = { 3: 0.1, 5: 0.15, 10: 0.2 };
    const discount = discountRates[bundleSize] || 0;
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return total * (1 - discount);
  };
  
  // Product stock status formatter
  export const formatStockStatus = (stock) => {
    if (stock > 10) return 'In Stock';
    if (stock > 0) return `Only ${stock} Left!`;
    return 'Backorder Available';
  };

  // src/utils/helpers.js
export const sortUniqueCategoriesByFirstNumber = (categories) => {
  return [...new Set(categories)].sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || 0);
    const numB = parseInt(b.match(/\d+/)?.[0] || 0);
    return numA - numB;
  });
};