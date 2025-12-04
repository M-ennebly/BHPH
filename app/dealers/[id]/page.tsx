import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockDealers, getSimilarDealers } from '../../../data/dealers';
import { Dealer } from '../../../types';
import Breadcrumbs from '../../../components/Breadcrumbs';
import LeadCaptureModal from '../../../components/LeadCaptureModal';
import DealerCard from '../../../components/DealerCard';
import SeoContentBlock from '../../../components/SeoContentBlock';
import FaqSection from '../../../components/FaqSection';

export default function DealerPage() {
  const { id } = useParams<{ id: string }>();
  const [dealer, setDealer] = useState<Dealer | null>(null);
  const [similarDealers, setSimilarDealers] = useState<Dealer[]>([]);
  
  // Modals
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    const found = mockDealers.find(d => d.id === id);
    if (found) {
        setDealer(found);
        setSimilarDealers(getSimilarDealers(found.id, found.city));
    } else {
        setDealer(null);
    }
  }, [id]);

  if (!dealer) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      <LeadCaptureModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
        context="dealer"
        dealerName={dealer.name}
        city={dealer.city}
      />

      {/* Light Theme Header (Matches Homepage) */}
      <div className="relative pt-12 pb-12 overflow-hidden bg-white border-b border-slate-200">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs items={[
                { label: 'North Carolina', href: '/north-carolina' },
                { label: dealer.city, href: `/north-carolina/${dealer.city}` },
                { label: dealer.name }
            ]} />

            <div className="flex flex-col md:flex-row gap-8 items-start">
               {/* Logo/Avatar */}
               <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2rem] flex items-center justify-center overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 flex-shrink-0 relative">
                  {dealer.logoUrl ? (
                      <img src={dealer.logoUrl} alt={dealer.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl font-black text-slate-900">{dealer.name.charAt(0)}</span>
                  )}
               </div>
               
               <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">{dealer.name}</h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-6">
                    <span className="flex items-center gap-2 text-sm font-bold bg-slate-100 px-3 py-1.5 rounded-lg">
                       <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                       {dealer.address}, {dealer.city}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-bold">
                       <span className="text-yellow-400 text-lg">★</span> {dealer.rating} <span className="text-slate-400 font-medium">({dealer.reviewCount} reviews)</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {dealer.specialties?.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-sm shadow-blue-200">
                        {tag}
                      </span>
                    ))}
                    {dealer.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide rounded-full border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>

               <div className="flex flex-col gap-3 w-full md:w-auto min-w-[200px] mt-4 md:mt-0">
                  <button 
                     onClick={() => setIsLeadModalOpen(true)}
                     className="w-full py-4 px-6 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 shadow-xl shadow-slate-200 transition-all hover:-translate-y-1 active:scale-[0.98]"
                  >
                    Request Financing
                  </button>
                  <button 
                    onClick={() => console.log('Call', dealer.phone)}
                    className="w-full py-4 px-6 bg-white border-2 border-slate-100 text-slate-900 font-bold rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-colors"
                  >
                    {dealer.phone}
                  </button>
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Financing Highlights */}
            <section className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
               <h2 className="text-xl font-extrabold text-slate-900 mb-6">Financing & Approval</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { title: 'Bad Credit OK', desc: 'Programs for all credit types.' },
                   { title: 'In-House Financing', desc: 'We approve you, not a bank.' },
                   { title: 'Low Down Payments', desc: 'Flexible options available.' },
                   { title: 'Quick Approval', desc: 'Drive home the same day.' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                     <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg flex-shrink-0">✓</div>
                     <div>
                       <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                       <p className="text-xs text-slate-500 mt-1 font-medium">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* About Section */}
            <SeoContentBlock 
                title={`About ${dealer.name}`}
                paragraphs={[
                    dealer.description || "This dealership is a verified Buy Here Pay Here provider serving the local community. They offer a range of inventory including sedans, SUVs, and trucks, tailored for customers who need flexible financing options regardless of credit history.",
                    `Located conveniently at ${dealer.address} in ${dealer.city}, they have served hundreds of customers with a ${dealer.rating} star rating. Visit them today to see their current inventory.`
                ]}
            />

            {/* Map Area */}
            <section className="bg-slate-100 rounded-[2.5rem] aspect-video w-full flex items-center justify-center border border-slate-200 relative group overflow-hidden shadow-inner">
              <div className="text-slate-400 font-bold flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                </div>
                <span>Map Placeholder</span>
                <span className="text-xs text-slate-400">{dealer.address}, {dealer.city}</span>
              </div>
            </section>
            
            {/* FAQ Section */}
            <FaqSection 
                title="Common Questions"
                items={[
                    { question: `Does ${dealer.name} check credit?`, answer: "While some basic checks may be performed, the primary approval factor is your proof of income and residence." },
                    { question: "Can I trade in my old car?", answer: "Yes, most BHPH dealers accept trade-ins, even if they are not running, which can help lower your down payment." }
                ]}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">Location & Hours</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">{dealer.address}</p>
                    <p className="text-slate-500 font-medium text-sm">{dealer.city}, {dealer.state}</p>
                    <button className="text-blue-600 text-xs font-bold mt-2 hover:underline">Get Directions &rarr;</button>
                  </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium text-sm whitespace-pre-line leading-relaxed">
                      {dealer.hours || "Mon-Fri: 9am - 7pm\nSat: 10am - 5pm\nSun: Closed"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2.5rem] text-white shadow-xl shadow-slate-400/20">
              <h3 className="font-bold text-lg mb-2">Have questions?</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Call the dealership directly to ask about current inventory and approval requirements.</p>
              <a href={`tel:${dealer.phone}`} className="flex items-center justify-center gap-2 w-full py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-blue-50 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {dealer.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Similar Dealers */}
        {similarDealers.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-200">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Other Dealers in {dealer.city}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {similarDealers.map(d => (
                        <div key={d.id} className="h-full">
                            <DealerCard dealer={d} variant="vertical" />
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Claim Listing CTA */}
        <div className="mt-20 mb-12">
           <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🏢</div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Is this your business?</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                    Claim your profile to update business hours, photos, and respond to reviews. 
                    Manage your online presence and get more leads.
                </p>
                <button 
                    onClick={() => setIsClaimModalOpen(true)}
                    className="text-white bg-slate-900 font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 mx-auto px-8 py-4 rounded-2xl shadow-lg"
                >
                    Claim This Listing
                </button>
           </div>
        </div>

      </div>

      {/* Claim Modal */}
      {isClaimModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-[2.5rem] w-full max-w-md p-8 shadow-2xl">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Claim Listing</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Verify your ownership of <strong>{dealer.name}</strong> to unlock premium features.
            </p>
            <div className="space-y-4">
              <button disabled className="w-full py-4 bg-slate-50 text-slate-400 font-bold rounded-2xl cursor-not-allowed border border-slate-100">
                Start Verification (Coming Soon)
              </button>
              <button 
                onClick={() => setIsClaimModalOpen(false)}
                className="w-full py-3 text-slate-600 font-bold hover:text-slate-900 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
