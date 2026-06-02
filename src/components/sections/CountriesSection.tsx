import { countries } from '../../data/homeData';
import { Container } from '../Container';

export function CountriesSection() {
  return (
    <section className="pt-[30px]">
      <Container>
        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-dark">
          Suppliers by region
        </h2>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {countries.map((country, index) => (
            <div key={`${country.name}-${index}`} className="flex items-start gap-3">
              <img
                src={country.flag}
                alt={country.name}
                className="mt-1 h-6 w-9 shrink-0 rounded-sm object-cover"
              />
              <div>
                <p className="text-lg font-medium text-dark">{country.name}</p>
                <p className="text-sm font-semibold text-gray-500">{country.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
