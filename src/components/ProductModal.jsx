import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaCheckCircle, FaTools, FaShieldAlt } from 'react-icons/fa';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full flex items-center justify-center transition-colors shadow-sm"
            >
              <FaTimes size={20} />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-green/5" />
               {product.image ? (
                 <img 
                   src={product.image} 
                   alt={product.name}
                   className="w-full h-auto max-h-[400px] object-contain relative z-10 drop-shadow-2xl transition-transform hover:scale-105 duration-700"
                 />
               ) : (
                 <div className="w-64 h-64 bg-gray-200 rounded-3xl animate-pulse" />
               )}
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
                {product.tag}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4 leading-tight">
                {product.name}
              </h2>
              
              <div className="flex items-baseline space-x-2 mb-8">
                <span className="text-3xl font-black text-brand-blue">KSh {product.price}</span>
                <span className="text-sm text-gray-400 font-medium">Incl. VAT</span>
              </div>

              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Product Description</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <FaCheckCircle className="text-brand-green mt-1 shrink-0" />
                    <div>
                      <span className="block font-bold text-brand-black text-sm">Certified Quality</span>
                      <span className="text-xs text-gray-500 text-nowrap">Meets KEBS standards</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <FaShieldAlt className="text-brand-blue mt-1 shrink-0" />
                    <div>
                      <span className="block font-bold text-brand-black text-sm">2 Year Warranty</span>
                      <span className="text-xs text-gray-500">Full replacement support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/254719103288?text=I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-3 bg-brand-green hover:bg-brand-green-dark text-white py-5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-brand-green/20"
                >
                  <FaWhatsapp size={24} />
                  <span className="text-lg">Inquire on WhatsApp</span>
                </a>
                <button className="flex items-center justify-center space-x-3 bg-brand-black hover:bg-gray-800 text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-lg">
                  <FaTools />
                  <span>Technical Data</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
