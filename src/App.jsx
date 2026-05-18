import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import About from './pages/About';
import MutualFunds from './pages/MutualFunds';
import InsuranceDetail from './pages/InsuranceDetail';
import MutualFundsDetail from './pages/MutualFundsDetail';
import FixedDepositsDetail from './pages/FixedDepositsDetail';
import LoansDetail from './pages/LoansDetail';
import EquityDetail from './pages/EquityDetail';
import Pathshala from './pages/Pathshala';
import SIPDetail from './pages/SIPDetail';
import LumpsumDetail from './pages/LumpsumDetail';
import ELSSDetail from './pages/ELSSDetail';
import DebtFundsDetail from './pages/DebtFundsDetail';
import EquityFundsDetail from './pages/EquityFundsDetail';
import PortfolioReviewDetail from './pages/PortfolioReviewDetail';
import Portfolio from './pages/Portfolio';
import ForexDetail from './pages/ForexDetail';
import { motion, AnimatePresence } from 'framer-motion';


import { INITIAL_POSITIONS } from './data/careersData';
import { INITIAL_ABOUT } from './data/aboutData';
import { INITIAL_HOME } from './data/homeData';
import { INITIAL_CONTACT } from './data/contactData';
import { INITIAL_PORTFOLIO } from './data/portfolioData';
import Admin from './pages/Admin';


