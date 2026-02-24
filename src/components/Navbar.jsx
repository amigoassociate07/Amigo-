import React, { useState } from 'react';
import { TrendingUp, Menu, X, Search, Bell } from 'lucide-react';

const Navbar = ({ onHomeClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-amigo-black text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
                            <div className="bg-amigo-blue p-2 rounded-lg">
                                <TrendingUp className="h-8 w-8 text-amigo-black" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-amigo-beige">AMIGO</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" onClick={onHomeClick} className="text-gray-400 hover:text-amigo-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Markets</a>
                            <a href="#" onClick={onHomeClick} className="text-gray-400 hover:text-amigo-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Stocks</a>
                            <a href="https://news-indol-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amigo-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">News</a>
                            <a href="#" onClick={onHomeClick} className="text-gray-400 hover:text-amigo-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</a>
                        </div>
                    </div>

                    {/* Right side icons/actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search stocks..."
                                className="bg-gray-800 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-amigo-blue w-64 transition-all"
                            />
                        </div>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
                            <Bell className="h-6 w-6" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button className="btn-primary bg-amigo-blue !text-amigo-black hover:bg-white">Sign In</button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-amigo-black border-t border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" onClick={onHomeClick} className="text-gray-400 hover:text-amigo-blue block px-3 py-2 rounded-md text-base font-medium transition-colors">Markets</a>
                        <a href="#" onClick={onHomeClick} className="text-gray-400 hover:text-amigo-blue block px-3 py-2 rounded-md text-base font-medium transition-colors">Stocks</a>
                        <a href="https://news-indol-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amigo-blue block px-3 py-2 rounded-md text-base font-medium transition-colors">News</a>
                        <a href="#" onClick={onHomeClick} className="text-gray-400 hover:text-amigo-blue block px-3 py-2 rounded-md text-base font-medium transition-colors">Portfolio</a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700 px-5 flex flex-col gap-4">
                        <button className="btn-primary bg-amigo-blue !text-amigo-black w-full text-center">Sign In</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
