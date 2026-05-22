import { EmailIcon } from '../icons';
import { Container } from '../Container';

export function NewsletterSection() {
  return (
    <section className="mt-[46px] bg-gray-200 py-10">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-dark">
            Subscribe on our newsletter
          </h2>
          <p className="mt-2 max-w-[617px] text-lg leading-6 tracking-tight text-gray-800">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
          <form
            className="mt-6 flex gap-3 w-full max-w-[600px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1 max-w-[400px]">
              <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="Email"
                className="h-10 w-full rounded-md border border-gray-300 bg-white pl-10 pr-3 text-base text-gray-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="h-10 rounded-md border bg-primary-gradient px-6 text-base font-medium text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
