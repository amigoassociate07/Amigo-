import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, onHomeClick }) => {
    return (
        <div className="min-h-screen flex flex-col bg-amigo-beige">
            <Navbar onHomeClick={onHomeClick} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
