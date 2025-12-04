import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calculator from '../../../components/Calculator';
import ResultsDashboard from '../../../components/ResultsDashboard';
import { CalculationResult } from '../../../types';

export default function CalculatorPage() {
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [resultCity, setResultCity] = useState("");

  const handleCalculation = (res: CalculationResult, city: string) => {
    setResults(res);
    setResultCity(city);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Compact Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <h1 className="text-3xl font-black text-slate-900 tracking-tight">Financing Calculator</h1>
           <p className="text-slate-500 text-sm font-medium mt-1">
             Estimate your down payment and approval odds instantly.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <Calculator onCalculate={handleCalculation} />
          </div>

          {/* Right Column: Results & Banner */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Results Component */}
            <div className={`transition-all duration-500 ${results ? 'opacity-100 translate-y-0' : 'opacity-100 grayscale'}`}>
               <ResultsDashboard 
                 results={results || { estimatedDownPayment: 500, weeklyPayment: 85, approvalOdds: 'Medium', priceRangeLabel: 'Standard', maxApprovalAmount: 15000 }} 
                 city={resultCity} 
               />
               {!results && <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] rounded-[2rem] z-10 flex items-center justify-center">
                 <span className="bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold text-slate-500 border border-slate-100">Enter details to see estimate</span>
               </div>}
            </div>

            {/* Revenue Banner - Always Visible */}
            <div className="bg-slate-900 rounded-[2rem] p-6 text-white shadow-xl shadow-slate-900/10 flex items-center gap-4 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 relative z-10">
                 🤝
               </div>
               <div className="flex-1 relative z-10">
                 <h3 className="font-bold text-sm text-white">Dealership Partner?</h3>
                 <p className="text-slate-400 text-xs">Get this tool for your site.</p>
               </div>
               <button className="relative z-10 text-xs font-bold bg-white text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                 Get Widget
               </button>
            </div>
            
            {results && (
              <Link 
                to={`/north-carolina/${resultCity || 'Charlotte'}`}
                className="block w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 text-center animate-pulse"
              >
                View Matches in {resultCity || 'NC'} &rarr;
              </Link>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}