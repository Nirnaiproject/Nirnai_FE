import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, TRUST_METRICS } from '../data/mockData';

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Metrics Bar */}
        <div className="bg-slate-900 rounded-3xl p-6 md:p-10 mb-14 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="pt-4 md:pt-0">
                <div className="font-serif text-3xl md:text-4xl font-extrabold text-amber-400">
                  {metric.number}
                </div>
                <div className="text-xs md:text-sm text-slate-300 font-medium mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            CLIENT EXPERIENCES
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mt-2">
            Trusted by Citizens Across India
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Real stories of people who found clarity, saved savings, and resolved civil conflicts through NIRNAI verified advocates.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{t.date}</span>
                </div>

                <div className="mb-3">
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">
                    {t.caseType}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{t.name}</span>
                    {t.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.role} • {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
