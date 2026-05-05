import { Shield, Users, Award, Clock, Smartphone, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'Your property is in safe hands with our comprehensive protection and monitoring services.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Dedicated professionals with years of experience in property management.'
  },
  {
    icon: Award,
    title: 'Quality Service',
    description: 'Award-winning service standards with focus on customer satisfaction.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for emergencies and regular queries.'
  },
  {
    icon: Smartphone,
    title: 'Tech-Enabled',
    description: 'Modern technology for seamless property management and real-time updates.'
  },
  {
    icon: CheckCircle,
    title: 'Verified Tenants',
    description: 'Thorough tenant screening process to ensure reliable occupants.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Property Management Done Right</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We combine expertise, technology, and personalized service to deliver exceptional property management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-brand-blue/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Properties Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
