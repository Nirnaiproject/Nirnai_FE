import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Handshake, 
  Users, 
  Home, 
  HeartPulse, 
  ShieldCheck, 
  FileText, 
  Briefcase, 
  Scale, 
  ArrowRight,
  Gavel,
  Landmark,
  Layers,
  Compass
} from 'lucide-react';
import { LEGAL_ISSUES, CASE_CATEGORIES } from '../data/mockData';

const accentCycle = [
  'bg-emerald-50 text-emerald-800 group-hover:bg-emerald-700',
  'bg-amber-50 text-amber-800 group-hover:bg-amber-600',
  'bg-sky-50 text-sky-800 group-hover:bg-sky-700',
  'bg-violet-50 text-violet-800 group-hover:bg-violet-700',
  'bg-rose-50 text-rose-800 group-hover:bg-rose-700',
  'bg-teal-50 text-teal-800 group-hover:bg-teal-700',
];

const iconMap = {
  Building2: Building2,
  Handshake: Handshake,
  Users: Users,
  Home: Home,
  HeartPulse: HeartPulse,
  ShieldCheck: ShieldCheck,
  FileText: FileText,
  Briefcase: Briefcase,
  Scale: Scale,
  Gavel: Gavel,
  Landmark: Landmark,
  Layers: Layers,
  Compass: Compass
};

export default function PopularServices() {
  // Show representative popular services across categories
  const featuredIssues = LEGAL_ISSUES.slice(0, 9);

  return (
    <section className="py-8 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            PRACTICE CATALOG
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mt-2">
            Popular Legal Services
          </h2>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Directly connect with specialized advocates across Civil, Criminal, Constitutional, Commercial, Family, and Revenue jurisdictions.
          </p>
        </div>

        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors group"
        >
          <span>View All 11 Categories</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
        {featuredIssues.map((issue, index) => {
          const IconComponent = iconMap[issue.icon] || Scale;
          return (
            <Link
              key={issue.id}
              to={`/advocates?category=${encodeURIComponent(issue.category)}&issue=${encodeURIComponent(issue.name)}`}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/70 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-200 group-hover:text-white ${accentCycle[index % accentCycle.length]}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
                    {issue.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-1.5">
                  {issue.name}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                  {issue.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 group-hover:text-slate-600 transition-colors">
                  {issue.caseTypes.length} case types
                </span>
                <span className="font-semibold text-emerald-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Consult</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
