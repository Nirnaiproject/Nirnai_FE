import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  User, 
  Briefcase, 
  Phone, 
  Mail, 
  Lock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  FileText, 
  Clock, 
  Scale, 
  Check, 
  AlertCircle,
  HelpCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import NirnaiLogo from '../components/NirnaiLogo';
import { LEGAL_ISSUES, CITIES_AND_LOCALITIES } from '../data/mockData';

const INDIAN_STATES = [
  'Telangana',
  'Karnataka',
  'Maharashtra',
  'Delhi NCR',
  'Tamil Nadu',
  'Andhra Pradesh',
  'Gujarat',
  'West Bengal',
  'Rajasthan',
  'Kerala'
];

const STATE_BAR_COUNCILS = [
  'Bar Council of Telangana',
  'Bar Council of Karnataka',
  'Bar Council of Maharashtra & Goa',
  'Bar Council of Delhi',
  'Bar Council of Tamil Nadu & Puducherry',
  'Bar Council of Andhra Pradesh',
  'Bar Council of West Bengal',
  'Bar Council of India'
];

const COURTS_LIST = [
  'Supreme Court of India',
  'High Court',
  'City Civil Court',
  'District & Sessions Court',
  'Debts Recovery Tribunal (DRT)',
  'National Company Law Tribunal (NCLT)',
  'RERA Appellate Tribunal',
  'Consumer Disputes Redressal Commission'
];

