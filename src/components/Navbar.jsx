import React, { useState } from 'react';
import { TrendingUp, Menu, X, Search, Bell } from 'lucide-react';

const Navbar = ({ onHomeClick, onStocksClick, activePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-corex-navy text-white sticky top-0 z-50 shadow-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={onHomeClick}>
                            <div className="bg-corex-accent h-11 w-11 rounded-lg group-hover:scale-105 transition-transform flex items-center justify-center">
                                <span className="text-white text-2xl font-[950] italic tracking-tighter">A</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter text-white leading-none">AMIGO</span>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-corex-accent">ASSOCIATE</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
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
                                onClick={onStocksClick}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/5 ${activePage === 'stocks' ? 'text-corex-accent' : 'text-gray-300 hover:text-corex-accent'
                                    }`}
                            >
                                Stocks
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-corex-accent px-4 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/5"
                            >
                                Portfolio
                            </a>
                            <a
                                href="https://news-indol-two.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-corex-accent px-4 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/5"
                            >
                                News
                            </a>
                        </div>
                    </div>

                    {/* Right side icons/actions */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-corex-accent transition-colors" />
                            <input
                                type="text"
                                placeholder="Search stocks..."
                                className="bg-white/5 border border-white/10 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-corex-accent/50 w-64 transition-all focus:bg-white/10 placeholder:text-gray-500 text-white"
                            />
                        </div>
                        <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-corex-accent transition-colors cursor-default text-right leading-tight max-w-[250px]">
                            Authorised By Arihant Capital Markets LTD
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-corex-navy border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#"
                            onClick={(e) => { onHomeClick(e); setIsMenuOpen(false); }}
                            className={`block px-3 py-3 rounded-md text-base font-semibold transition-colors ${activePage === 'home' ? 'text-corex-accent bg-white/5' : 'text-gray-300 hover:text-corex-accent'
                                }`}
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            onClick={(e) => { onStocksClick(e); setIsMenuOpen(false); }}
                            className={`block px-3 py-3 rounded-md text-base font-semibold transition-colors ${activePage === 'stocks' ? 'text-corex-accent bg-white/5' : 'text-gray-300 hover:text-corex-accent'
                                }`}
                        >
                            Stocks
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-corex-accent block px-3 py-3 rounded-md text-base font-semibold transition-colors"
                        >
                            Portfolio
                        </a>
                        <a
                            href="https://news-indol-two.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-corex-accent block px-3 py-3 rounded-md text-base font-semibold transition-colors"
                        >
                            News
                        </a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-white/10 px-5 flex flex-col gap-4">
                        <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-corex-accent transition-colors cursor-default text-center leading-tight">
                            Authorised By Arihant Capital Markets LTD
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
