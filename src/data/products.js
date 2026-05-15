import solarPanelImg from '../assets/solar_panel.png';
import inverterImg from '../assets/inverter.png';
import residentialImg from '../assets/residential_solar_modern_1778791099374.png';
import securityImg from '../assets/security_camera_installation_1778791133544.png';
import heroImg from '../assets/hero_solar_smart_home_1778790571520.png';

export const categories = [
  { id: 'solar', name: 'Solar', icon: 'solar', banner: solarPanelImg },
  { id: 'electricals', name: 'Electricals', icon: 'electrical', banner: inverterImg },
  { id: 'electronics', name: 'Electronics', icon: 'electronics', banner: heroImg },
  { id: 'lighting', name: 'Lighting', icon: 'lighting', banner: residentialImg },
  { id: 'security', name: 'Advanced Security Systems', icon: 'security', banner: securityImg },
];

export const products = [
  {
    id: 'f1',
    name: 'ST.LIGHT Monocrystalline 550W',
    category: 'Solar',
    price: '35,000',
    description: 'High-efficiency Tier 1 solar panel with anti-reflective glass and PERC technology for maximum energy harvest.',
    image: solarPanelImg,
    tag: 'Solar'
  },
  {
    id: 'f2',
    name: 'Smart Hybrid Inverter 5KW',
    category: 'Solar',
    price: '145,000',
    description: 'Advanced MPPT tracking with WiFi integration. Seamlessly switch between solar, grid, and battery storage.',
    image: inverterImg,
    tag: 'Inverters'
  },
  {
    id: 'f3',
    name: 'Deep Cycle Lithium LiFePO4 100Ah',
    category: 'Solar',
    price: '95,000',
    description: 'Ultra-safe lithium storage with 6000+ life cycles. Integrated BMS for cell balancing and protection.',
    image: inverterImg,
    tag: 'Storage'
  },
  {
    id: 'f4',
    name: 'LED Industrial Floodlight 200W',
    category: 'Lighting',
    price: '8,500',
    description: 'IP66 waterproof rated heavy-duty lighting. Perfect for warehouse and large yard illumination.',
    image: solarPanelImg,
    tag: 'Lighting'
  },
  {
    id: 'f5',
    name: 'AI Smart IP Camera Kit (4 Cam)',
    category: 'Advanced Security Systems',
    price: '42,000',
    description: 'Ultra HD 4K security with human detection and night vision. Remote viewing via mobile app.',
    image: inverterImg,
    tag: 'Security'
  },
  {
    id: 'f6',
    name: 'Industrial Circuit Breaker 3-Phase',
    category: 'Electricals',
    price: '12,000',
    description: 'Precision engineered 100A 3-phase protection for industrial and commercial power distribution.',
    image: solarPanelImg,
    tag: 'Electrical'
  },
  {
    id: 'f7',
    name: 'Smart Home Hub v3',
    category: 'Electronics',
    price: '15,000',
    description: 'The brain of your smart home. Connects all sensors, lights, and appliances into one app.',
    image: inverterImg,
    tag: 'Smart Home'
  },
  {
    id: 'f8',
    name: 'Outdoor Solar Wall Lights',
    category: 'Lighting',
    price: '3,200',
    description: 'Set of 4 solar-powered fence/wall lights with automatic dusk-to-dawn sensors.',
    image: solarPanelImg,
    tag: 'Lighting'
  }
];
