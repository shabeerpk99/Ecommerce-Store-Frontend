import { Container } from '../components/Container';

export default function SettingsPage() {
  return (
    <Container className="py-16">
      <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-lg shadow-slate-200/60">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-gray-900">Settings</h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Manage your account preferences, saved addresses, and notification settings in one place.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 text-sm text-gray-600">
            Tip: Keep your account details updated for faster checkout and better recommendations.
          </div>
        </div>

        <div className="mt-10 space-y-6">
          <section className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Account details</h2>
            <div className="mt-4 space-y-4 text-sm text-gray-700">
              <div className="flex items-center justify-between gap-4 rounded-3xl bg-white p-4">
                <span>Email</span>
                <span className="font-medium text-gray-900">user@example.com</span>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-3xl bg-white p-4">
                <span>Phone</span>
                <span className="font-medium text-gray-900">+1 800 123 4567</span>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
            <div className="mt-4 space-y-4 text-sm text-gray-700">
              <div className="flex items-center justify-between rounded-3xl bg-white p-4">
                <div>
                  <p className="font-medium text-gray-900">Order updates</p>
                  <p className="text-gray-600">Receive emails when your order status changes.</p>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Enabled</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-white p-4">
                <div>
                  <p className="font-medium text-gray-900">Promotions</p>
                  <p className="text-gray-600">Get notified about new products and special offers.</p>
                </div>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">Paused</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
