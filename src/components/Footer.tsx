import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <img 
              src="https://nethrasnacks.com/uploads/propertylogo.png" 
              alt="PropertyRakshak.com" 
              className="h-12 md:h-16"
            />
            <p className="text-slate-400">
              Your trusted partner in property management. Complete solutions for NRI property owners.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.facebook.com/propertyrakshak" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/propertyrakshak" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-green transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="/services" className="text-slate-400 hover:text-brand-green transition-colors">Property Management</a></li>
              <li><a href="/buy-sell-services" className="text-slate-400 hover:text-brand-green transition-colors">Buy/Sell Services</a></li>
              <li><a href="/plot-monitoring" className="text-slate-400 hover:text-brand-green transition-colors">Plot Monitoring</a></li>
              <li><a href="/commercial-spaces" className="text-slate-400 hover:text-brand-green transition-colors">Commercial Spaces</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="/about" className="text-slate-400 hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="/packages" className="text-slate-400 hover:text-brand-green transition-colors">Packages</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-brand-green transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-green transition-colors">Refer & Earn</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                <a href="tel:+919948393030" className="text-slate-400 hover:text-brand-green transition-colors">+91 99483 93030</a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                <a href="mailto:sales@propertyrakshak.com" className="text-slate-400 hover:text-brand-green transition-colors">sales@propertyrakshak.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Softsol tower-1, 2nd floor A Wing, Madhapur, Hyderabad - 500081</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} PropertyRakshak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}