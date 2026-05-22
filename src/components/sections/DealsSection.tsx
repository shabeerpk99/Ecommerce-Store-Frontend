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
        <div className="flex rounded-md border border-gray-300 bg-white">
          <div className="w-[261px] shrink-0 border-r border-gray-200 p-5">
            <h2 className="text-xl font-semibold tracking-tight text-dark">Deals and offers</h2>
            <p className="mt-1 text-base text-gray-500">Hygiene equipments</p>
            <div className="mt-4 flex gap-1">
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

          <div className="grid flex-1 grid-cols-5">
            {dealItems.map((item, index) => (
              <div
                key={item.name}
                className={`flex flex-col ${index < dealItems.length - 1 ? 'border-r border-gray-200' : ''}`}
              >
                <div className="flex h-[160px] items-center justify-center bg-white p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="border-t border-gray-200 px-4 py-3">
                  <span className="inline-block rounded-full bg-badge-bg px-2 py-0.5 text-sm font-medium text-badge-text">
                    {item.discount}
                  </span>
                  <p className="mt-2 text-base text-dark">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