export default function RegisterPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') === 'advocate' ? 'advocate' : 'client';

  const [activeTab, setActiveTab] = useState(initialRole); // 'client' | 'advocate'

  // ================= CLIENT REGISTRATION STATE =================
  const [clientForm, setClientForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    state: 'Telangana',
    city: 'Hyderabad',
    locality: '',
    acceptTerms: false
  });

  const [clientOtpSent, setClientOtpSent] = useState(false);
  const [clientOtp, setClientOtp] = useState(['', '', '', '', '', '']);
  const [clientOtpVerified, setClientOtpVerified] = useState(false);
  const [clientShowPassword, setClientShowPassword] = useState(false);
  const [clientSuccess, setClientSuccess] = useState(false);
  const [clientError, setClientError] = useState('');

  // ================= ADVOCATE REGISTRATION STATE (5 STEPS) =================
  const [advocateStep, setAdvocateStep] = useState(1);
  const [advocateForm, setAdvocateForm] = useState({
    // Step 1: Personal Details
    fullName: '',
    mobile: '',
    email: '',
    profilePhotoName: '',
    languages: ['English', 'Telugu'],
    // Step 2: Professional Details
    barCouncilNumber: '',
    stateBarCouncil: 'Bar Council of Telangana',
    enrollmentYear: '2015',
    yearsOfPractice: '9',
    primaryPracticeArea: 'Property & Real Estate',
    otherSpecializations: ['Contract & Commercial', 'Injunctions & Legal Remedies'],
    courtsPractised: ['High Court', 'City Civil Court'],
    // Step 3: Practice Location
    state: 'Telangana',
    district: 'Hyderabad',
    city: 'Hyderabad',
    locality: 'Madhapur',
    officeAddress: '',
    consultationMode: 'Both', // 'Online' | 'In-person' | 'Both'
    // Step 4: Verification Documents
    enrollmentCertName: '',
    advocateIdCardName: '',
    // Step 5: Professional Profile
    bio: '',
    availability: 'Weekdays 10:00 AM - 6:00 PM',
    acceptTerms: false
  });

  const [advocateOtpSent, setAdvocateOtpSent] = useState(false);
  const [advocateOtp, setAdvocateOtp] = useState(['', '', '', '', '', '']);
  const [advocateOtpVerified, setAdvocateOtpVerified] = useState(false);
  const [advocateSubmitted, setAdvocateSubmitted] = useState(false);
  const [advocateApplicationId, setAdvocateApplicationId] = useState('');
  const [advocateError, setAdvocateError] = useState('');

  // ---------------- Client Handlers ----------------
  const handleClientSendOtp = () => {
    if (!clientForm.mobile || clientForm.mobile.length < 10) {
      setClientError('Please enter a valid 10-digit mobile number first.');
      return;
    }
    setClientError('');
    setClientOtpSent(true);
    setClientOtp(['1', '2', '3', '4', '5', '6']);
  };

  const handleClientVerifyOtp = () => {
    if (clientOtp.join('').length < 6) {
      setClientError('Please enter the 6-digit OTP code.');
      return;
    }
    setClientOtpVerified(true);
    setClientError('');
  };

  const handleClientSubmit = (e) => {
    e.preventDefault();
    if (!clientOtpVerified) {
      setClientError('Please verify your mobile number with OTP first.');
      return;
    }
    if (clientForm.password !== clientForm.confirmPassword) {
      setClientError('Passwords do not match. Please re-enter.');
      return;
    }
    if (!clientForm.acceptTerms) {
      setClientError('Please accept the Terms & Privacy Policy to proceed.');
      return;
    }
    setClientError('');
    setClientSuccess(true);
  };

  // ---------------- Advocate Handlers ----------------
  const handleAdvocateSendOtp = () => {
    if (!advocateForm.mobile || advocateForm.mobile.length < 10) {
      setAdvocateError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setAdvocateError('');
    setAdvocateOtpSent(true);
    setAdvocateOtp(['1', '2', '3', '4', '5', '6']);
  };

  const handleAdvocateVerifyOtp = () => {
    if (advocateOtp.join('').length < 6) {
      setAdvocateError('Please enter the 6-digit OTP code.');
      return;
    }
    setAdvocateOtpVerified(true);
    setAdvocateError('');
  };

  const validateAdvocateStep = (step) => {
    setAdvocateError('');
    if (step === 1) {
      if (!advocateForm.fullName || !advocateForm.mobile || !advocateForm.email) {
        setAdvocateError('Please fill in your Full Name, Mobile, and Email.');
        return false;
      }
      if (!advocateOtpVerified) {
        setAdvocateError('Please verify your mobile number with OTP before continuing.');
        return false;
      }
      if (advocateForm.languages.length === 0) {
        setAdvocateError('Please select at least one language known.');
        return false;
      }
      return true;
    }
    if (step === 2) {
      if (!advocateForm.barCouncilNumber) {
        setAdvocateError('Please enter your Bar Council Enrollment Number.');
        return false;
      }
      if (!advocateForm.primaryPracticeArea) {
        setAdvocateError('Please select your Primary Practice Area.');
        return false;
      }
      if (advocateForm.courtsPractised.length === 0) {
        setAdvocateError('Please select at least one Court or Tribunal of practice.');
        return false;
      }
      return true;
    }
    if (step === 3) {
      if (!advocateForm.state || !advocateForm.district || !advocateForm.city || !advocateForm.locality || !advocateForm.officeAddress) {
        setAdvocateError('Please fill in complete practice location & office address.');
        return false;
      }
      return true;
    }
    if (step === 4) {
      if (!advocateForm.enrollmentCertName) {
        setAdvocateError('Please upload your Bar Council Enrollment Certificate.');
        return false;
      }
      return true;
    }
    return true;
  };

  const handleNextStep = () => {
    if (validateAdvocateStep(advocateStep)) {
      setAdvocateStep(prev => Math.min(5, prev + 1));
    }
  };

  const handlePrevStep = () => {
    setAdvocateError('');
    setAdvocateStep(prev => Math.max(1, prev - 1));
  };

  const handleAdvocateFinalSubmit = (e) => {
    e.preventDefault();
    if (!advocateForm.acceptTerms) {
      setAdvocateError('Please accept the Terms & Bar Council Compliance Declaration.');
      return;
    }
    const generatedId = 'NIR-ADV-' + Math.floor(100000 + Math.random() * 900000);
    setAdvocateApplicationId(generatedId);
    setAdvocateSubmitted(true);
  };

  const toggleLanguage = (lang) => {
    setAdvocateForm(prev => {
      const exists = prev.languages.includes(lang);
      return {
        ...prev,
        languages: exists ? prev.languages.filter(l => l !== lang) : [...prev.languages, lang]
      };
    });
  };

  const toggleCourt = (court) => {
    setAdvocateForm(prev => {
      const exists = prev.courtsPractised.includes(court);
      return {
        ...prev,
        courtsPractised: exists ? prev.courtsPractised.filter(c => c !== court) : [...prev.courtsPractised, court]
      };
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <NirnaiLogo />

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-emerald-800 transition-colors">About Us</Link>
            <Link to="/login" className="font-semibold text-emerald-800 hover:underline">
              Already have an account? Sign In
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Registration Container */}
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Top Switcher: Client Registration vs Advocate Registration */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
              Create Your NIRNAI Account
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-lg mx-auto">
              Choose your profile type to proceed with registration on India's verified legal network.
            </p>

            {/* Segmented Control Pill */}
            <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl mt-6 shadow-inner">
              <button
                type="button"
                onClick={() => { setActiveTab('client'); setClientError(''); }}
                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === 'client'
                    ? 'bg-white text-emerald-900 shadow-md scale-100'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="w-4 h-4 text-emerald-700" />
                <span>1. Client Registration</span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab('advocate'); setAdvocateError(''); }}
                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === 'advocate'
                    ? 'bg-white text-emerald-900 shadow-md scale-100'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-4 h-4 text-emerald-700" />
                <span>2. Advocate Registration (Multi-Step)</span>
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* TAB 1: CLIENT REGISTRATION FORM                           */}
          {/* ========================================================= */}
          {activeTab === 'client' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl transition-all">
              
              {clientSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-slate-900">
                    Registration Successful!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Welcome to NIRNAI, <strong>{clientForm.fullName}</strong>. Your client account is verified and ready. You can now consult verified advocates across India.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <Link
                      to="/"
                      className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-md"
                    >
                      Go to Home & Search Advocates
                    </Link>
                    <Link
                      to="/login?role=client"
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl"
                    >
                      Login Page
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleClientSubmit} className="space-y-6">
                  
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="text-xl font-bold font-serif text-slate-900">
                      Client Registration Form
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Enter your details to find and book consultations with verified civil advocates.
                    </p>
                  </div>

                  {clientError && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{clientError}</span>
                    </div>
                  )}

                  {/* Field 1: Full Name */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={clientForm.fullName}
                        onChange={(e) => setClientForm({ ...clientForm, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Field 2 & 3: Mobile Number & Mobile OTP Verification */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Mobile Number & OTP Verification <span className="text-red-500">*</span>
                    </label>
                    
                    <div className="flex gap-2">
                      <div className="flex flex-1 rounded-xl border border-slate-300 overflow-hidden focus-within:ring-2 focus-within:ring-emerald-700/30 focus-within:border-emerald-700">
                        <div className="bg-slate-50 px-3.5 py-3 border-r border-slate-300 text-xs sm:text-sm font-semibold text-slate-700">
                          +91
                        </div>
                        <input
                          type="tel"
                          maxLength={10}
                          required
                          disabled={clientOtpVerified}
                          placeholder="Enter 10-digit Mobile Number"
                          value={clientForm.mobile}
                          onChange={(e) => setClientForm({ ...clientForm, mobile: e.target.value.replace(/\D/g, '') })}
                          className="w-full px-3.5 py-3 text-xs sm:text-sm focus:outline-none disabled:bg-slate-50"
                        />
                      </div>

                      {!clientOtpVerified ? (
                        <button
                          type="button"
                          onClick={handleClientSendOtp}
                          disabled={clientForm.mobile.length < 10}
                          className="px-4 py-3 bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white font-semibold text-xs rounded-xl shadow-xs whitespace-nowrap transition-all"
                        >
                          {clientOtpSent ? 'Resend OTP' : 'Get OTP'}
                        </button>
                      ) : (
                        <div className="px-4 py-3 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs rounded-xl flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>

                    {/* OTP Input Row */}
                    {clientOtpSent && !clientOtpVerified && (
                      <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-600">
                          <span>Enter 6-digit OTP sent to +91 {clientForm.mobile}:</span>
                          <span className="text-emerald-700 font-mono text-[11px]">(Demo code: 123456)</span>
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            maxLength={6}
                            placeholder="Enter 6-digit OTP"
                            value={clientOtp.join('')}
                            onChange={(e) => setClientOtp(e.target.value.split('').slice(0, 6))}
                            className="flex-1 px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                          />
                          <button
                            type="button"
                            onClick={handleClientVerifyOtp}
                            className="px-4 py-2 bg-emerald-800 text-white font-bold text-xs rounded-lg shadow-xs"
                          >
                            Verify OTP
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Field 4: Email Address */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="e.g. ramesh.kumar@example.com"
                        value={clientForm.email}
                        onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Field 5 & 6: Password & Confirm Password */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={clientShowPassword ? 'text' : 'password'}
                          required
                          placeholder="Create strong password"
                          value={clientForm.password}
                          onChange={(e) => setClientForm({ ...clientForm, password: e.target.value })}
                          className="w-full pl-10 pr-10 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                        />
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <button
                          type="button"
                          onClick={() => setClientShowPassword(!clientShowPassword)}
                          className="absolute right-3.5 top-3.5 text-slate-400"
                        >
                          {clientShowPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Confirm Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={clientShowPassword ? 'text' : 'password'}
                          required
                          placeholder="Re-enter password"
                          value={clientForm.confirmPassword}
                          onChange={(e) => setClientForm({ ...clientForm, confirmPassword: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                        />
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Field 7, 8 & 9: State, City, Locality / Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        State <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={clientForm.state}
                        onChange={(e) => setClientForm({ ...clientForm, state: e.target.value })}
                        className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
                      >
                        {INDIAN_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        City <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={clientForm.city}
                        onChange={(e) => setClientForm({ ...clientForm, city: e.target.value })}
                        className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
                      >
                        {CITIES_AND_LOCALITIES.map((c) => (
                          <option key={c.city} value={c.city}>{c.city}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Locality / Area <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Madhapur / Indiranagar"
                        value={clientForm.locality}
                        onChange={(e) => setClientForm({ ...clientForm, locality: e.target.value })}
                        className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                      />
                    </div>
                  </div>

                  {/* Field 10: Accept Terms & Privacy Policy */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={clientForm.acceptTerms}
                        onChange={(e) => setClientForm({ ...clientForm, acceptTerms: e.target.checked })}
                        className="mt-0.5 w-4 h-4 text-emerald-800 rounded border-slate-300 focus:ring-emerald-700 cursor-pointer"
                      />
                      <span className="text-xs text-slate-600 leading-snug">
                        I accept the <a href="#" className="text-emerald-800 underline font-medium">Terms of Service</a> and <a href="#" className="text-emerald-800 underline font-medium">Privacy Policy</a> of NIRNAI. I understand that NIRNAI is a technology guidance platform connecting users with independent advocates under the Advocates Act 1961.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-2xl text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>Complete Client Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-xs text-slate-500 pt-2">
                    Already registered?{' '}
                    <Link to="/login?role=client" className="text-emerald-800 font-bold hover:underline">
                      Sign In Here
                    </Link>
                  </div>

                </form>
              )}

            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: ADVOCATE MULTI-STEP REGISTRATION FORM (5 STEPS)    */}
          {/* ========================================================= */}
          {activeTab === 'advocate' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl transition-all">
              
              {advocateSubmitted ? (
                /* Pending Verification Screen as requested by user */
                <div className="text-center py-10 space-y-5">
                  <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto border-4 border-amber-100">
                    <Clock className="w-10 h-10 animate-spin" />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300 mb-2">
                      <span>Status:</span>
                      <span>Pending Verification</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                      Application Submitted Successfully
                    </h3>
                    <p className="text-xs font-mono font-semibold text-slate-500 mt-1">
                      Reference Application ID: <span className="text-emerald-800 font-bold">{advocateApplicationId}</span>
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left max-w-lg mx-auto space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Applicant Advocate:</span>
                      <span className="font-bold text-slate-800">{advocateForm.fullName}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Bar Enrollment No:</span>
                      <span className="font-mono font-bold text-emerald-800">{advocateForm.barCouncilNumber}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">State Bar Council:</span>
                      <span className="font-medium text-slate-800">{advocateForm.stateBarCouncil}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Practice City:</span>
                      <span className="font-medium text-slate-800">{advocateForm.city}, {advocateForm.state}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 max-w-lg mx-auto text-left flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">What happens next?</strong>
                      <span>
                        NIRNAI's legal compliance team cross-verifies your Bar Council credentials with the state roll records within 24 to 48 hours. Once verified, your Bar Badge will be activated and you will receive an SMS and email with your advocate portal access.
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-center gap-3">
                    <Link
                      to="/"
                      className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-md"
                    >
                      Return to NIRNAI Home
                    </Link>
                    <Link
                      to="/login?role=advocate"
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl"
                    >
                      Advocate Sign In
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  
                  {/* Step Progress Tracker (Steps 1 to 5) */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                      <span className="text-emerald-800 font-bold">
                        Step {advocateStep} of 5: {
                          advocateStep === 1 ? 'Personal Details' :
                          advocateStep === 2 ? 'Professional Details' :
                          advocateStep === 3 ? 'Practice Location' :
                          advocateStep === 4 ? 'Verification Documents' : 'Professional Profile'
                        }
                      </span>
                      <span>{Math.round((advocateStep / 5) * 100)}% Completed</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-700 h-full transition-all duration-300"
                        style={{ width: `${(advocateStep / 5) * 100}%` }}
                      ></div>
                    </div>

                    {/* Step Breadcrumb Icons */}
                    <div className="grid grid-cols-5 gap-1 mt-3 text-center">
                      {[
                        { num: 1, label: 'Personal' },
                        { num: 2, label: 'Professional' },
                        { num: 3, label: 'Location' },
                        { num: 4, label: 'Documents' },
                        { num: 5, label: 'Profile' },
                      ].map((s) => (
                        <div 
                          key={s.num}
                          className={`text-[10px] font-medium ${
                            advocateStep === s.num 
                              ? 'text-emerald-800 font-bold' 
                              : advocateStep > s.num 
                              ? 'text-emerald-600' 
                              : 'text-slate-400'
                          }`}
                        >
                          <div className={`w-5 h-5 mx-auto rounded-full flex items-center justify-center mb-1 text-[10px] ${
                            advocateStep === s.num 
                              ? 'bg-emerald-800 text-white' 
                              : advocateStep > s.num 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : 'bg-slate-100 text-slate-400'
                          }`}>
                            {advocateStep > s.num ? '✓' : s.num}
                          </div>
                          <span className="hidden sm:inline">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {advocateError && (
                    <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{advocateError}</span>
                    </div>
                  )}

                  {/* ================= STEP 1: PERSONAL DETAILS ================= */}
                  {advocateStep === 1 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div className="border-b border-slate-100 pb-3">
                        <h3 className="text-lg font-bold font-serif text-slate-900">
                          Step 1: Personal Details
                        </h3>
                        <p className="text-xs text-slate-500">
                          Please provide your identity details matching your Bar enrollment certificate.
                        </p>
                      </div>

                      {/* Full Name as per enrollment records */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Full Name (as per Bar enrollment records) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Adv. Rajeshwar Rao"
                          value={advocateForm.fullName}
                          onChange={(e) => setAdvocateForm({ ...advocateForm, fullName: e.target.value })}
                          className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                        />
                      </div>

                      {/* Mobile Number & OTP Verification */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Mobile Number & OTP Verification <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2">
                          <div className="flex flex-1 rounded-xl border border-slate-300 overflow-hidden">
                            <div className="bg-slate-50 px-3.5 py-3 border-r border-slate-300 text-xs sm:text-sm font-semibold text-slate-700">
                              +91
                            </div>
                            <input
                              type="tel"
                              maxLength={10}
                              required
                              disabled={advocateOtpVerified}
                              placeholder="Enter 10-digit Mobile Number"
                              value={advocateForm.mobile}
                              onChange={(e) => setAdvocateForm({ ...advocateForm, mobile: e.target.value.replace(/\D/g, '') })}
                              className="w-full px-3.5 py-3 text-xs sm:text-sm focus:outline-none disabled:bg-slate-50"
                            />
                          </div>

                          {!advocateOtpVerified ? (
                            <button
                              type="button"
                              onClick={handleAdvocateSendOtp}
                              disabled={advocateForm.mobile.length < 10}
                              className="px-4 py-3 bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white font-semibold text-xs rounded-xl shadow-xs whitespace-nowrap"
                            >
                              {advocateOtpSent ? 'Resend OTP' : 'Get OTP'}
                            </button>
                          ) : (
                            <div className="px-4 py-3 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs rounded-xl flex items-center gap-1.5">
                              <Check className="w-4 h-4 text-emerald-600" />
                              <span>Verified</span>
                            </div>
                          )}
                        </div>

                        {/* OTP Input Box */}
                        {advocateOtpSent && !advocateOtpVerified && (
                          <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                            <div className="flex items-center justify-between text-xs text-slate-600">
                              <span>Enter 6-digit OTP sent to +91 {advocateForm.mobile}:</span>
                              <span className="text-emerald-700 font-mono text-[11px]">(Demo code: 123456)</span>
                            </div>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                maxLength={6}
                                placeholder="Enter 6-digit OTP"
                                value={advocateOtp.join('')}
                                onChange={(e) => setAdvocateOtp(e.target.value.split('').slice(0, 6))}
                                className="flex-1 px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                              />
                              <button
                                type="button"
                                onClick={handleAdvocateVerifyOtp}
                                className="px-4 py-2 bg-emerald-800 text-white font-bold text-xs rounded-lg shadow-xs"
                              >
                                Verify OTP
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Official Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. advocate@barcouncil.org.in"
                          value={advocateForm.email}
                          onChange={(e) => setAdvocateForm({ ...advocateForm, email: e.target.value })}
                          className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                        />
                      </div>

                      {/* Languages Known (Required: Yes) */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                          Languages Known <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {['English', 'Telugu', 'Hindi', 'Kannada', 'Marathi', 'Tamil', 'Bengali', 'Gujarati'].map((lang) => {
                            const selected = advocateForm.languages.includes(lang);
                            return (
                              <button
                                key={lang}
                                type="button"
                                onClick={() => toggleLanguage(lang)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                                  selected
                                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                                }`}
                              >
                                {selected ? '✓ ' : ''}{lang}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Profile Photo (Recommended) */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Profile Photo <span className="text-slate-400 font-normal">(Recommended)</span>
                        </label>
                        <div className="flex items-center gap-3">
                          <label className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer flex items-center gap-2">
                            <Upload className="w-4 h-4 text-slate-500" />
                            <span>Select Photo</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) setAdvocateForm({ ...advocateForm, profilePhotoName: file.name });
                              }}
                            />
                          </label>
                          <span className="text-xs text-slate-500 truncate">
                            {advocateForm.profilePhotoName || 'No photo selected (Professional court attire recommended)'}
                          </span>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* ================= STEP 2: PROFESSIONAL DETAILS ================= */}
                  {advocateStep === 2 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div className="border-b border-slate-100 pb-3">
                        <h3 className="text-lg font-bold font-serif text-slate-900">
                          Step 2: Professional Details
                        </h3>
                        <p className="text-xs text-slate-500">
                          Bar Council credentials and civil court practice specializations.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Bar Council Enrollment Number */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Bar Council Enrollment Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. TS/1429/2012"
                            value={advocateForm.barCouncilNumber}
                            onChange={(e) => setAdvocateForm({ ...advocateForm, barCouncilNumber: e.target.value.toUpperCase() })}
                            className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl uppercase font-mono font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                          />
                        </div>

                        {/* State Bar Council */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            State Bar Council <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={advocateForm.stateBarCouncil}
                            onChange={(e) => setAdvocateForm({ ...advocateForm, stateBarCouncil: e.target.value })}
                            className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
                          >
                            {STATE_BAR_COUNCILS.map((bc) => (
                              <option key={bc} value={bc}>{bc}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Enrollment Date / Year */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Enrollment Date / Year <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 2012 or 15/07/2012"
                            value={advocateForm.enrollmentYear}
                            onChange={(e) => setAdvocateForm({ ...advocateForm, enrollmentYear: e.target.value })}
                            className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                          />
                        </div>

                        {/* Years of Practice */}
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Years of Active Practice <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="60"
                            placeholder="e.g. 12"
                            value={advocateForm.yearsOfPractice}
                            onChange={(e) => setAdvocateForm({ ...advocateForm, yearsOfPractice: e.target.value })}
                            className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                          />
                        </div>
                      </div>

                      {/* Primary Practice Area */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Primary Practice Area <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={advocateForm.primaryPracticeArea}
                          onChange={(e) => setAdvocateForm({ ...advocateForm, primaryPracticeArea: e.target.value })}
                          className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
                        >
                          {LEGAL_ISSUES.map((issue) => (
                            <option key={issue.id} value={issue.name}>{issue.name}</option>
                          ))}
                        </select>
                      </div>

                      {/* Courts / Forums Practised In */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                          Courts / Forums Practised In <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {COURTS_LIST.map((court) => {
                            const isSelected = advocateForm.courtsPractised.includes(court);
                            return (
                              <button
                                key={court}
                                type="button"
                                onClick={() => toggleCourt(court)}
                                className={`p-2.5 rounded-xl border text-xs text-left font-medium flex items-center justify-between transition-all ${
                                  isSelected
                                    ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                }`}
                              >
                                <span>{court}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-emerald-700" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  )}

                  {/* ================= STEP 3: PRACTICE LOCATION ================= */}
                  {advocateStep === 3 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div className="border-b border-slate-100 pb-3">
                        <h3 className="text-lg font-bold font-serif text-slate-900">
                          Step 3: Practice Location
                        </h3>
                        <p className="text-xs text-slate-500">
                          Jurisdiction, office chambers address, and consultation preferences.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            State <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={advocateForm.state}
                            onChange={(e) => setAdvocateForm({ ...advocateForm, state: e.target.value })}
                            className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
                          >
                            {INDIAN_STATES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            District <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Hyderabad / Bengaluru Urban"
                            value={advocateForm.district}
                            onChange={(e) => setAdvocateForm({ ...advocateForm, district: e.target.value })}
                            className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            City <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={advocateForm.city}
                            onChange={(e) => setAdvocateForm({ ...advocateForm, city: e.target.value })}
                            className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
                          >
                            {CITIES_AND_LOCALITIES.map((c) => (
                              <option key={c.city} value={c.city}>{c.city}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                            Locality / Area <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Madhapur / Banjara Hills"
                            value={advocateForm.locality}
                            onChange={(e) => setAdvocateForm({ ...advocateForm, locality: e.target.value })}
                            className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                          />
                        </div>
                      </div>

                      {/* Office Address */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Chambers / Office Address <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={2}
                          required
                          placeholder="Complete chamber or office address for in-person client consultations..."
                          value={advocateForm.officeAddress}
                          onChange={(e) => setAdvocateForm({ ...advocateForm, officeAddress: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                        />
                      </div>

                      {/* Consultation Mode */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                          Consultation Mode Offered <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {['Online', 'In-person', 'Both'].map((mode) => (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => setAdvocateForm({ ...advocateForm, consultationMode: mode })}
                              className={`py-3 rounded-xl border text-xs font-bold text-center transition-all ${
                                advocateForm.consultationMode === mode
                                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              {mode === 'Online' ? '💻 Online (Video)' : mode === 'In-person' ? '🏢 Chamber Office' : '✨ Both (Hybrid)'}
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                  {/* ================= STEP 4: VERIFICATION DOCUMENTS ================= */}
                  {advocateStep === 4 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div className="border-b border-slate-100 pb-3">
                        <h3 className="text-lg font-bold font-serif text-slate-900">
                          Step 4: Verification Documents
                        </h3>
                        <p className="text-xs text-slate-500">
                          Upload official Bar Council records for compliance and identity confirmation.
                        </p>
                      </div>

                      {/* Doc 1: Bar Council Enrollment Certificate */}
                      <div className="p-4 border-2 border-dashed border-slate-300 rounded-2xl hover:border-emerald-600 transition-colors bg-slate-50/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-900">
                                Bar Council Enrollment Certificate <span className="text-red-500">*</span>
                              </h4>
                              <p className="text-[11px] text-slate-500">
                                PDF, JPG or PNG (Issued by State Bar Council)
                              </p>
                            </div>
                          </div>

                          <label className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs rounded-xl cursor-pointer shadow-xs">
                            <span>Browse File</span>
                            <input
                              type="file"
                              accept=".pdf,image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) setAdvocateForm({ ...advocateForm, enrollmentCertName: file.name });
                              }}
                            />
                          </label>
                        </div>
                        {advocateForm.enrollmentCertName && (
                          <div className="mt-3 text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium">
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span>Uploaded: {advocateForm.enrollmentCertName}</span>
                          </div>
                        )}
                      </div>

                      {/* Doc 2: Advocate ID Card */}
                      <div className="p-4 border border-slate-200 rounded-2xl bg-white space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-900">
                                Advocate ID Card <span className="text-slate-400 font-normal">(Recommended)</span>
                              </h4>
                              <p className="text-[11px] text-slate-500">
                                Bar Association or State Bar Photo ID Card
                              </p>
                            </div>
                          </div>

                          <label className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl cursor-pointer border border-slate-200">
                            <span>Upload ID</span>
                            <input
                              type="file"
                              accept=".pdf,image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) setAdvocateForm({ ...advocateForm, advocateIdCardName: file.name });
                              }}
                            />
                          </label>
                        </div>
                        {advocateForm.advocateIdCardName && (
                          <div className="text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span>Uploaded: {advocateForm.advocateIdCardName}</span>
                          </div>
                        )}
                      </div>

                    </div>
                  )}

                  {/* ================= STEP 5: PROFESSIONAL PROFILE ================= */}
                  {advocateStep === 5 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div className="border-b border-slate-100 pb-3">
                        <h3 className="text-lg font-bold font-serif text-slate-900">
                          Step 5: Professional Profile
                        </h3>
                        <p className="text-xs text-slate-500">
                          Summarize your legal experience and set consultation availability.
                        </p>
                      </div>

                      {/* Professional Introduction */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Professional Introduction / Bio <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Brief description of your civil litigation experience, landmark cases, and approach to client consultation..."
                          value={advocateForm.bio}
                          onChange={(e) => setAdvocateForm({ ...advocateForm, bio: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                        />
                      </div>

                      {/* Profile Summary Card */}
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2 text-xs">
                        <div className="flex justify-between py-1 border-b border-slate-200">
                          <span className="text-slate-500">Total Experience:</span>
                          <span className="font-bold text-slate-900">{advocateForm.yearsOfPractice} Years</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-200">
                          <span className="text-slate-500">Specializations:</span>
                          <span className="font-bold text-emerald-800">{advocateForm.primaryPracticeArea}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-slate-500">Languages Known:</span>
                          <span className="font-medium text-slate-800">{advocateForm.languages.join(', ')}</span>
                        </div>
                      </div>

                      {/* Consultation Availability */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                          Consultation Availability <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Weekdays 10:00 AM - 6:00 PM, Saturday by appointment"
                          value={advocateForm.availability}
                          onChange={(e) => setAdvocateForm({ ...advocateForm, availability: e.target.value })}
                          className="w-full px-3.5 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                        />
                      </div>

                      {/* Accept Terms */}
                      <div className="pt-2">
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            checked={advocateForm.acceptTerms}
                            onChange={(e) => setAdvocateForm({ ...advocateForm, acceptTerms: e.target.checked })}
                            className="mt-0.5 w-4 h-4 text-emerald-800 rounded border-slate-300 focus:ring-emerald-700 cursor-pointer"
                          />
                          <span className="text-xs text-slate-600 leading-snug">
                            I confirm that I am an advocate enrolled with the Bar Council of India / State Bar Council under the Advocates Act 1961 with clean standing. I accept the <a href="#" className="text-emerald-800 underline font-medium">Terms of Practice</a> and understand that listings are subjected to NIRNAI verification.
                          </span>
                        </label>
                      </div>

                    </div>
                  )}

                  {/* Multi-Step Action Buttons */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                    {advocateStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center gap-1.5 transition-all"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Previous</span>
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {advocateStep < 5 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleAdvocateFinalSubmit}
                        className="px-8 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl flex items-center gap-2 shadow-lg transition-all active:scale-95"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Submit for Bar Verification</span>
                      </button>
                    )}
                  </div>

                  <div className="text-center text-xs text-slate-500 pt-4">
                    Already a registered advocate?{' '}
                    <Link to="/login?role=advocate" className="text-emerald-800 font-bold hover:underline">
                      Sign In to Advocate Portal
                    </Link>
                  </div>

                </div>
              )}

            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-4 px-4 sm:px-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NIRNAI Legal Technologies. Built under Bar Council of India standards.
      </footer>

    </div>
  );
}
