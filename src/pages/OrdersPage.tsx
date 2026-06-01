import { Container } from '../components/Container';

export default function OrdersPage() {
  return (
    <Container className="py-16">
      <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-lg shadow-slate-200/60">
        <h1 className="text-4xl font-semibold text-gray-900">My Orders</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Review your recent purchases and track order status. Click any order for more details.
        </p>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 bg-white text-left text-sm">
            <thead className="bg-slate-50 text-gray-600">
              <tr>
                <th className="px-6 py-4 font-semibold">Order</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Total</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-gray-900">#10125</td>
                <td className="px-6 py-4 text-gray-600">May 18, 2026</td>
                <td className="px-6 py-4 text-gray-600">$248.00</td>
                <td className="px-6 py-4 text-green-600">Delivered</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-gray-900">#10108</td>
                <td className="px-6 py-4 text-gray-600">May 3, 2026</td>
                <td className="px-6 py-4 text-gray-600">$138.50</td>
                <td className="px-6 py-4 text-amber-600">Processing</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-gray-900">#10092</td>
                <td className="px-6 py-4 text-gray-600">April 21, 2026</td>
                <td className="px-6 py-4 text-gray-600">$79.99</td>
                <td className="px-6 py-4 text-blue-600">Shipped</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
