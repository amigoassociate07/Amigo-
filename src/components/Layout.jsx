import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children, onHomeClick, onServicesClick, onPortfolioClick, onCareersClick, onContactClick, onAdminClick, onAboutClick, onIpoClick, onMutualFundsClick, onPathshalaClick, onForexClick, activePage }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-corex-gray w-full">
            {activePage !== 'admin' && (
                <div className="sticky top-0 left-0 right-0 w-full z-50">
                    <div className={`bg-yellow-400 px-4 text-center border-b border-yellow-500/20 overflow-hidden transition-all duration-300 ${isScrolled ? 'max-h-0 py-0 opacity-0 md:max-h-[100px] md:py-1.5 md:opacity-100' : 'max-h-[100px] py-1.5 opacity-100'}`}>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                            Educational Purpose Only: Amigo Associate is a study platform for academic learning and market intelligence.
                        </span>
                    </div>
                    <Navbar
                        onHomeClick={onHomeClick}
                        onServicesClick={onServicesClick}
                        onPortfolioClick={onPortfolioClick}
                        onAboutClick={onAboutClick}
                        onIpoClick={onIpoClick}
                        onMutualFundsClick={onMutualFundsClick}
                        onPathshalaClick={onPathshalaClick}
                        onForexClick={onForexClick}
                        activePage={activePage}
                    />
                </div>
            )}
            
            <main className="flex-grow">
                {children}
            </main>
            {activePage !== 'admin' && (
                <>
                    <MobileBottomNav
                        activePage={activePage}
                        onHomeClick={onHomeClick}
                        onServicesClick={onServicesClick}

                        onMutualFundsClick={onMutualFundsClick}
                        onPathshalaClick={onPathshalaClick}
                    />
                    <Footer
                        onCareersClick={onCareersClick}
                        onContactClick={onContactClick}

                        onAdminClick={onAdminClick}
                        onServicesClick={onServicesClick}
                        onIpoClick={onIpoClick}
                        onAboutClick={onAboutClick}
                        onPortfolioClick={onPortfolioClick}
                        onMutualFundsClick={onMutualFundsClick}
                        onForexClick={onForexClick}
                    />
                </>
            )}
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
