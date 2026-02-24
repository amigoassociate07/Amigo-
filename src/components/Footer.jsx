import { Linkedin, Instagram, TrendingUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-amigo-black text-amigo-beige pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-amigo-blue p-2 rounded-lg">
                                <TrendingUp className="h-6 w-6 text-amigo-black" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">AMIGO</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Advanced financial intelligence platform for modern investors. Real-time data, deep analytics, and professional tools.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-amigo-blue transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-amigo-blue transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Platform</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-amigo-blue transition-colors">Stocks Explorer</a></li>
                            <li><a href="#" className="hover:text-amigo-blue transition-colors">Market Heatmap</a></li>
                            <li><a href="#" className="hover:text-amigo-blue transition-colors">Portfolio Tracker</a></li>
                            <li><a href="#" className="hover:text-amigo-blue transition-colors">AI Insights</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Company</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-amigo-blue transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-amigo-blue transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-amigo-blue transition-colors">Legal & Privacy</a></li>
                            <li><a href="#" className="hover:text-amigo-blue transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Newsletter</h3>
                        <p className="text-sm text-gray-400 mb-4">Get daily market summaries delivered to your inbox.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-gray-800 border-none rounded-l-lg px-4 py-2 text-sm focus:ring-1 focus:ring-amigo-blue w-full"
                            />
                            <button className="bg-amigo-blue text-amigo-black px-4 py-2 rounded-r-lg font-bold hover:bg-white transition-all text-sm">Join</button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        © 2026 Amigo Finance. All rights reserved. Financial data provided by mock sources. Past performance is not indicative of future results.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
