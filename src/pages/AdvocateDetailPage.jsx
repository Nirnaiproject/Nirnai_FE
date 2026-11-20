import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  Briefcase, 
  Scale, 
  CalendarCheck, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Languages, 
  Building2,
  Phone,
  Video
} from 'lucide-react';
import { ADVOCATES } from '../data/mockData';

export default function AdvocateDetailPage({ onBookConsultation }) {
  const { id } = useParams();
  const advocate = ADVOCATES.find(a => a.id === id) || ADVOCATES[0];

  return (
    <div className="min-h-screen bg-slate-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/advocates"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Advocates Directory</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Profile Info (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header Profile Box */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <img
                  src={advocate.photo}
                  alt={advocate.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover object-top border-4 border-slate-100 shadow-md flex-shrink-0"
                />

                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Bar Enrolled: {advocate.barCouncilNumber}</span>
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                      {advocate.experienceYears}+ Years Experience
                    </span>
                  </div>

                  <h1 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">
                    {advocate.name}
                  </h1>
                  <p className="text-sm font-medium text-slate-600">
                    {advocate.title}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span>{advocate.rating}</span>
                      <span className="text-slate-400 font-normal">({advocate.reviewCount} verified client reviews)</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1 text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{advocate.locality}, {advocate.city}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stat Bar */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 text-center">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-lg md:text-xl font-bold text-slate-900">{advocate.casesHandled}</div>
                  <div className="text-[11px] text-slate-500">Cases Handled</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-lg md:text-xl font-bold text-emerald-800">{advocate.successRate}</div>
                  <div className="text-[11px] text-slate-500">Positive Settlements</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-lg md:text-xl font-bold text-slate-900">{advocate.responseTime}</div>
                  <div className="text-[11px] text-slate-500">Avg. Response Time</div>
                </div>
              </div>
            </div>

            {/* About & Practice Philosophy */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg md:text-xl font-bold font-serif text-slate-900">
                About Counsel
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {advocate.bio}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Chambers & Office Address
                </h3>
                <p className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span>{advocate.officeAddress}</span>
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Languages Spoken
                </h3>
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-slate-400" />
                  <span className="text-xs md:text-sm text-slate-700">{advocate.languages.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Courts & Specializations */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-5">
              <div>
                <h2 className="text-base md:text-lg font-bold font-serif text-slate-900 mb-3">
                  Courts of Regular Practice
                </h2>
                <div className="flex flex-wrap gap-2">
                  {advocate.courts.map((court, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <span>🏛️</span>
                      <span>{court}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h2 className="text-base md:text-lg font-bold font-serif text-slate-900 mb-3">
                  Core Civil Specializations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {advocate.specializations.map((spec, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-semibold"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Verified Client Reviews */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-bold font-serif text-slate-900">
                  Client Reviews & Ratings
                </h2>
                <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                  100% Verified Consultations
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">10 days ago</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 italic">
                    "Extremely knowledgeable in boundary wall and revenue survey disputes. Guided us with patience and drafted a crisp notice that got our encroachment resolved amicably."
                  </p>
                  <div className="text-xs font-semibold text-slate-900">
                    S. Venkat Reddy • Hyderabad
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">3 weeks ago</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 italic">
                    "No false promises. Pointed out the missing links in our 1998 ancestral partition deed upfront and advised proper rectification."
                  </p>
                  <div className="text-xs font-semibold text-slate-900">
                    Deepak M. • Bengaluru
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Booking Widget (Right 4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-5">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                  Consultation Fee
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900">
                    ₹{advocate.discountedFee || advocate.consultationFee}
                  </span>
                  {advocate.discountedFee && (
                    <span className="text-sm text-slate-400 line-through">₹{advocate.consultationFee}</span>
                  )}
                  <span className="text-xs text-slate-500">/ 30 min session</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Includes initial document scrutiny</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Advocate-Client privilege confidentiality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Available via Video, Office, or Phone</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                  Next Available Slots:
                </span>
                <div className="space-y-2">
                  {(advocate.availableSlots || []).map((slot, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl border border-slate-200 text-xs flex items-center justify-between text-slate-700 bg-white"
                    >
                      <span className="font-medium">{slot}</span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Available
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onBookConsultation?.(advocate)}
                className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-2xl text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Legal Consultation</span>
              </button>

              <div className="text-[11px] text-slate-400 text-center">
                Instant confirmation • Reschedule anytime up to 2 hours prior
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
