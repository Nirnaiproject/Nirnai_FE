import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Building, Phone, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export default function ConsultationModal({ advocate, isOpen, onClose }) {
  if (!isOpen || !advocate) return null;

  const [mode, setMode] = useState('Video Call'); // 'Video Call' | 'In-Person Office' | 'Phone Call'
  const [selectedSlot, setSelectedSlot] = useState(advocate.availableSlots?.[0] || 'Tomorrow at 11:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [caseSummary, setCaseSummary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = 'NIR-' + Math.floor(100000 + Math.random() * 900000);
      setBookingId(generatedId);
      setIsSubmitting(false);
      setBookingConfirmed(true);
    }, 800);
  };

  const handleReset = () => {
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <h3 className="font-bold text-slate-900 text-lg">
              {bookingConfirmed ? 'Consultation Confirmed' : 'Book Legal Consultation'}
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {bookingConfirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Booking Reference: {bookingId}
                </span>
                <h4 className="text-2xl font-bold font-serif text-slate-900 mt-2">
                  Appointment Scheduled!
                </h4>
                <p className="text-xs md:text-sm text-slate-500 max-w-md mx-auto mt-1">
                  Your legal consultation with <strong className="text-slate-800">{advocate.name}</strong> has been secured.
                </p>
              </div>

              {/* Summary card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2 text-xs md:text-sm max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Advocate:</span>
                  <span className="font-semibold text-slate-800">{advocate.name} ({advocate.barCouncilNumber})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Mode:</span>
                  <span className="font-semibold text-emerald-800">{mode}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-semibold text-slate-800">{selectedSlot}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Consultation Fee:</span>
                  <span className="font-bold text-slate-900">₹{advocate.discountedFee || advocate.consultationFee} (Payable at Chamber/Secure Link)</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 text-left max-w-md mx-auto flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>
                  Please keep copies of all relevant documents (Mother deeds, notices, agreement copies, revenue records) ready for the advocate's review.
                </span>
              </div>

              <button
                onClick={handleReset}
                className="w-full max-w-md mx-auto py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded-xl text-sm transition-all shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Advocate Mini Preview */}
              <div className="flex items-center gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <img
                  src={advocate.photo}
                  alt={advocate.name}
                  className="w-14 h-14 rounded-xl object-cover object-top border border-slate-200 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-sm truncate">{advocate.name}</h4>
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 truncate">{advocate.title}</p>
                  <p className="text-xs text-slate-700 font-semibold mt-0.5">
                    Fee: ₹{advocate.discountedFee || advocate.consultationFee} • {advocate.city}
                  </p>
                </div>
              </div>

              {/* Consultation Mode */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Preferred Consultation Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMode('Video Call')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                      mode === 'Video Call'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Video className="w-4 h-4 text-emerald-700" />
                    <span>Video Call</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('In-Person Office')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                      mode === 'In-Person Office'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Building className="w-4 h-4 text-emerald-700" />
                    <span>Office Chamber</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('Phone Call')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                      mode === 'Phone Call'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Phone className="w-4 h-4 text-emerald-700" />
                    <span>Phone Call</span>
                  </button>
                </div>
              </div>

              {/* Slot Picker */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                  <span>Available Slots</span>
                  <span className="text-[11px] text-emerald-700 font-normal">Next 48 Hours</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(advocate.availableSlots || ['Tomorrow at 11:00 AM', 'Tomorrow at 3:30 PM', 'Wednesday at 10:00 AM']).map((slot, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-medium transition-all text-center ${
                        selectedSlot === slot
                          ? 'border-emerald-700 bg-emerald-800 text-white font-semibold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 text-xs md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                />
              </div>

              {/* Case Brief Summary */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                  <span>Brief Case Summary</span>
                  <span className="text-[11px] text-slate-400">Confidential & Privileged</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Dispute regarding agricultural land boundary in Madhapur / Builder delay in flat handover..."
                  value={caseSummary}
                  onChange={(e) => setCaseSummary(e.target.value)}
                  className="w-full px-3 py-2 text-xs md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming Appointment...' : `Confirm Consultation • ₹${advocate.discountedFee || advocate.consultationFee}`}
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  Protected by Advocate-Client privilege under Indian Evidence Act.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
