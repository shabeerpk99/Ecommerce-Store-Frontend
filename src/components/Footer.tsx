import { ChevronUpIcon } from './icons';
import { Logo } from './Logo';
import { Container } from './Container';

const footerColumns = [
  {
    title: 'About',
    links: ['About Us', 'Find store', 'Categories', 'Blogs'],
  },
  {
    title: 'Partnership',
    links: ['About Us', 'Find store', 'Categories', 'Blogs'],
  },
  {
    title: 'Information',
    links: ['Help Center', 'Money Refund', 'Shipping', 'Contact us'],
  },
  {
    title: 'For users',
    links: ['Login', 'Register', 'Settings', 'My Orders'],
  },
];

const socialIcons = ['facebook', 'twitter', 'linkedin', 'instagram', 'youtube'];

export function Footer() {
  return (
    <footer className="bg-white">
      <Container className="py-10">
        <div className="flex justify-between gap-8">
          <div className="w-[276px]">
            <Logo />
            <p className="mt-4 text-base leading-6 tracking-tight text-gray-600">
              Best information about the company gies here but now lorem ipsum is
            </p>
            <div className="mt-6 flex gap-2.5">
              {socialIcons.map((name) => (
                <span
                  key={name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-400"
                  aria-label={name}
                >
                  <span className="text-xs uppercase">{name[0]}</span>
                </span>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-base font-medium text-dark">{col.title}</h3>
              <ul className="mt-2 space-y-1">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base leading-6 tracking-tight text-gray-500 hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-base font-medium text-dark">Get app</h3>
            <div className="mt-4 space-y-3">
              <div className="flex h-[42px] w-[124px] items-center justify-center rounded-md bg-dark text-xs text-white">
                App Store
              </div>
              <div className="flex h-[42px] w-[124px] items-center justify-center rounded-md bg-dark text-xs text-white">
                Google Play
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-gray-300 bg-gray-200">
        <Container className="flex h-[68px] items-center justify-between">
          <p className="text-base tracking-tight text-gray-800">© 2023 Ecommerce.</p>
          <button
            type="button"
            className="flex items-center gap-2 text-base text-gray-800"
          >
            <img src="/images/flag-us.png" alt="US" className="h-[17px] w-6 rounded-sm object-cover" />
            English
            <ChevronUpIcon className="text-gray-500" />
          </button>
        </Container>
      </div>
    </footer>
  );
}
