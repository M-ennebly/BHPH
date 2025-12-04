import React from 'react';
import { CalculationResult } from '../types';

interface ResultsDashboardProps {
  results: CalculationResult;
  city: string;
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ results }) => {
  const oddsColor = 
    results.approvalOdds === 'High' ? 'text-emerald-700 bg-emerald-100 border-emerald-200' :
    results.approvalOdds === 'Medium' ? 'text-yellow-700 bg-yellow-100 border-yellow-200' : 'text-red-700 bg-red-100 border-red-200';

  return (
    <div className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-xl relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Financing Report</h2>
          <div className="flex items-center gap-1 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Estimate</span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-lg font-extrabold text-xs border ${oddsColor}`}>
          {results.approvalOdds} Odds
        </div>
      </div>

      <div className="space-y-4">
        {/* Main Metric */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 text-center relative group">
          <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-2">Recommended Down Payment</p>
          <div className="text-4xl font-black text-slate-900 tracking-tighter">
            ${results.estimatedDownPayment.toLocaleString()}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-center">
              <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-1">Weekly Pmt</p>
              <div className="text-xl font-black text-slate-900">
                ${Math.round(results.weeklyPayment)}
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-center">
              <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-1">Budget</p>
              <div className="text-xl font-black text-slate-900">
                ${(results.maxApprovalAmount / 1000).toFixed(1)}k
              </div>
            </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-100 text-center">
         <p className="text-xs text-slate-400 font-medium">
            Based on <span className="text-slate-900 font-bold">{results.priceRangeLabel}</span> vehicles.
         </p>
      </div>
    </div>
  );
};

export default ResultsDashboard;