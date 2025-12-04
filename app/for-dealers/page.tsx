import React from 'react';
import { Link } from 'react-router-dom';

export default function ForDealersPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            Grow Your Dealership <br/> with <span className="text-blue-400">Qualified Leads.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join North Carolina's fastest-growing Buy Here Pay Here network. Connect with buyers who are actively searching for financing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-colors shadow-xl">
              Claim Your Listing
            </button>
            <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl hover:bg-blue-700 transition-colors shadow-xl shadow-blue-900/50">
              Become a Featured Partner
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Claim Your Profile', desc: 'Take control of your dealership info, photos, and hours. Build trust with verified badges.', icon: '🏢' },
            { title: 'Receive Qualified Leads', desc: 'Get direct inquiries from buyers looking for financing in your specific area.', icon: '📩' },
            { title: 'Boost Visibility', desc: 'Featured partners appear at the top of search results and get 3x more views.', icon: '🚀' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12">Trusted by Dealerships Across NC</h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
           <div className="text-2xl font-black text-slate-900">AUTO<span className="text-blue-600">GROUP</span></div>
           <div className="text-2xl font-black text-slate-900">CAR<span className="text-blue-600">MAX</span></div>
           <div className="text-2xl font-black text-slate-900">DRIVE<span className="text-blue-600">TIME</span></div>
           <div className="text-2xl font-black text-slate-900">QC<span className="text-blue-600">MOTORS</span></div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-6">Ready to start?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            There is no cost to claim your basic listing. Premium features are available starting at $99/mo.
          </p>
          <button className="bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/50">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}
