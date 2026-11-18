import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ShieldCheck, Users, Target, HeartHandshake, CheckCircle2, Award } from 'lucide-react';
import NirnaiLogo from '../components/NirnaiLogo';

export default function AboutPage({ onOpenJoinAdvocate }) {
  return (
    <div className="min-h-screen bg-slate-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        
        {/* Mission Hero */}
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-slate-200 shadow-sm text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-block">
            <NirnaiLogo linkToHome={false} />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
            Bridging Indian Citizens with Verified Legal Counsel
          </h1>
          
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            NIRNAI was founded to eliminate ambiguity in the Indian legal ecosystem. We empower individuals, homeowners, and businesses to connect directly with verified advocates based on specialization, jurisdiction, and transparent fee standards.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              to="/advocates"
              className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs md:text-sm rounded-xl shadow-xs"
            >
              Explore Advocates
            </Link>
            <button
              onClick={() => onOpenJoinAdvocate?.()}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs md:text-sm rounded-xl"
            >
              Join NIRNAI Bar Network
            </button>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900">
              100% Bar Council Verified
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Every practitioner listed on NIRNAI undergoes rigorous authentication of their State Bar Council enrollment number, active years of court standing, and jurisdictional competence.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900">
              Specialized in Civil Law
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Instead of a generic marketplace, NIRNAI zeroes in on civil matters—property disputes, ancestral partition, contracts, and tenant laws—which impact citizen livelihoods the most.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900">
              Transparent & Ethical
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Strictly compliant with the Bar Council of India (BCI) rules under the Advocates Act 1961. We provide structured information and do not solicit clients on behalf of advocates.
            </p>
          </div>
        </div>

        {/* Founding Commitment */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
              OUR COMMITMENT
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
              Accessible Justice Starts with Accurate Legal Guidance
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              In India, civil litigation can stretch for years due to improper preliminary notices, missing document chains, or misdirected court jurisdictions. NIRNAI equips clients with structured awareness before filing, enabling constructive dialogue, out-of-court settlements, or resolute court representation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
