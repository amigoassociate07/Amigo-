import React from 'react';
import { Home, TrendingUp, Briefcase, Newspaper, BarChart3 } from 'lucide-react';

const MobileBottomNav = ({ activePage, onHomeClick, onServicesClick, onPortfolioClick, onIpoClick }) => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a1220]/95 backdrop-blur-3xl border-t border-white/5 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
            <div className="flex justify-around items-center h-20 px-2">
                <button
                    onClick={(e) => { if (onHomeClick) onHomeClick(e); }}
                    className={`relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${activePage === 'home' ? 'text-corex-accent' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    {activePage === 'home' && <div className="absolute top-0 w-8 h-1 bg-corex-accent rounded-full blur-[2px]" />}
                    <Home className={`h-6 w-6 transition-all duration-500 ${activePage === 'home' ? 'scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : ''}`} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Home</span>
                </button>

                <button
                    onClick={(e) => { if (onServicesClick) onServicesClick(e); }}
                    className={`relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${activePage === 'services' ? 'text-corex-accent' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    {activePage === 'services' && <div className="absolute top-0 w-8 h-1 bg-corex-accent rounded-full blur-[2px]" />}
                    <Briefcase className={`h-6 w-6 transition-all duration-500 ${activePage === 'services' ? 'scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : ''}`} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Services</span>
                </button>

                <button
                    onClick={(e) => { if (onPortfolioClick) onPortfolioClick(e); }}
                    className={`relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${activePage === 'portfolio' ? 'text-corex-accent' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    {activePage === 'portfolio' && <div className="absolute top-0 w-8 h-1 bg-corex-accent rounded-full blur-[2px]" />}
                    <TrendingUp className={`h-6 w-6 transition-all duration-500 ${activePage === 'portfolio' ? 'scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : ''}`} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Portfolio</span>
                </button>

                <button
                    onClick={(e) => { if (onIpoClick) onIpoClick(e); }}
                    className={`relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${activePage === 'pathshala' ? 'text-corex-accent' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    {activePage === 'pathshala' && <div className="absolute top-0 w-8 h-1 bg-corex-accent rounded-full blur-[2px]" />}
                    <BarChart3 className={`h-6 w-6 transition-all duration-500 ${activePage === 'pathshala' ? 'scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : ''}`} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Pathshala</span>
                </button>
            </div>
        </div>

    );
};

export default MobileBottomNav;
