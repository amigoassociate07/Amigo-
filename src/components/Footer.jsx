import { Linkedin, Instagram, TrendingUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-corex-navy text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-corex-accent p-2 rounded-lg">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter text-white leading-none">AMIGO</span>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-corex-accent">FINANCE</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Advanced financial intelligence platform for modern investors. Real-time data, deep analytics, and professional tools for global markets.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="text-gray-400 hover:text-corex-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-corex-accent transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-b border-corex-accent/30 pb-2 inline-block">Platform</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-corex-accent transition-colors">Stocks Explorer</a></li>
                            <li><a href="#" className="hover:text-corex-accent transition-colors">Market Heatmap</a></li>
                            <li><a href="#" className="hover:text-corex-accent transition-colors">Portfolio Tracker</a></li>
                            <li><a href="#" className="hover:text-corex-accent transition-colors">AI Insights</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-b border-corex-accent/30 pb-2 inline-block">Company</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-corex-accent transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-corex-accent transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-corex-accent transition-colors">Legal & Privacy</a></li>
                            <li><a href="#" className="hover:text-corex-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-widest border-b border-corex-accent/30 pb-2 inline-block">Newsletter</h3>
                        <p className="text-sm text-gray-400 mb-6 font-medium">Get professional market summaries delivered to your inbox.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-corex-accent w-full text-white placeholder:text-gray-500 transition-all"
                            />
                            <button className="btn-accent w-full py-3 font-bold text-sm">Subscribe Now</button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-[11px] text-center md:text-left font-medium max-w-2xl">
                        © 2026 Amigo Finance. All rights reserved. Financial data is provided for informational purposes only. Past performance is not indicative of future results.
                    </p>
                    <div className="flex gap-8 text-[11px] text-gray-500 font-bold uppercase tracking-wider">
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
