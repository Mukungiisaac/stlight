import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaWhatsapp, FaInfoCircle, FaBoxOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onDetails }) => {
  const [settings, setSettings] = useState({ phoneNumber: '254719103288' });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/settings');
        setSettings(res.data.data);
      } catch (err) {
        console.error('Error fetching settings');
      }
    };
    fetchSettings();
  }, []);

  const waLink = `https://wa.me/${settings.phoneNumber.replace('+', '')}?text=I'm interested in ${product.name}`;
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 border border-gray-100/50 group"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F9F9F9]">
        {/* Premium Category Tag */}
        <div className="absolute top-5 left-5 z-10">
          <div className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-sm">
            <span className="text-brand-blue text-[9px] font-black uppercase tracking-[0.2em]">
              {product.category}
            </span>
          </div>
        </div>
        
        {/* Product Image with High-End Presentation */}
        <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
           {product.image ? (
             <img 
               src={product.image} 
               alt={product.name}
               className="w-full h-full object-cover"
               onError={(e) => {
                 e.target.onerror = null;
                 e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop';
               }}
             />
           ) : (
             <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 text-5xl">
                <FaBoxOpen />
             </div>
           )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-7">
        <h3 className="text-xl font-extrabold text-brand-black mb-3 leading-tight line-clamp-2 group-hover:text-brand-blue transition-colors">
          {product.name}
        </h3>
        
        <div className="mb-6 flex items-baseline gap-2">
          <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">KSh</span>
          <span className="text-2xl font-black text-brand-black tracking-tighter">
            {product.price}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-brand-green hover:bg-brand-green-dark text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all shadow-lg shadow-brand-green/20 active:scale-95"
          >
            <FaWhatsapp className="text-base" />
            <span>Inquire</span>
          </a>
          <button 
            onClick={onDetails}
            className="w-14 h-14 flex items-center justify-center bg-gray-50 border border-gray-100 hover:border-brand-blue hover:text-brand-blue text-brand-black rounded-2xl transition-all active:scale-95"
          >
            <FaInfoCircle className="text-xl" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
