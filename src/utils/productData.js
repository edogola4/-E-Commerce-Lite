// productData.js

// Sample product data
export const sampleProducts = [
  {
    id: '1',
    name: 'Organic Cotton Romper',
    slug: 'organic-cotton-romper',
    categories: ['clothing', 'essentials'],
    price: 24.99,
    stock: 15,
    ageGroup: 'infant',
    sizes: ['newborn', '0-3m', '3-6m'],
    ageDescription: 'Perfect for 0-6 month olds',
    itemDescription: 'Soft organic cotton romper with snap closures',
    images: ['image1.jpg', 'image2.jpg'],
    ecoFriendly: true
  }
];

// Product schema validation
export const validateProductSchema = (product) => {
  return (
    typeof product.id === 'string' &&
    typeof product.name === 'string' &&
    typeof product.slug === 'string' &&
    typeof product.price === 'number' &&
    typeof product.stock === 'number' &&
    Array.isArray(product.categories) &&
    Array.isArray(product.sizes) &&
    typeof product.ageDescription === 'string' &&
    typeof product.itemDescription === 'string' &&
    Array.isArray(product.images)
  );
};