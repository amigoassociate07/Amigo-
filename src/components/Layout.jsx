import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onHomeClick, onStocksClick, activePage }) => {
    return (
        <div className="min-h-screen flex flex-col bg-corex-gray">
            <Navbar
                onHomeClick={onHomeClick}
                onStocksClick={onStocksClick}
                activePage={activePage}
            />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
