import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stocks from './pages/Stocks';

function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' or 'stocks'
  const [selectedStock, setSelectedStock] = useState(null);

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
        <Stocks selectedStock={selectedStock} setSelectedStock={setSelectedStock} />
      )}
    </Layout>
  );
}

export default App;
