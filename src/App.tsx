//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
//import { About } from './components/About';
import { Services } from './components/Services';
// import { WhyChooseUs } from './components/WhyChooseUs';
import { Struggles } from './components/Struggles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PackagesPage } from './pages/PackagesPage';
//import { LoginPage } from './pages/LoginPage';
//import { SignupPage } from './pages/SignupPage';
//import { FindPropertyPage } from './pages/FindPropertyPage';
import { BuySellServicesPage } from './pages/BuySellServicesPage';
import { PlotMonitoringPage } from './pages/PlotMonitoringPage';
import { CommercialSpacesPage } from './pages/CommercialSpacesPage';
import { ScrollToTop } from './components/ScrollToTop';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <Hero />
      <Services />
      {/* <WhyChooseUs /> */}
      <Struggles />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-property" element={<FindPropertyPage />} /> */}
        <Route path="/buy-sell-services" element={<BuySellServicesPage />} />
        <Route path="/plot-monitoring" element={<PlotMonitoringPage />} />
        <Route path="/commercial-spaces" element={<CommercialSpacesPage />} />
      </Routes>
    </Router>
  );
}

export default App