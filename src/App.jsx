import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

import { MOCK_STOCKS } from './data/mockStocks';

function App() {
  const [activePage, setActivePage] = useState('home'); // 'home', 'stocks', 'portfolio', 'careers', 'contact'
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    // Clear legacy query parameters and hashes from the URL on mount
    // to ensure a clean landing page experience.
    if (window.location.search || window.location.hash) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  useEffect(() => {
    // Scroll to top whenever the active page or selected stock changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activePage, selectedStock]);

  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    setActivePage('home');
    setSelectedStock(null);
  };

  const handleStocksClick = (e) => {
    if (e) e.preventDefault();
    setActivePage('stocks');
    setSelectedStock(null);
  };

  const handlePortfolioClick = (e) => {
    if (e) e.preventDefault();
    setActivePage('portfolio');
    setSelectedStock(null);
  };

  const handleCareersClick = (e) => {
    if (e) e.preventDefault();
    setActivePage('careers');
    setSelectedStock(null);
  };

  const handleContactClick = (e) => {
    if (e) e.preventDefault();
    setActivePage('contact');
    setSelectedStock(null);
  };


  return (
    <Layout
      onHomeClick={handleHomeClick}
      onStocksClick={handleStocksClick}
      onPortfolioClick={handlePortfolioClick}
      onCareersClick={handleCareersClick}
      onContactClick={handleContactClick}
      activePage={activePage}
    >
      {activePage === 'home' && (
        <Home onExploreClick={() => setActivePage('stocks')} />
      )}
      {activePage === 'stocks' && (
        <Stocks selectedStock={selectedStock} setSelectedStock={setSelectedStock} stocks={MOCK_STOCKS} />
      )}
      {activePage === 'portfolio' && (
        <Portfolio />
      )}
      {activePage === 'careers' && (
        <Careers />
      )}
      {activePage === 'contact' && (
        <Contact />
      )}
    </Layout>
  );
}

export default App;
