import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/st header logo.png';

const Footer = () => {
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

  const waLink = `https://wa.me/${settings.phoneNumber.replace('+', '')}`;

  return (
    <footer id="contact" className="bg-[#111111] text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-center items-start md:gap-32 gap-12 mb-20">
          {/* Company Info */}
          <div className="space-y-6 max-w-xs">
            <img src={logo} alt="ST.LIGHT" className="h-10 w-auto brightness-0 invert" />
            <p className="text-gray-400 leading-relaxed text-sm">
              Kenya's premier provider of clean, intelligent energy solutions. Quality you can trust, technology you can rely on.
            </p>
            <div className="flex items-center space-x-4">
              {[FaFacebook, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-sm">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full max-w-xs">
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
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Hotline</p>
                  <p className="text-gray-200 font-bold text-lg">{settings.phoneNumber}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">WhatsApp Support</p>
                  <p className="text-gray-200 font-bold">Chat with Sales</p>
                </div>
              </div>
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
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 hover:scale-110 transition-transform animate-bounce"
      >
        <FaWhatsapp />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center border-2 border-white font-bold">1</span>
      </a>
    </footer>
  );
};

export default Footer;
