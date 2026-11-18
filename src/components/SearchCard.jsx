import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  RotateCcw, 
  Scale, 
  FileText, 
  MapPin, 
  Compass, 
  Layers,
  ArrowRight,
  Sun,
  Moon
} from 'lucide-react';
import { CASE_CATEGORIES, LEGAL_ISSUES, CITIES_AND_LOCALITIES } from '../data/mockData';

export default function SearchCard({ 
  initialCategory = 'Civil cases',
  initialIssue = 'Money Recovery & Summary Suits', 
  initialCaseType = 'Order 37 CPC Summary Suit for Debt Recovery',
  initialCity = 'Hyderabad',
  initialLocality = 'Madhapur',
  onSearch,
  variant = 'light',
  allowThemeToggle = true
}) {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(variant);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedIssue, setSelectedIssue] = useState(initialIssue);
  const [selectedCaseType, setSelectedCaseType] = useState(initialCaseType);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedLocality, setSelectedLocality] = useState(initialLocality);

  const [availableIssues, setAvailableIssues] = useState([]);
  const [availableCaseTypes, setAvailableCaseTypes] = useState([]);
  const [availableLocalities, setAvailableLocalities] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // 1. Cascading: Update available Legal Issues when Case Category changes
  useEffect(() => {
    if (selectedCategory) {
      const filtered = LEGAL_ISSUES.filter(i => i.category.toLowerCase() === selectedCategory.toLowerCase());
      setAvailableIssues(filtered);
      // If current selected issue doesn't belong to the new category, auto-select the first issue
      if (!filtered.some(i => i.name === selectedIssue)) {
        setSelectedIssue(filtered[0]?.name || '');
      }
    } else {
      setAvailableIssues(LEGAL_ISSUES);
    }
  }, [selectedCategory]);

  // 2. Cascading: Update available Case Types when Legal Issue changes
  useEffect(() => {
    const issueObj = LEGAL_ISSUES.find(i => i.name === selectedIssue);
    if (issueObj) {
      setAvailableCaseTypes(issueObj.caseTypes);
      if (!issueObj.caseTypes.includes(selectedCaseType)) {
        setSelectedCaseType(issueObj.caseTypes[0] || '');
      }
    } else {
      setAvailableCaseTypes([]);
      setSelectedCaseType('');
    }
  }, [selectedIssue]);

  // 3. Cascading: Update available Localities when City changes
  useEffect(() => {
    const cityObj = CITIES_AND_LOCALITIES.find(c => c.city === selectedCity);
    if (cityObj) {
      setAvailableLocalities(cityObj.localities);
      if (!cityObj.localities.includes(selectedLocality)) {
        setSelectedLocality(cityObj.localities[0] || '');
      }
    } else {
      setAvailableLocalities([]);
      setSelectedLocality('');
    }
  }, [selectedCity]);

  const handleSearch = (e) => {
    e?.preventDefault();
    setIsSearching(true);

    const searchParams = {
      category: selectedCategory,
      issue: selectedIssue,
      caseType: selectedCaseType,
      city: selectedCity,
      locality: selectedLocality
    };

    if (onSearch) {
      onSearch(searchParams);
      setTimeout(() => setIsSearching(false), 300);
    } else {
      const query = new URLSearchParams(searchParams).toString();
      navigate(`/advocates?${query}`);
    }
  };

  const handleClear = () => {
    setSelectedCategory('');
    setSelectedIssue('');
    setSelectedCaseType('');
    setSelectedCity('');
    setSelectedLocality('');
    if (onSearch) {
      onSearch({ category: '', issue: '', caseType: '', city: '', locality: '' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <div 
      className={`w-full rounded-2xl md:rounded-3xl transition-all duration-300 ${
        isDark 
          ? 'bg-[#0D0F12] text-white border border-slate-800 shadow-2xl p-5 md:p-7' 
          : 'bg-white text-slate-800 border border-slate-200/90 shadow-xl p-5 md:p-7 card-gloss'
      }`}
    >
      {/* Search Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 md:mb-6">
        <div className="flex items-start sm:items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-emerald-50 text-emerald-800'
          }`}>
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
              <span>Find Legal Services</span>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                isDark ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              }`}>
                11 Case Categories
              </span>
            </h2>
            <p className={`text-xs md:text-sm mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Select Case Category ➔ Legal Issue ➔ Case Type ➔ City & Locality.
            </p>
          </div>
        </div>

        {/* Theme Switcher */}
        {allowThemeToggle && (
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Card style:
            </span>
            <div className={`p-0.5 rounded-lg border flex items-center ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`px-2 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-all ${
                  !isDark ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Light</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`px-2 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-all ${
                  isDark ? 'bg-slate-800 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-amber-400" />
                <span>Dark</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 5-Field Hierarchical Form */}
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 md:gap-4 mb-5">
          
          {/* 1. Case Category */}
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Case Category</span>
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full appearance-none rounded-xl px-3 py-3 text-xs md:text-sm font-semibold transition-all cursor-pointer focus:outline-none focus:ring-2 pr-8 truncate ${
                  isDark
                    ? 'bg-[#181B20] border border-slate-700 text-amber-400 focus:ring-amber-500/50 focus:border-amber-500'
                    : 'bg-emerald-50/80 border border-emerald-300 text-emerald-950 focus:ring-emerald-700/30 focus:border-emerald-700 hover:border-emerald-400'
                }`}
              >
                <option value="">Select Category...</option>
                {CASE_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 2. Legal Issue (Cascading: Filtered by Category) */}
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <Scale className="w-3.5 h-3.5 text-emerald-600" />
              <span>Legal Issue</span>
            </label>
            <div className="relative">
              <select
                value={selectedIssue}
                onChange={(e) => setSelectedIssue(e.target.value)}
                disabled={!selectedCategory || availableIssues.length === 0}
                className={`w-full appearance-none rounded-xl px-3 py-3 text-xs md:text-sm font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 pr-8 truncate ${
                  isDark
                    ? 'bg-[#181B20] border border-slate-700 text-white focus:ring-amber-500/50 focus:border-amber-500 disabled:opacity-50'
                    : 'bg-white border border-slate-300 text-slate-900 focus:ring-emerald-700/30 focus:border-emerald-700 hover:border-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed'
                }`}
              >
                <option value="">
                  {selectedCategory ? 'Select Legal Issue...' : 'Select Category first'}
                </option>
                {availableIssues.map((issue) => (
                  <option key={issue.id} value={issue.name}>
                    {issue.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 3. Case Type (Cascading: Filtered by Legal Issue) */}
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Case Type</span>
            </label>
            <div className="relative">
              <select
                value={selectedCaseType}
                onChange={(e) => setSelectedCaseType(e.target.value)}
                disabled={!selectedIssue || availableCaseTypes.length === 0}
                className={`w-full appearance-none rounded-xl px-3 py-3 text-xs md:text-sm font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 pr-8 truncate ${
                  isDark
                    ? 'bg-[#181B20] border border-slate-700 text-white focus:ring-amber-500/50 focus:border-amber-500 disabled:opacity-50'
                    : 'bg-white border border-slate-300 text-slate-900 focus:ring-emerald-700/30 focus:border-emerald-700 hover:border-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed'
                }`}
              >
                <option value="">
                  {selectedIssue ? 'Select Case Type...' : 'Select Legal Issue first'}
                </option>
                {availableCaseTypes.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 4. City */}
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>City</span>
            </label>
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className={`w-full appearance-none rounded-xl px-3 py-3 text-xs md:text-sm font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 pr-8 ${
                  isDark
                    ? 'bg-[#181B20] border border-slate-700 text-white focus:ring-amber-500/50 focus:border-amber-500'
                    : 'bg-white border border-slate-300 text-slate-900 focus:ring-emerald-700/30 focus:border-emerald-700 hover:border-slate-400'
                }`}
              >
                <option value="">Select City...</option>
                {CITIES_AND_LOCALITIES.map((c) => (
                  <option key={c.city} value={c.city}>
                    {c.city}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* 5. Locality / Area (Cascading: Filtered by City) */}
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Locality / Area</span>
            </label>
            <div className="relative">
              <select
                value={selectedLocality}
                onChange={(e) => setSelectedLocality(e.target.value)}
                disabled={!selectedCity || availableLocalities.length === 0}
                className={`w-full appearance-none rounded-xl px-3 py-3 text-xs md:text-sm font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 pr-8 truncate ${
                  isDark
                    ? 'bg-[#181B20] border border-slate-700 text-white focus:ring-amber-500/50 focus:border-amber-500 disabled:opacity-50'
                    : 'bg-white border border-slate-300 text-slate-900 focus:ring-emerald-700/30 focus:border-emerald-700 hover:border-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed'
                }`}
              >
                <option value="">
                  {selectedCity ? 'Select Locality...' : 'Select City first'}
                </option>
                {availableLocalities.map((loc, idx) => (
                  <option key={idx} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-200/50">
          
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto py-1 scrollbar-none">
            <span className={`text-xs font-medium whitespace-nowrap ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Popular Categories:
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Civil cases');
                setSelectedIssue('Money Recovery & Summary Suits');
                setSelectedCaseType('Order 37 CPC Summary Suit for Debt Recovery');
                setSelectedCity('Hyderabad');
                setSelectedLocality('Madhapur');
              }}
              className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Civil: Money Recovery
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Criminal cases');
                setSelectedIssue('Bail & Anticipatory Bail');
                setSelectedCaseType('Anticipatory Bail Petition (Sec 438 CrPC / BNSS)');
                setSelectedCity('Hyderabad');
                setSelectedLocality('Banjara Hills');
              }}
              className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Criminal: Anticipatory Bail
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Family cases');
                setSelectedIssue('Divorce & Judicial Separation');
                setSelectedCaseType('Mutual Consent Divorce (Section 13B Hindu Marriage Act / SMA)');
                setSelectedCity('Bengaluru');
                setSelectedLocality('Indiranagar');
              }}
              className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Family: Mutual Divorce
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Commercial/corporate cases');
                setSelectedIssue('Insolvency Proceedings (NCLT / NCLAT)');
                setSelectedCaseType('Section 7 IBC Financial Creditor Insolvency Application');
                setSelectedCity('Mumbai');
                setSelectedLocality('Nariman Point');
              }}
              className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Commercial: NCLT Insolvency
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Land/revenue cases');
                setSelectedIssue('Land Records, Mutation & Patta Disputes');
                setSelectedCaseType('Revenue Mutation & Title Transfer Appeal before RDO');
                setSelectedCity('Hyderabad');
                setSelectedLocality('Gachibowli');
              }}
              className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Land/Revenue: Mutation & Patta
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleClear}
              className={`flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs md:text-sm font-medium transition-all ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>Clear</span>
            </button>

            <button
              type="submit"
              disabled={isSearching}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs md:text-sm font-semibold text-white shadow-md transition-all active:scale-98 ${
                isDark
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold'
                  : 'bg-emerald-800 hover:bg-emerald-900 shadow-emerald-900/20'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>{isSearching ? 'Matching Advocates...' : 'Search Legal Services'}</span>
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
