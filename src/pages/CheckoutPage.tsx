import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Container } from '../components/Container';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('Credit Card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const paymentMethods = ['Credit Card', 'PayPal', 'Apple Pay', 'Google Pay'];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="bg-gray-50 py-16">
        <Container>
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8">
      <Container>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="col-span-2 bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Information</h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-200 rounded-3xl"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-200 rounded-3xl"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-3xl mb-4"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-3xl mb-4"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-3xl mb-4"
            />

            <div className="grid grid-cols-3 gap-4 mb-6">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-200 rounded-3xl"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-200 rounded-3xl"
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                value={formData.zip}
                onChange={handleInputChange}
                required
                className="px-4 py-3 border border-gray-200 rounded-3xl"
              />
            </div>

            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-3xl mb-8"
            >
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </select>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setSelectedPayment(method)}
                    className={`rounded-3xl border px-4 py-3 text-left text-sm font-semibold transition ${
                      selectedPayment === method
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-3xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4 max-h-[300px] overflow-y-auto text-sm text-gray-600 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between gap-4">
                    <span>{item.title}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 border-t border-gray-200 pt-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${(cartTotal + 10 + cartTotal * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Need help?</h2>
              <p className="text-sm text-gray-600">Contact our support team if you have any questions about your order.</p>
              <div className="mt-4 grid gap-3">
                <button className="rounded-3xl border border-gray-200 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  Chat with support
                </button>
                <button className="rounded-3xl border border-gray-200 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  View shipping policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
