import tshirtImg from '../assets/images/products/tshirt.png';
import bagImg from '../assets/images/products/bag.png';
import walletImg from '../assets/images/products/wallet.png';
import watchImg from '../assets/images/products/watch.png';
import headsetImg from '../assets/images/products/headset.png';
import coatImg from '../assets/images/products/coat.png';
import shortsImg from '../assets/images/products/shorts.png';
import dealSmartwatchImg from '../assets/images/deals/smartwatch.png';
import dealCanonImg from '../assets/images/deals/canon.png';
import categoryLaptopImg from '../assets/images/categories/laptop.png';
import categoryCamerasImg from '../assets/images/categories/cameras.png';
import categorySmartphoneImg from '../assets/images/categories/smartphone.png';
import categoryGamingImg from '../assets/images/categories/gaming.png';
import categoryKettleImg from '../assets/images/categories/kettle.png';
import sofaChairImg from '../assets/images/interior/sofa-chair.png';
import tableLampImg from '../assets/images/interior/table-lamp.png';
import airMattressImg from '../assets/images/tech/air-mattress.png';
import dragonTreeImg from '../assets/images/tech/dragon-tree.png';
import kitchenMixerImg from '../assets/images/tech/kitchen-mixer.png';
import electricKettleImg from '../assets/images/tech/electric-kettle.png';
import coffeeMakerImg from '../assets/images/tech/coffee-maker.png';
import blenderImg from '../assets/images/tech/blender.png';

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  brand: string;
  category?: string;
  features: string[];
  condition: 'brand-new' | 'refurbished' | 'old';
  verified: boolean;
  featured: boolean;
  description?: string;
  stock?: number;
  seller?: {
    name: string;
    location: string;
    verified: boolean;
  };
  priceTiers?: { label: string; price: number }[];
  details?: { label: string; value: string }[];
  shippingInfo?: string;
}

