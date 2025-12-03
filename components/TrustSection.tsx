import React from 'react';
import { CheckCircle2, Leaf, Truck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-brand-orange" />,
      title: "100% Shudh Desi Ghee",
      description: "We never compromise on fat. Only pure, clarified butter used in our specials."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Organic Spices",
      description: "Hand-picked, freshly ground spices ensuring the aroma hits home every time."
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-yellow" />,
      title: "Bahria Town Delivery",
      description: "Hot and fresh delivery anywhere within Bahria Town Karachi in 45 mins."
    }
  ];

  return (
    <section className="py-20 bg-brand-cream border-y border-brand-orange/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Promise To You</h2>
          <p className="text-gray-600">We believe food should be honest, healthy, and heartwarming. That's why we stick to the basics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};