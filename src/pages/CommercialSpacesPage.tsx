import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Building2, Users, Shield, TrendingUp, CheckCircle, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CommercialSpacesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-4">
              Commercial Spaces
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Commercial Spaces Leasing & Maintenance</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">Your Commercial Property, Fully Managed</h2>
            <p className="text-xl text-slate-600 mb-8">
              At Property Rakshak, we offer end-to-end leasing and maintenance solutions for commercial spaces—designed to maximize occupancy, streamline operations, and protect your asset value.
            </p>
            <p className="text-lg text-slate-600">
              From tenant acquisition to ongoing maintenance, every detail is handled with precision—so you don't have to.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to maximize your commercial property's potential
            </p>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-brand-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Commercial Leasing & Tenant Acquisition</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    We ensure your property is not just listed—but strategically positioned to attract the right businesses.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Targeted marketing across premium platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Tenant sourcing for offices, retail & commercial units</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Business profiling & tenant verification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Site visits, negotiations & deal closure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Lease structuring & documentation</span>
                    </li>
                  </ul>
                  <p className="text-slate-600 mt-6 italic">
                    Like leading property managers, leasing is handled end-to-end—from marketing to agreements—ensuring faster occupancy and better tenant quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-brand-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Tenant Management & Lease Lifecycle</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    We act as the single point of contact between you and your tenants.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Rent collection & payment tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Lease renewals & escalation handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Tenant communication & issue resolution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Move-in & move-out coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Legal & compliance support</span>
                    </li>
                  </ul>
                  <p className="text-slate-600 mt-6 italic">
                    This ensures a smooth lifecycle—from onboarding to exit—without owner involvement in daily operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-brand-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Maintenance & Facility Management</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    We keep your commercial property operational, presentable, and efficient.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Electrical, plumbing & HVAC maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Preventive maintenance schedules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Emergency repair handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Housekeeping & common area upkeep</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Vendor management & quality control</span>
                    </li>
                  </ul>
                  <p className="text-slate-600 mt-6 italic">
                    Regular maintenance and inspections are critical to preserving property value and tenant satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-brand-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Property Readiness & Handover</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Before every lease, we ensure your space is fully prepared.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Property inspections & readiness checks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Coordination with vendors for repairs & setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Inventory & condition documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Seamless tenant handover</span>
                    </li>
                  </ul>
                  <p className="text-slate-600 mt-6 italic">
                    A structured readiness process ensures smooth leasing and avoids disputes later.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-brand-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Monitoring, Reporting & Transparency</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Stay informed without being physically present.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Periodic inspections with photo reports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Financial tracking (rent, expenses, maintenance)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Real-time updates & communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Performance insights</span>
                    </li>
                  </ul>
                  <p className="text-slate-600 mt-6 italic">
                    Tech-enabled reporting and regular updates ensure complete visibility and control for property owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Property Rakshak Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Property Rakshak</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The trusted choice for commercial property management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Control</h3>
              <p className="text-slate-300">Leasing, tenants, and maintenance—under one system</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Tenants</h3>
              <p className="text-slate-300">Businesses screened for reliability and stability</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reduced Vacancy</h3>
              <p className="text-slate-300">Faster leasing through structured marketing</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
              <p className="text-slate-300">Proactive maintenance & vendor coordination</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Reporting</h3>
              <p className="text-slate-300">Clear, consistent updates on your asset</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who This Is For</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commercial property management services are designed for
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-green/5 p-6 rounded-xl border border-brand-blue/10 text-center">
              <h3 className="text-lg font-semibold text-slate-900">Commercial property owners</h3>
            </div>
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-green/5 p-6 rounded-xl border border-brand-blue/10 text-center">
              <h3 className="text-lg font-semibold text-slate-900">Office & retail space investors</h3>
            </div>
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-green/5 p-6 rounded-xl border border-brand-blue/10 text-center">
              <h3 className="text-lg font-semibold text-slate-900">Builders & developers</h3>
            </div>
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-green/5 p-6 rounded-xl border border-brand-blue/10 text-center">
              <h3 className="text-lg font-semibold text-slate-900">NRIs managing commercial assets remotely</h3>
            </div>
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-green/5 p-6 rounded-xl border border-brand-blue/10 text-center">
              <h3 className="text-lg font-semibold text-slate-900">Businesses leasing multi-unit spaces</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let Your Property Perform Like a Business Asset</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Commercial spaces demand more than just occupancy—they require strategy, maintenance, and active management.
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            With Property Rakshak, your property is not just managed—it's optimized.
          </p>
          <p className="text-xl mb-8 font-semibold">
            Talk to our team today to streamline your commercial leasing and maintenance.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-lg"
          >
            <Phone className="w-5 h-5" />
            Contact Our Team
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
