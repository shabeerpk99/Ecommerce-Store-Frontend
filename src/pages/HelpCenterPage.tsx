import { Container } from '../components/Container';

export default function HelpCenterPage() {
  return (
    <Container className="py-16">
      <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-lg shadow-slate-200/60">
        <h1 className="text-4xl font-semibold text-gray-900">Help Center</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Need a hand? Browse our most common help topics or contact our support team for fast answers.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Order support</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Track your order, change delivery details, and manage returns with easy self-service tools.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Payment issues</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Get help with billing, invoices, refunds and secure checkout questions.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Account help</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Sign in issues, password resets, and account settings support all in one place.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
