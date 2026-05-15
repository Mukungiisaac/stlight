import solarPanelImg from '../assets/solar_panel.png';
import elec1 from '../assets/electronics/image.jpeg';
import elec2 from '../assets/electronics/image 2.jpeg';
import elec3 from '../assets/electronics/WhatsApp Image 2026-05-15 at 19.38.24.jpeg';
import elec4 from '../assets/electronics/WhatsApp Image 2026-05-15 at 19.38.25.jpeg';
import inverterImg from '../assets/inverter.png';
import residentialImg from '../assets/residential_solar_modern_1778791099374.png';
import securityImg from '../assets/security_camera_installation_1778791133544.png';
import heroImg from '../assets/hero_solar_smart_home_1778790571520.png';
import solarPumpImg from '../assets/solar/Solar pump.jpeg';
import solarSystem1 from '../assets/solar/WhatsApp Image 2026-05-15 at 19.35.34.jpeg';
import solarSystem2 from '../assets/solar/WhatsApp Image 2026-05-15 at 19.35.35.jpeg';
import solarSystem3 from '../assets/solar/WhatsApp Image 2026-05-15 at 19.35.36.jpeg';
import elect1 from '../assets/electricals/two in one.jpeg';
import elect2 from '../assets/electricals/WhatsApp Image 2026-05-15 at 19.37.47.jpeg';
import elect3 from '../assets/electricals/WhatsApp Image 2026-05-15 at 19.37.48.jpeg';
import elect4 from '../assets/electricals/WhatsApp Image 2026-05-15 at 19.37.50.jpeg';
import elect5 from '../assets/electricals/WhatsApp Image 2026-05-15 at 19.37.51.jpeg';
import elect6 from '../assets/electricals/WhatsApp Image 2026-05-15 at 19.37.54.jpeg';
import elect7 from '../assets/electricals/WhatsApp Image 2026-05-15 at 19.37.56.jpeg';
import light1 from '../assets/lighting/taa.jpeg';
import light2 from '../assets/lighting/taa 2.jpeg';
import light3 from '../assets/lighting/taa 3.jpeg';
import light4 from '../assets/lighting/WhatsApp Image 2026-05-15 at 19.39.46.jpeg';
import light5 from '../assets/lighting/WhatsApp Image 2026-05-15 at 19.39.47.jpeg';
import sec1 from '../assets/security/WhatsApp Image 2026-05-15 at 19.41.00.jpeg';
import sec2 from '../assets/security/WhatsApp Image 2026-05-15 at 19.41.01.jpeg';
import sec3 from '../assets/security/WhatsApp Image 2026-05-15 at 19.41.02.jpeg';

export const categories = [
  { id: 'solar', name: 'Solar', icon: 'solar', banner: solarPanelImg },
  { id: 'electricals', name: 'Electricals', icon: 'electrical', banner: inverterImg },
  { id: 'electronics', name: 'Electronics', icon: 'electronics', banner: heroImg },
  { id: 'lighting', name: 'Lighting', icon: 'lighting', banner: residentialImg },
  { id: 'security', name: 'Advanced Security Systems', icon: 'security', banner: securityImg },
];

