import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: 'global' | 'dealer' | 'calculator';
  dealerName?: string;
  city?: string;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ 
  isOpen, 
  onClose, 
  context = 'global', 
  dealerName, 
  city 
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
      console.log('Lead submitted:', { context, dealerName, city });
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          {step === 1 ? (
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    {dealerName ? 'Request Financing' : 'Get Pre-Approved'}
                  </h2>
                  <p className="text-slate-500 font-medium mt-1">
                    {dealerName 
                      ? `Send your info directly to ${dealerName}.` 
                      : 'Connect with top-rated dealers in your area.'}
                  </p>
                </div>
                <button onClick={onClose} className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">First Name</label>
                    <input required type="text" className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none font-bold text-slate-900" placeholder="John" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Last Name</label>
                    <input required type="text" className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none font-bold text-slate-900" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Email Address</label>
                  <input required type="email" className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none font-bold text-slate-900" placeholder="john@example.com" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">Phone Number</label>
                  <input type="tel" className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none font-bold text-slate-900" placeholder="(555) 123-4567" />
                </div>
                
                {!city && (
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">City</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none font-bold text-slate-900" placeholder="e.g. Charlotte" />
                  </div>
                )}

                <div className="pt-4">
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Get Approved Now'
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-3">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">Success!</h2>
              <p className="text-slate-500 font-medium mb-8">
                Your information has been sent. A representative will contact you shortly to discuss your financing options.
              </p>
              <button onClick={onClose} className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors">
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