function App() {
  const [activePage, setActivePage] = useState('home'); // 'home', 'portfolio', 'careers', 'contact', 'admin', 'about', 'ipo'

  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('amigo_positions');
    return saved ? JSON.parse(saved) : INITIAL_POSITIONS;
  });



  const [applicationLink, setApplicationLink] = useState(() => {
    const saved = localStorage.getItem('amigo_app_link');
    return saved || 'https://forms.gle/Hd4W28HF2JhkghCr5';
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

  const [portfolioData, setPortfolioData] = useState(() => {
    const saved = localStorage.getItem('amigo_portfolio');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  useEffect(() => {
    localStorage.setItem('amigo_positions', JSON.stringify(jobs));
  }, [jobs]);





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
    localStorage.setItem('amigo_portfolio', JSON.stringify(portfolioData));
  }, [portfolioData]);



  useEffect(() => {
    localStorage.setItem('amigo_app_link', applicationLink);
  }, [applicationLink]);

  useEffect(() => {
    // Sync initial path with state
    const handleLocationChange = () => {
      const path = window.location.pathname.replace('/', '');
      const validPages = ['home', 'services', 'careers', 'contact', 'admin', 'about', 'mutual-funds', 'insurance-detail', 'mutual-funds-detail', 'fixed-deposits-detail', 'loans-detail', 'equity-detail', 'pathshala', 'sip-detail', 'lumpsum-detail', 'elss-detail', 'debt-funds-detail', 'equity-funds-detail', 'portfolio-review-detail', 'portfolio', 'forex-detail'];
      
      if (validPages.includes(path)) {
        setActivePage(path);
      } else if (path === '') {
        setActivePage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);

    // Force update the hero subtitle if it's the old version (bypassing local storage cache)
    const oldSubtitle = "Elevate your capital management with institutional-grade analytics, real-time market foresight, and research and experience.";
    const newSubtitle = "Transform your capital management with institutional-grade analytics, real-time market foresight, and deep research expertise.";
    
    if (homeData?.hero?.subtitle === oldSubtitle) {
      setHomeData(prev => ({
        ...prev,
        hero: {
          ...prev.hero,
          subtitle: newSubtitle
        }
      }));
    }

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

    // Dynamic Title Update for SEO
    const titleMap = {
      'home': 'Amigo Associate | Institutional Financial Study',
      'services': 'Intelligence Modules | Amigo Associate',
      'portfolio': 'Study Portfolio | Amigo Associate',
      'pathshala': 'Amigo Pathshala | Financial Education Hub',
      'equity-detail': 'Equity Study Lab | Amigo Associate',
      'forex-detail': 'Global Forex Study | Amigo Associate',
      'mutual-funds': 'Mutual Funds Study | Amigo Associate',
      'contact': 'Connect with Analysts | Amigo Associate'
    };
    
    const baseTitle = 'Amigo Associate';
    const pageTitle = titleMap[activePage] || `${activePage.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | ${baseTitle}`;
    document.title = pageTitle;

    // Scroll to top whenever the active page or selected stock changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activePage]);

  useEffect(() => {
    // Migration: Update hero subtitle if it matches the old version
    const oldSubtitle = "Elevate your capital management with institutional-grade analytics, real-time market foresight, and automated intelligence.";
    const newSubtitle = "Elevate your capital management with institutional-grade analytics, real-time market foresight, and research and experience.";
    
    if (homeData?.hero?.subtitle === oldSubtitle) {
      setHomeData(prev => ({
        ...prev,
        hero: {
          ...prev.hero,
          subtitle: newSubtitle
        }
      }));
    }

    // Migration: Update application link if it matches the old or placeholder versions
    const oldAppLink = "https://docs.google.com/forms/d/e/1FAIpQLSecEOlj_F9kRMZIl0LD87JqFv8vf96wq9Qt6Wk8A8IKGKTq7A/viewform";
    const placeholderLink = "https://google.com/test-form";
    const newAppLink = "https://forms.gle/Hd4W28HF2JhkghCr5";
    
    if (applicationLink === oldAppLink || applicationLink === placeholderLink || applicationLink.includes("FAIpQLSecEOlj_F9kRMZIl0LD87JqFv8vf96wq9Qt6Wk8A8IKGKTq7A")) {
      setApplicationLink(newAppLink);
    }

    // Migration: Update contact email if it matches the old version
    const oldEmail = "support@amigo.com";
    const oldEmail2 = "hello@amigoassociate.com";
    const oldEmail3 = "amigoassociate@gmail.com";
    const newEmail = "amigoassociate07@gmail.com";
    
    if (contactData?.infoCards?.some(card => card.detail === oldEmail || card.detail === oldEmail2 || card.detail === oldEmail3)) {
      setContactData(prev => ({
        ...prev,
        infoCards: prev.infoCards.map(card => 
          (card.detail === oldEmail || card.detail === oldEmail2 || card.detail === oldEmail3)
            ? { ...card, detail: newEmail, link: `mailto:${newEmail}` }
            : card
        )
      }));
    }

    // Migration: Update contact phone if it matches the old version
    const oldPhone = "+1 (555) 000-0000";
    const newPhone = "+91 9522700027";
    
    if (contactData?.infoCards?.some(card => card.detail === oldPhone)) {
      setContactData(prev => ({
        ...prev,
        infoCards: prev.infoCards.map(card => 
          card.detail === oldPhone
            ? { ...card, detail: newPhone, link: `tel:${newPhone.replace(/\s/g, '')}`, sub: "Mon-Fri, 9am - 6pm IST" }
            : card
        )
      }));
    }

    // Migration: Update contact hero subtitle if it matches the old version
    const oldContactSubtitle = "Have questions about our institutional tools or need expert guidance? Our team of financial specialists is here to assist you.";
    const newContactSubtitle = "If you have any questions or require platform assistance, our team is ready to assist you with any enquiries.";
    
    if (contactData?.hero?.subtitle === oldContactSubtitle) {
      setContactData(prev => ({
        ...prev,
        hero: {
          ...prev.hero,
          subtitle: newContactSubtitle
        }
      }));
    }

    // Migration: Remove "Email Us" card if it exists (prioritizing form)
    if (contactData?.infoCards?.some(card => card.title === "Email Us")) {
      setContactData(prev => {
        const { globalPresence, ...rest } = prev;
        return {
          ...rest,
          infoCards: rest.infoCards.filter(card => card.title !== "Email Us")
        };
      });
    }
    // Migration: Update stats to the new 90% satisfaction value
    if (homeData?.stats?.[3]?.value !== '90%') {
      setHomeData(prev => ({
        ...prev,
        stats: prev.stats.map((s, i) => i === 3 ? { ...s, value: '90%', label: 'Client Satisfaction' } : s)
      }));
    }
    if (aboutData?.stats?.[3]?.value !== '90%') {
      setAboutData(prev => ({
        ...prev,
        stats: prev.stats.map((s, i) => i === 3 ? { ...s, value: '90%', label: 'Client Satisfaction' } : s)
      }));
    }
    // Migration: Update values to include new items if length differs
    if (aboutData?.values?.length !== INITIAL_ABOUT.values.length) {
      setAboutData(prev => ({
        ...prev,
        values: INITIAL_ABOUT.values
      }));
    }
  }, [homeData, setHomeData, applicationLink, setApplicationLink, contactData, setContactData, aboutData, setAboutData]);

  const navigate = (page) => {
    setActivePage(page);
  };

  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    navigate('home');
  };

  const handleServicesClick = (e) => {
    if (e) e.preventDefault();
    navigate('services');
  };



  const handleMutualFundsClick = (e) => {
    if (e) e.preventDefault();
    navigate('mutual-funds');
  };


  const handleCareersClick = (e) => {
    if (e) e.preventDefault();
    navigate('careers');
  };

  const handlePathshalaClick = (e) => {
    if (e) e.preventDefault();
    navigate('pathshala');
  };

  const handleForexClick = (e) => {
    if (e) e.preventDefault();
    navigate('forex-detail');
  };

  const handleContactClick = (e) => {
    if (e) e.preventDefault();
    navigate('contact');
  };

  const handleAdminClick = (e) => {
    if (e) e.preventDefault();
    navigate('admin');
  };

  const handlePortfolioClick = (e) => {
    if (e) e.preventDefault();
    navigate('portfolio');
  };



  const handleAboutClick = (e) => {
    if (e) e.preventDefault();
    navigate('about');
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




  return (
    <Layout
      onHomeClick={handleHomeClick}
      onServicesClick={handleServicesClick}
      onMutualFundsClick={handleMutualFundsClick}
      onCareersClick={handleCareersClick}
      onContactClick={handleContactClick}
      onAdminClick={handleAdminClick}
      onAboutClick={handleAboutClick}
      onPathshalaClick={handlePathshalaClick}
      onForexClick={handleForexClick}
      onPortfolioClick={handlePortfolioClick}

      activePage={activePage}
    >
      <div className="w-full">
        {activePage === 'home' && (
          <Home onExploreClick={(page) => setActivePage(page || 'services')} homeData={homeData} />
        )}
        {activePage === 'services' && (
          <Services 
            onExploreInsurance={() => setActivePage('insurance-detail')} 
            onExploreMutualFunds={() => setActivePage('mutual-funds')} 
            onExploreFixedDeposits={() => setActivePage('fixed-deposits-detail')} 
            onExploreLoans={() => setActivePage('loans-detail')} 
            onExploreEquity={() => setActivePage('equity-detail')} 
            onExploreForex={() => setActivePage('forex-detail')}
          />
        )}
        {activePage === 'insurance-detail' && <InsuranceDetail onBackClick={() => setActivePage('services')} />}
        {activePage === 'mutual-funds' && (
          <MutualFunds 
            onBackClick={() => setActivePage('services')}
            onSIPClick={() => setActivePage('sip-detail')}
            onLumpsumClick={() => setActivePage('lumpsum-detail')}
            onELSSClick={() => setActivePage('elss-detail')}
            onDebtClick={() => setActivePage('debt-funds-detail')}
            onEquityClick={() => setActivePage('equity-funds-detail')}
            onReviewClick={() => setActivePage('portfolio-review-detail')}
          />
        )}
        {activePage === 'fixed-deposits-detail' && <FixedDepositsDetail onBackClick={() => setActivePage('services')} />}
        {activePage === 'loans-detail' && <LoansDetail onBackClick={() => setActivePage('services')} />}
        {activePage === 'equity-detail' && <EquityDetail onBackClick={() => setActivePage('services')} />}
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
            applicationLink={applicationLink}
            setApplicationLink={setApplicationLink}
            aboutData={aboutData}
            setAboutData={setAboutData}
            homeData={homeData}
            setHomeData={setHomeData}
            contactData={contactData}
            setContactData={setContactData}
            portfolioData={portfolioData}
            setPortfolioData={setPortfolioData}
          />
        )}

        {activePage === 'portfolio' && <Portfolio portfolioData={portfolioData} onBackClick={() => setActivePage('services')} />}

        {activePage === 'pathshala' && <Pathshala />}
        {activePage === 'sip-detail' && <SIPDetail onBackClick={() => setActivePage('mutual-funds')} />}
        {activePage === 'lumpsum-detail' && <LumpsumDetail onBackClick={() => setActivePage('mutual-funds')} />}
        {activePage === 'elss-detail' && <ELSSDetail onBackClick={() => setActivePage('mutual-funds')} />}
        {activePage === 'debt-funds-detail' && <DebtFundsDetail onBackClick={() => setActivePage('mutual-funds')} />}
        {activePage === 'equity-funds-detail' && <EquityFundsDetail onBackClick={() => setActivePage('mutual-funds')} />}
        {activePage === 'portfolio-review-detail' && <PortfolioReviewDetail onBackClick={() => setActivePage('mutual-funds')} />}
        {activePage === 'about' && <About aboutData={aboutData} />}
        {activePage === 'forex-detail' && <ForexDetail onBackClick={() => navigate('services')} />}
      </div>

    </Layout>
  );
}

export default App;
