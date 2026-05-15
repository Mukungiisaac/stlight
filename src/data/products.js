import solarPanelImg from '../assets/solar_panel.png';
import inverterImg from '../assets/inverter.png';

export const categories = [
  { id: 'all', name: 'All Categories', icon: 'all' },
  { id: 'solar', name: 'Solar', icon: 'solar' },
  { id: 'electricals', name: 'Electricals', icon: 'electrical' },
  { id: 'electronics', name: 'Electronics', icon: 'electronics' },
  { id: 'lighting', name: 'Lighting', icon: 'lighting' },
  { id: 'security', name: 'Advanced Security Systems', icon: 'security' },
];

export const products = [
  {
    id: 'f1',
    name: 'ST.LIGHT Monocrystalline 550W',
    category: 'Solar',
    price: '35,000',
    description: 'High-efficiency Tier 1 solar panel with anti-reflective glass and PERC technology for maximum energy harvest.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop',
    tag: 'Solar'
  },
  {
    id: 'f2',
    name: 'Smart Hybrid Inverter 5KW',
    category: 'Solar',
    price: '145,000',
    description: 'Advanced MPPT tracking with WiFi integration. Seamlessly switch between solar, grid, and battery storage.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop',
    tag: 'Inverters'
  },
  {
    id: 'f3',
    name: 'Deep Cycle Lithium LiFePO4 100Ah',
    category: 'Solar',
    price: '95,000',
    description: 'Ultra-safe lithium storage with 6000+ life cycles. Integrated BMS for cell balancing and protection.',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&auto=format&fit=crop',
    tag: 'Storage'
  },
  {
    id: 'f4',
    name: 'LED Industrial Floodlight 200W',
    category: 'Lighting',
    price: '8,500',
    description: 'IP66 waterproof rated heavy-duty lighting. Perfect for warehouse and large yard illumination.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&auto=format&fit=crop',
    tag: 'Lighting'
  },
  {
    id: 'f5',
    name: 'AI Smart IP Camera Kit (4 Cam)',
    category: 'Advanced Security Systems',
    price: '42,000',
    description: 'Ultra HD 4K security with human detection and night vision. Remote viewing via mobile app.',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&auto=format&fit=crop',
    tag: 'Security'
  },
  {
    id: 'f6',
    name: 'Industrial Circuit Breaker 3-Phase',
    category: 'Electricals',
    price: '12,000',
    description: 'Precision engineered 100A 3-phase protection for industrial and commercial power distribution.',
    image: 'https://images.unsplash.com/photo-1618571766447-b8c983df5a64?w=800&auto=format&fit=crop',
    tag: 'Electrical'
  },
  {
    id: 'f7',
    name: 'Smart Home Hub v3',
    category: 'Electronics',
    price: '15,000',
    description: 'The brain of your smart home. Connects all sensors, lights, and appliances into one app.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop',
    tag: 'Smart Home'
  },
  {
    id: 'f8',
    name: 'Outdoor Solar Wall Lights',
    category: 'Lighting',
    price: '3,200',
    description: 'Set of 4 solar-powered fence/wall lights with automatic dusk-to-dawn sensors.',
    image: 'https://images.unsplash.com/photo-1510333300280-99933324652a?w=800&auto=format&fit=crop',
    tag: 'Lighting'
  }
];
