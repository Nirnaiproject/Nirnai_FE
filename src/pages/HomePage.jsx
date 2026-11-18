import React from 'react';
import { Scale, CheckCircle2 } from 'lucide-react';
import SearchCard from '../components/SearchCard';
import ValueProps from '../components/ValueProps';
import PopularServices from '../components/PopularServices';
import FeaturedAdvocates from '../components/FeaturedAdvocates';
import HowItWorks from '../components/HowItWorks';
import LegalKnowledgeSection from '../components/LegalKnowledgeSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';

export default function HomePage({ onBookConsultation, onOpenJoinAdvocate }) {
  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      
      {/* Full-bleed hero, same pattern as GatedPlus: photo fills the fold, search sits on it */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src="/hero-bg.png"
          alt="Lady Justice, legal books, and a gavel in a law library"
          width="1365"
          height="768"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
        />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-14">
          <div className="mb-8 max-w-3xl space-y-5">
            <div className="rise-in inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400"></span>
              <span className="text-amber-200">Civil</span>
              <span className="text-white/40">•</span>
              <span className="text-teal-200">Criminal</span>
              <span className="text-white/40">•</span>
              <span className="text-sky-200">Constitutional & Tribunals</span>
            </div>

            <h1 className="rise-in rise-d1 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              Find the right legal direction with{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-teal-200 bg-clip-text text-transparent">
                NIRNAI.
              </span>
            </h1>

            <p className="rise-in rise-d2 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Legal services. Trusted connections. Clear information. Take your first step towards understanding your legal options.
            </p>

            <div className="rise-in rise-d3 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-100 sm:text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 ring-1 ring-emerald-300/30">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                State Bar enrolled
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 ring-1 ring-amber-300/30">
                <CheckCircle2 className="h-4 w-4 text-amber-300" />
                Transparent fixed fees
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 px-3 py-1 ring-1 ring-sky-300/30">
                <CheckCircle2 className="h-4 w-4 text-sky-300" />
                Confidential consultations
              </span>
            </div>
          </div>

          <div className="float-y pointer-events-none absolute right-8 top-28 hidden w-56 rounded-2xl border border-white/20 bg-white/15 p-4 text-white shadow-2xl backdrop-blur-md lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold">1,800+ verified</div>
                <div className="text-[11px] text-slate-200">Practicing advocates</div>
              </div>
            </div>
          </div>

          <div id="search-section" className="rise-in rise-d4 scroll-mt-24">
            <SearchCard
              initialCategory="Civil cases"
              initialIssue="Money Recovery & Summary Suits"
              initialCaseType="Order 37 CPC Summary Suit for Debt Recovery"
              initialCity="Hyderabad"
              initialLocality="Madhapur"
              allowThemeToggle={true}
            />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS BAR */}
      <ValueProps />

      {/* POPULAR CIVIL SERVICES (Reference Image 3) */}
      <PopularServices />

      <div className="defer-paint">
      <FeaturedAdvocates onBookConsultation={onBookConsultation} limit={4} />
      </div>

      <div className="defer-paint">
      <HowItWorks onOpenJoinAdvocate={onOpenJoinAdvocate} />
      </div>

      <div className="defer-paint">
      <LegalKnowledgeSection />
      </div>

      <div className="defer-paint">
      <TestimonialsSection />
      </div>

      <div className="defer-paint">
      <FaqSection />
      </div>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-emerald-900 to-slate-950 py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-amber-300">
              Need immediate advice on a property, contract, or civil issue?
            </h3>
            <p className="text-sm text-slate-300">
              Book a 30-minute confidential consultation with a verified High Court or Civil Court counsel today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              href="#search-section"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg active:scale-95"
            >
              Search Advocates
            </a>
            <button
              onClick={() => onOpenJoinAdvocate?.()}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm border border-white/20 transition-all"
            >
              Join as Advocate
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
