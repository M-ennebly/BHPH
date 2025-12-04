import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cities, getCityStats, mockDealers } from '../data/dealers';
import DealerCard from '../components/DealerCard';
import { motion } from 'framer-motion';

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");
  const cityStats = getCityStats();
  const topCities = cityStats.slice(0, 6);
  
  const featuredDealers = mockDealers
    .filter(d => d.rating >= 4.5)
    .slice(0, 3);

  const handleSearch = () => {
    if (selectedCity) {
      navigate(`/north-carolina/${selectedCity}`);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 
        NEW HERO SECTION - LIGHT THEME
      */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
               Financing made <br className="hidden md:block" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">simple & transparent.</span>
             </h1>
             
             <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
               The premier directory for Buy Here Pay Here dealerships in North Carolina. Connect with trusted dealers who verify your income, not just your credit score.
             </p>

             {/* Modern Search Island */}
             <div className="bg-white p-3 rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100 max-w-xl mx-auto flex flex-col sm:flex-row gap-2 relative z-20 transition-all focus-within:ring-4 focus-within:ring-blue-100 focus-within:border-blue-300">
               <div className="flex-1 relative flex items-center px-4">
                 <svg className="w-6 h-6 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 <select 
                   value={selectedCity}
                   onChange={(e) => setSelectedCity(e.target.value)}
                   className="w-full bg-transparent border-none outline-none text-slate-900 font-bold text-lg appearance-none cursor-pointer py-3"
                 >
                   <option value="" disabled>Select your city...</option>
                   {cities.map(city => (
                     <option key={city} value={city}>{city}, NC</option>
                   ))}
                 </select>
               </div>
               <button 
                 onClick={handleSearch}
                 disabled={!selectedCity}
                 className="bg-slate-900 hover:bg-blue-600 disabled:bg-slate-200 disabled:text-slate-400 text-white text-lg font-bold py-3 px-8 rounded-3xl transition-all flex items-center justify-center gap-2"
               >
                 Search
               </button>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Cities - Cleaner Look */}
      <section className="relative z-20 -mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {topCities.map((stat) => (
            <Link 
              key={stat.city}
              to={`/north-carolina/${stat.city}`}
              className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-bold text-slate-900 mb-1">{stat.city}</h3>
              <p className="text-xs font-bold text-blue-600 bg-blue-50 py-1 px-2 rounded-lg inline-block">{stat.count} Dealers</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Section - Using Creative Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Top Rated Dealerships</h2>
             <p className="text-slate-500 text-lg">
               Highly reviewed partners known for transparent terms and quality inventory.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {featuredDealers.map((dealer) => (
               <div key={dealer.id} className="h-full">
                 <DealerCard dealer={dealer} matchScore="Strong Match" variant="vertical" />
               </div>
             ))}
           </div>

           <div className="mt-12 text-center">
              <Link to="/north-carolina" className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                View all dealerships in North Carolina <span aria-hidden="true">&rarr;</span>
              </Link>
           </div>
        </div>
      </section>

      {/* Feature Split - Calculator Teaser */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-full text-sm mb-6">
                Financing Tool
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Know your purchasing power before you visit.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Don't guess at the dealership. Use our free calculator to estimate your down payment requirement and approval odds based on real industry standards.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-green-500 font-bold text-xl">✓</div>
                  <span className="text-slate-700 font-medium">No impact on credit score</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-green-500 font-bold text-xl">✓</div>
                  <span className="text-slate-700 font-medium">Takes less than 30 seconds</span>
                </div>
              </div>

              <Link 
                to="/tools/calculator" 
                className="inline-flex bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:scale-105"
              >
                Start Estimation
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-200 rounded-[2.5rem] transform rotate-3 scale-105 opacity-50"></div>
              <div className="relative bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100">
                <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                  <div className="text-sm font-bold text-slate-400">ESTIMATE PREVIEW</div>
                  <div className="text-green-500 font-bold text-sm bg-green-50 px-3 py-1 rounded-full">High Odds</div>
                </div>
                <div className="space-y-6">
                   <div>
                     <div className="text-slate-500 text-sm mb-1">Recommended Down Payment</div>
                     <div className="text-4xl font-black text-slate-900">$800 - $1,200</div>
                   </div>
                   <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                     <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                   </div>
                   <div className="grid grid-cols-2 gap-4 pt-4">
                     <div className="bg-slate-50 p-4 rounded-xl">
                       <div className="text-slate-500 text-xs font-bold uppercase mb-1">Vehicle Budget</div>
                       <div className="text-xl font-bold text-slate-900">$12,500</div>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-xl">
                       <div className="text-slate-500 text-xs font-bold uppercase mb-1">Weekly Pmt</div>
                       <div className="text-xl font-bold text-slate-900">$85/wk</div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW REVENUE SECTION - Partner CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-extrabold mb-4">Dealers: List Your Inventory</h2>
           <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
             Reach thousands of qualified buyers every month. Join North Carolina's fastest-growing BHPH network today.
           </p>
           <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-lg hover:scale-105 transform duration-200">
             Partner With AutoApproval
           </button>
        </div>
      </section>

    </div>
  );
}