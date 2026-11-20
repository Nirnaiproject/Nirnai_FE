import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  Scale, 
  ArrowRight,
  Briefcase
} from 'lucide-react';
import NirnaiLogo from './NirnaiLogo';
import { LEGAL_ISSUES } from '../data/mockData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [knowledgeDropdown, setKnowledgeDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setKnowledgeDropdown(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5' 
        : 'bg-white border-b border-slate-100 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <NirnaiLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link 
              to="/" 
              className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                location.pathname === '/' 
                  ? 'text-emerald-800 bg-emerald-50' 
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                  location.pathname.startsWith('/services') 
                    ? 'text-emerald-800 bg-emerald-50' 
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                }`}
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 grid gap-1 mt-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Civil Legal Services
                  </div>
                  {LEGAL_ISSUES.slice(0, 5).map((issue) => (
                    <Link
                      key={issue.id}
                      to={`/advocates?issue=${encodeURIComponent(issue.name)}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-emerald-800 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                        <Scale className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900 group-hover:text-emerald-800">
                          {issue.name}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {issue.caseTypes[0]}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 pt-1 mt-1">
                    <Link
                      to="/services"
                      className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <span>Explore all 9 civil services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Find Advocates Link */}
            <Link 
              to="/advocates" 
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                location.pathname === '/advocates' 
                  ? 'text-emerald-800 bg-emerald-50' 
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              <Search className="w-4 h-4 text-emerald-600" />
              <span>Find Advocates</span>
            </Link>

            {/* Legal Knowledge Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setKnowledgeDropdown(true)}
              onMouseLeave={() => setKnowledgeDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                  location.pathname.startsWith('/knowledge') 
                    ? 'text-emerald-800 bg-emerald-50' 
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                }`}
                onClick={() => setKnowledgeDropdown(!knowledgeDropdown)}
              >
                <span>Legal Knowledge</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${knowledgeDropdown ? 'rotate-180' : ''}`} />
              </button>

              {knowledgeDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 grid gap-1 mt-1 z-50">
                  <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Know Your Rights & Guides
                  </div>
                  <Link
                    to="/knowledge#property-title-verification"
                    className="px-3 py-2 text-sm rounded-lg hover:bg-slate-50 text-slate-700 hover:text-emerald-800 transition-colors"
                  >
                    <div className="font-medium">Property Title Verification</div>
                    <div className="text-xs text-slate-500">12 essential document checks</div>
                  </Link>
                  <Link
                    to="/knowledge#understanding-legal-notice"
                    className="px-3 py-2 text-sm rounded-lg hover:bg-slate-50 text-slate-700 hover:text-emerald-800 transition-colors"
                  >
                    <div className="font-medium">Answering Legal Notices</div>
                    <div className="text-xs text-slate-500">Timelines, consequences & defense</div>
                  </Link>
                  <Link
                    to="/knowledge#tenant-rights-eviction"
                    className="px-3 py-2 text-sm rounded-lg hover:bg-slate-50 text-slate-700 hover:text-emerald-800 transition-colors"
                  >
                    <div className="font-medium">Tenant Rights & Security Deposits</div>
                    <div className="text-xs text-slate-500">Model Tenancy Act guidance</div>
                  </Link>
                  <div className="border-t border-slate-100 pt-1 mt-1">
                    <Link
                      to="/knowledge"
                      className="block px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:underline"
                    >
                      Browse full knowledge hub →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link 
              to="/about" 
              className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                location.pathname === '/about' 
                  ? 'text-emerald-800 bg-emerald-50' 
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>
          </nav>

          {/* Action CTAs (Now linking directly to full Login & Register pages) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/register?role=advocate"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 px-2.5 py-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
              <span>Join as Advocate</span>
            </Link>

            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
            >
              Login
            </Link>
            <Link
              to="/register?role=client"
              className="px-4 py-2 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm transition-all hover:shadow active:scale-98"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/login"
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-lg"
            >
              Login
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid gap-1">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Home
            </Link>
            <Link 
              to="/advocates" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Find Verified Advocates</span>
              <Search className="w-4 h-4 text-emerald-600" />
            </Link>
            <Link 
              to="/services" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Civil Legal Services
            </Link>
            <Link 
              to="/knowledge" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Legal Knowledge Hub
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              About NIRNAI
            </Link>
          </div>

          <div className="border-t border-slate-200 pt-3 grid gap-2">
            <Link
              to="/register?role=advocate"
              className="w-full py-2.5 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200 block"
            >
              Join NIRNAI Bar Network
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/login"
                className="w-full py-2 text-center text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg block"
              >
                Login
              </Link>
              <Link
                to="/register?role=client"
                className="w-full py-2 text-center text-sm font-semibold text-white bg-emerald-800 rounded-lg shadow-sm block"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
