import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Building2, Shield, Key, FileText, Settings, Users, Search, ClipboardCheck, HomeIcon, Handshake, ArrowRight } from 'lucide-react';

const allServices = [
  {
    icon: Shield,
    title: 'Property Protection',
    description: 'Regular inspections and maintenance to ensure your property stays in perfect condition.',
    details: 'Our comprehensive property protection service includes 24/7 security monitoring, regular maintenance checks, and immediate response to any security concerns.'
  },
  {
    icon: Key,
    title: 'Tenant Management',
    description: 'Comprehensive tenant screening, rent collection, and relationship management.',
    details: 'We handle everything from tenant screening and background checks to rent collection and conflict resolution.'
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Handle all legal paperwork and maintain proper records for your property.',
    details: 'Our documentation service covers all legal requirements, property registration, tax documentation, and maintenance of essential records.'
  },
  {
    icon: Users,
    title: 'Vendor Management',
    description: 'Coordinate with reliable vendors for maintenance and repairs.',
    details: 'We maintain a network of verified vendors and contractors to ensure quality maintenance and timely repairs.'
  },
  {
    icon: Building2,
    title: 'Property Marketing',
    description: 'Strategic marketing to find quality tenants and maximize rental income.',
    details: 'Our marketing strategies include professional photography, targeted advertising, and extensive market research.'
  },
  {
    icon: Settings,
    title: 'Maintenance',
    description: 'Prompt handling of repairs and regular maintenance to preserve property value.',
    details: 'Regular maintenance checks, emergency repairs, and preventive maintenance to keep your property in top condition.'
  },
  {
    icon: Search,
    title: 'Property Inspection',
    description: 'Regular property inspections to ensure everything is in order.',
    details: 'Detailed inspection reports, photo documentation, and recommendations for improvements or repairs.'
  },
  {
    icon: ClipboardCheck,
    title: 'Legal Support',
    description: 'Complete legal assistance for all property-related matters.',
    details: 'Expert legal guidance on property laws, documentation, and dispute resolution.'
  },
  {
    icon: HomeIcon,
    title: 'Property Valuation',
    description: 'Professional property valuation and market analysis.',
    details: 'Comprehensive market analysis, property valuation reports, and investment advice.'
  },
  {
    icon: Handshake,
    title: 'Possession Management',
    description: 'Smooth handling of property possession and handover.',
    details: 'Complete assistance in property possession, including documentation and physical handover.'
  }
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-4">
              Our Services
            </span>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Property Management Solutions</h1>
            <p className="text-xl text-slate-600 mb-8">
              From property protection to tenant management, we provide end-to-end solutions for NRI property owners.
            </p>
            <button className="inline-flex items-center px-8 py-3 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white font-medium transition-colors">
              Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Protection</h3>
              <p className="text-slate-600">Round-the-clock security monitoring and immediate response to concerns.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-slate-600">Dedicated professionals with years of property management experience.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Complete Solutions</h3>
              <p className="text-slate-600">End-to-end property management services under one roof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (existing content) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-brand-blue/20"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-green/10">
                    <service.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 ml-4">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <p className="text-sm text-slate-500">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}