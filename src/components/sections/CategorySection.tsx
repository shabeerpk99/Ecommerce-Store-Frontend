import { Link } from 'react-router-dom';
import { Container } from '../Container';

type CategoryItem = {
  id: string;
  name: string;
  price: string;
  image: string;
};

type CategorySectionProps = {
  bannerTitle: string;
  bannerImage: string;
  bannerBg?: string;
  items: CategoryItem[];
};

function CategoryCard({ id, name, price, image }: CategoryItem) {
  return (
    <Link to={`/product/${id}`} className="block">
      <div className="flex flex-1 flex-col hover:bg-gray-50 transition-colors cursor-pointer h-full">
        <div className="flex h-[140px] items-center justify-between gap-2 px-3 group">
          <div className="space-y-1">
            <p className="text-lg md:text-xl font-semibold text-dark">{name}</p>
            <p className="text-base md:text-lg text-gray-500">{price}</p>
          </div>
          <img src={image} alt={name} className="max-h-[120px] max-w-[110px] object-contain group-hover:scale-110 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export function CategorySection({
  bannerTitle,
  bannerImage,
  bannerBg = '#666666',
  items,
}: CategorySectionProps) {
  return (
    <section className="pt-5">
      <Container>
        <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
          <div className="flex flex-col lg:flex-row">
            <div
              className="relative w-full lg:w-[350px] shrink-0 overflow-hidden"
              style={{ backgroundColor: bannerBg }}
            >
              <img
                src={bannerImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="relative flex h-[257px] flex-col justify-start p-5 pt-6">
                <h3 className="text-2xl md:text-3xl font-semibold leading-[30px] tracking-tight text-dark">
                  {bannerTitle}
                </h3>
                <button
                  type="button"
                  className="mt-4 w-fit rounded-md border border-white bg-white px-4 py-2 text-base font-medium text-dark shadow-sm hover:bg-gray-100 transition-colors"
                >
                  Source now
                </button>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-3 divide-gray-200 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y lg:divide-gray-200">
              {items.map((item) => (
                <CategoryCard key={item.id + item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
