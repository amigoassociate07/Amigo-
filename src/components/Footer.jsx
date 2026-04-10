import { Linkedin, Instagram } from 'lucide-react';

const Footer = ({ onCareersClick, onContactClick, onStocksClick, onAdminClick, onIpoClick, onAboutClick, onPortfolioClick }) => {
    return (
        <footer className="bg-corex-navy text-white pt-20 pb-24 md:pb-10 border-t border-white/10">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16 text-center md:text-left">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-corex-accent h-10 w-10 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xl font-[950] italic tracking-tighter">A</span>
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-xl font-black tracking-tighter text-white leading-none">AMIGO</span>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-corex-accent">ASSOCIATE</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            An advanced financial platform for modern investors, offering real-time data and in-depth analytics for better decision-making.
                        </p>
                        <div className="flex space-x-5 justify-center md:justify-start">
                            <a href="#" className="text-gray-400 hover:text-corex-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-corex-accent transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-b border-corex-accent/30 pb-2 inline-block">Platform</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); if (onStocksClick) onStocksClick(); }} className="hover:text-corex-accent transition-colors">Stocks Explorer</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); if (onPortfolioClick) onPortfolioClick(); }} className="hover:text-corex-accent transition-colors">Portfolio Tracker</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); if (onIpoClick) onIpoClick(); }} className="hover:text-corex-accent transition-colors">IPO Watch</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-b border-corex-accent/30 p-2 inline-block">Company</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); if (onAboutClick) onAboutClick(); }} className="hover:text-corex-accent transition-colors">About Us</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); if (onCareersClick) onCareersClick(); }} className="hover:text-corex-accent transition-colors">Careers</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); if (onContactClick) onContactClick(); }} className="hover:text-corex-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-b border-corex-accent/30 pb-2 inline-block">Address</h3>
                        <div className="text-sm text-gray-400 font-medium text-center md:text-left space-y-2">
                            <p>Orbit Mall A.B. Road Vijay Nagar</p>
                            <p>Scheme 54 PU-4 3rd Floor,</p>
                            <p>Office No.312 Indore Madhya Pradesh 452010</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-500 text-[10px] text-center md:text-left font-medium max-w-5xl space-y-3 leading-relaxed">
                        <p>© 2026 Amigo Associate. All rights reserved. Financial data is provided for informational purposes only. Past performance is not indicative of future results.</p>
                        <p>Amigo provides general information only and is not registered with SEBI as an Investment Adviser or Research Analyst. All content, including ratings, recommendations, and analysis, is for educational purposes only and does not constitute investment advice. Please consult a SEBI-registered advisor before making any investment decisions.</p>
                    </div>
                    <div className="flex gap-4 md:gap-8 justify-center text-[11px] text-gray-500 font-bold uppercase tracking-wider flex-wrap">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
