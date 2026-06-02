import { Link } from 'react-router-dom';
import { dealItems } from '../../data/homeData';
import { Container } from '../Container';

const countdown = [
  { value: '04', label: 'Days' },
  { value: '13', label: 'Hour' },
  { value: '34', label: 'Min' },
  { value: '56', label: 'Sec' },
];

export function DealsSection() {
  return (
    <section className="pt-[30px]">
      <Container>
        <div className="flex flex-col gap-4 rounded-md border border-gray-300 bg-white lg:flex-row">
          <div className="w-full lg:w-[350px] shrink-0 border-r border-gray-200 p-5 lg:border-r lg:border-gray-200">
            <h2 className="text-3xl font-semibold tracking-tight text-dark">Deals and offers</h2>
            <p className="mt-1 text-2xl text-gray-500">Hygiene equipments</p>
            <div className="mt-4 flex text-2xl gap-1">
              {countdown.map((item) => (
                <div
                  key={item.label}
                  className="flex h-[50px] w-[45px] flex-col items-center justify-center rounded bg-gray-800 text-white"
                >
                  <span className="text-sm font-semibold leading-none">{item.value}</span>
                  <span className="mt-0.5 text-[10px] leading-none">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
            {dealItems.map((item, index) => (
              <Link
                key={item.id + index}
                to={`/product/${item.id}`}
                className="block"
              >
                <div
                  className={`flex flex-col h-full hover:bg-gray-50 transition-colors cursor-pointer ${index < dealItems.length - 1 ? 'border-r border-gray-200' : ''}`}
                >
                  <div className="flex h-[160px] items-center justify-center bg-white p-4 group">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="px-4 py-3 text-center flex-1 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <p className="mt-2 text-lg md:text-xl font-semibold text-dark">{item.name}</p>
                      <span className="inline-block rounded-full bg-badge-bg px-3 py-1 text-sm md:text-base font-medium text-badge-text">
                        {item.discount}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
