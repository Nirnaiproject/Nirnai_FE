import React, { useState } from 'react';
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
  CheckCircle2,
  FileCheck2,
  Gavel,
  Landmark,
  Layers,
  Compass
} from 'lucide-react';
import { CASE_CATEGORIES, LEGAL_ISSUES } from '../data/mockData';

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

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const displayedIssues = selectedCategory === 'all'
    ? LEGAL_ISSUES
    : LEGAL_ISSUES.filter(i => i.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-slate-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            OFFICIAL JURISDICTIONS
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mt-3">
            Legal Case Categories
          </h1>
          <p className="text-sm md:text-base text-slate-600 mt-2">
            Comprehensive legal assistance across 11 official court classifications in India.
          </p>

          {/* 11 Categories Horizontal Scroll / Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              All Categories ({LEGAL_ISSUES.length})
            </button>
            {CASE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory.toLowerCase() === cat.name.toLowerCase()
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Overview Banner if category is selected */}
        {selectedCategory !== 'all' && (() => {
          const catObj = CASE_CATEGORIES.find(c => c.name.toLowerCase() === selectedCategory.toLowerCase());
          if (!catObj) return null;
          return (
            <div className="mb-8 p-6 bg-emerald-900 text-white rounded-3xl shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                <span>{catObj.badge}</span>
              </div>
              <h2 className="text-2xl font-bold font-serif">{catObj.name}</h2>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl leading-relaxed">
                <strong>What it covers:</strong> {catObj.covers}
              </p>
              <p className="text-xs text-amber-200 mt-2">
                <strong>Typical examples:</strong> {catObj.examples}
              </p>
            </div>
          );
        })()}

        {/* Detailed Issues Sections */}
        <div className="space-y-6">
          {displayedIssues.map((issue) => {
            const Icon = iconMap[issue.icon] || Scale;
            return (
              <div
                key={issue.id}
                id={issue.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs hover:shadow-md transition-all scroll-mt-24"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  {/* Left: Info */}
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100 flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            {issue.category}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold font-serif text-slate-900 mt-1">
                          {issue.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {issue.description}
                    </p>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Common Case Types in this Issue:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {issue.caseTypes.map((type, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Quick Action & Guidance */}
                  <div className="lg:w-80 bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between space-y-4 flex-shrink-0">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                        <FileCheck2 className="w-4 h-4 text-emerald-700" />
                        <span>Document Guidance</span>
                      </div>
                      <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                        Prepare related contracts, legal notices, FIR copies, or revenue documents before consultation.
                      </p>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Consultation: 30 mins confidential session
                      </div>
                    </div>

                    <Link
                      to={`/advocates?category=${encodeURIComponent(issue.category)}&issue=${encodeURIComponent(issue.name)}`}
                      className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded-xl text-xs md:text-sm text-center flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <span>Find {issue.shortName} Advocates</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
