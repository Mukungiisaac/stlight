import { motion } from 'framer-motion';
import { FaDownload, FaShareAlt, FaQrcode } from 'react-icons/fa';
import logo from '../assets/st header logo.png';

const QRSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="glass p-8 md:p-16 rounded-[3rem] shadow-2xl border border-white/40 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-brand-blue font-bold uppercase tracking-widest text-xs mb-6">
              <FaQrcode />
              <span>Digital Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">
              Scan to Open the <br />
              <span className="text-brand-blue">ST.LIGHT Digital Catalogue</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Take our entire inventory with you. Scan the code to access real-time stock updates, technical datasheets, and exclusive smart bundles directly on your mobile device.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button className="flex items-center space-x-2 bg-brand-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg">
                <FaDownload />
                <span>Download QR</span>
              </button>
              <button className="flex items-center space-x-2 bg-white border border-gray-200 text-brand-blue px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm">
                <FaShareAlt />
                <span>Share Link</span>
              </button>
            </div>
          </div>

          {/* QR Card */}
          <motion.div
            initial={{ rotate: -2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="w-full max-w-[400px] relative"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-gray-50">
              {/* Logo in center of QR mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center p-2 z-20">
                <img src={logo} alt="" className="w-full h-auto" />
              </div>
              
              {/* QR Mockup */}
              <div className="aspect-square bg-gray-50 rounded-2xl border-4 border-gray-50 flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full p-4">
                   {/* Simplified QR Pattern SVG */}
                   <svg viewBox="0 0 100 100" className="w-full h-full text-brand-black opacity-90">
                      <rect width="20" height="20" fill="currentColor" />
                      <rect x="80" width="20" height="20" fill="currentColor" />
                      <rect y="80" width="20" height="20" fill="currentColor" />
                      <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                      <path d="M40,40 h20 v20 h-20 z M45,45 v10 h10 v-10 z" fill="currentColor" />
                      <rect x="10" y="30" width="10" height="10" fill="currentColor" />
                      <rect x="30" y="10" width="10" height="10" fill="currentColor" />
                      <rect x="60" y="60" width="15" height="15" fill="currentColor" />
                      <rect x="10" y="55" width="8" height="8" fill="currentColor" />
                      <rect x="55" y="10" width="8" height="8" fill="currentColor" />
                      <rect x="80" y="80" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" />
                   </svg>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-brand-black font-bold text-sm">SCAN TO BROWSE</p>
                <p className="text-gray-400 text-xs">Available on iOS & Android</p>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green blur-3xl opacity-20 -z-10 translate-x-4 translate-y-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;
