import { services } from '../../data/homeData';
import { ServiceIcon } from '../icons';
import { Container } from '../Container';

export function ServicesSection() {
  return (
    <section className="pt-[30px]">
      <Container>
        <h2 className="mb-5 text-2xl font-semibold tracking-tight text-dark">
          Our extra services
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-md border border-[#E0E0E0] bg-white"
            >
              <div className="relative h-[120px] overflow-hidden bg-[#D3D3D3]">
                <img
                  src={service.image}
                  alt=""
                  className="h-full w-full object-cover opacity-50"
                />
                <div className="absolute bottom-[-14px] left-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#D1E7FF]">
                  <ServiceIcon type={service.icon} className="text-primary" />
                </div>
              </div>
              <p className="whitespace-pre-line px-5 pb-5 pt-6 text-base font-medium leading-[22px] text-dark">
                {service.title}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
