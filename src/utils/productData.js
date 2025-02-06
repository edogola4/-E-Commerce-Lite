// Core Product Object
// There's no direct equivalent of TypeScript's 'type' in JavaScript, but we can use plain objects.

const productData = {
    id: String,
    name: String,
    slug: String,
    brand: String,
    categories: Array,
    price: Number,
    stock: Number,
    ageGroup: String,
    sizes: Array,
    sizeDescription: String,
    ageDescription: String,
    itemDescription: String,
    featured: Boolean,
    images: Array,
    material: String,
    ecoFriendly: Boolean,
  };
  
  // Supporting Constants
  const AgeGroup = ['infant', 'toddler', 'preschool', 'school-age'];
  
  const SizeType = [
    'preemie',
    'newborn',
    '0-3m',
    '3-6m',
    '6-12m',
    '12-18m',
    '18-24m',
    '2T',
    '3T',
    '4T',
    'XS',
    'S',
    'M'
  ];
  
  const ProductCategory = ['clothing', 'footwear', 'accessories', 'toys', 'gear', 'essentials'];
  
  // Type guard for filtering
  const validateProductSchema = (product) => {
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
  
  // Sample product data (optional)
  const sampleProducts = [
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
  