export const productsData: Product[] = [
  {
    id: 'prod-001',
    title: 'Premium Cotton T-Shirt',
    price: 24.99,
    originalPrice: 49.99,
    image: tshirtImg,
    rating: 4.5,
    reviews: 128,
    brand: 'Samsung',
    category: 'Clothing',
    features: ['Cotton', 'Comfortable', 'Breathable'],
    condition: 'brand-new',
    verified: true,
    featured: true,
  },
  {
    id: 'prod-002',
    title: 'Durable Canvas Bag',
    price: 79.99,
    originalPrice: 129.99,
    image: bagImg,
    rating: 4.8,
    reviews: 256,
    brand: 'Apple',
    category: 'Accessories',
    features: ['Waterproof', 'Large capacity', 'Metallic'],
    condition: 'brand-new',
    verified: true,
    featured: false,
  },
  {
    id: 'prod-003',
    title: 'Leather Wallet',
    price: 34.99,
    originalPrice: 59.99,
    image: walletImg,
    rating: 4.2,
    reviews: 89,
    brand: 'Huawei',
    category: 'Accessories',
    features: ['Leather', 'RFID Protection', 'Metallic'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-004',
    title: 'Smart Watch Pro',
    price: 149.99,
    originalPrice: 299.99,
    image: dealSmartwatchImg,
    rating: 4.6,
    reviews: 512,
    brand: 'Samsung',
    category: 'Electronics',
    features: ['8GB RAM', 'Super power', 'Plastic cover'],
    condition: 'brand-new',
    verified: true,
    featured: true,
  },
  {
    id: 'prod-005',
    title: 'Wireless Headset',
    price: 89.99,
    originalPrice: 179.99,
    image: headsetImg,
    rating: 4.7,
    reviews: 340,
    brand: 'Apple',
    category: 'Electronics',
    features: ['Noise Cancellation', 'Long Memory', 'Metallic'],
    condition: 'brand-new',
    verified: true,
    featured: false,
  },
  {
    id: 'prod-006',
    title: 'Digital Camera',
    price: 299.99,
    originalPrice: 599.99,
    image: dealCanonImg,
    rating: 4.9,
    reviews: 678,
    brand: 'Lenovo',
    category: 'Electronics',
    features: ['4K Video', 'Super power', 'Large Memory'],
    condition: 'brand-new',
    verified: true,
    featured: true,
  },
  {
    id: 'prod-007',
    title: 'Winter Coat',
    price: 119.99,
    originalPrice: 249.99,
    image: coatImg,
    rating: 4.4,
    reviews: 203,
    brand: 'Pccq',
    category: 'Clothing',
    features: ['Warm', 'Comfortable', 'Metallic'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-008',
    title: 'Sports Shorts',
    price: 39.99,
    originalPrice: 79.99,
    image: shortsImg,
    rating: 4.3,
    reviews: 145,
    brand: 'Lenovo',
    category: 'Clothing',
    features: ['Breathable', 'Flexible', 'Plastic cover'],
    condition: 'refurbished',
    verified: true,
    featured: false,
  },
  {
    id: 'prod-009',
    title: 'Premium T-Shirt Deluxe',
    price: 29.99,
    originalPrice: 59.99,
    image: tshirtImg,
    rating: 4.1,
    reviews: 92,
    brand: 'Samsung',
    category: 'Clothing',
    features: ['Cotton', 'Premium', 'Metallic'],
    condition: 'brand-new',
    verified: true,
    featured: false,
  },
  {
    id: 'prod-010',
    title: 'Professional Canvas Bag',
    price: 99.99,
    originalPrice: 199.99,
    image: bagImg,
    rating: 4.8,
    reviews: 421,
    brand: 'Apple',
    category: 'Accessories',
    features: ['Professional', 'Waterproof', 'Large capacity'],
    condition: 'brand-new',
    verified: true,
    featured: true,
  },
  {
    id: 'prod-011',
    title: 'Elegant Leather Wallet',
    price: 44.99,
    originalPrice: 89.99,
    image: walletImg,
    rating: 4.5,
    reviews: 167,
    brand: 'Huawei',
    category: 'Accessories',
    features: ['Leather', 'Elegant', 'RFID Protection'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-012',
    title: 'Ultra Smart Watch',
    price: 199.99,
    originalPrice: 399.99,
    image: watchImg,
    rating: 4.7,
    reviews: 589,
    brand: 'Pccq',
    category: 'Electronics',
    features: ['8GB RAM', 'Super power', 'Large Memory'],
    condition: 'brand-new',
    verified: true,
    featured: false,
  },
  {
    id: 'prod-013',
    title: 'Laptops & PC Bundle',
    price: 349.99,
    originalPrice: 599.99,
    image: categoryLaptopImg,
    rating: 4.5,
    reviews: 212,
    brand: 'Lenovo',
    category: 'Electronics',
    features: ['16GB RAM', 'SSD', 'High performance'],
    condition: 'brand-new',
    verified: true,
    featured: false,
  },
  {
    id: 'prod-014',
    title: 'GoPro Camera',
    price: 279.99,
    originalPrice: 399.99,
    image: categoryCamerasImg,
    rating: 4.6,
    reviews: 192,
    brand: 'GoPro',
    category: 'Electronics',
    features: ['4K Video', 'Waterproof', 'Compact'],
    condition: 'brand-new',
    verified: true,
    featured: false,
  },
  {
    id: 'prod-015',
    title: 'Canon Camera',
    price: 329.99,
    originalPrice: 499.99,
    image: dealCanonImg,
    rating: 4.7,
    reviews: 298,
    brand: 'Canon',
    category: 'Electronics',
    features: ['24MP', 'Zoom Lens', 'Wi-Fi'],
    condition: 'brand-new',
    verified: true,
    featured: false,
  },
  {
    id: 'prod-016',
    title: 'Sofa Chair',
    price: 129.99,
    originalPrice: 199.99,
    image: sofaChairImg,
    rating: 4.3,
    reviews: 86,
    brand: 'HomeStyle',
    category: 'Home interiors',
    features: ['Comfortable', 'Modern design', 'Soft fabric'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-017',
    title: 'Table Lamp',
    price: 39.99,
    originalPrice: 69.99,
    image: tableLampImg,
    rating: 4.4,
    reviews: 72,
    brand: 'BrightHome',
    category: 'Home interiors',
    features: ['LED', 'Adjustable', 'Decorative'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-018',
    title: 'Air Mattress',
    price: 59.99,
    originalPrice: 99.99,
    image: airMattressImg,
    rating: 4.2,
    reviews: 55,
    brand: 'ComfortAir',
    category: 'Home interiors',
    features: ['Inflatable', 'Portable', 'Durable'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-019',
    title: 'Dragon Tree',
    price: 89.99,
    originalPrice: 129.99,
    image: dragonTreeImg,
    rating: 4.4,
    reviews: 65,
    brand: 'GreenLife',
    category: 'Home interiors',
    features: ['Indoor plant', 'Easy care', 'Decorative'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-020',
    title: 'Electric Kettle',
    price: 29.99,
    originalPrice: 49.99,
    image: electricKettleImg,
    rating: 4.3,
    reviews: 103,
    brand: 'KitchenPro',
    category: 'Home interiors',
    features: ['Fast boil', 'Auto shut-off', 'Stainless steel'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-021',
    title: 'Kitchen Mixer',
    price: 49.99,
    originalPrice: 89.99,
    image: kitchenMixerImg,
    rating: 4.4,
    reviews: 90,
    brand: 'KitchenPro',
    category: 'Home interiors',
    features: ['Multi-speed', 'Durable', 'Easy clean'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-022',
    title: 'Coffee Maker',
    price: 44.99,
    originalPrice: 79.99,
    image: coffeeMakerImg,
    rating: 4.5,
    reviews: 84,
    brand: 'BrewMaster',
    category: 'Home interiors',
    features: ['Automatic', 'Compact', 'Easy setup'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-023',
    title: 'Blender',
    price: 34.99,
    originalPrice: 59.99,
    image: blenderImg,
    rating: 4.4,
    reviews: 78,
    brand: 'BlendPro',
    category: 'Home interiors',
    features: ['Powerful', 'Easy clean', 'Multi-purpose'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-024',
    title: 'Mobile Phone',
    price: 229.99,
    originalPrice: 349.99,
    image: categorySmartphoneImg,
    rating: 4.6,
    reviews: 210,
    brand: 'TechPlus',
    category: 'Electronics',
    features: ['5G', 'Dual SIM', 'Fast charging'],
    condition: 'brand-new',
    verified: true,
    featured: false,
  },
  {
    id: 'prod-025',
    title: 'Smartphone',
    price: 199.99,
    originalPrice: 299.99,
    image: categorySmartphoneImg,
    rating: 4.4,
    reviews: 145,
    brand: 'TechPlus',
    category: 'Electronics',
    features: ['4G', 'Slim design', 'Long battery'],
    condition: 'brand-new',
    verified: true,
    featured: false,
  },
  {
    id: 'prod-026',
    title: 'Gaming Set',
    price: 89.99,
    originalPrice: 149.99,
    image: categoryGamingImg,
    rating: 4.5,
    reviews: 133,
    brand: 'GameZone',
    category: 'Electronics',
    features: ['Headset', 'RGB', 'Noise cancellation'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-027',
    title: 'E Kettle',
    price: 39.99,
    originalPrice: 59.99,
    image: categoryKettleImg,
    rating: 4.3,
    reviews: 107,
    brand: 'KitchenPro',
    category: 'Home interiors',
    features: ['Fast boil', 'Compact', 'Auto shut-off'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
  {
    id: 'prod-028',
    title: 'Camera',
    price: 239.99,
    originalPrice: 359.99,
    image: categoryCamerasImg,
    rating: 4.5,
    reviews: 118,
    brand: 'PhotoMax',
    category: 'Electronics',
    features: ['Zoom lens', 'HD video', 'Compact'],
    condition: 'brand-new',
    verified: false,
    featured: false,
  },
];

// Filter helper functions
export const BRANDS = ['Samsung', 'Apple', 'Huawei', 'Pccq', 'Lenovo'];
export const FEATURES = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];
export const CONDITIONS = ['brand-new', 'refurbished', 'old'];

export function filterProducts(
  products: Product[],
  filters: {
    category?: string;
    brands?: string[];
    features?: string[];
    priceRange?: [number, number];
    condition?: string[];
    rating?: number;
    manufacturers?: string[];
    verified?: boolean;
    featured?: boolean;
  }
): Product[] {
  return products.filter((product) => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    if (filters.manufacturers && filters.manufacturers.length > 0 && !filters.manufacturers.includes(product.brand)) {
      return false;
    }

    if (filters.brands && filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }

    if (filters.features && filters.features.length > 0) {
      const hasFeature = filters.features.some((feature) =>
        product.features.includes(feature)
      );
      if (!hasFeature) return false;
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (product.price < min || product.price > max) return false;
    }

    if (filters.condition && filters.condition.length > 0 && !filters.condition.includes(product.condition)) {
      return false;
    }

    if (filters.rating && product.rating < filters.rating) {
      return false;
    }

    if (filters.verified && !product.verified) {
      return false;
    }

    if (filters.featured && !product.featured) {
      return false;
    }

    return true;
  });
}
