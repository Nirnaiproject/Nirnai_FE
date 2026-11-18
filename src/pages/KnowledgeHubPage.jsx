import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Tag, ArrowRight, ShieldCheck, Search, ChevronRight } from 'lucide-react';
import { LEGAL_KNOWLEDGE_ARTICLES } from '../data/mockData';

export default function KnowledgeHubPage() {
  const [selectedArticle, setSelectedArticle] = useState(LEGAL_KNOWLEDGE_ARTICLES[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = LEGAL_KNOWLEDGE_ARTICLES.filter(a => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q));
  });

  return (
    <div className="min-h-screen bg-slate-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Link to="/" className="hover:text-emerald-800">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Legal Knowledge Hub</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-slate-900">
            Legal Knowledge & Citizen Guides
          </h1>
          <p className="text-sm md:text-base text-slate-600 mt-2">
            Practical legal awareness simplified by practicing civil advocates. Understand property rights, legal notices, tenancy laws, and court timelines.
          </p>
        </div>

        {/* Layout: Articles list on left, Reader on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Article Selector List */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search guides, rights, checklists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            <div className="space-y-3">
              {filteredArticles.map((article) => {
                const isSelected = selectedArticle?.id === article.id;
                return (
                  <div
                    key={article.id}
                    id={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-emerald-700 shadow-md ring-1 ring-emerald-700'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                      <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>By {article.author}</span>
                      <span className="text-emerald-800 font-semibold flex items-center gap-1">
                        <span>Read</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Article Detailed Reader View */}
          <div className="lg:col-span-7">
            {selectedArticle && (
              <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm sticky top-24">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500">{selectedArticle.readTime}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 leading-tight mb-4">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-3 pb-6 border-b border-slate-100 text-xs text-slate-500">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{selectedArticle.author}</div>
                    <div className="text-[11px]">Published: {selectedArticle.publishedDate}</div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-slate max-w-none text-xs md:text-sm leading-relaxed space-y-4 pt-6 text-slate-700 whitespace-pre-line">
                  {selectedArticle.content}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  {selectedArticle.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Consultation Callout */}
                <div className="mt-8 bg-emerald-50 rounded-2xl p-5 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">
                      Need custom guidance on this legal issue?
                    </h4>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      Consult verified advocates practicing in your city.
                    </p>
                  </div>
                  <Link
                    to="/advocates"
                    className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs rounded-xl shadow-xs flex-shrink-0"
                  >
                    Find Advocate Now
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
