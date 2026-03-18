import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import About from './pages/About';
import IPOPage from './pages/IPOPage';

import { MOCK_STOCKS } from './data/mockStocks';
import { INITIAL_POSITIONS } from './data/careersData';
import { INITIAL_IPOS } from './data/ipoData';
import { INITIAL_PORTFOLIO } from './data/portfolioData';
import { INITIAL_ABOUT } from './data/aboutData';
import { INITIAL_HOME } from './data/homeData';
import { INITIAL_CONTACT } from './data/contactData';
import Admin from './pages/Admin';

function App() {
  const [activePage, setActivePage] = useState('home'); // 'home', 'stocks', 'portfolio', 'careers', 'contact', 'admin', 'about', 'ipo'
  const [selectedStock, setSelectedStock] = useState(null);
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('amigo_positions');
    return saved ? JSON.parse(saved) : INITIAL_POSITIONS;
  });

  const [ipos, setIpos] = useState(() => {
    const saved = localStorage.getItem('amigo_ipos');
    return saved ? JSON.parse(saved) : INITIAL_IPOS;
  });

  const [applicationLink, setApplicationLink] = useState(() => {
    const saved = localStorage.getItem('amigo_app_link');
    return saved || 'https://docs.google.com/forms/d/e/1FAIpQLSecEOlj_F9kRMZIl0LD87JqFv8vf96wq9Qt6Wk8A8IKGKTq7A/viewform';
  });

  const [stocksData, setStocksData] = useState(() => {
    const saved = localStorage.getItem('amigo_stocks');
    return saved ? JSON.parse(saved) : MOCK_STOCKS;
  });

  const [portfolioData, setPortfolioData] = useState(() => {
    const saved = localStorage.getItem('amigo_portfolio');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  const [aboutData, setAboutData] = useState(() => {
    const saved = localStorage.getItem('amigo_about');
    return saved ? JSON.parse(saved) : INITIAL_ABOUT;
  });

  const [homeData, setHomeData] = useState(() => {
    const saved = localStorage.getItem('amigo_home');
    return saved ? JSON.parse(saved) : INITIAL_HOME;
  });

  const [contactData, setContactData] = useState(() => {
    const saved = localStorage.getItem('amigo_contact');
    return saved ? JSON.parse(saved) : INITIAL_CONTACT;
  });

  useEffect(() => {
    localStorage.setItem('amigo_positions', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('amigo_stocks', JSON.stringify(stocksData));
  }, [stocksData]);

  useEffect(() => {
    localStorage.setItem('amigo_portfolio', JSON.stringify(portfolioData));
  }, [portfolioData]);

  useEffect(() => {
    localStorage.setItem('amigo_about', JSON.stringify(aboutData));
  }, [aboutData]);

  useEffect(() => {
    localStorage.setItem('amigo_home', JSON.stringify(homeData));
  }, [homeData]);

  useEffect(() => {
    localStorage.setItem('amigo_contact', JSON.stringify(contactData));
  }, [contactData]);

  useEffect(() => {
    localStorage.setItem('amigo_ipos', JSON.stringify(ipos));
  }, [ipos]);

  useEffect(() => {
    localStorage.setItem('amigo_app_link', applicationLink);
  }, [applicationLink]);

  useEffect(() => {
    // Sync initial path with state
    const handleLocationChange = () => {
      const path = window.location.pathname.replace('/', '');
      const validPages = ['home', 'stocks', 'portfolio', 'careers', 'contact', 'admin', 'about', 'ipo'];
      
      if (validPages.includes(path)) {
        setActivePage(path);
      } else if (path === '') {
        setActivePage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);

    // Clear legacy query parameters and hashes
    if (window.location.search || window.location.hash) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    // Update URL when activePage changes (except initial load which is handled above)
    const currentPath = window.location.pathname.replace('/', '');
    if (currentPath !== activePage) {
      const newPath = activePage === 'home' ? '/' : `/${activePage}`;
      window.history.pushState({}, '', newPath);
    }

    // Scroll to top whenever the active page or selected stock changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activePage, selectedStock]);

  const navigate = (page) => {
    setActivePage(page);
    setSelectedStock(null);
  };

  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    navigate('home');
  };

  const handleStocksClick = (e) => {
    if (e) e.preventDefault();
    navigate('stocks');
  };

  const handlePortfolioClick = (e) => {
    if (e) e.preventDefault();
    navigate('portfolio');
  };

  const handleCareersClick = (e) => {
    if (e) e.preventDefault();
    navigate('careers');
  };

  const handleContactClick = (e) => {
    if (e) e.preventDefault();
    navigate('contact');
  };

  const handleAdminClick = (e) => {
    if (e) e.preventDefault();
    navigate('admin');
  };

  const handleAboutClick = (e) => {
    if (e) e.preventDefault();
    navigate('about');
  };

  const handleIpoClick = (e) => {
    if (e) e.preventDefault();
    navigate('ipo');
  };

  const handleAddJob = (newJob) => {
    setJobs([...jobs, { ...newJob, id: Date.now().toString() }]);
  };

  const handleUpdateJob = (updatedJob) => {
    setJobs(jobs.map(j => j.id === updatedJob.id ? updatedJob : j));
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(j => j.id !== id));
  };

  const handleAddIpo = (newIpo) => {
    setIpos([...ipos, { ...newIpo, id: Date.now().toString() }]);
  };

  const handleUpdateIpo = (updatedIpo) => {
    setIpos(ipos.map(i => i.id === updatedIpo.id ? updatedIpo : i));
  };

  const handleDeleteIpo = (id) => {
    setIpos(ipos.filter(i => i.id !== id));
  };


  return (
    <Layout
      onHomeClick={handleHomeClick}
      onStocksClick={handleStocksClick}
      onPortfolioClick={handlePortfolioClick}
      onCareersClick={handleCareersClick}
      onContactClick={handleContactClick}
      onAdminClick={handleAdminClick}
      onAboutClick={handleAboutClick}
      onIpoClick={handleIpoClick}
      activePage={activePage}
    >
      {activePage === 'home' && (
        <Home onExploreClick={() => setActivePage('stocks')} homeData={homeData} />
      )}
      {activePage === 'stocks' && (
        <Stocks selectedStock={selectedStock} setSelectedStock={setSelectedStock} stocks={stocksData} />
      )}
      {activePage === 'portfolio' && (
        <Portfolio portfolioData={portfolioData} />
      )}
      {activePage === 'careers' && (
        <Careers jobs={jobs} applicationLink={applicationLink} />
      )}
      {activePage === 'contact' && (
        <Contact contactData={contactData} />
      )}
      {activePage === 'admin' && (
        <Admin 
          jobs={jobs} 
          onAddJob={handleAddJob} 
          onUpdateJob={handleUpdateJob} 
          onDeleteJob={handleDeleteJob}
          ipos={ipos}
          onAddIpo={handleAddIpo}
          onUpdateIpo={handleUpdateIpo}
          onDeleteIpo={handleDeleteIpo}
          applicationLink={applicationLink}
          setApplicationLink={setApplicationLink}
          stocksData={stocksData}
          setStocksData={setStocksData}
          portfolioData={portfolioData}
          setPortfolioData={setPortfolioData}
          aboutData={aboutData}
          setAboutData={setAboutData}
          homeData={homeData}
          setHomeData={setHomeData}
          contactData={contactData}
          setContactData={setContactData}
        />
      )}
      {activePage === 'about' && <About aboutData={aboutData} />}
      {activePage === 'ipo' && <IPOPage ipos={ipos} />}
    </Layout>
  );
}

export default App;
