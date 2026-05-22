import { recommendedProducts } from '../../data/homeData';
import { Container } from '../Container';

export function RecommendedSection() {
  return (
    <section className="pt-[30px]">
      <Container>
        <h2 className="mb-5 text-2xl font-semibold tracking-tight text-dark">
          Recommended items
        </h2>
        <div className="grid grid-cols-5 gap-5">
          {recommendedProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-md border border-gray-200 bg-white"
            >
              <div className="mx-1 mt-1 flex h-[201px] items-center justify-center rounded bg-[#F7F7F7]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[180px] w-[180px] object-contain"
                />
              </div>
              <div className="px-4 pb-4 pt-3">
                <p className="whitespace-pre-line text-base leading-6 tracking-tight text-gray-500">
                  {product.title}
                </p>
                <p className="mt-2 text-base font-medium text-dark">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
