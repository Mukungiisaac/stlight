import solarPanelImg from '../assets/solar_panel.png';
import inverterImg from '../assets/inverter.png';

export const categories = [
  { id: 'solar', name: 'Solar Systems', icon: 'solar' },
  { id: 'electricals', name: 'Electricals', icon: 'electrical' },
  { id: 'lighting', name: 'Lighting', icon: 'lighting' },
  { id: 'security', name: 'Smart Security', icon: 'security' },
  { id: 'power', name: 'Power Backup', icon: 'power' },
];

export const products = [
  {
    id: 1,
    name: 'Monocrystalline Solar Panel 550W',
    category: 'Solar',
    price: '1,250,000',
    description: 'High-efficiency monocrystalline cells with PERC technology for maximum power output.',
    image: solarPanelImg,
    tag: 'Solar'
  },
  {
    id: 2,
    name: 'Smart Hybrid Inverter 5KW',
    category: 'Solar',
    price: '4,800,000',
    description: 'Advanced MPPT tracking with WiFi integration. Seamlessly switch between solar and grid.',
    image: inverterImg,
    tag: 'Inverters'
  },
  {
    id: 3,
    name: 'Lithium LiFePO4 Battery 100Ah',
    category: 'Solar',
    price: '3,200,000',
    description: 'Long-cycle life battery storage (6000+ cycles) with integrated BMS for safety.',
    image: null,
    tag: 'Storage'
  },
  {
    id: 4,
    name: 'LED Solar Street Light 200W',
    category: 'Lighting',
    price: '450,000',
    description: 'All-in-one solar street lighting with motion sensor and dusk-to-dawn operation.',
    image: null,
    tag: 'Lighting'
  },
  {
    id: 5,
    name: 'Smart IP Camera 4K Solar Powered',
    category: 'Advanced Security Systems',
    price: '850,000',
    description: 'Wireless security with 24/7 solar charging, AI human detection, and night vision.',
    image: null,
    tag: 'Security'
  },
  {
    id: 6,
    name: 'DC Water Pump Solar Kit',
    category: 'Solar',
    price: '1,950,000',
    description: 'Submersible pump system designed for remote irrigation and livestock watering.',
    image: null,
    tag: 'Agriculture'
  },
  {
    id: 7,
    name: 'Industrial UPS System 10kVA',
    category: 'Electricals',
    price: '8,500,000',
    description: 'Double conversion online UPS for critical medical and server infrastructure.',
    image: null,
    tag: 'Backup'
  },
  {
    id: 8,
    name: 'Home Smart Control Hub',
    category: 'Electronics',
    price: '350,000',
    description: 'Centralized control for lighting, energy monitoring, and security via mobile app.',
    image: null,
    tag: 'Smart Home'
  }
];
