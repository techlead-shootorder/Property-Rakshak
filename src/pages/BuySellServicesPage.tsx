import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowRight, Building2, FileText, Search, Shield, Check, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BuySellServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-4">
              Buy/Sell Services
            </span>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Buy/Sell Right Property Management Services</h1>
            <p className="text-xl text-slate-600">
              Professional assistance for buying and selling properties in Hyderabad
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Finding the Right Property Management Services</h2>
            <p className="text-lg text-slate-600 mb-6">
              The process of buying property/apartment is full of complications that cause a mental hindrance for people to invest their hard-earned money. As a trusted partner, we at Property Rakshak assist you in finding the right property/apartment with the help of our team who are experienced as well as experts in extending apartment management services. They also do the right property management, hence ensuring a cost-effective solution for your property management-related concerns.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Apart from helping you in finding the right property/apartment, we also assist you in the purchasing process from the documentation to the verification. We aim to ensure a seamless buying experience from the scratch to the finale by doing up your process requisites with our right property management services.
            </p>
            <p className="text-lg text-slate-600">
              The listing has been specially curated for you and includes villas, apartments, lands/plots, individual houses and commercial properties in and around Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600">How we help you buy or sell property</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-brand-blue">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-slate-600">Understanding your requirements and preferences for property purchase or sale.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-brand-green">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Property Search/Listing</h3>
                  <p className="text-slate-600">Extensive search for suitable properties or marketing your property to potential buyers.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-brand-blue">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Documentation & Verification</h3>
                  <p className="text-slate-600">Handling all legal paperwork and verification processes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-brand-green">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transaction Completion</h3>
                  <p className="text-slate-600">Smooth execution of property transfer and payment processes.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-blue/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-green/10 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Property Transaction"
                className="relative z-10 rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-blue to-brand-green rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Buy or Sell Property?</h2>
            <p className="text-xl mb-8">Let our experts guide you through the process</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/contact"
                className="px-8 py-3 bg-white text-brand-blue rounded-xl font-medium hover:bg-opacity-90 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/packages"
                className="px-8 py-3 bg-transparent border-2 border-white rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}