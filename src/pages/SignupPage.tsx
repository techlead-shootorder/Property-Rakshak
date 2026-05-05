import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Mail, Lock, User, Building2, Home, ArrowRight } from 'lucide-react';

type UserType = 'tenant' | 'owner' | null;

export function SignupPage() {
  const [userType, setUserType] = useState<UserType>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
              <p className="text-slate-600 mt-2">
                Join Property Rakshak as a tenant or property owner
              </p>
            </div>

            {!userType ? (
              <div className="space-y-4">
                <button
                  onClick={() => setUserType('tenant')}
                  className="w-full p-6 rounded-xl border-2 border-slate-200 hover:border-brand-blue group transition-all text-left"
                >
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-lg bg-brand-blue/10 group-hover:bg-brand-blue/20">
                      <Home className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">Sign Up as Tenant</h3>
                  </div>
                  <p className="text-slate-600 ml-14">
                    Looking for a property to rent? Create an account to start your search
                  </p>
                </button>

                <button
                  onClick={() => setUserType('owner')}
                  className="w-full p-6 rounded-xl border-2 border-slate-200 hover:border-brand-green group transition-all text-left"
                >
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-lg bg-brand-green/10 group-hover:bg-brand-green/20">
                      <Building2 className="w-6 h-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">Sign Up as Property Owner</h3>
                  </div>
                  <p className="text-slate-600 ml-14">
                    Own a property? Create an account to list and manage your properties
                  </p>
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center mb-8">
                  <button
                    onClick={() => setUserType(null)}
                    className="text-slate-600 hover:text-brand-blue text-sm"
                  >
                    ← Back to selection
                  </button>
                  <div className="ml-4 px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm">
                    {userType === 'tenant' ? 'Tenant Account' : 'Property Owner Account'}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="email"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="password"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="password"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-brand-blue hover:bg-brand-blue/90 text-white font-medium transition-colors"
                  >
                    Create Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </>
            )}

            <div className="mt-6 text-center text-sm text-slate-600">
              <p>
                Already have an account?{' '}
                <a href="/login" className="text-brand-blue hover:text-brand-blue/90 font-medium">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}