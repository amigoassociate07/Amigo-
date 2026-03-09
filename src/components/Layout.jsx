import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';

const Layout = ({ children, onHomeClick, onStocksClick, onPortfolioClick, onCareersClick, onContactClick, activePage }) => {
    return (
        <div className="min-h-screen flex flex-col bg-corex-gray">
            <Navbar
                onHomeClick={onHomeClick}
                onStocksClick={onStocksClick}
                onPortfolioClick={onPortfolioClick}
                activePage={activePage}
            />
            <main className="flex-grow">
                {children}
            </main>
            <MobileBottomNav
                activePage={activePage}
                onHomeClick={onHomeClick}
                onStocksClick={onStocksClick}
                onPortfolioClick={onPortfolioClick}
            />
            <Footer
                onCareersClick={onCareersClick}
                onContactClick={onContactClick}
                onStocksClick={onStocksClick}
            />
        </div>
    );
};

export default Layout;
