import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children, onHomeClick, onServicesClick, onPortfolioClick, onCareersClick, onContactClick, onAdminClick, onAboutClick, onIpoClick, onMutualFundsClick, onPathshalaClick, onForexClick, activePage }) => {
    return (
        <div className="min-h-screen flex flex-col bg-corex-gray overflow-x-hidden w-full">
            {activePage !== 'admin' && (
                <div className="bg-yellow-400 py-1.5 px-4 text-center border-b border-yellow-500/20">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                        Educational Purpose Only: Amigo Associate is a study platform for academic learning and market intelligence.
                    </span>
                </div>
            )}
            {activePage !== 'admin' && (
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
            )}
            
            <main className="flex-grow pb-32 md:pb-0">
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
