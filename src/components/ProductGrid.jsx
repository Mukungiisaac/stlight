import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { FaArrowRight } from 'react-icons/fa';

const ProductGrid = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        // Map products to ensure image URLs are correct
        const liveProducts = res.data.data.map(p => ({
          ...p,
          id: p._id, // Map MongoDB _id to id for the component
          image: (p.images && p.images.length > 0) ? `http://localhost:5000/${p.images[0]}` : null
        }));
        setProducts(liveProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="catalogue" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-brand-black mb-4">Live Catalogue</h2>
            <p className="text-gray-500 max-w-xl">
              Real-time inventory from our Nairobi warehouse. Certified for performance and durability.
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-brand-blue font-bold hover:underline">
            <span>View All Products</span>
            <FaArrowRight />
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-50 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onDetails={() => onSelectProduct(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">No products available in the live catalogue yet.</p>
            <p className="text-sm text-gray-400 mt-1">Visit the admin panel to add your first item.</p>
          </div>
        )}

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
