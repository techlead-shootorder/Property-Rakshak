import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Building2, Shield, ArrowRight, Check, Users, FileText, Key, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-4">
              Our Packages
            </span>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Choose Your Perfect Plan</h1>
            <p className="text-xl text-slate-600">
              Comprehensive property management solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Property Management Package */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-brand-blue transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue to-brand-green"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Property Management</h3>
                <p className="text-slate-600 mb-6">Complete property management solution for your peace of mind</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Regular property inspections and detailed reports</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Professional tenant screening and management</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Rent collection and financial reporting</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">24/7 maintenance coordination</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to="/services"
                    className="py-3 px-4 rounded-xl bg-brand-blue/10 text-brand-blue font-medium transition-colors flex items-center justify-center group hover:bg-brand-blue/20"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                 
                </div>
              </div>
            </div>

            {/* Plot Monitoring Package */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-brand-green transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-green to-brand-blue"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Plot Monitoring</h3>
                <p className="text-slate-600 mb-6">Professional monitoring and protection for your plots</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Regular site visits and monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Detailed inspection reports with photos</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Boundary verification and protection</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Property tax payment assistance</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to="/plot-monitoring"
                    className="py-3 px-4 rounded-xl bg-brand-green/10 text-brand-green font-medium transition-colors flex items-center justify-center group hover:bg-brand-green/20"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                </div>
              </div>
            </div>

            {/* Buy/Sell Package */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-brand-blue transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Buy/Sell Package</h3>
                <p className="text-slate-600 mb-6">Complete assistance for property transactions</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Property valuation and market analysis</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Legal documentation assistance</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Property inspection and verification</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">End-to-end transaction support</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to="/buy-sell-services"
                    className="py-3 px-4 rounded-xl bg-brand-blue/10 text-brand-blue font-medium transition-colors flex items-center justify-center group hover:bg-brand-blue/20"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-blue to-brand-green rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Choose the perfect plan for your property management needs</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/contact"
                className="px-8 py-3 bg-white text-brand-blue rounded-xl font-medium hover:bg-opacity-90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}