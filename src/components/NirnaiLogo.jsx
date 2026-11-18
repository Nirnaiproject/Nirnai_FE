import React from 'react';
import { Link } from 'react-router-dom';

export default function NirnaiLogo({ variant = 'default', className = '', showSubtitle = true, linkToHome = true }) {
  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official NIRNAI Logo Shield & Scales */}
      <div className="relative flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-lg overflow-hidden shadow-sm border border-slate-100 bg-white p-0.5 flex items-center justify-center">
        <img
          src="/nirnai-logo.jpg"
          alt="NIRNAI Logo"
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback SVG if image not found
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <svg
          style={{ display: 'none' }}
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* House/Shield chevron shape */}
          <path d="M50 8 L10 38 V88 L50 96 L90 88 V38 Z" fill="#0B2240" />
          <path d="M50 8 L90 38 V88 L50 96 Z" fill="#F5A623" />
          {/* Scale beam and pans */}
          <path d="M50 25 V75 M30 42 H70 M30 42 L22 62 M30 42 L38 62 M70 42 L62 62 M70 42 L78 62" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <path d="M18 62 Q30 72 42 62 Z" fill="#FFFFFF" />
          <path d="M58 62 Q70 72 82 62 Z" fill="#FFFFFF" />
          <circle cx="50" cy="22" r="3" fill="#FFFFFF" />
          <path d="M42 75 H58" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif tracking-wider font-extrabold ${variant === 'light' ? 'text-white' : 'text-slate-900'} text-xl md:text-2xl leading-none`}>
            NIRNAI
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
        </div>
        {showSubtitle && (
          <span className={`text-[10px] md:text-xs font-medium tracking-tight ${variant === 'light' ? 'text-slate-300' : 'text-emerald-800'} mt-0.5`}>
            Your Legal Guidance Partner
          </span>
        )}
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" className="inline-block transition-transform hover:opacity-95 active:scale-98">
        {content}
      </Link>
    );
  }

  return content;
}
