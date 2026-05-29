import tshirtImg from '../assets/images/products/tshirt.png';
import bagImg from '../assets/images/products/bag.png';
import walletImg from '../assets/images/products/wallet.png';
import watchImg from '../assets/images/products/watch.png';
import headsetImg from '../assets/images/products/headset.png';
import cameraImg from '../assets/images/products/camera.png';
import coatImg from '../assets/images/products/coat.png';
import shortsImg from '../assets/images/products/shorts.png';

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
    image: watchImg,
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
    image: cameraImg,
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
