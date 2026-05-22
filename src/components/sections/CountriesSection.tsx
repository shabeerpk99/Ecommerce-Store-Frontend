import { countries } from '../../data/homeData';
import { Container } from '../Container';

export function CountriesSection() {
  return (
    <section className="pt-[30px]">
      <Container>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-dark">
          Suppliers by region
        </h2>
        <div className="grid grid-cols-5 gap-x-4 gap-y-[46px]">
          {countries.map((country, index) => (
            <div key={`${country.name}-${index}`} className="flex items-start gap-2.5">
              <img
                src={country.flag}
                alt={country.name}
                className="mt-2 h-5 w-7 shrink-0 rounded-sm object-cover"
              />
              <div>
                <p className="text-base text-dark">{country.name}</p>
                <p className="text-[13px] text-gray-500">{country.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
