import { motion } from 'framer-motion';
import { FaDownload, FaShareAlt, FaQrcode } from 'react-icons/fa';
import logo from '../assets/st light pocket.png';
import { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRSection = () => {
  const catalogueUrl = "https://stlightcatalogue.vercel.app/";
  const qrRef = useRef(null);

  const downloadQR = () => {
    const svg = qrRef.current.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const logoImg = new Image();
    
    // Set canvas size (larger for padding/title)
    const padding = 60;
    const titleHeight = 50;
    const size = 600;
    
    canvas.width = size;
    canvas.height = size + titleHeight;
    
    img.onload = () => {
      // Background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Title
      ctx.fillStyle = '#0F172A'; // Brand dark
      ctx.font = 'bold 32px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('STLIGHT-Catalogue', canvas.width / 2, 45);
      
      // Draw QR
      ctx.drawImage(img, padding, titleHeight + padding / 2, size - padding * 2, size - padding * 2);
      
      // Draw Logo over QR (Manual draw ensures it remains)
      logoImg.onload = () => {
        const logoSize = 100;
        const x = (canvas.width - logoSize) / 2;
        const y = (titleHeight + (size - logoSize) / 2);
        
        // White background for logo
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.roundRect(x - 5, y - 5, logoSize + 10, logoSize + 10, 10);
        ctx.fill();
        
        ctx.drawImage(logoImg, x, y, logoSize, logoSize);
        
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = 'STLIGHT-Catalogue-QR.png';
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      logoImg.src = logo;
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  const shareLink = () => {
    navigator.clipboard.writeText(catalogueUrl);
    alert('Catalogue link copied to clipboard!');
  };

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
              <button 
                onClick={downloadQR}
                className="flex items-center space-x-2 bg-brand-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95"
              >
                <FaDownload />
                <span>Download QR</span>
              </button>
              <button 
                onClick={shareLink}
                className="flex items-center space-x-2 bg-white border border-gray-200 text-brand-blue px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm active:scale-95"
              >
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
            ref={qrRef}
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-gray-50">
              
              {/* QR Code Container */}
              <div className="aspect-square bg-white rounded-3xl p-4 flex items-center justify-center relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)] border border-gray-100">
                 <QRCodeSVG 
                    value={catalogueUrl}
                    size={280}
                    level="H"
                    includeMargin={false}
                    imageSettings={{
                      src: logo,
                      height: 50,
                      width: 50,
                      excavate: true,
                    }}
                    className="w-full h-full"
                 />
              </div>
              
              <div className="mt-8 text-center">
                <div className="w-12 h-1 bg-brand-blue/20 mx-auto mb-6 rounded-full" />
                <p className="text-brand-black font-extrabold text-sm tracking-widest uppercase">SCAN TO BROWSE</p>
                <p className="text-gray-400 text-xs mt-1">Direct Access to ST.LIGHT Systems</p>
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
