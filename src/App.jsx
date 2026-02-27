import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stocks from './pages/Stocks';

import { MOCK_STOCKS } from './data/mockStocks';

function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' or 'stocks'
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

  return (
    <Layout
      onHomeClick={handleHomeClick}
      onStocksClick={handleStocksClick}
      activePage={activePage}
    >
      {activePage === 'home' ? (
        <Home onExploreClick={() => setActivePage('stocks')} />
      ) : (
        <Stocks selectedStock={selectedStock} setSelectedStock={setSelectedStock} stocks={MOCK_STOCKS} />
      )}
    </Layout>
  );
}

export default App;
