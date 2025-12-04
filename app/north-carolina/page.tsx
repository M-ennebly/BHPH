import React from 'react';
import { Link } from 'react-router-dom';
import { getCityStats } from '../../data/dealers';
import Breadcrumbs from '../../components/Breadcrumbs';
import SeoContentBlock from '../../components/SeoContentBlock';
import FaqSection from '../../components/FaqSection';

export default function StateDirectoryPage() {
  const cityStats = getCityStats();
  const sortedStats = [...cityStats].sort((a, b) => b.count - a.count);
  const featuredCity = sortedStats[0];
  const otherCities = sortedStats.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <Breadcrumbs items={[{ label: 'North Carolina' }]} />
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            North Carolina Directory
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Browse our comprehensive list of Buy Here Pay Here dealerships. 
            Verified listings with in-house financing options for every budget.
          </p>
        </div>

        {/* Featured City Card (Charlotte) */}
        {featuredCity && (
          <div className="mb-12">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pl-2">Top Location</h2>
            <Link 
              to={`/north-carolina/${featuredCity.city}`}
              className="group relative overflow-hidden bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-blue-100 transition-colors opacity-60"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <h2 className="text-4xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {featuredCity.city}
                    </h2>
                    <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">Most Dealers</span>
                  </div>
                  <p className="text-slate-500 text-lg font-medium">
                    {featuredCity.count} verified dealerships available today.
                  </p>
                </div>
                <div className="bg-white border-2 border-slate-100 text-slate-900 font-bold py-4 px-8 rounded-2xl group-hover:border-blue-200 group-hover:text-blue-600 transition-all flex items-center gap-2">
                   Browse City &rarr;
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Other Cities Grid */}
        <div>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 pl-2">All Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCities.map((stat) => (
              <Link 
                key={stat.city} 
                to={`/north-carolina/${stat.city}`}
                className="group bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {stat.city}
                  </h3>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">North Carolina</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="bg-slate-50 text-slate-900 font-bold px-3 py-1 rounded-lg text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {stat.count}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <SeoContentBlock 
          title="Buy Here Pay Here Dealerships in North Carolina"
          paragraphs={[
            "Finding a reliable vehicle when you have bad credit or no credit can be challenging. North Carolina offers a robust network of Buy Here Pay Here (BHPH) dealerships that specialize in in-house financing. Unlike traditional dealerships that rely on third-party banks, BHPH dealers act as the lender, making it easier for them to approve buyers based on income rather than credit score.",
            "Whether you are in Charlotte, Raleigh, Greensboro, or Wilmington, our directory helps you connect with trusted dealers who understand your financial situation. Many of these dealerships report your on-time payments to credit bureaus, helping you rebuild your credit score while you drive.",
            "Start your journey today by browsing our city-specific directories or using our financing calculator to estimate your budget."
          ]}
        />

        <FaqSection 
          title="Frequently Asked Questions"
          items={[
            { question: "What requirements do I need for approval?", answer: "Most dealers require proof of income (pay stubs), proof of residence (utility bill), a valid driver's license, and a down payment." },
            { question: "Can I get a car with a repossession?", answer: "Yes, many BHPH dealers specialize in helping buyers with past repossessions, bankruptcies, or divorce." },
            { question: "How much down payment do I need?", answer: "Down payments typically range from $500 to $2,000 depending on the vehicle price and your income." }
          ]}
        />

        {/* Info Box */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-500/20 text-white flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
             <h2 className="text-2xl font-bold mb-3">Not ready to browse?</h2>
             <p className="text-slate-400 leading-relaxed">
               Use our financing calculator to estimate your down payment and approval odds before contacting dealerships.
             </p>
          </div>
          <Link 
            to="/tools/calculator" 
            className="whitespace-nowrap bg-white text-slate-900 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Launch Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
