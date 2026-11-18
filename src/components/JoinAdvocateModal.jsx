import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Briefcase, Award, FileCheck } from 'lucide-react';
import { LEGAL_ISSUES, CITIES_AND_LOCALITIES } from '../data/mockData';

export default function JoinAdvocateModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    barCouncilNumber: '',
    stateBar: 'Telangana',
    experienceYears: '10',
    primaryCity: 'Hyderabad',
    primaryLocality: 'Madhapur',
    specializations: ['Property & Real Estate'],
    courtsOfPractice: 'Telangana High Court',
    consultationFee: '1500',
    email: '',
    phone: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleSpecialization = (issueName) => {
    setFormData(prev => {
      const exists = prev.specializations.includes(issueName);
      if (exists) {
        return { ...prev, specializations: prev.specializations.filter(s => s !== issueName) };
      } else {
        return { ...prev, specializations: [...prev.specializations, issueName] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setStep(1);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-lg">Join NIRNAI Bar Network</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-serif text-slate-900">
                Application Received!
              </h4>
              <p className="text-xs md:text-sm text-slate-500 max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our legal compliance officer will verify your Bar Council credential ({formData.barCouncilNumber}) within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-500">
                NIRNAI welcomes independent civil counsels, advocates, and retired judicial associates with clean Bar standing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Adv. Rajeshwar Rao"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Bar Enrollment No. *</label>
                  <input
                    type="text"
                    required
                    placeholder="TS/1429/2008"
                    value={formData.barCouncilNumber}
                    onChange={(e) => setFormData({ ...formData, barCouncilNumber: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl uppercase focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Years of Practice *</label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    required
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Primary Metro City *</label>
                  <select
                    value={formData.primaryCity}
                    onChange={(e) => setFormData({ ...formData, primaryCity: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
                  >
                    {CITIES_AND_LOCALITIES.map(c => (
                      <option key={c.city} value={c.city}>{c.city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Select Practice Specializations (Civil Law)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {LEGAL_ISSUES.map(issue => {
                    const isSelected = formData.specializations.includes(issue.name);
                    return (
                      <button
                        key={issue.id}
                        type="button"
                        onClick={() => toggleSpecialization(issue.name)}
                        className={`p-2 text-left text-[11px] font-medium rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-semibold'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {issue.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Official Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="advocate@barcouncil.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98490 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-xs md:text-sm shadow-md transition-all active:scale-98"
                >
                  Submit Bar Membership Application
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2">
                  Compliant with Bar Council of India professional standards and BCI Rules under the Advocates Act 1961.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
