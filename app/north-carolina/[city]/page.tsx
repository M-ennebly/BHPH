import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDealersByCity, cities } from '../../../data/dealers';
import DealerCard from '../../../components/DealerCard';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SeoContentBlock from '../../../components/SeoContentBlock';
import FaqSection from '../../../components/FaqSection';

export default function CityDirectoryPage() {
  const { city } = useParams<{ city: string }>();
  const [minRating, setMinRating] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const cityDealers = useMemo(() => {
    return getDealersByCity(city || '');
  }, [city]);

  const nearbyCities = useMemo(() => {
    return cities.filter(c => c !== city).slice(0, 4);
  }, [city]);

  const filteredDealers = useMemo(() => {
    // Sort featured dealers first
    const sorted = [...cityDealers].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    
    return sorted.filter(dealer => {
      if (dealer.rating < minRating) return false;
      if (selectedTag && !dealer.tags.includes(selectedTag)) return false;
      return true;
    });
  }, [cityDealers, minRating, selectedTag]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    cityDealers.forEach(d => d.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, [cityDealers]);

  if (cityDealers.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full p-10 rounded-[2.5rem] shadow-2xl text-center border border-slate-100">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">🔎</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">No dealers found</h1>
          <p className="text-slate-500 mb-8 font-medium">We haven't verified any dealerships in {city} yet.</p>
          <Link to="/north-carolina" className="block w-full py-4 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-2xl transition-colors">
            Browse All Cities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <Breadcrumbs items={[{ label: 'North Carolina', href: '/north-carolina' }, { label: city || '' }]} />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sticky Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-24 z-10">
            <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-50">
                 <h2 className="font-bold text-slate-900">Filter Results</h2>
                 {(minRating > 0 || selectedTag) && (
                  <button 
                    onClick={() => { setMinRating(0); setSelectedTag(null); }}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    Reset
                  </button>
                )}
              </div>
              
              <div className="mb-8">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">Minimum Rating</label>
                <div className="flex flex-wrap gap-2">
                  {[0, 3, 4, 4.5].map(rating => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`px-3 py-2 rounded-xl text-sm font-bold transition-all border ${
                        minRating === rating 
                          ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                          : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {rating === 0 ? 'Any' : `${rating}+ ★`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">Specialties</label>
                <div className="space-y-2">
                  <button 
                    onClick={() => setSelectedTag(null)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                      selectedTag === null 
                        ? 'bg-blue-50 text-blue-700 font-bold border border-blue-100' 
                        : 'text-slate-600 font-medium hover:bg-slate-50'
                    }`}
                  >
                    All Specialties
                  </button>
                  {allTags.map(tag => (
                    <button 
                      key={tag}
                      onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                        selectedTag === tag 
                          ? 'bg-blue-600 text-white shadow-lg font-bold' 
                          : 'text-slate-600 font-medium hover:bg-slate-50'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main List */}
          <div className="flex-1 min-w-0">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {city} Dealers
              </h1>
              <p className="text-slate-500 font-medium mt-2">
                We found <span className="font-bold text-slate-900">{filteredDealers.length}</span> results 
                {selectedTag ? <span> matching <span className="text-blue-600">"{selectedTag}"</span></span> : ''}.
              </p>
            </div>

            {/* Featured Dealer Banner */}
            <Link to="/for-dealers" className="block mb-8 bg-gradient-to-r from-slate-900 to-blue-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl shadow-blue-900/20 group hover:-translate-y-1 transition-transform">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-12 -mt-12 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                  <div>
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full mb-3 border border-white/10">For Dealerships</span>
                    <h3 className="text-2xl font-extrabold mb-2">Want to appear at the top?</h3>
                    <p className="text-blue-100 max-w-sm text-sm leading-relaxed">
                      Become a featured partner in {city} and get 3x more leads from qualified buyers.
                    </p>
                  </div>
                  <div className="bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap">
                    Boost My Visibility
                  </div>
                </div>
            </Link>

            <div className="space-y-6">
              {filteredDealers.map(dealer => (
                <DealerCard key={dealer.id} dealer={dealer} matchScore="Good Match" variant="horizontal" />
              ))}
              
              {filteredDealers.length === 0 && (
                <div className="bg-white rounded-[2rem] p-12 text-center border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="inline-block p-4 bg-slate-50 rounded-full mb-6">
                    <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No matches found</h3>
                  <p className="text-slate-500 mb-8 max-w-xs mx-auto">Try adjusting your filters to see more results.</p>
                  <button 
                    onClick={() => { setMinRating(0); setSelectedTag(null); }}
                    className="text-blue-600 font-bold hover:text-blue-800"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            <SeoContentBlock 
              title={`Buy Here Pay Here Dealers in ${city}, NC`}
              paragraphs={[
                `Looking for a reliable car in ${city} but worried about your credit? You are not alone. Our directory lists verified Buy Here Pay Here dealerships in ${city} that can help you get behind the wheel today, regardless of your credit history.`,
                `These dealerships offer in-house financing, meaning they don't rely on third-party banks for approval. This allows for flexible down payment options and quick approvals based on your income.`,
                `Explore our list of top-rated dealers in ${city} above. You can filter by rating or specialty to find the perfect match for your needs.`
              ]}
            />

            <FaqSection 
              title={`FAQs about Car Buying in ${city}`}
              items={[
                { question: `Are there "No Credit Check" dealers in ${city}?`, answer: "Yes, several dealerships in our directory offer no credit check financing options, focusing instead on proof of income." },
                { question: "What documents do local dealers require?", answer: "Typically, you'll need a valid NC driver's license, recent pay stubs, proof of residence, and references." },
              ]}
            />
            
            {/* Internal Linking */}
            <div className="mt-12 pt-12 border-t border-slate-200">
               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Browse Nearby Cities</h4>
               <div className="flex flex-wrap gap-4">
                 {nearbyCities.map(c => (
                   <Link key={c} to={`/north-carolina/${c}`} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:border-blue-400 hover:text-blue-600 transition-colors">
                     {c} Dealers
                   </Link>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
