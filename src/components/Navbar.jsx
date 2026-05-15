import { useState, useEffect } from 'react';
import { FaWhatsapp, FaBars, FaTimes, FaArrowLeft } from 'react-icons/fa';
import logo from '../assets/st header logo.png';
import axios from 'axios';

const Navbar = ({ onBack }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#contact' },
    { name: 'Support', href: '#contact' },
  ];

  const waLink = `https://wa.me/${settings.phoneNumber.replace('+', '')}`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo & Back Button Group */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="ST.LIGHT" className="h-9 md:h-11 w-auto" />
          
          {onBack && (
            <button 
              onClick={onBack}
              className="hidden sm:flex items-center space-x-2 text-brand-black hover:text-brand-blue transition-all group border-l border-gray-200 pl-4 h-6"
            >
              <FaArrowLeft className="text-xs" />
              <span className="font-black uppercase text-[10px] tracking-widest">Back to Menu</span>
            </button>
          )}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-black hover:text-brand-blue font-black uppercase text-xs tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-black uppercase text-xs tracking-widest transition-all shadow-lg hover:shadow-green-500/20"
          >
            <FaWhatsapp className="text-lg" />
            <span>Chat With Us</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-black text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu - Translucent Floating Card */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 right-4 left-4 z-50">
          <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="p-6 space-y-4">
              {onBack && (
                 <button 
                   onClick={() => {
                     onBack();
                     setIsMobileMenuOpen(false);
                   }}
                   className="w-full text-left text-brand-blue text-lg font-black uppercase tracking-tighter py-3 border-b border-black/5 flex items-center gap-3 active:scale-95 transition-transform"
                 >
                   <FaArrowLeft className="text-sm" /> Back to Menu
                 </button>
              )}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-brand-black text-lg font-black uppercase tracking-tighter py-3 border-b border-black/5 active:scale-95 transition-transform"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-green-500/20 active:scale-95 transition-transform mt-4"
              >
                <FaWhatsapp className="text-xl" />
                <span>Chat With Us</span>
              </a>
            </div>
          </div>
          
          {/* Overlay to close menu when clicking outside */}
          <div 
            className="fixed inset-0 -z-10 h-screen w-screen bg-black/10 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
