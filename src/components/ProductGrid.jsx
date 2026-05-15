import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { FaArrowRight } from 'react-icons/fa';
import { products as localProducts } from '../data/products';

const ProductGrid = ({ onSelectProduct, selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        // Map products to ensure image URLs are correct
        const liveProducts = res.data.data
          .map(p => ({
            ...p,
            id: p._id, 
            image: (p.images && p.images.length > 0) ? `http://localhost:5000/${p.images[0]}` : null
          }))
          // Filter out test/demo/invalid products
          .filter(p => 
            p.name && 
            p.name.length >= 4 && 
            !/^\d/.test(p.name) &&
            !p.description?.toLowerCase().includes('authorize') &&
            !p.description?.toLowerCase().includes('clicking')
          );
        const allProducts = [...localProducts, ...liveProducts];
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setProducts(localProducts);
        setFilteredProducts(localProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All Categories') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  return (
    <section id="catalogue" className="py-12 bg-white min-h-[60vh]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="w-12 h-1 bg-brand-blue/20 rounded-full mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-brand-black uppercase tracking-tighter italic text-center">
            {selectedCategory} <span className="text-brand-blue">Solutions</span>
          </h2>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mt-4">Certified High-Performance Systems</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-50 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
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


      </div>
    </section>
  );
};

export default ProductGrid;
