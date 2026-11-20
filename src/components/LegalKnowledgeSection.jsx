import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { LEGAL_KNOWLEDGE_ARTICLES } from '../data/mockData';

export default function LegalKnowledgeSection() {
  return (
    <section className="py-12 md:py-20 bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              LEGAL AWARENESS & GUIDES
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mt-2">
              Empowering Citizens with Legal Clarity
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Reviewed and authored by verified Bar advocates to explain complex civil laws, procedural timelines, and citizen rights in simple language.
            </p>
          </div>

          <Link
            to="/knowledge"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors group"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEGAL_KNOWLEDGE_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 p-5 flex flex-col justify-between group hover:border-emerald-600/50"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                  <span>Author: {article.author}</span>
                </div>

                <Link
                  to={`/knowledge#${article.id}`}
                  className="w-full inline-flex items-center justify-center gap-1 text-xs font-semibold text-emerald-800 hover:text-white bg-emerald-50 hover:bg-emerald-800 py-2 rounded-lg transition-all"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
