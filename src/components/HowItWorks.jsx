import React, { useState } from 'react';
import { Search, ShieldCheck, CalendarCheck, CheckCircle2, UserCheck, Scale, Award } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

export default function HowItWorks({ onOpenJoinAdvocate }) {
  const [activeTab, setActiveTab] = useState('clients'); // 'clients' | 'advocates'

  const clientSteps = HOW_IT_WORKS_STEPS;

  const advocateSteps = [
    {
      step: '01',
      title: 'Submit Bar Council Credentials',
      description: 'Provide your State Bar Council enrollment number, court practice certificate, and primary civil specialization areas.',
      icon: 'Award'
    },
    {
      step: '02',
      title: 'Verification & Profile Activation',
      description: 'Our verification team validates your standing with the Bar Council within 24-48 hours and activates your verified practitioner badge.',
      icon: 'ShieldCheck'
    },
    {
      step: '03',
      title: 'Receive Pre-Screened Client Inquiries',
      description: 'Connect with clients needing representation in your city and practice courts. Manage appointment slots and consultation briefs digitally.',
      icon: 'UserCheck'
    }
  ];

  const steps = activeTab === 'clients' ? clientSteps : advocateSteps;

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            TRANSPARENT LEGAL ACCESS
          </span>
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-slate-900 mt-3">
            How NIRNAI Works
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-2">
            Demystifying legal guidance in India. Clear, structured, and verified step-by-step assistance.
          </p>

          {/* Toggle between Client and Advocate track */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 mt-6">
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'clients'
                  ? 'bg-white text-emerald-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Clients Seeking Counsel
            </button>
            <button
              onClick={() => setActiveTab('advocates')}
              className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'advocates'
                  ? 'bg-white text-emerald-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Practicing Advocates
            </button>
          </div>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200/80 hover:border-emerald-600/50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-extrabold text-amber-500/80 group-hover:text-amber-500 transition-colors">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-200">
                  {index === 0 && <Search className="w-6 h-6" />}
                  {index === 1 && <ShieldCheck className="w-6 h-6" />}
                  {index === 2 && <CalendarCheck className="w-6 h-6" />}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-emerald-950 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg md:text-xl font-bold font-serif text-amber-300">
              {activeTab === 'clients' ? 'Unsure about your legal standing or limitation period?' : 'Expand your civil practice with digital reach'}
            </h4>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl">
              {activeTab === 'clients'
                ? 'Get your property deeds, civil dispute documents, or lease agreements reviewed with preliminary legal diligence.'
                : 'Join over 1,800 verified advocates across Telangana, Karnataka, Maharashtra, and Delhi Bar Councils.'}
            </p>
          </div>

          <div className="flex-shrink-0">
            {activeTab === 'clients' ? (
              <a
                href="#search-section"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Search Advocates Now</span>
              </a>
            ) : (
              <button
                onClick={() => onOpenJoinAdvocate?.()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                <span>Register with NIRNAI Bar</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
