import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Users, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  RotateCcw,
  Sparkles,
  HelpCircle,
  Building2,
  Clock,
  Compass
} from 'lucide-react';
import NirnaiLogo from '../components/NirnaiLogo';

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') === 'advocate' ? 'advocate' : 'client';

  const [role, setRole] = useState(initialRole); // 'client' | 'advocate'
  const [loginMethod, setLoginMethod] = useState('otp'); // 'otp' | 'password'

  // Phone & OTP state
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Password state
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Feedback states
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  // Countdown timer for OTP
  useEffect(() => {
    let interval = null;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  // Handle Send OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setTimer(30);
      setCanResend(false);
      // Pre-fill demo OTP
      setOtp(['1', '2', '3', '4', '5', '6']);
    }, 700);
  };

  // Handle Resend OTP
  const handleResendOtp = () => {
    if (!canResend) return;
    setTimer(30);
    setCanResend(false);
    setErrorMessage('');
    setOtp(['1', '2', '3', '4', '5', '6']);
  };

  // Handle OTP digit changes
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto move to next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle Verify OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 6) {
      setErrorMessage('Please enter the 6-digit OTP code.');
      return;
    }
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
      setTimeout(() => {
        navigate(role === 'advocate' ? '/advocates' : '/');
      }, 1200);
    }, 800);
  };

  // Handle Password Login
  const handlePasswordLogin = (e) => {
    e.preventDefault();
    if (!emailOrPhone || !password) {
      setErrorMessage('Please enter both your registered identity and password.');
      return;
    }
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
      setTimeout(() => {
        navigate(role === 'advocate' ? '/advocates' : '/');
      }, 1200);
    }, 800);
  };

  // Demo auto-fill
  const fillDemoLogin = (targetRole) => {
    setRole(targetRole);
    setErrorMessage('');
    if (loginMethod === 'otp') {
      setPhone(targetRole === 'advocate' ? '9849012345' : '9876543210');
      setOtpSent(true);
      setOtp(['1', '2', '3', '4', '5', '6']);
    } else {
      setEmailOrPhone(targetRole === 'advocate' ? 'adv.rajeshwar@nirnai.com' : 'client.demo@nirnai.com');
      setPassword('Nirnai@2026');
    }
  };

  const isAdvocate = role === 'advocate';
  const accentBtn = isAdvocate
    ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white hover:from-teal-500 hover:to-emerald-600'
    : 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 hover:from-amber-400 hover:to-orange-500';
  const focusRing = isAdvocate ? 'focus-within:ring-teal-600/40 focus-within:border-teal-600' : 'focus-within:ring-amber-500/40 focus-within:border-amber-500';
  const linkTone = isAdvocate ? 'text-teal-800' : 'text-amber-800';

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-500 ${isAdvocate ? 'bg-[#eef6f4]' : 'bg-[#fbf6ee]'}`}>
      
      <header className="relative z-20 border-b border-white/40 bg-white/75 px-4 py-3.5 backdrop-blur-md sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <NirnaiLogo />

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className={isAdvocate ? 'transition-colors hover:text-teal-800' : 'transition-colors hover:text-amber-800'}>Home</Link>
            <Link to="/about" className="hover:text-slate-900 transition-colors">About Us</Link>
            <a 
              href="mailto:support@nirnai.com" 
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <HelpCircle className={`w-4 h-4 ${isAdvocate ? 'text-teal-700' : 'text-amber-600'}`} />
              <span>Help</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-6 lg:p-8">
        <div className={`pointer-events-none absolute inset-0 transition-colors duration-500 ${isAdvocate ? 'bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,.24),transparent_32%),linear-gradient(135deg,#e7f8f5_0%,#f8fbfa_52%,#dff3fb_100%)]' : 'bg-[radial-gradient(circle_at_85%_18%,rgba(251,191,36,.24),transparent_30%),linear-gradient(135deg,#fff8e7_0%,#fffdf9_52%,#fdebea_100%)]'}`}></div>

        <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-2xl backdrop-blur-sm lg:grid-cols-12">
          
          <div className="relative flex flex-col justify-between overflow-hidden p-8 text-white sm:p-10 lg:col-span-5">
            <div className={`absolute inset-0 transition-colors duration-500 ${isAdvocate ? 'bg-[radial-gradient(circle_at_88%_12%,rgba(45,212,191,.32),transparent_34%),linear-gradient(145deg,#e4f8f4_0%,#d8f1eb_48%,#e6f3f8_100%)]' : 'bg-[radial-gradient(circle_at_88%_12%,rgba(251,191,36,.32),transparent_34%),linear-gradient(145deg,#fff4d6_0%,#ffecd0_48%,#f5e9df_100%)]'}`}></div>
            <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-white/45 blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/55 blur-3xl"></div>

            <div className="relative z-10 space-y-6">
              <div className="rise-in">
                <span className={`mb-3 inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${isAdvocate ? 'bg-teal-600/12 text-teal-800 ring-1 ring-teal-600/25' : 'bg-amber-500/15 text-amber-900 ring-1 ring-amber-600/25'}`}>
                  {isAdvocate ? 'Advocate chamber' : 'Client desk'}
                </span>
                <h2 className="font-serif text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                  Welcome to
                  <br />
                  <span className={isAdvocate ? 'text-teal-700' : 'text-amber-700'}>NIRNAI</span>
                </h2>
                <p className="mt-2 max-w-xs text-xs font-semibold leading-relaxed text-slate-600 sm:text-sm">
                  {isAdvocate
                    ? 'Your professional space to connect with clients and manage your legal practice.'
                    : 'Your trusted partner in finding the right legal assistance.'}
                </p>
              </div>

              {/* 4 Feature Points with Icons (Direct replica of GatedPlus pattern) */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border ${isAdvocate ? 'bg-teal-700/12 border-teal-700/25 text-teal-800' : 'bg-amber-700/12 border-amber-700/25 text-amber-800'}`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {isAdvocate ? 'Build Your Professional Profile' : 'Find the Right Advocate'}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {isAdvocate
                        ? 'Showcase your qualifications, Bar Council enrollment details, experience and areas of practice.'
                        : 'Discover advocates based on your legal issue, practice area and location.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border ${isAdvocate ? 'bg-teal-700/12 border-teal-700/25 text-teal-800' : 'bg-amber-700/12 border-amber-700/25 text-amber-800'}`}>
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {isAdvocate ? 'Connect with Potential Clients' : 'Explore Legal Guidance'}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {isAdvocate
                        ? 'Help clients discover you based on your legal specializations and practice locations.'
                        : 'Understand legal procedures, your rights and important legal information.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border ${isAdvocate ? 'bg-teal-700/12 border-teal-700/25 text-teal-800' : 'bg-amber-700/12 border-amber-700/25 text-amber-800'}`}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {isAdvocate ? 'Manage Consultation Requests' : 'Manage Consultations'}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {isAdvocate
                        ? 'View, accept, reject or reschedule consultation requests.'
                        : 'Request consultations, view appointments and stay updated on your legal interactions.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border ${isAdvocate ? 'bg-teal-700/12 border-teal-700/25 text-teal-800' : 'bg-amber-700/12 border-amber-700/25 text-amber-800'}`}>
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {isAdvocate ? 'Manage Your Practice' : 'Your Legal Journey, Organised'}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {isAdvocate
                        ? 'Maintain your availability, manage client interactions and keep your professional information updated.'
                        : 'Keep track of consultation requests, case updates and important documents in one place.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Trust Badge */}
            <div className="relative z-10 pt-6 mt-6 border-t border-slate-900/15">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-slate-900/10 text-xs font-medium text-slate-700 shadow-sm">
                <ShieldCheck className={`w-4 h-4 ${isAdvocate ? 'text-teal-700' : 'text-amber-700'}`} />
                <span>
                  {isAdvocate
                    ? 'Empowering Advocates Through Digital Legal Services'
                    : 'Your Partner in Accessing Legal Assistance'}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Login Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            
            <div>
              {/* Role Switcher Pill: Client Login vs Advocate Login */}
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => { setRole('client'); setOtpSent(false); setErrorMessage(''); }}
                    className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                      role === 'client' 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Client Login
                  </button>
                  <button
                    type="button"
                    onClick={() => { setRole('advocate'); setOtpSent(false); setErrorMessage(''); }}
                    className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                      role === 'advocate' 
                        ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Advocate Login
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => { setLoginMethod(loginMethod === 'otp' ? 'password' : 'otp'); setOtpSent(false); }}
                    className={`text-xs font-medium hover:underline ${linkTone}`}
                  >
                    {loginMethod === 'otp' ? 'Use Password' : 'Use OTP'}
                  </button>
                </div>
              </div>

              {/* Form Heading (Direct replica of GatedPlus) */}
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {isAdvocate ? 'Advocate sign in' : 'Client sign in'}
                </h3>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {loginMethod === 'otp' 
                    ? `Enter your registered mobile number to sign in as ${role === 'advocate' ? 'an Advocate' : 'a Client'}.`
                    : `Enter your credentials to sign in to your NIRNAI ${role === 'advocate' ? 'Advocate' : 'Client'} account.`}
                </p>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Success Notification */}
              {loginSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Welcome to NIRNAI!
                  </h4>
                  <p className="text-xs text-slate-500">
                    Logged in successfully as <strong>{role === 'advocate' ? 'Advocate' : 'Client'}</strong>. Redirecting...
                  </p>
                </div>
              ) : (
                <>
                  {/* OTP LOGIN FLOW */}
                  {loginMethod === 'otp' ? (
                    !otpSent ? (
                      <form onSubmit={handleSendOtp} className="space-y-4">
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                            Phone Number
                          </label>
                          <div className={`flex overflow-hidden rounded-xl border border-slate-300 transition-all focus-within:ring-2 ${focusRing}`}>
                            {/* Country Code Prefix */}
                            <div className="bg-slate-50 px-3.5 py-3 border-r border-slate-300 text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-1">
                              <span>+91</span>
                              <span className="text-[10px] text-slate-400">▾</span>
                            </div>
                            
                            {/* Input Field */}
                            <div className="relative flex-1">
                              <input
                                type="tel"
                                maxLength={10}
                                required
                                placeholder="Enter 10-digit Mobile Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                                className="w-full px-3.5 py-3 text-xs sm:text-sm focus:outline-none"
                              />
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1.5">
                            We will send a 6-digit one-time verification code to this number.
                          </p>
                        </div>

                        {/* Primary Button */}
                        <button
                          type="submit"
                          disabled={isLoading || phone.length < 10}
                          className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-md transition-all active:scale-95 disabled:opacity-50 ${accentBtn}`}
                        >
                          <span>{isLoading ? 'Sending Code...' : 'Get OTP'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>
                    ) : (
                      /* OTP Verification Screen */
                      <form onSubmit={handleVerifyOtp} className="space-y-4">
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between text-xs text-emerald-900">
                          <div>
                            OTP sent to <strong>+91 {phone}</strong>
                          </div>
                          <button
                            type="button"
                            onClick={() => setOtpSent(false)}
                            className="text-emerald-800 font-bold hover:underline"
                          >
                            Change
                          </button>
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                            Enter 6-Digit OTP
                          </label>
                          <div className="flex justify-between gap-2">
                            {otp.map((digit, index) => (
                              <input
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                className="w-11 h-12 sm:w-12 sm:h-12 text-center text-lg font-bold border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 bg-white"
                              />
                            ))}
                          </div>
                        </div>

                        {/* Resend & Timer */}
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>Didn't receive code?</span>
                          {canResend ? (
                            <button
                              type="button"
                              onClick={handleResendOtp}
                              className="font-bold text-emerald-800 hover:underline flex items-center gap-1"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                              <span>Resend OTP</span>
                            </button>
                          ) : (
                            <span className="text-slate-400">
                              Resend in <strong>{timer}s</strong>
                            </span>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-md transition-all active:scale-95 disabled:opacity-50 ${accentBtn}`}
                        >
                          <span>{isLoading ? 'Verifying...' : 'Verify & Sign In'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>
                    )
                  ) : (
                    /* PASSWORD LOGIN FLOW */
                    <form onSubmit={handlePasswordLogin} className="space-y-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                          Registered Mobile Number or Email
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="Enter phone or email"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                          />
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                            Password
                          </label>
                          <button
                            type="button"
                            onClick={() => setShowForgotModal(true)}
                            className="text-xs text-emerald-800 hover:underline font-medium"
                          >
                            Forgot Password?
                          </button>
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-10 py-3 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700"
                          />
                          <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold shadow-md transition-all active:scale-95 disabled:opacity-50 ${accentBtn}`}
                      >
                        <span>{isLoading ? 'Signing In...' : 'Sign In with Password'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}

                  {/* Divider */}
                  <div className="relative my-5">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-3 text-slate-400 font-medium">or continue with</span>
                    </div>
                  </div>

                  {/* Social Buttons (matching GatedPlus screenshot) */}
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => fillDemoLogin(role)}
                      className="py-2.5 px-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 transition-all shadow-2xs"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <span>Google</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => fillDemoLogin(role)}
                      className="py-2.5 px-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 transition-all shadow-2xs"
                    >
                      <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span>Facebook</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => fillDemoLogin(role)}
                      className="py-2.5 px-3 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 transition-all shadow-2xs"
                    >
                      <svg className="w-4 h-4 fill-slate-900" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2.03.6-2.68 1.35-.58.67-.99 1.74-.86 2.76 1.01.08 2.01-.51 2.62-1.26z" />
                      </svg>
                      <span>Apple</span>
                    </button>
                  </div>

                  {/* 1-Click Demo Shortcut Pill */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Quick Testing:</span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => fillDemoLogin('client')}
                        className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                      >
                        Demo Client
                      </button>
                      <button
                        type="button"
                        onClick={() => fillDemoLogin('advocate')}
                        className="px-2 py-0.5 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold"
                      >
                        Demo Advocate
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Register Switch Link */}
            <div className="text-center pt-6 mt-6 border-t border-slate-100 text-xs text-slate-600">
              Don't have an account?{' '}
              <Link 
                to={`/register?role=${role}`} 
                className={`font-bold hover:underline ${linkTone}`}
              >
                Register
              </Link>
            </div>

          </div>

        </div>
      </main>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-xl font-bold font-serif text-slate-900">Reset Password</h3>
            <p className="text-xs text-slate-500">
              Enter your registered mobile number or email address. We'll send a password recovery OTP link.
            </p>

            {forgotSent ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Reset OTP link sent to your registered contact!</span>
              </div>
            ) : (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter registered mobile or email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                />
                <button
                  type="button"
                  onClick={() => setForgotSent(true)}
                  className="w-full py-2.5 bg-emerald-800 text-white rounded-xl text-xs font-semibold"
                >
                  Send Reset Link
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => { setShowForgotModal(false); setForgotSent(false); }}
              className="w-full py-2 text-xs text-slate-500 hover:text-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Bottom Trust Bar (Matches GatedPlus Screenshot Footer) */}
      <footer className="bg-white border-t border-slate-200/80 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Verified Advocates</h5>
              <p className="text-[11px] text-slate-500">100% Bar Council verified & trusted advocates</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Wide Legal Network</h5>
              <p className="text-[11px] text-slate-500">Connect with genuine civil counsels & legal experts</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Civil Law Focused</h5>
              <p className="text-[11px] text-slate-500">Property, contracts, tenancy & civil litigation</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">24/7 Support</h5>
              <p className="text-[11px] text-slate-500">Dedicated assistance for all registered members</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}