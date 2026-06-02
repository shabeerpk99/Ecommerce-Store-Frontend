import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { useCart } from '../context/useCart';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/productsData';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<'Description' | 'Reviews' | 'Shipping'>('Description');
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <Container>
        <div className="py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <Link to="/category" className="text-blue-600 hover:underline mt-4 inline-block">
            ← Back to products
          </Link>
        </div>
      </Container>
    );
  }

  const description =
    product.description ||
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis tortor in urna scelerisque sagittis a nec orci.';

  const seller = product.seller ?? {
    name: 'Guanjoi Trading LLC',
    location: 'Germany, Berlin',
    verified: product.verified ?? false,
  };

  const details =
    product.details ?? [
      { label: 'Model', value: '#8786867' },
      { label: 'Type', value: 'Classic style' },
      { label: 'Material', value: 'Plastic material' },
      { label: 'Design', value: 'Modern nice' },
      { label: 'Customization', value: 'Customized logo and design custom packages' },
      { label: 'Warranty', value: '2 years full warranty' },
    ];

  const priceTiers =
    product.priceTiers ?? [
      { label: '50-100 pcs', price: 98.0 },
      { label: '100-700 pcs', price: 90.0 },
      { label: '700+ pcs', price: 78.0 },
    ];

  const relatedProducts = productsData
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    alert('Added to cart!');
  };

  return (
    <div className="bg-gray-50 py-8">
      <Container>
        <div className="space-y-8">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <Link to="/category" className="hover:text-gray-900">Shop</Link>
              <span>/</span>
              <Link
                to={product.category ? `/category?category=${encodeURIComponent(product.category)}` : '/category'}
                className="hover:text-gray-900"
              >
                {product.category || 'Products'}
              </Link>
              <span>/</span>
              <span className="font-semibold text-gray-900">{product.title}</span>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_0.9fr]">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover rounded-3xl"
                  />
                  <div className="grid grid-cols-4 gap-3">
                    {[...Array(4)].map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100"
                      >
                        <img
                          src={product.image}
                          alt={`${product.title} ${index + 1}`}
                          className="w-full h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <p className="text-gray-500 uppercase text-sm font-semibold tracking-[0.2em]">
                    {product.brand}
                  </p>
                  <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>

                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1 text-lg text-yellow-400">
                      {'⭐'.repeat(Math.floor(product.rating))}
                    </div>
                    <span>{product.rating} ({product.reviews} reviews)</span>
                  </div>

                  <div className="rounded-3xl border border-gray-200 p-6 bg-gray-50">
                    <div className="flex items-center gap-4 text-3xl font-bold text-gray-900">
                      <span>${product.price.toFixed(2)}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-green-600">
                      Save ${(product.originalPrice - product.price).toFixed(2)} when you order now.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {priceTiers.map((tier) => (
                      <div key={tier.label} className="rounded-3xl border border-gray-200 p-4">
                        <div className="flex items-center justify-between text-sm text-gray-700">
                          <span>{tier.label}</span>
                          <span className="font-semibold text-gray-900">${tier.price.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-3">
                    <button
                      onClick={handleAddToCart}
                      className="w-full rounded-3xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
                    >
                      Add to cart
                    </button>
                    <button className="w-full rounded-3xl border border-gray-300 py-3 text-gray-700 font-semibold hover:bg-gray-100 transition">
                      Save for later
                    </button>
                  </div>
                </div>
              </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Supplier</p>
                    <h2 className="text-xl font-semibold text-gray-900">{seller.name}</h2>
                  </div>
                  <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {seller.verified ? 'Verified' : 'Unverified'}
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <p><span className="font-semibold text-gray-900">Location:</span> {seller.location}</p>
                  <p><span className="font-semibold text-gray-900">In stock:</span> {product.stock ?? 52}</p>
                  <p><span className="font-semibold text-gray-900">Shipping:</span> {product.shippingInfo ?? 'Worldwide shipping available'}</p>
                </div>
                <button className="mt-6 w-full rounded-3xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
                  Contact supplier
                </button>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-gray-900 mb-4">Product details</p>
                <div className="space-y-3 text-sm text-gray-600">
                  {details.slice(0, 3).map((detail) => (
                    <div key={detail.label} className="flex justify-between gap-4">
                      <span className="text-gray-500">{detail.label}</span>
                      <span className="font-medium text-gray-900">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-6">
                {['Description', 'Reviews', 'Shipping'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab as 'Description' | 'Reviews' | 'Shipping')}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'Description' && (
                <div className="space-y-6 text-gray-700">
                  <p>{description}</p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                    {details.map((detail) => (
                      <div key={detail.label} className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                        <span className="text-gray-500">{detail.label}</span>
                        <span className="font-medium text-gray-900">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Reviews' && (
                <div className="space-y-6 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900">Customer Reviews</p>
                    <p className="text-sm text-gray-500 mt-1">Based on {product.reviews} reviews</p>
                  </div>
                  <div className="space-y-4">
                    {['Excellent quality', 'Fast delivery', 'Very comfortable'].map((review) => (
                      <div key={review} className="rounded-3xl border border-gray-200 p-4">
                        <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
                          <span className="font-semibold">{review}</span>
                          <span className="text-yellow-500">★★★★★</span>
                        </div>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Shipping' && (
                <div className="space-y-5 text-gray-700">
                  <p className="font-semibold text-gray-900">Shipping & Returns</p>
                  <p className="text-sm text-gray-600">Standard shipping takes 3-7 business days worldwide. Express shipping is available for most regions.</p>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
                    <li>Free shipping on orders over $150</li>
                    <li>Easy returns within 30 days</li>
                    <li>Secure packaging and tracking included</li>
                  </ul>
                </div>
              )}
            </div>

            {relatedProducts.length > 0 && (
              <div className="rounded-3xl bg-white p-6 shadow-sm mt-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm text-gray-500">You may like</p>
                    <h2 className="text-2xl font-semibold text-gray-900">Related products</h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {relatedProducts.slice(0, 3).map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
        </div>
      </Container>
    </div>
  );
}
