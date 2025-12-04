import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './app/layout';
import HomePage from './app/page';
import DealerPage from './app/dealers/[id]/page';
import CalculatorPage from './app/tools/calculator/page';
import StateDirectoryPage from './app/north-carolina/page';
import CityDirectoryPage from './app/north-carolina/[city]/page';
import ForDealersPage from './app/for-dealers/page';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/north-carolina" element={<StateDirectoryPage />} />
          <Route path="/north-carolina/:city" element={<CityDirectoryPage />} />
          <Route path="/dealers/:id" element={<DealerPage />} />
          <Route path="/tools/calculator" element={<CalculatorPage />} />
          <Route path="/for-dealers" element={<ForDealersPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
