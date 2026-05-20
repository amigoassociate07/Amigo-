import React, { useState } from 'react';
import { TrendingUp, Menu, X, Search, Bell } from 'lucide-react';

const Navbar = ({ onHomeClick, onServicesClick, onPortfolioClick, onAboutClick, onIpoClick, onMutualFundsClick, onPathshalaClick, onForexClick, activePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-corex-navy text-white w-full z-50 shadow-xl border-b border-white/10">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 relative">
                    {/* Mobile Menu Button */}
                    <div className="flex xl:hidden items-center z-20">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center justify-center flex-1 xl:flex-initial xl:justify-start z-10">
                        <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={onHomeClick}>
                            <div className="bg-white h-11 w-11 rounded-lg group-hover:scale-105 transition-transform flex items-center justify-center overflow-hidden border border-white/10 shadow-inner">
                                <img src="/vite.svg" alt="Amigo Logo" className="h-full w-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter text-white leading-none">AMIGO</span>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-corex-accent">ASSOCIATE</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden xl:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            <a
                                href="#"
                                onClick={onHomeClick}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/5 ${activePage === 'home' ? 'text-corex-accent' : 'text-gray-300 hover:text-corex-accent'
                                    }`}
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); if (onServicesClick) onServicesClick(e); }}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/5 ${activePage === 'services' ? 'text-corex-accent' : 'text-gray-300 hover:text-corex-accent'}`}
                            >
                                Services
                            </a>



                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); if (onMutualFundsClick) onMutualFundsClick(e); }}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/5 ${activePage === 'mutual-funds' ? 'text-corex-accent' : 'text-gray-300 hover:text-corex-accent'}`}
                            >
                                Mutual Funds
                            </a>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); if (onPathshalaClick) onPathshalaClick(e); }}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/5 ${activePage === 'pathshala' ? 'text-corex-accent' : 'text-gray-300 hover:text-corex-accent'}`}
                            >
                                Pathshala
                            </a>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); if (onForexClick) onForexClick(e); }}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/5 ${activePage === 'forex-detail' ? 'text-corex-accent' : 'text-gray-300 hover:text-corex-accent'}`}
                            >
                                Forex Study
                            </a>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); if (onAboutClick) onAboutClick(e); }}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/5 ${activePage === 'about' ? 'text-corex-accent' : 'text-gray-300 hover:text-corex-accent'
                                    }`}
                            >
                                About Us
                            </a>

                        </div>
                    </div>

                    {/* Right side icons/actions */}
                    <div className="hidden xl:flex items-center gap-6">
                        <div className="relative group hidden lg:block">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 group-focus-within:text-corex-accent transition-colors" />
                            <input
                                type="text"
                                placeholder="Search......"
                                className="bg-white/5 border border-white/10 text-xs font-bold tracking-widest rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-corex-accent/30 w-56 focus:w-80 transition-all focus:bg-white/10 placeholder:text-gray-600 text-white"
                            />

                        </div>
                        <div className="h-8 w-[1px] bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-corex-accent mb-0.5">Authorised By</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap">Arihant Capital Markets LTD</span>
                        </div>
                    </div>

                    {/* Mobile Menu Notification Indicator (Optional) */}
                    <div className="flex xl:hidden items-center z-20">
                        <Bell className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`xl:hidden absolute w-full bg-corex-navy/95 backdrop-blur-3xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-2 pb-6 space-y-1">
                    {[
                        { name: 'Home', action: onHomeClick, id: 'home' },
                        { name: 'Services', action: onServicesClick, id: 'services' },
                        { name: 'Mutual Funds', action: onMutualFundsClick, id: 'mutual-funds' },
                        { name: 'Pathshala', action: onPathshalaClick, id: 'pathshala' },
                        { name: 'Forex Study', action: onForexClick, id: 'forex-detail' },
                        { name: 'About Us', action: onAboutClick, id: 'about' }
                    ].map((item) => (
                        <a
                            key={item.id}
                            href="#"
                            onClick={(e) => { e.preventDefault(); item.action(e); setIsMenuOpen(false); }}
                            className={`block px-4 py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all ${activePage === item.id ? 'bg-corex-accent text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="pt-6 border-t border-white/5 mt-4">
                        <div className="flex flex-col gap-1 px-4">
                            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-corex-accent">Authorised By</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Arihant Capital Markets LTD</span>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
