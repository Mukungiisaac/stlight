import { motion } from 'framer-motion';
import { FaArrowRight, FaQrcode, FaSun, FaBatteryFull } from 'react-icons/fa';
import heroImage from '../assets/hero_solar_smart_home_1778790571520.png'; // Updated with generated image

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-gradient-to-t from-brand-green/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold mb-6">
                NEW: Smart Inverters 2024 Collection is live
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-brand-black leading-tight mb-6">
                Power Your Future with <br />
                <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                  Solar & Smart Tech
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto md:mx-0">
                Kenya's premium digital catalogue for high-performance solar energy solutions and intelligent home security systems. Quality engineered for the modern world.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a href="#catalogue" className="w-full sm:w-auto">
                  <button className="w-full bg-brand-blue hover:bg-brand-blue-deep text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all shadow-xl shadow-brand-blue/20 hover:-translate-y-1">
                    <span>Browse Catalogue</span>
                    <FaArrowRight />
                  </button>
                </a>
                <a href="#qr-code" className="w-full sm:w-auto">
                  <button className="w-full bg-white border-2 border-gray-100 hover:border-brand-blue text-brand-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all hover:bg-gray-50 hover:-translate-y-1">
                    <span>Scan QR Code</span>
                    <FaQrcode />
                  </button>
                </a>
              </div>

              {/* Social Proof */}
              <div className="mt-12 flex items-center gap-4 justify-center md:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-orange-400">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-gray-500 font-medium">Trusted by 2,500+ users</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image / Card */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={heroImage}
                  alt="Solar and Smart Home"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center space-x-2 text-white/80 text-xs font-bold uppercase tracking-widest mb-2">
                    <span className="w-8 h-[2px] bg-brand-green" />
                    <span>Premium Certified</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Smart Home Integration</h3>
                  <p className="text-white/70 text-sm">
                    Monitor energy production in real-time from anywhere in the world.
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-brand-orange/10 backdrop-blur-xl rounded-2xl border border-white/20 p-4 shadow-xl z-20 hidden md:block"
              >
                <div className="w-full h-full bg-brand-orange/20 rounded-lg flex items-center justify-center text-brand-orange text-2xl">
                  <FaSun />
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-green/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-xl z-20 hidden md:block"
              >
                <div className="w-full h-full bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-green text-3xl">
                  <FaBatteryFull />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-brand-blue/10 via-brand-green/10 to-transparent rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
