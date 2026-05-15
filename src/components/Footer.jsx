import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/st header logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#111111] text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Company Info */}
          <div className="space-y-8">
            <img src={logo} alt="ST.LIGHT" className="h-12 w-auto brightness-0 invert" />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Leading the transition to clean, intelligent energy across East Africa since 2012. Quality you can trust, technology you can rely on.
            </p>
            <div className="flex items-center space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center">
              <span className="w-8 h-[2px] bg-brand-blue mr-3" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Product Catalogue', 'Installation Gallery', 'Technical Support', 'Warranty Terms', 'Partner Program'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors flex items-center group">
                    <FaArrowRight className="text-[10px] mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center">
              <span className="w-8 h-[2px] bg-brand-green mr-3" />
              Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Hotline</p>
                  <p className="text-gray-200 font-bold text-lg">+256 700 000 000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">WhatsApp Support</p>
                  <p className="text-gray-200 font-bold">Chat with Sales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center">
              <span className="w-8 h-[2px] bg-brand-orange mr-3" />
              Newsletter
            </h4>
            <p className="text-gray-400 mb-6">Get updates on new tech and energy tips.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center hover:bg-brand-blue-deep transition-all shadow-lg">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 ST.LIGHT Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Bubble */}
      <a
        href="https://wa.me/254700000000"
        className="fixed bottom-8 right-8 w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 hover:scale-110 transition-transform animate-bounce"
      >
        <FaWhatsapp />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center border-2 border-white font-bold">1</span>
      </a>
    </footer>
  );
};

export default Footer;
