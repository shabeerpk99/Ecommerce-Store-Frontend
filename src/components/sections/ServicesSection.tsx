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
              className="overflow-hidden rounded-xl border border-[#E0E0E0] bg-white shadow-sm"
            >
              {/* Image Header Container */}
              <div className="relative h-[140px] w-full overflow-hidden bg-[#F4F4F4]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover" 
                />
                
                {/* Floating Search Action Button on the Bottom-Right */}
                <div className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF2FF] shadow-md cursor-pointer hover:bg-[#D1E7FF] transition-colors">
                  <ServiceIcon type={service.icon} className="h-5 w-5 text-[#1C1B1F]" />
                </div>
              </div>

              {/* Title Text Content Area */}
              <div className="px-4 pb-5 pt-4">
                <p className="text-base font-medium leading-snug text-[#222222]">
                  {service.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}