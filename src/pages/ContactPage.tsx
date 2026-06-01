import { Container } from '../components/Container';

export default function ContactPage() {
  return (
    <Container className="py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <h1 className="text-4xl font-semibold text-gray-900">Contact us</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question? Our support team is ready to help with order, account, and shipping questions.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Customer support</h2>
              <p className="mt-2 text-gray-600">support@ecommerce.com</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Phone</h2>
              <p className="mt-2 text-gray-600">+1 (800) 123-4567</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Working hours</h2>
              <p className="mt-2 text-gray-600">Mon-Fri 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-lg shadow-slate-200/60">
          <h2 className="text-2xl font-semibold text-gray-900">Send a message</h2>
          <form className="mt-8 space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-gray-900">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-dark focus:ring-2 focus:ring-dark/10"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-900">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-dark focus:ring-2 focus:ring-dark/10"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-900">Message</span>
              <textarea
                rows={5}
                placeholder="Tell us how we can help"
                className="mt-2 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-dark focus:ring-2 focus:ring-dark/10"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-3xl bg-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
