import { useState, type Dispatch, type SetStateAction } from 'react';
import { CartIcon, ChevronDownIcon, MessageIcon, OrdersIcon, ProfileIcon } from './icons';
import { Logo } from './Logo';
import { Container } from './Container';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { navbarLinks, sidebarCategories } from '../data/homeData';
import flagDe from '../assets/images/flags/de.png';
import flagPk from '../assets/images/flags/pk.png';
import flagUs from '../assets/images/flags/us.png';
import flagCn from '../assets/images/flags/cn.png';
import flagAu from '../assets/images/flags/au.png';

const categoryOptions = sidebarCategories;
const languageOptions = ['English, USD', 'Pakistan, PKR', 'French, EUR', 'Spanish, USD', 'German, EUR'];
const shipOptions = [
  { label: 'Germany', flag: flagDe },
  { label: 'Pakistan', flag: flagPk },
  { label: 'United States', flag: flagUs },
  { label: 'China', flag: flagCn },
  { label: 'Australia', flag: flagAu },
];
const helpOptions = ['Help Center', 'Order tracking', 'Returns', 'Contact Us'];
const drawerActions = [
  { label: 'Profile', Icon: ProfileIcon, path: '/settings' },
  { label: 'Message', Icon: MessageIcon, path: '/contact' },
  { label: 'Orders', Icon: OrdersIcon, path: '/orders' },
];

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(true);
  const [mobileHelpOpen, setMobileHelpOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

    const mobileNavbarLinks = navbarLinks.filter(
    (link) => !['Hot offers', 'Gift boxes', 'Projects', 'Menu item'].includes(link),
  );

  const getNavbarLinkPath = (link: string) => {
    switch (link) {
      case 'All category':
        return '/category';
      case 'Hot offers':
        return `/category?cat=${encodeURIComponent('Hot offers')}`;
      case 'Gift boxes':
        return `/category?cat=${encodeURIComponent('Gift boxes')}`;
      case 'Projects':
        return `/category?cat=${encodeURIComponent('Projects')}`;
      case 'Menu item':
        return `/category?cat=${encodeURIComponent('Menu item')}`;
      case 'Help':
        return '/help-center';
      default:
        return '/category';
    }
  };

  const getHelpOptionPath = (option: string) => {
    switch (option) {
      case 'Help Center':
        return '/help-center';
      case 'Order tracking':
        return '/orders';
      case 'Returns':
        return '/money-refund';
      case 'Contact Us':
        return '/contact';
      default:
        return '/help-center';
    }
  };

  const handleSearch = () => {
    setMenuOpen(false);
    if (searchText.trim()) {
      navigate(`/category?cat=${encodeURIComponent(searchText.trim())}`);
    } else {
      navigate('/category');
    }
  };

  return (
    <nav className="bg-white">
      <Container className="hidden md:flex md:flex-row md:h-14 md:items-center md:justify-between gap-4 py-4">
        <div className="hidden md:flex items-center gap-6">
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
                        onClick={() => navigate(`/category?cat=${encodeURIComponent(option)}`)}
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
                        onClick={() => navigate(getHelpOptionPath(option))}
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
                onClick={() => navigate(getNavbarLinkPath(link))}
                className="flex items-center gap-1 text-base font-medium text-dark"
              >
                {link}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex flex-wrap items-center gap-4 justify-end">
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

          <button
            type="button"
            onClick={() => navigate('/cart')}
            className="relative inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <CartIcon className="w-4 h-4" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-600 px-1.5 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-[80vw] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <Logo className="h-8 w-auto" />
              <button
                type="button"
                className="text-dark text-2xl font-bold"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2">
                  <input
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Search"
                    className="w-full border-0 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Search
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {drawerActions.map(({ label, Icon, path }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => {
                        setMenuOpen(false);
                        navigate(path);
                      }}
                      className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-white px-4 py-4 text-center text-sm font-medium text-gray-700 shadow-sm transition hover:bg-slate-50"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-gray-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>
              {mobileNavbarLinks.map((link) => {
                if (link === 'All category') {
                  return (
                    <div key={link} className="rounded-2xl border border-gray-200 bg-slate-50 p-4">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-left text-base font-medium text-dark"
                        onClick={() => setMobileCategoryOpen((open) => !open)}
                      >
                        {link}
                        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                      </button>
                      {mobileCategoryOpen && (
                        <div className="mt-4 space-y-2">
                          {categoryOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setMenuOpen(false);
                                navigate(`/category?cat=${encodeURIComponent(option)}`);
                              }}
                              className="w-full rounded-xl bg-white px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link === 'Help') {
                  return (
                    <div key={link} className="rounded-2xl border border-gray-200 bg-slate-50 p-4">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-left text-base font-medium text-dark"
                        onClick={() => setMobileHelpOpen((open) => !open)}
                      >
                        {link}
                        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                      </button>
                      {mobileHelpOpen && (
                        <div className="mt-4 space-y-2">
                          {helpOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setMenuOpen(false);
                                navigate(getHelpOptionPath(option));
                              }}
                              className="w-full rounded-xl bg-white px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link}
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(getNavbarLinkPath(link));
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-slate-50 px-4 py-4 text-left text-base font-medium text-dark hover:bg-slate-100"
                  >
                    {link}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
