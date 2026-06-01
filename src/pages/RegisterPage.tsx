import { Link } from 'react-router-dom';
import { Container } from '../components/Container';

export default function RegisterPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-lg shadow-slate-200/60">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-primary/5 px-10 py-12 sm:px-12 sm:py-16">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Join the store</p>
              <h1 className="mt-6 text-4xl font-semibold text-gray-900">Create your account</h1>
              <p className="mt-5 text-base leading-7 text-gray-600">
                Start shopping faster and save your favorites. Create an account and enjoy personalized recommendations.
              </p>

              <div className="mt-10 space-y-4 rounded-3xl border border-gray-200 bg-white p-6">
                <div>
                  <p className="text-sm font-medium text-gray-900">Welcome perks</p>
                  <p className="mt-2 text-sm text-gray-600">Exclusive offers, order tracking, and a better checkout experience.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-4 text-sm text-gray-700">Easy returns</div>
                  <div className="rounded-3xl bg-slate-50 p-4 text-sm text-gray-700">Saved addresses</div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-10 py-12 sm:px-12 sm:py-16">
            <div className="max-w-md">
              <h2 className="text-2xl font-semibold text-gray-900">Register</h2>
              <p className="mt-2 text-sm text-gray-600">Fill in your details to create a new account.</p>

              <form className="mt-8 space-y-5">
                <label className="block">
                  <span className="text-sm font-medium text-gray-900">Full name</span>
                  <input
                    type="text"
                    placeholder="John Doe"
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
                  <span className="text-sm font-medium text-gray-900">Password</span>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="mt-2 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-dark focus:ring-2 focus:ring-dark/10"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-900">Confirm password</span>
                  <input
                    type="password"
                    placeholder="Repeat password"
                    className="mt-2 w-full rounded-3xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-dark focus:ring-2 focus:ring-dark/10"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-3xl bg-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Create account
                </button>
              </form>

              <p className="mt-8 text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-dark hover:text-primary">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
