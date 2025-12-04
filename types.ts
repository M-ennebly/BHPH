export type Dealer = {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  lat: number;
  lng: number;
  tags: string[];
  specialties?: string[];
  description?: string;
  hours?: string;
  heroImageUrl?: string;
  logoUrl?: string;
  isFeatured?: boolean;
};

export type CalculatorInputs = {
  carPrice: number;
  carType: string;
  city: string;
  isBudgetMode: boolean;
  monthlyIncome: number;
  creditScore: 'poor' | 'fair' | 'rebuilding';
  downPayment: number;
  employmentStatus: string;
  jobDuration: string;
};

export type CalculationResult = {
  estimatedDownPayment: number;
  weeklyPayment: number;
  approvalOdds: 'High' | 'Medium' | 'Low';
  priceRangeLabel: string;
  maxApprovalAmount: number;
};
