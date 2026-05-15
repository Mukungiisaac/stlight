import { FaSearch, FaSlidersH, FaSun, FaPlug, FaLightbulb, FaShieldAlt, FaBatteryFull } from 'react-icons/fa';
import { categories } from '../data/products';

const iconMap = {
  solar: <FaSun />,
  electrical: <FaPlug />,
  lighting: <FaLightbulb />,
  security: <FaShieldAlt />,
  power: <FaBatteryFull />,
};

const SolutionFinder = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-brand-black mb-2">Find Your Solution</h2>
            <p className="text-gray-500">Search through 500+ high-quality tech components.</p>
          </div>

          <div className="flex w-full md:w-auto items-center gap-3">
            <div className="relative flex-1 md:w-96">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, models, or specifications..."
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
              />
            </div>
            <button className="p-4 bg-brand-black text-white rounded-2xl hover:bg-gray-800 transition-colors shadow-lg">
              <FaSlidersH />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all font-medium ${
                cat.id === 'solar'
                  ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20'
                  : 'bg-white text-gray-600 border-gray-100 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              <span className="text-lg">{iconMap[cat.icon]}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionFinder;
