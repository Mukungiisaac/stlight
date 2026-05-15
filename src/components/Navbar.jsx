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
        {/* Logo or Back Button */}
        <div className="flex items-center">
          {onBack ? (
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-brand-black hover:text-brand-blue transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-gray-100 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
                <FaArrowLeft />
              </div>
              <span className="font-black uppercase text-xs tracking-widest hidden sm:inline">Back to Menu</span>
            </button>
          ) : (
            <img src={logo} alt="ST.LIGHT" className="h-10 md:h-12 w-auto" />
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
        {!onBack && (
          <button
            className="md:hidden text-brand-black text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full py-6 px-4 shadow-xl flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-black text-lg font-black uppercase tracking-tighter py-2 border-b border-black/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-green-500 text-white py-4 rounded-xl font-black uppercase tracking-widest"
          >
            <FaWhatsapp />
            <span>Chat With Us</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
