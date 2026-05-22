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
    <div className="flex flex-1 flex-col border-r border-gray-200 last:border-r-0">
      <div className="flex h-[140px] items-center justify-center p-4">
        <img src={image} alt={name} className="max-h-[100px] max-w-full object-contain" />
      </div>
      <div className="border-t border-gray-200 px-4 py-3">
        <p className="text-base text-dark">{name}</p>
        <p className="mt-1 whitespace-pre-line text-[13px] text-gray-500">{price}</p>
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
              className="relative w-[280px] shrink-0 overflow-hidden"
              style={{ backgroundColor: bannerBg }}
            >
              <img
                src={bannerImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="relative flex h-[257px] flex-col justify-end p-5">
                <h3 className="text-xl font-semibold leading-[26px] tracking-tight text-dark">
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
            <div className="grid flex-1 grid-cols-4">
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
