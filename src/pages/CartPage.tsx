import { useState } from 'react';
import { Container } from '../components/Container';
import { useCart, type CartItem } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { productsData } from '../data/productsData';

export default function CartPage() {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [savedItems, setSavedItems] = useState<CartItem[]>(() =>
    productsData.slice(0, 4).map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    }))
  );

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'SAVE10') {
      setDiscount(10);
      alert('Coupon applied: $10 off');
    } else {
      setDiscount(0);
      alert('Coupon not recognized. Try SAVE10.');
    }
  };

  const handleSaveForLater = (item: CartItem) => {
    removeFromCart(item.id);
    setSavedItems((prev) => [...prev, item]);
  };

  const handleMoveToCart = (item: CartItem) => {
    addToCart(item);
    setSavedItems((prev) => prev.filter((saved) => saved.id !== item.id));
  };

  const shipping = 10;
  const tax = (cartTotal - discount) * 0.1;
  const total = cartTotal - discount + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="bg-gray-50 py-16">
        <Container>
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
            <Link
              to="/category"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8">
      <Container>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My cart ({cart.length})</h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="w-28 h-28 object-cover rounded-3xl" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">Seller: Artel Market</p>
                    <p className="text-sm text-gray-500">Size: medium, Color: blue</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-gray-600"
                    >
                      −
                    </button>
                    <span className="px-2 text-sm font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-600"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-right font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleSaveForLater(item)}
                    className="text-blue-600 hover:underline"
                  >
                    Save for later
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Saved for later</h2>
              <div className="grid grid-cols-2 gap-4">
                {savedItems.map((item) => (
                  <div key={item.id} className="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-3xl" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleMoveToCart(item)}
                      className="mt-4 w-full rounded-3xl bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      Move to cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Have a coupon?</h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Add coupon"
                  className="w-full rounded-3xl border border-gray-200 px-4 py-3 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order summary</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-600">-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between border-t border-gray-200 pt-4 text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="mt-6 block w-full rounded-3xl bg-blue-600 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Checkout
              </Link>
              <button
                onClick={clearCart}
                className="mt-3 w-full rounded-3xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Remove all
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
