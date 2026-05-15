import { useState, useEffect } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/st header logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="ST.LIGHT" className="h-10 md:h-12 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-black hover:text-brand-blue font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-green-500/20"
          >
            <FaWhatsapp className="text-xl" />
            <span>WhatsApp Us</span>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full py-6 px-4 shadow-xl flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-black text-lg font-medium py-2 border-b border-black/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/254700000000"
            className="flex items-center justify-center space-x-2 bg-green-500 text-white py-3 rounded-xl font-bold"
          >
            <FaWhatsapp />
            <span>WhatsApp Us</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
