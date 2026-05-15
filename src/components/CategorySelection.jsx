import { motion } from 'framer-motion';
import { categories } from '../data/products';
import { FaArrowRight } from 'react-icons/fa';
import heroImg from '../assets/hero_solar_smart_home_1778790571520.png';
import logo from '../assets/st header logo.png';

const CategorySelection = ({ onSelectCategory }) => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      {/* Refined Welcome Hero */}
      <div className="relative h-[25vh] w-full overflow-hidden">
        <img 
          src={heroImg} 
          alt="ST.LIGHT Welcome" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] to-transparent" />
      </div>

      <div className="container mx-auto max-w-2xl px-6 relative z-10 -mt-20">
        <div className="text-center mb-12">
          <img 
            src={logo} 
            alt="ST.LIGHT Logo" 
            className="h-16 md:h-20 w-auto mx-auto mb-6 drop-shadow-sm"
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight mb-2">
            Welcome to <span className="text-brand-blue">ST.LIGHT</span>
          </h1>
          <p className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase">
            Premium Solar & Intelligent Security
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1.5 w-16 bg-brand-blue/20 rounded-full" />
          </div>
        </div>

        {/* Menu Label */}
        <div className="flex items-center gap-6 mb-10 opacity-30">
          <div className="h-[1px] bg-brand-black flex-1" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Solutions Menu</span>
          <div className="h-[1px] bg-brand-black flex-1" />
        </div>

        <div className="grid gap-6">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, ease: "easeOut" }}
              onClick={() => onSelectCategory(cat.name)}
              className="relative h-28 w-full rounded-[1.5rem] overflow-hidden group shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)] transition-all duration-500"
            >
              {/* High-Contrast Background Overlay */}
              <img 
                src={cat.banner} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/20 to-transparent" />
              
              {/* Content Layout */}
              <div className="absolute inset-0 flex items-center justify-between px-8">
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-white/50 text-[9px] font-bold tracking-widest uppercase">Explore Catalogue</p>
                </div>
                
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-300">
                  <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
