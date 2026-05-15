import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolutionFinder from './components/SolutionFinder';
import ProductGrid from './components/ProductGrid';
import QRSection from './components/QRSection';
import Advantages from './components/Advantages';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <SolutionFinder />
        <ProductGrid />
        <QRSection />
        <Advantages />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
