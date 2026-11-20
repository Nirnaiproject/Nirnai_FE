import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Mail, Lock, User, Briefcase } from 'lucide-react';
import NirnaiLogo from './NirnaiLogo';

export default function AuthModal({ initialMode = 'login', isOpen, onClose }) {
  if (!isOpen) return null;

  const [mode, setMode] = useState(initialMode); // 'login' | 'signup'
  const [role, setRole] = useState('client'); // 'client' | 'advocate'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [barNumber, setBarNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  const handleDemoLogin = (userRole) => {
    setRole(userRole);
    if (userRole === 'client') {
      setEmail('client.demo@nirnai.com');
      setName('Kalyan Chakravarthy');
    } else {
      setEmail('adv.rajeshwar@nirnai.com');
      setName('Adv. Rajeshwar Rao');
      setBarNumber('TS/1429/2008');
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {/* Logo & Heading */}
          <div className="text-center mb-6">
            <div className="inline-block mb-2">
              <NirnaiLogo linkToHome={false} />
            </div>
            <h3 className="text-xl font-bold font-serif text-slate-900 mt-2">
              {mode === 'login' ? 'Welcome Back to NIRNAI' : 'Create Your Account'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {mode === 'login' ? 'Access your legal consultations & case documents' : 'Connect with verified civil advocates in minutes'}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {mode === 'login' ? 'Successfully Logged In!' : 'Account Created Successfully!'}
              </h4>
              <p className="text-xs text-slate-500">Redirecting to your dashboard...</p>
            </div>
          ) : (
            <>
              {/* Role Switcher */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl mb-5">
                <button
                  type="button"
                  onClick={() => setRole('client')}
                  className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    role === 'client'
                      ? 'bg-white text-emerald-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Client Account</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('advocate')}
                  className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    role === 'advocate'
                      ? 'bg-white text-emerald-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Advocate Portal</span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {mode === 'signup' && (
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder={role === 'advocate' ? 'e.g. Adv. Rajeshwar Rao' : 'e.g. Ramesh Kumar'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-slate-300 rounded-xl pl-9 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                  </div>
                )}

                {role === 'advocate' && mode === 'signup' && (
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Bar Council Enrollment Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. TS/1429/2012"
                        value={barNumber}
                        onChange={(e) => setBarNumber(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-slate-300 rounded-xl pl-9 focus:outline-none focus:ring-2 focus:ring-emerald-700/30 uppercase"
                      />
                      <ShieldCheck className="w-4 h-4 text-emerald-600 absolute left-3 top-3" />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-slate-300 rounded-xl pl-9 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-slate-300 rounded-xl pl-9 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-sm transition-all shadow-sm active:scale-98 mt-2"
                >
                  {mode === 'login' ? `Login as ${role === 'advocate' ? 'Advocate' : 'Client'}` : 'Register Account'}
                </button>
              </form>

              {/* Demo 1-Click Login Shortcut */}
              <div className="pt-4 border-t border-slate-100 mt-4 text-center">
                <p className="text-[11px] text-slate-400 mb-2">Quick Testing (1-Click Fill):</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('client')}
                    className="py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-medium"
                  >
                    Demo Client
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('advocate')}
                    className="py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg text-[11px] font-medium"
                  >
                    Demo Advocate
                  </button>
                </div>
              </div>

              {/* Mode Toggle */}
              <div className="text-center mt-4 text-xs text-slate-600">
                {mode === 'login' ? (
                  <>
                    Don't have an account?{' '}
                    <button
                      onClick={() => setMode('signup')}
                      className="text-emerald-800 font-bold hover:underline"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={() => setMode('login')}
                      className="text-emerald-800 font-bold hover:underline"
                    >
                      Login
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
