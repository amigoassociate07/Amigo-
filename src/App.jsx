import React, { useState } from 'react';
import Layout from './components/Layout';
import Stocks from './pages/Stocks';

function App() {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleHomeClick = (e) => {
    e.preventDefault();
    setSelectedStock(null);
  };

  return (
    <Layout onHomeClick={handleHomeClick}>
      <Stocks selectedStock={selectedStock} setSelectedStock={setSelectedStock} />
    </Layout>
  );
}

export default App;
