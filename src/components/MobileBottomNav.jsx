import React from 'react';
import { Home, TrendingUp, Briefcase, Newspaper } from 'lucide-react';

const MobileBottomNav = ({ activePage, onHomeClick, onStocksClick }) => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-corex-navy/90 backdrop-blur-2xl border-t border-white/10 pb-safe">
            <div className="flex justify-around items-center h-20 px-2 pb-2">
                <button
                    onClick={(e) => { if (onHomeClick) onHomeClick(e); }}
                    className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${activePage === 'home' ? 'text-corex-accent' : 'text-gray-400 hover:text-gray-200'}`}
                >
                    <Home className={`h-6 w-6 transition-transform ${activePage === 'home' ? 'scale-110' : ''}`} />
                    <span className="text-[10px] font-bold tracking-wider">Home</span>
                </button>
                <button
                    onClick={(e) => { if (onStocksClick) onStocksClick(e); }}
                    className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${activePage === 'stocks' ? 'text-corex-accent' : 'text-gray-400 hover:text-gray-200'}`}
                >
                    <TrendingUp className={`h-6 w-6 transition-transform ${activePage === 'stocks' ? 'scale-110' : ''}`} />
                    <span className="text-[10px] font-bold tracking-wider">Stocks</span>
                </button>
                <button
                    onClick={(e) => e.preventDefault()}
                    className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-400 hover:text-gray-200 transition-colors"
                >
                    <Briefcase className="h-6 w-6" />
                    <span className="text-[10px] font-bold tracking-wider">Portfolio</span>
                </button>
                <a
                    href="https://news-indol-two.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-400 hover:text-gray-200 transition-colors"
                >
                    <Newspaper className="h-6 w-6" />
                    <span className="text-[10px] font-bold tracking-wider">News</span>
                </a>
            </div>
        </div>
    );
};

export default MobileBottomNav;
