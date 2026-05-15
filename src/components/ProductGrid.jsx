import ProductCard from './ProductCard';
import { products } from '../data/products';
import { FaArrowRight } from 'react-icons/fa';

const ProductGrid = () => {
  return (
    <section id="catalogue" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-brand-black mb-4">Featured Catalogue</h2>
            <p className="text-gray-500 max-w-xl">
              Hand-picked selections from our most reliable manufacturers. Certified for performance.
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-brand-blue font-bold hover:underline">
            <span>View All Products</span>
            <FaArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center space-x-2 text-brand-blue font-bold">
            <span>View All Products</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
