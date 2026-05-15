import { FaWhatsapp, FaInfoCircle, FaBoxOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {/* Category Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-brand-blue text-white text-[10px] font-bold uppercase tracking-wider">
            {product.tag}
          </span>
        </div>
        
        {/* Product Image */}
        <div className="w-full h-full flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-110">
           {product.image ? (
             <img 
               src={product.image} 
               alt={product.name}
               className="w-full h-full object-contain"
             />
           ) : (
             <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-4xl">
                <FaBoxOpen />
             </div>
           )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-brand-black mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mb-6">
          <span className="text-xs text-gray-400 font-bold uppercase block mb-1">Price</span>
          <span className="text-xl font-extrabold text-brand-black">
            KSh {product.price}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={`https://wa.me/254700000000?text=I'm interested in ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-brand-green hover:bg-brand-green-dark text-white py-3 rounded-xl font-bold transition-all text-sm"
          >
            <FaWhatsapp />
            <span>Inquire</span>
          </a>
          <button className="flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:border-brand-blue hover:text-brand-blue text-brand-black py-3 rounded-xl font-bold transition-all text-sm">
            <FaInfoCircle />
            <span>Details</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
