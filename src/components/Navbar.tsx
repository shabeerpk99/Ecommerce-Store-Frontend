import { ChevronDownIcon, MenuIcon } from './icons';
import { Container } from './Container';
import { navbarLinks } from '../data/homeData';
import flagDe from '../assets/images/flags/de.png';
import flagPk from '../assets/images/flags/pk.png';
import flagUs from '../assets/images/flags/us.png';
import flagCn from '../assets/images/flags/cn.png';
import flagAu from '../assets/images/flags/au.png';

const categoryOptions = ['Fashion', 'Electronics', 'Home supplies', 'Sports & Outdoor'];
const languageOptions = ['English, USD', 'Pakistan, PKR', 'French, EUR', 'Spanish, USD', 'German, EUR'];
const shipOptions = [
  { label: 'Germany', flag: flagDe },
  { label: 'Pakistan', flag: flagPk },
  { label: 'United States', flag: flagUs },
  { label: 'China', flag: flagCn },
  { label: 'Australia', flag: flagAu },
];
const helpOptions = ['Help Center', 'Order tracking', 'Returns', 'Contact Us'];

export function Navbar() {
  return (
    <nav className="bg-white">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <button type="button" className="text-dark" aria-label="Menu">
            <MenuIcon />
          </button>
          {navbarLinks.map((link) => {
            if (link === 'All category') {
              return (
                <div key={link} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1 text-base font-medium text-dark"
                  >
                    {link}
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-10 mt-2 hidden w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-lg group-hover:visible group-hover:block">
                    {categoryOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            if (link === 'Help') {
              return (
                <div key={link} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1 text-base font-medium text-dark"
                  >
                    {link}
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-10 mt-2 hidden w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-lg group-hover:visible group-hover:block">
                    {helpOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link}
                type="button"
                className="flex items-center gap-1 text-base font-medium text-dark"
              >
                {link}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-2 text-base font-medium text-dark"
            >
              English, USD
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </button>
            <div className="invisible absolute right-0 top-full z-10 mt-2 hidden w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-lg group-hover:visible group-hover:block">
              {languageOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-2 text-base font-medium text-dark"
            >
              Ship to
              <img src={flagDe} alt="Germany" className="h-5 w-7 rounded-sm object-cover" />
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </button>
            <div className="invisible absolute right-0 top-full z-10 mt-2 hidden w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-lg group-hover:visible group-hover:block">
              {shipOptions.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  <img src={option.flag} alt={option.label} className="h-4 w-5 rounded-sm object-cover" />
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
