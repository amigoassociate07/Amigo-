import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stocks from './pages/Stocks';

const MOCK_STOCKS = [
  { id: 1, symbol: 'TCS', name: 'Tata Consultancy Services', price: 4120.50, change: +1.24, volume: '2.4M', marketCap: '14.8T' },
  { id: 2, symbol: 'HCLTECH', name: 'HCL Technologies', price: 1650.12, change: -0.45, volume: '1.8M', marketCap: '4.5T' },
  { id: 3, symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', price: 1745.32, change: +0.82, volume: '8.2M', marketCap: '13.2T' },
  { id: 4, symbol: 'ICICIBANK', name: 'ICICI Bank Ltd', price: 1274.45, change: +2.15, volume: '15.1M', marketCap: '9.1T' },
  { id: 5, symbol: 'MARUTI', name: 'Maruti Suzuki India Ltd', price: 11726.13, change: +4.32, volume: '0.7M', marketCap: '3.7T' },
  { id: 6, symbol: 'M&M', name: 'Mahindra & Mahindra Ltd', price: 2993.57, change: -1.82, volume: '2.3M', marketCap: '3.6T' },
  { id: 7, symbol: 'RELIANCE', name: 'Reliance Industries Ltd', price: 3024.03, change: +0.12, volume: '5.6M', marketCap: '20.4T' },
  { id: 8, symbol: 'ITC', name: 'ITC Ltd (ITC)', price: 478.20, change: -0.22, volume: '13.1M', marketCap: '5.9T' },
];

function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' or 'stocks'
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stockSymbol = params.get('stock');
    if (stockSymbol) {
      const stock = MOCK_STOCKS.find(s => s.symbol === stockSymbol);
      if (stock) {
        setActivePage('stocks');
        setSelectedStock(stock);
      }
    }
  }, []);

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
