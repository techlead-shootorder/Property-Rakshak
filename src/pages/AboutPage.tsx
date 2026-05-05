import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Shield, Users, Building2, Award, History, Target, ArrowRight } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-4">
              About Us
            </span>
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Your Trusted Property Partner Since 2019</h1>
            <p className="text-xl text-slate-600">
              Building trust through excellence in property management and protection
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-blue/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-green/10 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Our Journey"
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Journey of Excellence</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <History className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Founded in 2019</h3>
                    <p className="text-slate-600">Started with a vision to revolutionize property management for NRIs and local residents.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-brand-green" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-slate-600">To provide comprehensive property management solutions that ensure peace of mind for property owners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600">The principles that guide our service excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                <Shield className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust & Security</h3>
              <p className="text-slate-600">Building lasting relationships through transparency and reliable service delivery.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors">
                <Award className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-slate-600">Committed to delivering the highest standards in property management services.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                <Users className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Client-Centric</h3>
              <p className="text-slate-600">Putting our clients' needs first with personalized property management solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl mb-8 opacity-90">Let us help you protect and manage your property investment</p>
          <Link 
            to="/signup"
            className="inline-flex items-center px-8 py-3 bg-white text-brand-blue rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}