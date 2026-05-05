import React from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const faqs = [
  {
    title: 'What is NRI?',
    description: 'Non-Resident Indian (NRI) is an Indian citizen who stays abroad for employment/business or vocation outside India or stays abroad under circumstances indicating an intention for an uncertain duration of stay abroad.'
  },
  {
    title: 'What is PROPERTY RAKSHAK?',
    description: 'Property Rakshak is a dedicated property management solution to help look after your property in India while you are abroad.'
  },
  {
    title: 'What is the use of Property Raksha Services?',
    description: "Property Raksha Services provides comprehensive property management solutions to ensure your property is well-maintained and generating optimal returns while you're abroad."
  },
  {
    title: 'Most Comprehensive Services',
    description: 'From tenant screening to maintenance, legal documentation to regular inspections, we handle every aspect of property management professionally.'
  }
];

export function Struggles() {
  return (
    <>
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'url("https://www.propertyrakshak.com/wp-content/uploads/2019/05/home3.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get answers to common questions about our property management services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm group transition-all duration-300 hover:shadow-md"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/90 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-blue/10">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{faq.title}</h3>
                  </div>
                  <ChevronDown className="w-5 h-5 text-slate-400 transform transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 pt-2 text-slate-600 bg-white/50">
                  {faq.description}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      
      <section className="relative overflow-hidden">
        <div className="flex justify-center">
          <img 
            src="https://nethrasnacks.com/uploads/struggle.png" 
            alt="Property Management Struggles"
            className="max-w-[900px] w-full h-auto mx-auto"
          />
        </div>
      </section>
    </>
  );
}