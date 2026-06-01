import { Link } from 'react-router-dom';
import { Container } from '../components/Container';

export default function LoginPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-lg shadow-slate-200/60">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-primary/5 px-10 py-12 sm:px-12 sm:py-16">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Welcome back</p>
              <h1 className="mt-6 text-4xl font-semibold text-gray-900">Sign in to your account</h1>
              <p className="mt-5 text-base leading-7 text-gray-600">
                Access your orders, saved items, and secure checkout. Login and continue shopping with confidence.
              </p>

              <div className="mt-10 space-y-4 rounded-3xl border border-gray-200 bg-white p-6">
                <div>
                  <p className="text-sm font-medium text-gray-900">Quick access</p>
                  <p className="mt-2 text-sm text-gray-600">Track existing orders and manage your account from one place.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-4 text-sm text-gray-700">Secure payments</div>
                  <div className="rounded-3xl bg-slate-50 p-4 text-sm text-gray-700">Fast checkout</div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-10 py-12 sm:px-12 sm:py-16">
            <div className="max-w-md">
              <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
              <p className="mt-2 text-sm text-gray-600">Enter your email and password to continue shopping.</p>

              <form className="mt-8 space-y-5">
                <label className="block">
                  <span className="text-sm font-medium text-gray-900">Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-dark focus:ring-2 focus:ring-dark/10"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-900">Password</span>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="mt-2 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-dark focus:ring-2 focus:ring-dark/10"
                  />
                </label>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-dark focus:ring-dark" />
                    Remember me
                  </label>
                  <button type="button" className="font-medium text-dark hover:text-primary">
                    Forgot password?
                  </button>
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-3xl bg-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Sign in
                </button>
              </form>

              <p className="mt-8 text-sm text-gray-600">
                New to the store?{' '}
                <Link to="/register" className="font-semibold text-dark hover:text-primary">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
