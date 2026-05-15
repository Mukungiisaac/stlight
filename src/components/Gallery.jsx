import { motion } from 'framer-motion';
import farmImg from '../assets/solar_farm_uganda_1778790789557.png';
import resImg from '../assets/residential_solar_modern_1778791099374.png';
import camImg from '../assets/security_camera_installation_1778791133544.png';

const Gallery = () => {
  const projects = [
    { id: 1, title: 'Utility Scale Solar Farm', category: 'Commercial', image: farmImg, size: 'md:col-span-2 md:row-span-2' },
    { id: 2, title: 'Luxury Residential Install', category: 'Residential', image: resImg, size: 'md:col-span-1 md:row-span-1' },
    { id: 3, title: 'Corporate Security Network', category: 'Security', image: camImg, size: 'md:col-span-1 md:row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">Installation Excellence</h2>
            <p className="text-gray-500 max-w-2xl text-lg">
              Real projects, real impact. See how we've transformed homes and businesses across the region with clean energy and smart security.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 bg-gray-100 p-1.5 rounded-2xl">
             {['All Projects', 'Residential', 'Commercial'].map((tab, i) => (
               <button 
                 key={tab}
                 className={`px-6 py-2.5 rounded-xl font-bold transition-all text-sm ${i === 0 ? 'bg-white shadow-sm text-brand-black' : 'text-gray-500 hover:text-brand-black'}`}
               >
                 {tab}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 0.98 }}
              className={`relative rounded-[2rem] overflow-hidden group shadow-lg ${project.size}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
