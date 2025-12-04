import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LeadCaptureModal from '../components/LeadCaptureModal';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  // Dropdown states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <LeadCaptureModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
        context="global"
      />

      {/* Sticky Glass Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group relative z-50">
            <div className="relative w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-white font-extrabold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 tracking-tight leading-none">AutoApproval</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5">North Carolina</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
             
             {/* Directory Dropdown */}
             <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 py-2">
                  Directory
                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 top-full mt-1 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-left transform scale-95 group-hover:scale-100">
                  <Link to="/north-carolina" className="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors">
                    NC State Directory
                  </Link>
                  <div className="h-px bg-slate-100 my-1"></div>
                  <span className="block px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Top Cities</span>
                  <Link to="/north-carolina/Charlotte" className="block px-4 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-xl">Charlotte</Link>
                  <Link to="/north-carolina/Raleigh" className="block px-4 py-1.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-xl">Raleigh</Link>
                </div>
             </div>

             {/* Tools Dropdown */}
             <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 py-2">
                  Tools
                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-left transform scale-95 group-hover:scale-100">
                  <Link to="/tools/calculator" className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 4h6m-6 4h6M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Payment Calculator</p>
                      <p className="text-xs text-slate-500 mt-0.5">Estimate approval odds</p>
                    </div>
                  </Link>
                </div>
             </div>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-6">
            <Link to="/for-dealers" className="hidden md:block text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
              For Dealers
            </Link>
            
            <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white transition-all bg-slate-900 rounded-xl hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              Get Approved
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-500 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
               {isMobileMenuOpen ? (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
               ) : (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
               )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`fixed inset-0 bg-white z-40 pt-24 px-6 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-6">
             <div className="space-y-4">
               <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Directory</div>
               <Link to="/north-carolina" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-slate-900">NC Directory</Link>
               <Link to="/north-carolina/Charlotte" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-slate-600 ml-4">Charlotte</Link>
               <Link to="/north-carolina/Raleigh" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-slate-600 ml-4">Raleigh</Link>
             </div>
             
             <div className="space-y-4">
               <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tools</div>
               <Link to="/tools/calculator" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-slate-900">Financing Calculator</Link>
             </div>

             <div className="h-px bg-slate-100"></div>

             <Link to="/for-dealers" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-bold text-slate-500">For Dealers</Link>

             <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLeadModalOpen(true);
                }}
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-200"
              >
                Get Approved
              </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Redesigned Footer */}
      <footer className="bg-white border-t border-slate-200 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Brand Col */}
            <div className="lg:col-span-2 pr-8">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold text-slate-900">AutoApproval NC</span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
                Our mission is to make car ownership accessible to everyone in North Carolina by connecting buyers with transparent, trusted financing partners.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
                <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
                <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
              </div>
            </div>

            {/* Links Cols */}
            <div>
              <h4 className="text-slate-900 font-bold mb-6">Directory</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/north-carolina" className="hover:text-blue-600 transition-colors">NC Overview</Link></li>
                <li><Link to="/north-carolina/Charlotte" className="hover:text-blue-600 transition-colors">Charlotte</Link></li>
                <li><Link to="/north-carolina/Raleigh" className="hover:text-blue-600 transition-colors">Raleigh</Link></li>
                <li><Link to="/north-carolina/Greensboro" className="hover:text-blue-600 transition-colors">Greensboro</Link></li>
                <li><Link to="/north-carolina/Durham" className="hover:text-blue-600 transition-colors">Durham</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold mb-6">Tools & Resources</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/tools/calculator" className="hover:text-blue-600 transition-colors">Payment Calculator</Link></li>
                <li><Link to="/for-dealers" className="hover:text-blue-600 transition-colors">For Dealerships</Link></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Buyer's Guide</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Credit Repair Tips</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">
              &copy; 2024 AutoApproval NC. All rights reserved.
            </p>
            <p className="text-xs text-slate-400">
              Disclaimer: We do not provide loans directly. All financing is subject to dealer approval.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
