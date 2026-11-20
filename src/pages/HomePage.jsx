
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

import SearchCard from '../components/SearchCard';
import ValueProps from '../components/ValueProps';
import PopularServices from '../components/PopularServices';
import FeaturedAdvocates from '../components/FeaturedAdvocates';
import HowItWorks from '../components/HowItWorks';
import LegalKnowledgeSection from '../components/LegalKnowledgeSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';

export default function HomePage({
  onBookConsultation,
  onOpenJoinAdvocate
}) {
  return (
    <div className="min-h-screen bg-[#F7F4EE]">

      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] overflow-hidden">

        <img
          src="/hero-bg.png"
          alt="Lady Justice, legal books and a gavel in a law library"
          width="1365"
          height="768"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
        />

        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101F2C]/90 via-[#101F2C]/65 to-[#101F2C]/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101F2C]/50 via-transparent to-transparent" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="mb-10 max-w-3xl space-y-6">

            {/* Legal categories */}
            <div className="rise-in inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              <span className="text-amber-200">Civil</span>
              <span className="text-white/40">•</span>
              <span className="text-teal-200">Criminal</span>
              <span className="text-white/40">•</span>
              <span className="text-sky-200">Constitutional & Tribunals</span>
            </div>

            {/* Main heading */}
            <h1 className="rise-in rise-d1 max-w-3xl font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[62px]">
              Find the Right Legal Direction with{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-[#F5D58B] bg-clip-text text-transparent">
                NIRNAI.
              </span>
            </h1>

            {/* Description */}
            <p className="rise-in rise-d2 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
              Discover legal services, connect with suitable advocates
              and take informed steps towards resolving your legal concerns.
            </p>

            {/* Trust information */}
            <div className="rise-in rise-d3 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-100 sm:text-sm">

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/15 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                Advocate Credentials
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-500/15 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-amber-300" />
                Clear Consultation Details
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-500/15 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-sky-300" />
                Confidential Consultations
              </span>

            </div>
          </div>

          {/* SEARCH SECTION */}
          <div
            id="search-section"
            className="rise-in rise-d4 w-full scroll-mt-24"
          >
            <SearchCard
              initialCategory="Civil cases"
              initialIssue="Money Recovery & Summary Suits"
              initialCaseType="Order 37 CPC Summary Suit for Debt Recovery"
              initialCity="Hyderabad"
              initialLocality="Madhapur"
              allowThemeToggle={false}
            />
          </div>

        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <ValueProps />

      {/* POPULAR LEGAL SERVICES */}
      <PopularServices />

      {/* FEATURED ADVOCATES */}
      <div className="defer-paint">
        <FeaturedAdvocates
          onBookConsultation={onBookConsultation}
          limit={4}
        />
      </div>

      {/* HOW NIRNAI WORKS */}
      <div className="defer-paint">
        <HowItWorks
          onOpenJoinAdvocate={onOpenJoinAdvocate}
        />
      </div>

      {/* LEGAL KNOWLEDGE */}
      <div className="defer-paint">
        <LegalKnowledgeSection />
      </div>

      {/* TESTIMONIALS */}
      <div className="defer-paint">
        <TestimonialsSection />
      </div>

      {/* FAQ */}
      <div className="defer-paint">
        <FaqSection />
      </div>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#17364D] via-[#102C40] to-[#091B2B] py-14 text-white sm:py-16">

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">

          <div className="max-w-2xl space-y-3">
            <h3 className="font-serif text-2xl font-bold text-amber-300 md:text-3xl">
              Need Help With a Legal Concern?
            </h3>

            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Explore legal services, find suitable advocates and take
              the next step towards understanding your legal options.
            </p>
          </div>

          <div className="flex flex-shrink-0 flex-col items-center gap-3 sm:flex-row">

            <a
              href="#search-section"
              className="rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-[#102C40] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 active:scale-95"
            >
              Find an Advocate
            </a>

            <button
              onClick={() => onOpenJoinAdvocate?.()}
              className="rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 active:scale-95"
            >
              Join as Advocate
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}
