import { useNavigate } from 'react-router-dom';
import bannerImg from '../../assets/images/backgrounds/banner.png';
import { sidebarCategories } from '../../data/homeData';
import { Container } from '../Container';

export function MainSection() {
  const navigate = useNavigate();

  return (
    <section className="pt-5">
      <Container>
        <div className="flex flex-col gap-5 rounded-md border border-gray-300 bg-white p-5 lg:flex-row">
          <aside className="hidden w-full max-w-[250px] shrink-0 md:block">
            <ul className="space-y-0">
              {sidebarCategories.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => navigate(`/category?cat=${encodeURIComponent(cat)}`)}
                    className={`w-full rounded px-3 py-2 text-left text-lg ${
                      cat === 'Automobiles'
                        ? 'bg-primary-light font-medium text-dark'
                        : 'text-gray-600 hover:bg-gray-100/50'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="relative min-h-[320px] h-[360px] flex-1 overflow-hidden rounded-md bg-primary">
            <img
              src={bannerImg}
              alt="Electronic items banner"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative z-10 flex h-full flex-col justify-center px-11">
              <p className="text-[28px] text-dark">Latest trending</p>
              <h1 className="text-[32px] font-bold text-dark">Electronic items</h1>
              <button
                type="button"
                className="mt-4 w-fit rounded-md border border-white bg-white px-4 py-2 text-base font-medium text-dark shadow-sm"
              >
                Learn more
              </button>
            </div>
          </div>

          <aside className="w-full max-w-[280px] shrink-0 flex flex-col gap-3">
            <div className="rounded-md bg-[#E3F0FF] px-4 py-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="h-11 w-11 overflow-hidden rounded-full bg-gray-300">
                  <div className="h-full w-full bg-gradient-to-br from-primary to-primary-light" />
                </div>
                <p className="whitespace-pre-line text-base text-dark">
                  Hi, user{'\n'}let&apos;s get stated
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="flex-1 rounded-md border border-gray-300 bg-white py-2 text-sm font-medium text-primary"
                >
                  Log in
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/register')}
                  className="flex-1 rounded-md bg-primary-gradient py-2 text-sm font-medium text-white"
                >
                  Join now
                </button>
              </div>
            </div>
            <div className="rounded-md bg-promo-orange px-4 py-4">
              <p className="text-base text-white">Get US $10 off with a new supplier</p>
            </div>
            <div className="rounded-md bg-promo-teal px-4 py-4">
              <p className="text-base text-white">Send quotes with supplier preferences</p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
