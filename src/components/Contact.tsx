import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [state, handleSubmit] = useForm("mojreprr");

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-bold mb-3 md:mb-4 text-gradient">Get in Touch</h2>
              <p className="text-slate-300">
                Have questions about our services? Our team is here to help you protect and manage your property investment.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="p-3 rounded-lg bg-brand-green/10 group-hover:bg-brand-green/20 transition-colors">
                  <Phone className="w-6 h-6 text-brand-green" />
                </div>
                <span className="ml-4 text-slate-300 group-hover:text-white transition-colors"><a href="tel:+919948393030">+91 99483 93030</a></span>
                </div>
              <div className="flex items-center group">
                <div className="p-3 rounded-lg bg-brand-green/10 group-hover:bg-brand-green/20 transition-colors">
                  <Mail className="w-6 h-6 text-brand-green" />
                </div>
                <span className="ml-4 text-slate-300 group-hover:text-white transition-colors">sales@propertyrakshak.com</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl">
            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Thank You!</h3>
                <p className="text-slate-300 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                <button
                  onClick={() => window.location.reload()}
                  className="text-brand-green hover:text-brand-green/90 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-green text-white placeholder-slate-400"
                    placeholder="Your name"
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-green text-white placeholder-slate-400"
                    placeholder="your@email.com"
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-green text-white placeholder-slate-400"
                    rows={4}
                    placeholder="How can we help you?"
                    required
                    disabled={state.submitting}
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 rounded-lg bg-brand-green hover:bg-brand-green/90 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}