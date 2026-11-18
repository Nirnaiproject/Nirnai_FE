import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import NirnaiLogo from './NirnaiLogo';
import { LEGAL_ISSUES, CITIES_AND_LOCALITIES } from '../data/mockData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          <div className="lg:col-span-5 space-y-4">
            <NirnaiLogo variant="light" />
            <p className="text-xs md:text-sm text-slate-400 max-w-sm leading-relaxed">
              NIRNAI is India's dedicated legal guidance platform connecting citizens and businesses with verified civil law advocates in High Courts and District Civil Courts.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Bar Council Verified</span>
              </span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-amber-400">
                Civil Law Specialization
              </span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                <span>Stay Informed on Indian Civil Law Updates</span>
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Receive practical legal checklists, landmark Supreme Court property rulings, and tenant right summaries directly to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-700 text-white text-xs md:text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs md:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 flex-shrink-0"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Thank you for subscribing to NIRNAI Legal Insights!</span>
              </p>
            )}
          </div>
        </div>

        {/* Middle Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-slate-800 text-xs">
          {/* Col 1: Platform Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Platform
            </h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/advocates" className="hover:text-amber-400 transition-colors">Find Verified Advocates</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Civil Legal Services</Link></li>
              <li><Link to="/knowledge" className="hover:text-amber-400 transition-colors">Legal Knowledge Hub</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us & Mission</Link></li>
            </ul>
          </div>

          {/* Col 2: Legal Practice Areas */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Civil Specializations
            </h5>
            <ul className="space-y-2">
              {LEGAL_ISSUES.slice(0, 5).map(issue => (
                <li key={issue.id}>
                  <Link 
                    to={`/advocates?issue=${encodeURIComponent(issue.name)}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {issue.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cities */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Metro Coverage
            </h5>
            <ul className="space-y-2">
              {CITIES_AND_LOCALITIES.map(c => (
                <li key={c.city}>
                  <Link 
                    to={`/advocates?city=${encodeURIComponent(c.city)}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Advocates in {c.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Contact & Chambers
            </h5>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Madhapur, Hitec City, Hyderabad - 500081</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href="mailto:support@nirnai.com" className="hover:text-amber-400">support@nirnai.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>+91 40 2988 4120</span>
              </li>
              <li className="pt-2 text-[11px] text-emerald-400 font-medium">
                Helpline Hours: Mon - Sat, 9 AM - 7 PM IST
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer compliant with Bar Council rules */}
        <div className="py-6 text-[11px] text-slate-500 leading-relaxed border-b border-slate-900">
          <p>
            <strong className="text-slate-400">Bar Council of India Disclaimer:</strong> As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising in any form or manner. By using NIRNAI (nirnai.com), the user acknowledges that they are voluntarily seeking information relating to legal assistance and civil advocates of their own accord. NIRNAI is an automated digital matching platform and is not a law firm. NIRNAI does not provide direct legal advice or engage in the practice of law. Any information obtained or materials downloaded from this website do not create an advocate-client relationship.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} NIRNAI Legal Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Advocate Code of Conduct</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
