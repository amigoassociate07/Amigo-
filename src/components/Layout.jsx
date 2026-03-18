import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';

const Layout = ({ children, onHomeClick, onStocksClick, onPortfolioClick, onCareersClick, onContactClick, onAdminClick, onAboutClick, onIpoClick, activePage }) => {
    return (
        <div className="min-h-screen flex flex-col bg-corex-gray">
            {activePage !== 'admin' && (
                <Navbar
                    onHomeClick={onHomeClick}
                    onStocksClick={onStocksClick}
                    onPortfolioClick={onPortfolioClick}
                    onAboutClick={onAboutClick}
                    onIpoClick={onIpoClick}
                    activePage={activePage}
                />
            )}
            <main className="flex-grow">
                {children}
            </main>
            {activePage !== 'admin' && (
                <>
                    <MobileBottomNav
                        activePage={activePage}
                        onHomeClick={onHomeClick}
                        onStocksClick={onStocksClick}
                        onPortfolioClick={onPortfolioClick}
                        onIpoClick={onIpoClick}
                    />
                    <Footer
                        onCareersClick={onCareersClick}
                        onContactClick={onContactClick}
                        onStocksClick={onStocksClick}
                        onAdminClick={onAdminClick}
                        onIpoClick={onIpoClick}
                    />
                </>
            )}
        </div>
    );
};

export default Layout;
