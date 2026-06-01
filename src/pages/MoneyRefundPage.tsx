import { Container } from '../components/Container';

export default function MoneyRefundPage() {
  return (
    <Container className="py-16">
      <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-lg shadow-slate-200/60">
        <h1 className="text-4xl font-semibold text-gray-900">Money Refund</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          We want your shopping experience to feel safe and simple. Learn how our refund process works.
        </p>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Easy refund policy</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Most purchases are eligible for refund within 30 days. If something isn't right, we’ll help make it right.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Fast processing</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Once we receive your return, refunds are processed quickly and credited back to your original payment method.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Support when you need it</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              If your refund is delayed or you have questions about eligibility, our team is available to help.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
