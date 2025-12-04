import { Dealer } from '../types';

export const mockDealers: Dealer[] = [
  // Charlotte
  {
    id: '1',
    name: 'Charlotte Auto Finance',
    city: 'Charlotte',
    state: 'NC',
    address: '123 South Blvd',
    phone: '(704) 555-0123',
    rating: 4.8,
    reviewCount: 124,
    lat: 35.2271,
    lng: -80.8431,
    tags: ['Buy Here Pay Here', 'Bad credit OK'],
    specialties: ['Luxury Sedans', 'Family SUVs'],
    description: 'We specialize in helping good people with bad credit get back on the road. Large inventory of SUVs and Sedans.',
    hours: 'Mon-Sat 9:00am - 7:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Charlotte+Auto&background=0D8ABC&color=fff&size=128',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Queen City Motors',
    city: 'Charlotte',
    state: 'NC',
    address: '4500 N Tryon St',
    phone: '(704) 555-0987',
    rating: 4.2,
    reviewCount: 89,
    lat: 35.2600,
    lng: -80.7900,
    tags: ['No credit check', 'In-house financing'],
    specialties: ['Compact Cars', 'First-time Buyers'],
    description: 'Family owned since 1995. We offer strict in-house financing with no credit checks required.',
    hours: 'Mon-Fri 10:00am - 6:00pm, Sat 10:00am - 4:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Queen+City&background=333&color=fff&size=128'
  },
  {
    id: '7',
    name: 'Approval Kings',
    city: 'Charlotte',
    state: 'NC',
    address: '6000 Independence Blvd',
    phone: '(704) 555-0555',
    rating: 4.0,
    reviewCount: 300,
    lat: 35.1800,
    lng: -80.7500,
    tags: ['Bad credit OK', 'Instant Approval'],
    specialties: ['High Mileage', 'Work Trucks'],
    description: 'Walk in and drive out in 30 minutes. Guaranteed approval program.',
    hours: 'Mon-Sun 9:00am - 8:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Approval+Kings&background=F59E0B&color=fff&size=128'
  },
  
  // Raleigh
  {
    id: '3',
    name: 'Raleigh Ride Now',
    city: 'Raleigh',
    state: 'NC',
    address: '3200 Capital Blvd',
    phone: '(919) 555-0456',
    rating: 4.5,
    reviewCount: 210,
    lat: 35.8100,
    lng: -78.6100,
    tags: ['Buy Here Pay Here', 'Repo Friendly'],
    specialties: ['Second Chance', 'Sedans'],
    description: 'Past repossession? No problem. We look at your future, not your past.',
    hours: 'Mon-Sat 9:00am - 8:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Raleigh+Ride&background=10B981&color=fff&size=128',
    isFeatured: true
  },
  {
    id: '8',
    name: 'Capital City Cars',
    city: 'Raleigh',
    state: 'NC',
    address: '1500 Wake Forest Rd',
    phone: '(919) 555-1122',
    rating: 3.8,
    reviewCount: 45,
    lat: 35.8200,
    lng: -78.6200,
    tags: ['Low down payment', 'Bankruptcy OK'],
    specialties: ['Economy Cars', 'Student Finance'],
    description: 'Serving Raleigh for 20 years. We say yes when others say no.',
    hours: 'Mon-Sat 9:00am - 6:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Capital+City&background=EF4444&color=fff&size=128'
  },

  // Greensboro
  {
    id: '4',
    name: 'Triad Auto Solutions',
    city: 'Greensboro',
    state: 'NC',
    address: '1500 W Wendover Ave',
    phone: '(336) 555-0789',
    rating: 3.9,
    reviewCount: 56,
    lat: 36.0726,
    lng: -79.7920,
    tags: ['Low down payment', 'First time buyer'],
    specialties: ['Starter Cars', 'Domestic'],
    description: 'Great program for first time buyers with limited credit history.',
    hours: 'Mon-Sat 9:30am - 6:30pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Triad+Auto&background=6366F1&color=fff&size=128'
  },
  {
    id: '9',
    name: 'Gate City Imports',
    city: 'Greensboro',
    state: 'NC',
    address: '2100 High Point Rd',
    phone: '(336) 555-9988',
    rating: 4.6,
    reviewCount: 112,
    lat: 36.0500,
    lng: -79.8200,
    tags: ['Buy Here Pay Here', 'Bad credit OK'],
    specialties: ['Imports', 'Luxury'],
    description: 'Quality imports and domestic vehicles. In-house financing available.',
    hours: 'Mon-Sat 10:00am - 7:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Gate+City&background=8B5CF6&color=fff&size=128',
    isFeatured: true
  },

  // Durham
  {
    id: '5',
    name: 'Bull City Cars',
    city: 'Durham',
    state: 'NC',
    address: '900 Roxboro St',
    phone: '(919) 555-0111',
    rating: 4.7,
    reviewCount: 145,
    lat: 35.9940,
    lng: -78.8986,
    tags: ['Buy Here Pay Here', 'Bankruptcy OK'],
    specialties: ['Minivans', 'SUVs'],
    description: 'We work with open bankruptcies. Get approved today with proof of income.',
    hours: 'Mon-Fri 9:00am - 6:00pm, Sat 10:00am - 3:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Bull+City&background=EC4899&color=fff&size=128'
  },
  
  // Winston-Salem
  {
    id: '6',
    name: 'Winston Wheels',
    city: 'Winston-Salem',
    state: 'NC',
    address: '2200 Peters Creek Pkwy',
    phone: '(336) 555-0222',
    rating: 4.3,
    reviewCount: 78,
    lat: 36.0999,
    lng: -80.2442,
    tags: ['Buy Here Pay Here', 'Truck Specialists'],
    specialties: ['Heavy Duty Trucks', 'Work Vans'],
    description: 'Largest selection of work trucks and heavy duty pickups in the area.',
    hours: 'Mon-Sat 8:00am - 7:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Winston+Wheels&background=14B8A6&color=fff&size=128'
  },

  // Fayetteville
  {
    id: '10',
    name: 'Fayetteville Freedom Auto',
    city: 'Fayetteville',
    state: 'NC',
    address: '400 Bragg Blvd',
    phone: '(910) 555-3344',
    rating: 4.1,
    reviewCount: 210,
    lat: 35.0527,
    lng: -78.8784,
    tags: ['Military Discount', 'Buy Here Pay Here'],
    specialties: ['Military Financing', 'Trucks'],
    description: 'Proudly serving Fort Liberty and surrounding areas. Military financing specialists.',
    hours: 'Mon-Sun 9:00am - 8:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Fayetteville&background=3B82F6&color=fff&size=128',
    isFeatured: true
  },
  {
    id: '11',
    name: 'Sandhills Best Cars',
    city: 'Fayetteville',
    state: 'NC',
    address: '5500 Raeford Rd',
    phone: '(910) 555-5566',
    rating: 3.5,
    reviewCount: 30,
    lat: 35.0400,
    lng: -78.9500,
    tags: ['No credit check', 'Instant Approval'],
    specialties: ['Budget Cars', 'Cash Cars'],
    description: 'Quick approvals. No credit check. Just bring proof of income and a valid license.',
    hours: 'Mon-Sat 9:00am - 6:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Sandhills&background=64748B&color=fff&size=128'
  },

  // Wilmington
  {
    id: '12',
    name: 'Coastal Credit Cars',
    city: 'Wilmington',
    state: 'NC',
    address: '3300 Market St',
    phone: '(910) 555-7788',
    rating: 4.4,
    reviewCount: 95,
    lat: 34.2300,
    lng: -77.9200,
    tags: ['Buy Here Pay Here', 'Low down payment'],
    specialties: ['Convertibles', 'Beach Vehicles'],
    description: 'Ride the wave to better credit. Low down payments starting at $500.',
    hours: 'Mon-Sat 9:30am - 6:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1507767386712-0c8d812d85d3?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Coastal+Credit&background=06B6D4&color=fff&size=128'
  },
  {
    id: '13',
    name: 'Port City Auto Group',
    city: 'Wilmington',
    state: 'NC',
    address: '1200 College Rd',
    phone: '(910) 555-9900',
    rating: 4.9,
    reviewCount: 156,
    lat: 34.2100,
    lng: -77.8900,
    tags: ['Bad credit OK', 'Trade-ins Welcome'],
    specialties: ['Trade-ins', 'SUVs'],
    description: 'Top rated BHPH dealer in Wilmington. We take all trade-ins, running or not.',
    hours: 'Mon-Sat 9:00am - 7:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Port+City&background=1E293B&color=fff&size=128',
    isFeatured: true
  },

  // Asheville
  {
    id: '14',
    name: 'Mountain Motor Sales',
    city: 'Asheville',
    state: 'NC',
    address: '900 Patton Ave',
    phone: '(828) 555-4433',
    rating: 4.6,
    reviewCount: 88,
    lat: 35.5800,
    lng: -82.5800,
    tags: ['Buy Here Pay Here', 'SUV Specialists'],
    specialties: ['AWD', 'Subaru'],
    description: '4WD and AWD vehicles ready for the mountains. In-house financing.',
    hours: 'Mon-Sat 9:00am - 6:00pm',
    heroImageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    logoUrl: 'https://ui-avatars.com/api/?name=Mountain+Motor&background=4ADE80&color=fff&size=128'
  }
];

// Helper to get unique cities with dealer counts
export const getCityStats = () => {
  const stats: Record<string, number> = {};
  mockDealers.forEach(dealer => {
    stats[dealer.city] = (stats[dealer.city] || 0) + 1;
  });
  return Object.entries(stats)
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count);
};

export const cities = getCityStats().map(s => s.city);

export const getDealersByCity = (city: string) => {
  return mockDealers.filter(d => d.city === city);
};

export const getFeaturedDealersByCity = (city: string) => {
  return mockDealers.filter(d => d.city === city && d.isFeatured);
};

export const getSimilarDealers = (dealerId: string, city: string) => {
  return mockDealers
    .filter(d => d.city === city && d.id !== dealerId)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
};