export const products = [
  {
    id: 's1',
    name: 'Solar Pumping System',
    category: 'Solar',
    price: '',
    description: 'High-performance submersible solar pump for irrigation and domestic water supply. Reliable and maintenance-free.',
    image: solarPumpImg,
    tag: 'Solar'
  },
  {
    id: 's2',
    name: 'Integrated Solar Power Kit',
    category: 'Solar',
    price: '',
    description: 'All-in-one solar energy solution with high-efficiency panels and smart control system for residential use.',
    image: solarSystem1,
    tag: 'Solar'
  },
  {
    id: 's3',
    name: 'Advanced Solar Street Light',
    category: 'Solar',
    price: '',
    description: 'Industrial-grade solar street lighting with automatic motion sensors and dusk-to-dawn intelligent control.',
    image: solarSystem2,
    tag: 'Solar'
  },
  {
    id: 's4',
    name: 'Hybrid Solar Energy Hub',
    category: 'Solar',
    price: '',
    description: 'Next-generation hybrid solar inverter system with battery storage integration for 24/7 power availability.',
    image: solarSystem3,
    tag: 'Solar'
  },
  {
    id: 'e1',
    name: 'Geemy 3-in-1 Grooming Kit',
    category: 'Electricals',
    price: '',
    description: 'Professional signature hair grooming kit featuring hair clipper, shaver, and nose trimmer. 3-in-1 multifunctional design.',
    image: elect1,
    tag: 'Grooming'
  },
  {
    id: 'e2',
    name: 'Powermax 6-Way Extension',
    category: 'Electricals',
    price: '',
    description: 'High-quality 6-way extension socket with 3-meter heavy-duty cable and surge protection. Built for safety and durability.',
    image: elect2,
    tag: 'Home'
  },
  {
    id: 'e3',
    name: 'Geemy Professional Hair Clipper',
    category: 'Electricals',
    price: '',
    description: 'Cordless professional hair clipper with adjustable blade and high-performance motor for precision styling.',
    image: elect3,
    tag: 'Grooming'
  },
  {
    id: 'e4',
    name: 'Philips Electric Shaver Series',
    category: 'Electricals',
    price: '',
    description: 'Advanced wet and dry electric shaver with skin protection technology and flexible heads for a close, comfortable shave.',
    image: elect4,
    tag: 'Grooming'
  },
  {
    id: 'e5',
    name: 'Digital Crane Scale',
    category: 'Electricals',
    price: '',
    description: 'Industrial-grade digital crane scale with high-precision sensors and clear LCD display for heavy-duty hanging loads.',
    image: elect5,
    tag: 'Scales'
  },
  {
    id: 'e6',
    name: 'Industrial Hanging Scale',
    category: 'Electricals',
    price: '',
    description: 'Heavy-duty analog hanging scale with a 200kg capacity. Features a durable metal body and easy-to-read dial.',
    image: elect6,
    tag: 'Scales'
  },
  {
    id: 'e7',
    name: 'Portable Electronic Scale',
    category: 'Electricals',
    price: '',
    description: 'Compact and portable digital hanging scale with a high-accuracy sensor. Perfect for travel and light commercial use.',
    image: elect7,
    tag: 'Scales'
  },
  {
    id: 'sec1',
    name: 'EZVIZ C1C-B Smart Home Camera',
    category: 'Advanced Security Systems',
    price: '',
    description: 'Compact indoor WiFi security camera with 1080p Full HD, infrared night vision, two-way audio, and real-time motion alerts via the EZVIZ mobile app.',
    image: sec1,
    tag: 'IP Cameras'
  },
  {
    id: 'sec2',
    name: 'EZVIZ Outdoor Smart Camera Range',
    category: 'Advanced Security Systems',
    price: '',
    description: 'Premium outdoor smart camera lineup featuring the H7c Dual 2K+ and TY1 Pro 2K. AI-powered human shape detection, smart color night vision, and Google Home compatible.',
    image: sec2,
    tag: 'IP Cameras'
  },
  {
    id: 'sec3',
    name: 'Solar-Powered Triple-Camera Security System',
    category: 'Advanced Security Systems',
    price: '',
    description: 'All-in-one solar security system with 3 PTZ cameras (1 central + 2 bullet), 3 LED floodlights, and a built-in solar panel. Zero wiring, 24/7 autonomous operation.',
    image: sec3,
    tag: 'Solar Security'
  },
  {
    id: 'elec1',
    name: 'Premium Steel Switch & Socket Collection',
    category: 'Electronics',
    price: '',
    description: 'Full range of brushed steel finish wall switches and universal sockets. Includes 1-gang, 2-gang, 4-gang switches and multi-function socket outlets with USB ports.',
    image: elec1,
    tag: 'Wiring Accessories'
  },
  {
    id: 'elec2',
    name: 'Gold & Rose Gold Switch Collection',
    category: 'Electronics',
    price: '',
    description: 'Luxury gold and rose gold finish wall switches and socket collection. Features wood-grain, mirror-glass, and brushed gold frame options for premium interior decor.',
    image: elec2,
    tag: 'Wiring Accessories'
  },
  {
    id: 'elec3',
    name: 'TRONIK White Switch & Socket Range',
    category: 'Electronics',
    price: '',
    description: 'Complete TRONIK brand white modular wiring accessories. Includes standard switches, universal sockets, dimmer switches, TV points and double switched sockets.',
    image: elec3,
    tag: 'Wiring Accessories'
  },
  {
    id: 'elec4',
    name: 'Classic White Wiring Accessories',
    category: 'Electronics',
    price: '',
    description: 'Wide selection of white finish domestic wiring accessories. Featuring gold-trim, plain and luxury-finish switched sockets, blanks, and double pole isolator switches.',
    image: elec4,
    tag: 'Wiring Accessories'
  },
  {
    id: 'light1',
    name: 'Modern Gold Drop Wall Lamp',
    category: 'Lighting',
    price: '',
    description: 'Elegant gold teardrop-frame wall sconce with frosted opal globe. Perfect bedside or hallway accent light with a warm, ambient glow.',
    image: light1,
    tag: 'Wall Lights'
  },
  {
    id: 'light2',
    name: '3-Tier Crystal LED Chandelier',
    category: 'Lighting',
    price: '',
    description: 'Stunning 3-tier square crystal LED chandelier with dual warm/cool light rings. A show-stopping centerpiece for living rooms and dining areas.',
    image: light2,
    tag: 'Chandeliers'
  },
  {
    id: 'light3',
    name: 'Bamboo Woven Pendant Light',
    category: 'Lighting',
    price: '',
    description: 'Handcrafted natural rattan bamboo dome pendant light. Creates warm, dappled ambient lighting — ideal for restaurants, patios, and bohemian interiors.',
    image: light3,
    tag: 'Pendant Lights'
  },
  {
    id: 'light4',
    name: 'Classic Outdoor Pillar Lantern',
    category: 'Lighting',
    price: '',
    description: 'Heavy-duty cast iron outdoor pillar lantern with clear glass panels. Weather-resistant and ideal for garden paths, gate posts, and driveways.',
    image: light4,
    tag: 'Outdoor Lights'
  },
  {
    id: 'light5',
    name: 'Gold Crystal Tiered Chandelier',
    category: 'Lighting',
    price: '',
    description: 'Luxurious 3-tier gold chandelier with cascading cut-crystal glass drops and cylindrical gold tube accents. A premium statement piece for grand spaces.',
    image: light5,
    tag: 'Chandeliers'
  }
];
