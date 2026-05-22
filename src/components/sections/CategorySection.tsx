import { Container } from '../Container';

type CategoryItem = {
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

function CategoryCard({ name, price, image }: CategoryItem) {
  return (
    <div className="flex flex-1 flex-col">
     <div className="flex h-[140px] items-center justify-between gap-2 px-3">
  <div className="space-y-1">
    <p className="text-lg md:text-xl font-semibold text-dark">{name}</p>
    <p className="text-base md:text-lg text-gray-500">{price}</p>
  </div>
  <img src={image} alt={name} className="max-h-[120px] max-w-[110px] object-contain" />
</div>
    </div>
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
          <div className="flex">
            <div
              className="relative w-[350px] shrink-0 overflow-hidden"
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
                  className="mt-4 w-fit rounded-md border border-white bg-white px-4 py-2 text-base font-medium text-dark shadow-sm"
                >
                  Source now
                </button>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-4 divide-x divide-y divide-gray-200">
              {items.map((item) => (
                <CategoryCard key={item.name + item.price} {...item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
