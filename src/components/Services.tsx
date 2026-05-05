import React from 'react';
import { Building2, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-bold text-slate-900 mb-3 md:mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive property solutions tailored to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Property Management Package */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-brand-blue transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue to-brand-green"></div>
            <div className="p-6 md:p-8">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 md:mb-4">Property Management</h3>
              <p className="text-slate-600 mb-6 md:mb-8">Complete property management solution for your peace of mind. We handle everything from tenant management to maintenance.</p>
              <Link 
                to="/services"
                className="inline-flex items-center text-brand-blue hover:text-brand-blue/90 font-medium"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Buy/Sell Package */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-brand-blue transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue to-brand-green"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Buy/Sell Service</h3>
              <p className="text-slate-600 mb-8">Professional assistance for buying and selling properties. We handle everything from search to documentation.</p>
              <Link 
                to="/buy-sell-services"
                className="inline-flex items-center text-brand-blue hover:text-brand-blue/90 font-medium"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Plot Monitoring Package */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-brand-blue transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue to-brand-green"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Plot Monitoring</h3>
              <p className="text-slate-600 mb-8">Professional monitoring and protection for your plots. Regular inspections and complete security.</p>
              <Link 
                to="/plot-monitoring"
                className="inline-flex items-center text-brand-blue hover:text-brand-blue/90 font-medium"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link 
            to="/packages"
            className="inline-flex items-center px-8 py-3 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white font-medium transition-colors"
          >
            View All Packages
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}