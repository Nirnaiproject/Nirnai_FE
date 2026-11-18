import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  Briefcase, 
  Video, 
  Clock, 
  ArrowRight,
  CalendarCheck
} from 'lucide-react';
import { ADVOCATES } from '../data/mockData';

export default function FeaturedAdvocates({ onBookConsultation, limit = 4, filterCity, filterIssue }) {
  let displayAdvocates = [...ADVOCATES];

  if (filterCity) {
    displayAdvocates = displayAdvocates.filter(a => a.city.toLowerCase() === filterCity.toLowerCase());
  }

  if (filterIssue) {
    displayAdvocates = displayAdvocates.filter(a => 
      a.specializations.some(s => s.toLowerCase().includes(filterIssue.toLowerCase()))
    );
  }

  const list = limit ? displayAdvocates.slice(0, limit) : displayAdvocates;

  return (
    <section className="py-10 md:py-16 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 md:mb-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                VERIFIED LEGAL EXPERTS
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Bar Council Verified
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mt-2">
              Top Rated Civil Advocates
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Connect directly with verified civil advocates with demonstrated track records in High Courts and City Civil Tribunals.
            </p>
          </div>

          <Link
            to="/advocates"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors group"
          >
            <span>View All Advocates ({ADVOCATES.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Advocates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((advocate) => (
            <div
              key={advocate.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-emerald-600/40"
            >
              <div>
                {/* Top Image & Badge */}
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  <img
                    src={advocate.photo}
                    alt={advocate.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Verified Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Bar Verified</span>
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 bg-slate-900/90 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="text-white">{advocate.rating}</span>
                    <span className="text-slate-400 text-[10px]">({advocate.reviewCount})</span>
                  </div>

                  {/* Location Overlay */}
                  <div className="absolute bottom-2.5 left-3 text-white text-xs flex items-center gap-1 font-medium drop-shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{advocate.locality}, {advocate.city}</span>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-4 sm:p-5">
                  <div className="text-[11px] font-mono text-slate-500 mb-1">
                    Bar Reg: {advocate.barCouncilNumber}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {advocate.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium line-clamp-1 mb-2.5">
                    {advocate.title}
                  </p>

                  {/* Experience & Courts */}
                  <div className="space-y-1.5 text-xs text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Experience:</span>
                      <span className="font-semibold text-slate-800">{advocate.experienceYears}+ Years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Cases Handled:</span>
                      <span className="font-semibold text-slate-800">{advocate.casesHandled}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 pt-1 border-t border-slate-200/60">
                      🏛️ {advocate.courts[0]}
                    </div>
                  </div>

                  {/* Specialization Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {advocate.specializations.slice(0, 2).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer & CTA */}
              <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Consultation</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-extrabold text-slate-900">₹{advocate.discountedFee || advocate.consultationFee}</span>
                    {advocate.discountedFee && (
                      <span className="text-[11px] text-slate-400 line-through">₹{advocate.consultationFee}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <Link
                    to={`/advocate/${advocate.id}`}
                    className="p-2 text-slate-600 hover:text-emerald-800 hover:bg-slate-100 rounded-lg text-xs font-semibold"
                    title="View Full Profile"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => onBookConsultation?.(advocate)}
                    className="px-3 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1 active:scale-95 transition-all"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
