
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Search,
  RotateCcw,
  Scale,
  FileText,
  MapPin,
  Compass,
  Layers
} from 'lucide-react';

import {
  CASE_CATEGORIES,
  LEGAL_ISSUES,
  CITIES_AND_LOCALITIES
} from '../data/mockData';

export default function SearchCard({
  initialCategory = 'Civil cases',
  initialIssue = 'Money Recovery & Summary Suits',
  initialCaseType = 'Order 37 CPC Summary Suit for Debt Recovery',
  initialCity = 'Hyderabad',
  initialLocality = 'Madhapur',
  onSearch,
  variant = 'light'
}) {
  const navigate = useNavigate();

  // Search field states
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedIssue, setSelectedIssue] = useState(initialIssue);
  const [selectedCaseType, setSelectedCaseType] = useState(initialCaseType);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedLocality, setSelectedLocality] = useState(initialLocality);

  // Available dropdown options
  const [availableIssues, setAvailableIssues] = useState([]);
  const [availableCaseTypes, setAvailableCaseTypes] = useState([]);
  const [availableLocalities, setAvailableLocalities] = useState([]);

  const [isSearching, setIsSearching] = useState(false);

  // Theme is controlled by the parent through the variant prop.
  // There is no longer a theme toggle inside this search card.
  const isDark = variant === 'dark';

  // 1. Update Legal Issues when Case Category changes
  useEffect(() => {
    if (selectedCategory) {
      const filtered = LEGAL_ISSUES.filter(
        (issue) =>
          issue.category.toLowerCase() === selectedCategory.toLowerCase()
      );

      setAvailableIssues(filtered);

      // Select the first available issue if the current issue
      // does not belong to the selected category.
      if (!filtered.some((issue) => issue.name === selectedIssue)) {
        setSelectedIssue(filtered[0]?.name || '');
      }
    } else {
      setAvailableIssues(LEGAL_ISSUES);
    }
  }, [selectedCategory]);

  // 2. Update Case Types when Legal Issue changes
  useEffect(() => {
    const issueObj = LEGAL_ISSUES.find(
      (issue) => issue.name === selectedIssue
    );

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

  // 3. Update Localities when City changes
  useEffect(() => {
    const cityObj = CITIES_AND_LOCALITIES.find(
      (city) => city.city === selectedCity
    );

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

  // Search handler
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

  // Clear all fields
  const handleClear = () => {
    setSelectedCategory('');
    setSelectedIssue('');
    setSelectedCaseType('');
    setSelectedCity('');
    setSelectedLocality('');

    if (onSearch) {
      onSearch({
        category: '',
        issue: '',
        caseType: '',
        city: '',
        locality: ''
      });
    }
  };

  return (
    <div
      className={`w-full rounded-2xl md:rounded-3xl transition-all duration-300 ${
        isDark
          ? 'bg-[#0D0F12] text-white border border-slate-800 shadow-2xl p-5 md:p-7'
          : 'bg-white text-slate-800 border border-slate-200/90 shadow-xl p-5 md:p-7 card-gloss'
      }`}
    >

      {/* Search Header */}
      <div className="flex items-start gap-3 mb-6">

        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            isDark
              ? 'bg-amber-500/10 text-amber-400'
              : 'bg-emerald-50 text-emerald-800'
          }`}
        >
          <Scale className="w-5 h-5" />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Find Legal Services
          </h2>

          <p
            className={`text-xs md:text-sm mt-1 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Select Case Category → Legal Issue → Case Type → City & Locality.
          </p>
        </div>

      </div>

      {/* Five-field Search Form */}
      <form onSubmit={handleSearch}>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 md:gap-4 mb-6">

          {/* 1. Case Category */}
          <div className="space-y-1.5">

            <label
              className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
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
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

            </div>
          </div>

          {/* 2. Legal Issue */}
          <div className="space-y-1.5">

            <label
              className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
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
                  {selectedCategory
                    ? 'Select Legal Issue...'
                    : 'Select Category first'}
                </option>

                {availableIssues.map((issue) => (
                  <option key={issue.id} value={issue.name}>
                    {issue.name}
                  </option>
                ))}

              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

            </div>
          </div>

          {/* 3. Case Type */}
          <div className="space-y-1.5">

            <label
              className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
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
                  {selectedIssue
                    ? 'Select Case Type...'
                    : 'Select Legal Issue first'}
                </option>

                {availableCaseTypes.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}

              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

            </div>
          </div>

          {/* 4. City */}
          <div className="space-y-1.5">

            <label
              className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
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

                {CITIES_AND_LOCALITIES.map((city) => (
                  <option key={city.city} value={city.city}>
                    {city.city}
                  </option>
                ))}

              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

            </div>
          </div>

          {/* 5. Locality / Area */}
          <div className="space-y-1.5">

            <label
              className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
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
                  {selectedCity
                    ? 'Select Locality...'
                    : 'Select City first'}
                </option>

                {availableLocalities.map((locality, idx) => (
                  <option key={idx} value={locality}>
                    {locality}
                  </option>
                ))}

              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-5 border-t border-slate-200/70">

          {/* Clear Button */}
          <button
            type="button"
            onClick={handleClear}
            className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Clear</span>
          </button>

          {/* Search Button */}
          <button
            type="submit"
            disabled={isSearching}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white shadow-md transition-all active:scale-95 disabled:opacity-60 ${
              isDark
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold'
                : 'bg-emerald-800 hover:bg-emerald-900 shadow-emerald-900/20'
            }`}
          >
            <Search className="w-4 h-4" />

            <span>
              {isSearching ? 'Matching Advocates...' : 'Search Legal Services'}
            </span>
          </button>

        </div>

      </form>

    </div>
  );
}
