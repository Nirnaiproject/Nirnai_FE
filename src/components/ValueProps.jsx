import React from 'react';
import { ShieldCheck, Zap, BookOpen, Users2 } from 'lucide-react';

export default function ValueProps() {
  const props = [
    {
      icon: ShieldCheck,
      title: 'Verified Advocates',
      desc: 'Connect with experienced lawyers',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    },
    {
      icon: Zap,
      title: 'Civil Law Focused',
      desc: 'Property, family, contracts and more',
      color: 'text-amber-700 bg-amber-50 border-amber-100',
    },
    {
      icon: BookOpen,
      title: 'Legal Awareness',
      desc: 'Understand your rights and legal process',
      color: 'text-sky-700 bg-sky-50 border-sky-100',
    },
    {
      icon: Users2,
      title: 'Secure & Transparent',
      desc: 'Safe, simple and reliable legal assistance',
      color: 'text-violet-700 bg-violet-50 border-violet-100',
    },
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200/80 shadow-xs py-6 md:py-8 my-6 md:my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {props.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3.5 group p-2 rounded-xl transition-colors hover:bg-slate-50/80"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${item.color} group-hover:scale-105 transition-transform duration-200`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
