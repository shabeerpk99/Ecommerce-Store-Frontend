import type { Product } from '../data/productsData';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  view?: 'grid' | 'list';
}

export function ProductCard({ product, view = 'grid' }: ProductCardProps) {
  const { addToCart } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ));
  };

  if (view === 'list') {
    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow transition p-4 flex items-start gap-4">
        <img src={product.image} alt={product.title} className="w-40 h-40 object-cover rounded" />

        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold mb-1">{product.brand}</p>
              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">{product.title}</h3>
              </Link>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</div>
              {product.originalPrice > product.price && (
                <div className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
            <div className="flex items-center">{renderStars(product.rating)}</div>
            <span>({product.reviews})</span>
            {product.verified && <span className="text-green-600 font-medium">Free Shipping</span>}
          </div>

          <p className="text-sm text-gray-600 mt-3 line-clamp-3">{product.features.join(', ')}</p>

          <div className="mt-4 flex items-center justify-between">
            <Link to={`/product/${product.id}`} className="text-blue-600 text-sm font-semibold hover:underline">
              View details
            </Link>

            <div className="flex items-center gap-2">
              <button onClick={handleAddToCart} className="px-3 py-1 bg-blue-600 text-white rounded">Add to cart</button>
              <button className="text-red-500">♥</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Product Image */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            -{discount}%
          </div>
        )}
        <button
          onClick={() => handleAddToCart()}
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 text-white py-2 transition-all flex items-center justify-center gap-2"
        >
          🛒 Add to Cart
        </button>
        <button className="absolute top-2 left-2 text-red-500 text-xl hover:scale-125 transition">
          ♥
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1">
        {/* Brand */}
        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">{product.brand}</p>

        {/* Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
            {product.title}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        {/* Badges */}
        <div className="flex gap-1 mb-3 flex-wrap">
          {product.verified && (
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Verified</span>
          )}
          {product.featured && (
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Featured</span>
          )}
        </div>

        {/* View Details */}
        <Link
          to={`/product/${product.id}`}
          className="text-blue-600 text-sm font-semibold hover:underline mt-auto"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
