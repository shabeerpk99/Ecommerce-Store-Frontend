import { Container } from '../components/Container';

export default function ShippingPage() {
  return (
    <Container className="py-16">
      <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-lg shadow-slate-200/60">
        <h1 className="text-4xl font-semibold text-gray-900">Shipping</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Discover our shipping options, delivery windows, and how we keep your order safe in transit.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Fast delivery</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Standard shipping usually arrives within 3-7 business days. Expedited delivery is available at checkout.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Free shipping</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Enjoy free shipping on orders over $150. Your order is shipped with care and full tracking details.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">International service</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              We ship worldwide. International delivery times and customs policies vary by region.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Track your package</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Once your order ships, you’ll receive tracking details so you can follow every step of delivery.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
