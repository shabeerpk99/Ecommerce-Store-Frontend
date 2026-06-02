import { Link } from 'react-router-dom';
import { recommendedProducts } from '../../data/homeData';
import { useCart } from '../../context/useCart';
import { Container } from '../Container';

export function RecommendedSection() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof recommendedProducts[0]) => {
    const price = parseFloat(product.price.replace('$', ''));
    addToCart({
      id: product.id,
      title: product.title,
      price,
      quantity: 1,
      image: product.image,
    });
    alert('Added to cart!');
  };

  return (
    <section className="pt-[30px]">
      <Container>
        <h2 className="mb-5 text-2xl font-semibold tracking-tight text-dark">
          Recommended items
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {recommendedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block"
            >
              <article className="overflow-hidden rounded-md border border-gray-200 bg-white hover:shadow-lg transition-shadow h-full flex flex-col cursor-pointer group">
                <div className="mx-1 mt-1 flex h-[201px] items-center justify-center rounded bg-[#F7F7F7] group-hover:bg-gray-200 transition-colors overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[180px] max-w-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="px-4 pb-4 pt-3 flex-1 flex flex-col">
                  <p className="whitespace-pre-line text-base leading-6 tracking-tight text-gray-500">
                    {product.title}
                  </p>
                  <p className="mt-2 text-base font-medium text-dark">{product.price}</p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="mt-auto pt-3 w-full py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
