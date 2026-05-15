import { FaAward, FaTools, FaHeadset, FaStar } from 'react-icons/fa';

const AdvantageCard = ({ icon: Icon, title, description, footer, color }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 ${color}`}>
      <Icon />
    </div>
    <h3 className="text-2xl font-bold text-brand-black mb-4">{title}</h3>
    <p className="text-gray-500 mb-8 leading-relaxed">
      {description}
    </p>
    <div className="pt-6 border-t border-gray-50 flex items-center text-brand-blue font-bold text-sm">
      <FaStar className="mr-2 text-[10px]" />
      {footer}
    </div>
  </div>
);

const Advantages = () => {
  const advantages = [
    {
      icon: FaHeadset,
      title: 'Expert Consultation',
      description: 'Professional site assessment and energy auditing to ensure you get the right system size for your specific needs.',
      footer: '15+ Years Experience',
      color: 'bg-brand-blue/10 text-brand-blue'
    },
    {
      icon: FaAward,
      title: 'Premium Components',
      description: 'We partner exclusively with Tier 1 manufacturers globally to provide components with documented reliability records.',
      footer: 'Tier 1 Brands Only',
      color: 'bg-brand-orange/10 text-brand-orange'
    },
    {
      icon: FaTools,
      title: 'Certified Installation',
      description: 'Our installation teams are fully certified with rigorous training in safety and technical performance standards.',
      footer: '24/7 Technical Support',
      color: 'bg-brand-green/10 text-brand-green'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6">
            The ST.LIGHT Advantage
          </h2>
          <p className="text-gray-500 text-lg">
            We don't just sell hardware; we provide complete energy independence with local support and international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <AdvantageCard key={i} {...adv} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
