import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Search, MapPin, Home, IndianRupee, BedDouble, Bath, Square, Filter } from 'lucide-react';

// Dummy data for Hyderabad properties
const properties = [
  {
    id: 1,
    title: "Luxury Apartment in Gachibowli",
    location: "Financial District, Gachibowli",
    price: 45000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Modern Villa in Jubilee Hills",
    location: "Road No. 45, Jubilee Hills",
    price: 85000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3200,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Spacious Flat in Hitech City",
    location: "Hitech City, Madhapur",
    price: 35000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Premium House in Banjara Hills",
    location: "Road No. 12, Banjara Hills",
    price: 95000,
    bedrooms: 5,
    bathrooms: 5,
    sqft: 4500,
    type: "House",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Cozy Apartment in Kondapur",
    location: "Kondapur Main Road",
    price: 28000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Garden House in Manikonda",
    location: "Manikonda, Near ORR",
    price: 55000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    type: "House",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
  }
];

export function FindPropertyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section with Search */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Find Your Perfect Property in Hyderabad</h1>
            <p className="text-xl text-slate-600">
              Discover the best properties in prime locations across Hyderabad
            </p>
          </div>

          {/* Search Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search location..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
              </div>
              
              <select
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
              </select>

              <select
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="All">All Prices</option>
                <option value="0-30000">Below ₹30,000</option>
                <option value="30000-50000">₹30,000 - ₹50,000</option>
                <option value="50000+">Above ₹50,000</option>
              </select>

              <button className="w-full py-3 rounded-lg bg-brand-blue hover:bg-brand-blue/90 text-white font-medium transition-colors flex items-center justify-center">
                <Filter className="w-5 h-5 mr-2" />
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-brand-blue">
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-slate-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-brand-blue font-semibold">
                      <IndianRupee className="w-4 h-4 mr-1" />
                      {property.price.toLocaleString('en-IN')}
                      <span className="text-slate-600 font-normal">/month</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 border-t pt-4">
                    <div className="flex items-center">
                      <BedDouble className="w-4 h-4 mr-1" />
                      {property.bedrooms} Beds
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.bathrooms} Baths
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      {property.sqft} sqft
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}