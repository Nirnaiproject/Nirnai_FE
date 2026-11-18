import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  RotateCcw, 
  MapPin, 
  Star, 
  CalendarCheck, 
  Scale
} from 'lucide-react';
import { ADVOCATES, CASE_CATEGORIES, LEGAL_ISSUES, CITIES_AND_LOCALITIES } from '../data/mockData';
import SearchCard from '../components/SearchCard';

export default function AdvocatesDirectoryPage({ onBookConsultation }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryCategory = searchParams.get('category') || '';
  const queryIssue = searchParams.get('issue') || '';
  const queryCaseType = searchParams.get('caseType') || '';
  const queryCity = searchParams.get('city') || '';
  const queryLocality = searchParams.get('locality') || '';

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(queryCategory);
  const [selectedIssue, setSelectedIssue] = useState(queryIssue);
  const [selectedCity, setSelectedCity] = useState(queryCity);
  const [selectedMode, setSelectedMode] = useState('all');
  const [minExp, setMinExp] = useState(0);
  const [sortBy, setSortBy] = useState('rating');
  const [showSearchBox, setShowSearchBox] = useState(false);

  // Synchronize state when query params change
  useEffect(() => {
    if (queryCategory) setSelectedCategory(queryCategory);
    if (queryIssue) setSelectedIssue(queryIssue);
    if (queryCity) setSelectedCity(queryCity);
  }, [queryCategory, queryIssue, queryCity]);

  // Available issues filtered by category in the directory toolbar
  const availableToolbarIssues = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'all') {
      return LEGAL_ISSUES;
    }
    return LEGAL_ISSUES.filter(i => i.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  // Filter and sort advocates
  const filteredAdvocates = useMemo(() => {
    return ADVOCATES.filter((adv) => {
      // 1. Keyword search
      if (searchKeyword) {
        const kw = searchKeyword.toLowerCase();
        const matchesName = adv.name.toLowerCase().includes(kw);
        const matchesBio = adv.bio.toLowerCase().includes(kw);
        const matchesCourts = adv.courts.some(c => c.toLowerCase().includes(kw));
        const matchesSpecs = adv.specializations.some(s => s.toLowerCase().includes(kw));
        const matchesCat = adv.categories?.some(c => c.toLowerCase().includes(kw));
        if (!matchesName && !matchesBio && !matchesCourts && !matchesSpecs && !matchesCat) return false;
      }

      // 2. Case Category filter (matches against 11 categories)
      if (selectedCategory && selectedCategory !== 'all') {
        const targetCat = selectedCategory.toLowerCase();
        const matchesCategory = 
          adv.categories?.some(c => c.toLowerCase() === targetCat) ||
          adv.primaryCategory?.toLowerCase() === targetCat ||
          adv.specializations.some(s => {
            const found = LEGAL_ISSUES.find(i => i.name === s);
            return found && found.category.toLowerCase() === targetCat;
          });
        if (!matchesCategory) return false;
      }

      // 3. Legal Issue filter
      if (selectedIssue && selectedIssue !== 'all') {
        const matches = adv.specializations.some(
          s => s.toLowerCase() === selectedIssue.toLowerCase() || s.toLowerCase().includes(selectedIssue.toLowerCase())
        );
        if (!matches) return false;
      }

      // 4. City filter
      if (selectedCity && selectedCity !== 'all') {
        if (adv.city.toLowerCase() !== selectedCity.toLowerCase()) return false;
      }

      // 5. Mode filter
      if (selectedMode !== 'all') {
        const matchesMode = adv.consultationModes.some(m => m.toLowerCase().includes(selectedMode.toLowerCase()));
        if (!matchesMode) return false;
      }

      // 6. Experience filter
      if (minExp > 0 && adv.experienceYears < minExp) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'experience') return b.experienceYears - a.experienceYears;
      if (sortBy === 'priceAsc') return (a.discountedFee || a.consultationFee) - (b.discountedFee || b.consultationFee);
      if (sortBy === 'priceDesc') return (b.discountedFee || b.consultationFee) - (a.discountedFee || a.consultationFee);
      return 0;
    });
  }, [searchKeyword, selectedCategory, selectedIssue, selectedCity, selectedMode, minExp, sortBy]);

  const handleResetFilters = () => {
    setSearchKeyword('');
    setSelectedCategory('');
    setSelectedIssue('');
    setSelectedCity('');
    setSelectedMode('all');
    setMinExp(0);
    setSortBy('rating');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Link to="/" className="hover:text-emerald-800">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Find Advocates</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-serif text-slate-900">
                Verified Advocates Directory
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Showing {filteredAdvocates.length} verified legal counsels
                {selectedCategory && selectedCategory !== 'all' ? ` in ${selectedCategory}` : ''}
                {selectedCity && selectedCity !== 'all' ? ` • ${selectedCity}` : ''}
                {selectedIssue && selectedIssue !== 'all' ? ` (${selectedIssue})` : ''}
              </p>
            </div>

            <button
              onClick={() => setShowSearchBox(!showSearchBox)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs md:text-sm font-semibold text-slate-700 hover:bg-slate-50 self-start md:self-auto shadow-xs"
            >
              <Search className="w-4 h-4 text-emerald-700" />
              <span>{showSearchBox ? 'Hide Search Card' : 'Open 5-Field Smart Search'}</span>
            </button>
          </div>
        </div>

        {/* Collapsible Full 5-Field Search Card */}
        {showSearchBox && (
          <div className="mb-8 animate-in slide-in-from-top duration-300">
            <SearchCard
              initialCategory={selectedCategory || 'Civil cases'}
              initialIssue={selectedIssue || 'Money Recovery & Summary Suits'}
              initialCity={selectedCity || 'Hyderabad'}
              onSearch={(params) => {
                if (params.category) setSelectedCategory(params.category);
                if (params.issue) setSelectedIssue(params.issue);
                if (params.city) setSelectedCity(params.city);
                setSearchParams(params);
                setShowSearchBox(false);
              }}
            />
          </div>
        )}

        {/* Filter Toolbar */}
        <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            
            {/* 1. Keyword Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search name, court..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            {/* 2. Case Category Filter (11 Categories from Image) */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedIssue('all');
                }}
                className="w-full px-3 py-2.5 text-xs md:text-sm border border-emerald-300 bg-emerald-50/50 text-emerald-950 font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
              >
                <option value="all">All 11 Categories</option>
                {CASE_CATEGORIES.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>

            {/* 3. Legal Issue Filter (Filtered by Category) */}
            <div>
              <select
                value={selectedIssue}
                onChange={(e) => setSelectedIssue(e.target.value)}
                className="w-full px-3 py-2.5 text-xs md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
              >
                <option value="all">All Legal Issues</option>
                {availableToolbarIssues.map(issue => (
                  <option key={issue.id} value={issue.name}>{issue.name}</option>
                ))}
              </select>
            </div>

            {/* 4. City Filter */}
            <div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2.5 text-xs md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
              >
                <option value="all">All Metro Cities</option>
                {CITIES_AND_LOCALITIES.map(c => (
                  <option key={c.city} value={c.city}>{c.city}</option>
                ))}
              </select>
            </div>

            {/* 5. Consultation Mode */}
            <div>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full px-3 py-2.5 text-xs md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white"
              >
                <option value="all">All Consultation Modes</option>
                <option value="Video">Video Call</option>
                <option value="Office">In-Person Office</option>
                <option value="Phone">Phone Consultation</option>
              </select>
            </div>

            {/* 6. Sort Order */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2.5 text-xs md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/30 bg-white font-medium"
              >
                <option value="rating">Sort: Highest Rated</option>
                <option value="experience">Sort: Experience (Years)</option>
                <option value="priceAsc">Sort: Fee (Lowest First)</option>
                <option value="priceDesc">Sort: Fee (Highest First)</option>
              </select>
            </div>

          </div>

          {/* Active Quick Category Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto py-1">
              <span className="text-slate-400 font-medium">Quick Select:</span>
              {CASE_CATEGORIES.slice(0, 6).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.name ? 'all' : cat.name)}
                  className={`px-2.5 py-1 rounded-full font-medium transition-colors text-[11px] whitespace-nowrap ${
                    selectedCategory === cat.name ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.shortName}
                </button>
              ))}
            </div>

            <button
              onClick={handleResetFilters}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium hover:underline flex-shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>

        </div>

        {/* Advocates Cards Grid */}
        {filteredAdvocates.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <Scale className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No Advocates Match Your Criteria</h3>
            <p className="text-xs md:text-sm text-slate-500 mt-1 mb-4">
              Try loosening your filters or resetting the search to see verified advocates in other nearby localities or categories.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-emerald-800 text-white text-xs font-semibold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdvocates.map((advocate) => (
              <div
                key={advocate.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-700/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Top Bar with Avatar, Name, Rating */}
                  <div className="p-5 pb-3">
                    <div className="flex items-start gap-4">
                      <img
                        src={advocate.photo}
                        alt={advocate.name}
                        className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-slate-100 flex-shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                            {advocate.barCouncilNumber}
                          </span>
                          {advocate.badgeLabel && (
                            <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded font-semibold">
                              {advocate.badgeLabel}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors truncate mt-1">
                          {advocate.name}
                        </h3>
                        <p className="text-xs text-slate-500 truncate">
                          {advocate.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-600">
                          <div className="flex items-center gap-1 text-amber-500 font-bold">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            <span>{advocate.rating}</span>
                          </div>
                          <span>•</span>
                          <span className="text-slate-500">{advocate.reviewCount} reviews</span>
                        </div>
                      </div>
                    </div>

                    {/* Location & Courts */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                        <span className="font-medium">{advocate.locality}, {advocate.city}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        🏛️ Practice Courts: {advocate.courts.join(', ')}
                      </div>
                    </div>

                    {/* Bio snippet */}
                    <p className="text-xs text-slate-600 line-clamp-2 mt-3 leading-relaxed">
                      {advocate.bio}
                    </p>

                    {/* Specialization Tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {advocate.specializations.slice(0, 3).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded truncate max-w-[200px]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Consultation</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-extrabold text-slate-900">
                        ₹{advocate.discountedFee || advocate.consultationFee}
                      </span>
                      {advocate.discountedFee && (
                        <span className="text-[11px] text-slate-400 line-through">₹{advocate.consultationFee}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/advocate/${advocate.id}`}
                      className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-800 hover:bg-slate-200/60 rounded-xl transition-colors"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => onBookConsultation?.(advocate)}
                      className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-xl shadow-xs flex items-center gap-1.5 active:scale-95 transition-all"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" />
                      <span>Book Slot</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
