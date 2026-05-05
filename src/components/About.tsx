import React from 'react';
import { Shield, ClipboardCheck, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About Us</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Property Rakshak is a dedicated property management solution to help look after your property in India while you are abroad. We provide end-to-end property management services that ensure your property is well-maintained and protected.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Protection</h3>
            <p className="text-slate-600">Complete protection and management of your property while you're away.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-brand-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Regular Inspections</h3>
            <p className="text-slate-600">Monthly property visits and detailed reporting on property condition.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tenant Management</h3>
            <p className="text-slate-600">Complete tenant management including screening and rent collection.</p>
          </div>
        </div>
      </div>
    </section>
  );
}