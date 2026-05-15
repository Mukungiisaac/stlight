import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolutionFinder from './components/SolutionFinder';
import ProductGrid from './components/ProductGrid';
import QRSection from './components/QRSection';
import Advantages from './components/Advantages';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import CategorySelection from './components/CategorySelection';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [view, setView] = useState('categories'); // 'categories' or 'products'

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setView('products');
  };

  const handleBackToCategories = () => {
    setView('categories');
    setSelectedCategory(null);
  };

  useEffect(() => {
    const applyTheme = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/settings');
        const settings = res.data.data;
        if (settings) {
          document.documentElement.style.setProperty('--primary-color', settings.primaryColor || '#2A75BB');
          document.documentElement.style.setProperty('--secondary-color', settings.secondaryColor || '#5E9732');
          document.documentElement.style.setProperty('--accent-color', settings.accentColor || '#F9A11B');
        }
      } catch (err) {
        console.error('Error applying theme');
      }
    };
    applyTheme();
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-brand-black">
        <Routes>
          {/* Public Catalogue Routes */}
          <Route path="/" element={
            <>
              <Navbar onBack={view === 'products' ? handleBackToCategories : null} />
              <main className="pt-20">
                {view === 'categories' ? (
                  <CategorySelection onSelectCategory={handleCategorySelect} />
                ) : (
                  <>
                    <div className="px-6 py-4 flex items-center justify-between bg-gray-50 border-b border-gray-100">
                      <button 
                        onClick={handleBackToCategories}
                        className="text-brand-blue font-black uppercase text-[10px] tracking-widest flex items-center gap-2"
                      >
                        ← Main Menu
                      </button>
                      <h2 className="text-sm font-black text-brand-black uppercase italic">{selectedCategory}</h2>
                    </div>
                    <ProductGrid onSelectProduct={handleOpenModal} selectedCategory={selectedCategory} />
                  </>
                )}
              </main>
              <Footer />
              <ProductModal 
                product={selectedProduct} 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
              />
            </>
          } />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
