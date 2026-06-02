import { Logo } from './Logo';
import { useNavigate } from 'react-router-dom';
import {
  CartIcon,
  ChevronDownIcon,
  MenuIcon,
  MessageIcon,
  OrdersIcon,
  ProfileIcon,
} from './icons';
import { Container } from './Container';
import { sidebarCategories } from '../data/homeData';
import { useCart } from '../context/useCart';

const categoryOptions = sidebarCategories;
const actions = [
  { label: 'Profile', Icon: ProfileIcon },
  { label: 'Message', Icon: MessageIcon },
  { label: 'Orders', Icon: OrdersIcon },
  { label: 'My cart', Icon: CartIcon },
];

type HeaderProps = {
  onOpenMenu: () => void;
};

export function Header({ onOpenMenu }: HeaderProps) {
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b border-gray-300">
      <Container className="flex flex-col gap-4 py-4">
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onOpenMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm"
              aria-label="Open menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            <div className="flex-1 text-center">
              <Logo className="inline-block h-7 w-auto" />
            </div>
            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm"
              aria-label="Open cart"
            >
              <CartIcon className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[18px] items-center justify-center rounded-full bg-red-600 px-1.5 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="mt-3">
            <div className="flex h-12 items-center overflow-hidden rounded-full border border-[#D8E9FF] bg-white">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="h-full flex-1 border-0 bg-transparent px-4 text-sm text-gray-600 outline-none placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="button"
                className="flex h-full items-center justify-center rounded-r-full bg-[#226BFF] px-5 text-sm font-semibold text-white transition hover:bg-[#1A55E6]"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Logo className="shrink-0" />

          <div className="relative flex h-[56px] flex-1 max-w-[720px] overflow-visible rounded-full border border-[#D8E9FF] bg-white transition duration-200 focus-within:border-[#0D6EFD] focus-within:ring-1 focus-within:ring-[#0D6EFD]">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="h-full flex-1 border-0 bg-transparent px-5 text-base text-gray-600 outline-none placeholder:text-gray-400 focus:outline-none"
            />
            <div className="relative group">
              <button
                type="button"
                className="flex h-full items-center gap-2 border-l border-[#D8E9FF] bg-transparent px-5 text-sm font-medium text-gray-700"
              >
                All category
                <ChevronDownIcon className="w-4 h-4 text-gray-500" />
              </button>
              <div className="invisible absolute right-0 top-full z-10 mt-2 hidden w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-lg group-hover:visible group-hover:block">
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
            <button
              type="button"
              className="flex h-full w-[132px] shrink-0 items-center justify-center rounded-r-full bg-[#226BFF] text-base font-semibold text-white transition-colors duration-200 hover:bg-[#1A55E6]"
            >
              Search
            </button>
          </div>

          <div className="flex shrink-0 gap-7">
            {actions.map(({ label, Icon }) => {
              const isCart = label === 'My cart';
              return (
                <button
                  key={label}
                  type="button"
                  className="relative flex flex-col items-center gap-1 text-[11px] font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => isCart && navigate('/cart')}
                >
                  <Icon className="w-7 h-7 text-gray-600" />
                  {isCart && cartCount > 0 && (
                    <span className="absolute -top-1 right-0 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-600 px-1.5 text-[10px] font-semibold text-white">
                      {cartCount}
                    </span>
                  )}
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </header>
  );
}
