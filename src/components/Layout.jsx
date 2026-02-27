import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';

const Layout = ({ children, onHomeClick, onStocksClick, activePage }) => {
    return (
        <div className="min-h-screen flex flex-col bg-corex-gray">
            <Navbar
                onHomeClick={onHomeClick}
                onStocksClick={onStocksClick}
                activePage={activePage}
            />
            <main className="flex-grow pb-24 md:pb-0">
                {children}
            </main>
            <MobileBottomNav
                activePage={activePage}
                onHomeClick={onHomeClick}
                onStocksClick={onStocksClick}
            />
            <Footer />
        </div>
    );
};

export default Layout;
