import React from 'react';
import { Link } from 'react-router-dom';
import { Dealer } from '../types';

interface DealerCardProps {
  dealer: Dealer;
  matchScore?: 'Strong Match' | 'Good Match' | 'Weak Match';
  variant?: 'horizontal' | 'vertical';
}

const DealerCard: React.FC<DealerCardProps> = ({ 
  dealer, 
  matchScore = 'Good Match',
  variant = 'horizontal' 
}) => {
  const matchColor = 
    matchScore === 'Strong Match' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
    matchScore === 'Weak Match' ? 'bg-orange-50 text-orange-700 border-orange-100' :
    'bg-blue-50 text-blue-700 border-blue-100';

  const cardBaseClasses = "group bg-white rounded-[2rem] border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden relative";

  // Featured Badge
  const FeaturedBadge = () => (
    <div className="absolute top-4 left-4 z-20">
      <span className="bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-1 rounded shadow-sm uppercase tracking-wider">
        Featured
      </span>
    </div>
  );

  // Vertical (Grid) Layout - Used on Homepage
  if (variant === 'vertical') {
    return (
      <Link 
        to={`/dealers/${dealer.id}`}
        className={`${cardBaseClasses} flex flex-col h-full hover:-translate-y-2`}
      >
        {dealer.isFeatured && <FeaturedBadge />}

        {/* Image Area */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
          {dealer.heroImageUrl ? (
            <img src={dealer.heroImageUrl} alt={dealer.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          ) : (
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
               </svg>
            </div>
          )}
          
          <div className="absolute bottom-4 right-4 z-10">
            <span className="bg-slate-900/90 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1">
              ★ {dealer.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-1">
            {dealer.name}
          </h3>
          <p className="text-xs font-bold text-slate-400 mb-3">{dealer.city}, NC</p>
          <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
             {dealer.description || `Verified dealership located in ${dealer.city}, providing in-house financing options.`}
          </p>
          
          <div className="mt-auto flex flex-wrap gap-2">
            {dealer.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-slate-50 px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  // Horizontal (List) Layout - Used on City Page
  return (
    <div className={`${cardBaseClasses} p-4 flex flex-col sm:flex-row gap-6 items-stretch`}>
      {dealer.isFeatured && <FeaturedBadge />}

      <Link to={`/dealers/${dealer.id}`} className="w-full sm:w-64 h-48 sm:h-auto bg-slate-100 rounded-[1.5rem] flex-shrink-0 relative overflow-hidden group-hover:bg-slate-50 transition-colors">
        {dealer.heroImageUrl ? (
          <img src={dealer.heroImageUrl} alt={dealer.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-300">
             <svg className="w-12 h-12 opacity-50" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
          </div>
        )}
        <div className="absolute bottom-3 right-3">
             <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide border shadow-sm ${matchColor}`}>
             {matchScore}
           </span>
        </div>
      </Link>

      <div className="flex-1 min-w-0 py-2 flex flex-col">
        <div className="flex justify-between items-start mb-2">
           <div>
             <Link to={`/dealers/${dealer.id}`}>
               <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{dealer.name}</h3>
             </Link>
             <p className="text-sm font-medium text-slate-400 mt-1">{dealer.address}, {dealer.city}</p>
           </div>
           <Link to="/for-dealers" className="hidden sm:block text-[10px] font-bold text-slate-300 hover:text-blue-600 uppercase tracking-wider transition-colors">
             Claim Listing
           </Link>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400 text-sm">{'★'.repeat(Math.round(dealer.rating))}</div>
          <span className="text-sm font-bold text-slate-900">{dealer.rating}</span>
          <span className="text-xs text-slate-400">({dealer.reviewCount} verified reviews)</span>
        </div>

        <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed max-w-2xl">
          {dealer.description || "Verified dealer offering flexible payment plans and quick approvals."}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto pt-4 border-t border-slate-50 gap-4">
          <div className="flex flex-wrap gap-2">
            {dealer.specialties?.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
            {dealer.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                {tag}
              </span>
            ))}
          </div>
          <Link to={`/dealers/${dealer.id}`} className="w-full sm:w-auto text-center bg-slate-900 text-white text-sm font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-slate-200">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DealerCard;
