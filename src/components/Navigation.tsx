import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Building2, Shield, FileText } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gradient-to-b from-white via-white/95 to-white/90 backdrop-blur-lg z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://nethrasnacks.com/uploads/propertylogo.png" 
                alt="PropertyRakshak.com" 
                className="h-10 md:h-16"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-brand-blue hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-base font-medium hover:text-brand-blue transition-all duration-200 py-2 border-b-2 border-transparent ${
                location.pathname === '/' ? 'text-brand-blue border-brand-blue' : 'text-slate-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-base font-medium hover:text-brand-blue transition-all duration-200 py-2 border-b-2 border-transparent ${
                location.pathname === '/about' ? 'text-brand-blue border-brand-blue' : 'text-slate-600'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/packages" 
              className={`text-base font-medium hover:text-brand-blue transition-all duration-200 py-2 border-b-2 border-transparent ${
                location.pathname === '/packages' ? 'text-brand-blue border-brand-blue' : 'text-slate-600'
              }`}
            >
              Packages
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-base font-medium text-slate-600 hover:text-brand-blue transition-all duration-200 py-2"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onBlur={() => setTimeout(() => setIsServicesDropdownOpen(false), 200)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-slate-100 py-2 transform opacity-100 scale-100 transition-all duration-200 origin-top-right">
                  <Link
                    to="/services"
                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors duration-200"
                  >
                    Property Management
                  </Link>
                  <Link
                    to="/buy-sell-services"
                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors duration-200"
                  >
                    Buy/Sell Service
                  </Link>
                  <Link
                    to="/plot-monitoring"
                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors duration-200"
                  >
                    Plot Monitoring Service
                  </Link>
                  <Link
                    to="/commercial-spaces"
                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors duration-200"
                  >
                    Commercial Spaces Leasing
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`text-base font-medium hover:text-brand-blue transition-all duration-200 py-2 border-b-2 border-transparent ${
                location.pathname === '/contact' ? 'text-brand-blue border-brand-blue' : 'text-slate-600'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-slate-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 pt-2 pb-3">
            <Link
              to="/"
              className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-all duration-200"
            >
              About Us
            </Link>
            <Link
              to="/packages"
              className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-all duration-200"
            >
              Packages
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-all duration-200"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="bg-slate-50 px-4 py-2 space-y-1">
                  <Link
                    to="/services"
                    className="flex items-center px-4 py-3 text-base font-medium text-slate-600 hover:text-brand-blue transition-all duration-200"
                  >
                    <Building2 className="w-5 h-5 mr-3" />
                    Property Management
                  </Link>
                  <Link
                    to="/buy-sell-services"
                    className="flex items-center px-4 py-3 text-base font-medium text-slate-600 hover:text-brand-blue transition-all duration-200"
                  >
                    <FileText className="w-5 h-5 mr-3" />
                    Buy/Sell Service
                  </Link>
                  <Link
                    to="/plot-monitoring"
                    className="flex items-center px-4 py-3 text-base font-medium text-slate-600 hover:text-brand-blue transition-all duration-200"
                  >
                    <Shield className="w-5 h-5 mr-3" />
                    Plot Monitoring Service
                  </Link>
                  <Link
                    to="/commercial-spaces"
                    className="flex items-center px-4 py-3 text-base font-medium text-slate-600 hover:text-brand-blue transition-all duration-200"
                  >
                    <Building2 className="w-5 h-5 mr-3" />
                    Commercial Spaces Leasing
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}