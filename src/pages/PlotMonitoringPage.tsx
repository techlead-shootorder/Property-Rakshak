import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowRight, Shield, FileText, MapPin, Clock, Check, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PlotMonitoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-4">
              Plot Monitoring
            </span>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Property/Plot Monitoring Services</h1>
            <p className="text-xl text-slate-600">
              Professional monitoring and protection for your valuable property investments
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Any asset or property/plot in the form of land is an inherited or hard-earned possession and is very valuable. Vacant land in such a case is prone to encroachment or any such coercive uncertainties.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              At Property Rakshak, we ensure your plot/property is protected physically and legally against such problems by our Plot Monitoring services team. A regular update on the happenings at your site is provided by our team to make sure there is constant touch with the property you hold with the help of our Property/Plot Monitoring Services team.
            </p>
            <p className="text-lg text-slate-600">
              With us on board, you do not have to worry about the verification and valuation of your plot/property, obtaining necessary certificates and documents, property tax calculation and payment, periodic property visits and the cleanliness of your plot/property among other services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Monitoring Services</h2>
            <p className="text-xl text-slate-600">Everything you need to protect your plot investment</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-blue/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-green/10 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                alt="Plot Monitoring"
                className="relative z-10 rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Site Inspections</h3>
                  <p className="text-slate-600">Regular visits to ensure plot security and maintenance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Boundary Protection</h3>
                  <p className="text-slate-600">Ensuring plot boundaries are secure and well-maintained.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Documentation Management</h3>
                  <p className="text-slate-600">Handling all legal paperwork and tax-related matters.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-slate-600">Personal property manager for all your plot-related needs.</p>
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
            <h2 className="text-3xl font-bold mb-4">Protect Your Plot Investment</h2>
            <p className="text-xl mb-8">Let our experts help you maintain and secure your property</p>
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