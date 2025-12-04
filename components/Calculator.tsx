import React, { useState, useEffect } from 'react';
import { CalculatorInputs, CalculationResult } from '../types';
import { cities } from '../data/dealers';
import { motion } from 'framer-motion';

interface CalculatorProps {
  onCalculate: (result: CalculationResult, city: string) => void;
}

const INITIAL_STATE: CalculatorInputs = {
  carPrice: 15000,
  carType: 'Sedan',
  city: 'Charlotte',
  isBudgetMode: false,
  monthlyIncome: 0,
  creditScore: 'fair',
  downPayment: 1000,
  employmentStatus: 'Full-time',
  jobDuration: '1-2 years'
};

const Calculator: React.FC<CalculatorProps> = ({ onCalculate }) => {
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState<CalculatorInputs>(INITIAL_STATE);

  const updateInput = (key: keyof CalculatorInputs, value: any) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
    else calculateResults();
  };

  const handleBack = () => {
    setStep(1);
  };

  const calculateResults = () => {
    // Mock Calculation Logic
    let baseDownPerc = 0.10; // 10%
    if (inputs.creditScore === 'poor') baseDownPerc = 0.18;
    if (inputs.creditScore === 'rebuilding') baseDownPerc = 0.25;

    let targetPrice = inputs.isBudgetMode ? 15000 : inputs.carPrice;
    
    // Adjust target price based on affordability
    const maxAffordableMonthly = inputs.monthlyIncome * 0.15;
    const maxTotalLoan = maxAffordableMonthly * 36; 
    
    const requiredDown = Math.max(500, Math.round(targetPrice * baseDownPerc));
    
    let approvalOdds: 'High' | 'Medium' | 'Low' = 'Medium';
    const incomeToPriceRatio = inputs.monthlyIncome / (targetPrice / 36);
    
    if (incomeToPriceRatio > 3 && inputs.creditScore !== 'rebuilding') approvalOdds = 'High';
    if (incomeToPriceRatio < 1.5 || inputs.creditScore === 'rebuilding') approvalOdds = 'Low';

    const loanAmount = targetPrice - requiredDown;
    const weeklyPayment = (loanAmount * 1.4) / 156; 
    const maxApproval = Math.round(maxTotalLoan + inputs.downPayment);

    const result: CalculationResult = {
      estimatedDownPayment: requiredDown,
      weeklyPayment: weeklyPayment,
      approvalOdds: approvalOdds,
      priceRangeLabel: inputs.isBudgetMode 
        ? `Vehicles up to $${(maxApproval / 1000).toFixed(1)}k` 
        : `Vehicles around $${(targetPrice / 1000).toFixed(1)}k`,
      maxApprovalAmount: maxApproval
    };

    onCalculate(result, inputs.city);
  };

  useEffect(() => {
     if(step === 2 && inputs.monthlyIncome > 0) calculateResults();
  }, [inputs.monthlyIncome, inputs.downPayment, inputs.creditScore]);

  return (
    <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-200 overflow-hidden relative">
      {/* Compact Progress Header */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">{step}</span>
            <span className="text-sm font-bold text-slate-900">
              {step === 1 ? 'Vehicle & Location' : 'Income & Credit'}
            </span>
         </div>
         <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300" 
              style={{ width: step === 1 ? '50%' : '100%' }}
            ></div>
         </div>
      </div>

      <div className="p-6">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          {step === 1 ? (
            <div className="space-y-6">
              
              {/* Row 1: Budget */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Target Price
                  </label>
                  {!inputs.isBudgetMode && (
                    <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                      ${inputs.carPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {!inputs.isBudgetMode ? (
                  <div className="relative">
                    <input 
                      type="range" 
                      min="5000" max="30000" step="500"
                      value={inputs.carPrice}
                      onChange={(e) => updateInput('carPrice', parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
                      <span>$5k</span>
                      <span>$15k</span>
                      <span>$30k+</span>
                    </div>
                  </div>
                ) : (
                   <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-blue-800 text-sm font-bold text-center">
                     We'll calculate your budget automatically.
                   </div>
                )}
                
                <label className="flex items-center gap-2 mt-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    checked={inputs.isBudgetMode}
                    onChange={(e) => updateInput('isBudgetMode', e.target.checked)}
                  />
                  <span className="text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors">I don't know my budget yet</span>
                </label>
              </div>

              {/* Row 2: Type (Horizontal Grid) */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Vehicle Type</label>
                <div className="grid grid-cols-4 gap-2">
                  {['Sedan', 'SUV', 'Truck', 'Minivan'].map(type => (
                    <button
                      key={type}
                      onClick={() => updateInput('carType', type)}
                      className={`py-3 px-1 rounded-xl border text-center transition-all ${
                        inputs.carType === type 
                          ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm' 
                          : 'border-slate-100 bg-slate-50 text-slate-500 hover:bg-white hover:border-slate-200'
                      }`}
                    >
                      <span className="block text-[10px] font-bold">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: City */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Location</label>
                <select 
                  className="w-full h-11 pl-3 pr-8 bg-slate-50 rounded-xl text-sm font-bold text-slate-900 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  value={inputs.city}
                  onChange={(e) => updateInput('city', e.target.value)}
                >
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Row 1: Income */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Monthly Income (Net)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input 
                    type="number"
                    value={inputs.monthlyIncome || ''}
                    onChange={(e) => updateInput('monthlyIncome', parseInt(e.target.value))}
                    className="w-full h-12 pl-8 pr-4 bg-slate-50 rounded-xl text-lg font-bold text-slate-900 border border-slate-200 focus:border-blue-500 focus:bg-white outline-none"
                    placeholder="0"
                    autoFocus
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  {[2000, 3000, 4000].map(amt => (
                    <button 
                      key={amt}
                      onClick={() => updateInput('monthlyIncome', amt)}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-500 hover:border-blue-400 hover:text-blue-600"
                    >
                      ${amt/1000}k
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 2: Credit (Horizontal Grid) */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Credit Estimate</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 'poor', label: 'Poor (<550)' },
                    { val: 'fair', label: 'Fair (550+)' },
                    { val: 'rebuilding', label: 'None / Repo' }
                  ].map(opt => (
                    <button
                      key={opt.val}
                      onClick={() => updateInput('creditScore', opt.val)}
                      className={`py-3 px-2 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                        inputs.creditScore === opt.val 
                          ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm' 
                          : 'border-slate-100 bg-slate-50 text-slate-500 hover:bg-white'
                      }`}
                    >
                      <span className="text-[10px] font-bold leading-tight">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Down Payment */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Down Payment
                  </label>
                  <span className="text-sm font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                    ${inputs.downPayment.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" max="5000" step="100"
                  value={inputs.downPayment}
                  onChange={(e) => updateInput('downPayment', parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-green-600"
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Compact Footer */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
         {step === 2 ? (
            <button 
              onClick={handleBack}
              className="text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Back
            </button>
         ) : (
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
               No credit check
            </div>
         )}
         
         <button 
           onClick={handleNext}
           className="bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold py-3 px-6 rounded-xl shadow-lg shadow-slate-300 hover:shadow-blue-200 transition-all active:scale-95"
         >
           {step === 1 ? 'Next Step' : 'Calculate Results'}
         </button>
      </div>
    </div>
  );
};

export default Calculator;