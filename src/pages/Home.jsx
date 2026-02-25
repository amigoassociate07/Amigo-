import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    TrendingUp,
    Shield,
    BarChart3,
    Globe2,
    Users2,
    ArrowUpRight,
    PlayCircle
} from 'lucide-react';

const Home = ({ onExploreClick }) => {
    return (
        <div className="bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-corex-navy">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:40px_40px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 bg-corex-accent rounded-full"></div>
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-accent">Institutional Finance</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                                Intelligence <br />
                                <span className="text-corex-accent italic">Beyond</span> Limits.
                            </h1>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg font-medium">
                                Elevate your capital management with institutional-grade analytics, real-time market foresight, and automated intelligence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <button
                                    onClick={onExploreClick}
                                    className="btn-accent px-10 py-5 text-base font-black uppercase tracking-widest shadow-2xl shadow-corex-accent/20 flex items-center justify-center gap-3 group"
                                >
                                    Start Explorer <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                                <button className="px-10 py-5 text-white border border-white/20 rounded-lg font-black uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                                    <PlayCircle className="h-5 w-5" /> How it Works
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 shadow-2xl overflow-hidden group">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-corex-accent/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center pb-6 border-b border-white/10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-corex-accent flex items-center justify-center shadow-lg shadow-corex-accent/30">
                                                <TrendingUp className="text-white h-6 w-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-black text-sm uppercase tracking-wider">Market Foresight</h4>
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Real-time Vector</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-green-400 font-black text-lg">+24.8%</p>
                                            <p className="text-gray-500 text-[10px] font-black uppercase">Volatility Index</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-5 rounded-[24px] border border-white/5 hover:bg-white/10 transition-colors">
                                            <BarChart3 className="text-corex-accent h-6 w-6 mb-3" />
                                            <p className="text-white font-black text-lg">98.2K</p>
                                            <p className="text-gray-500 text-[10px] font-black uppercase">Data Nodes</p>
                                        </div>
                                        <div className="bg-white/5 p-5 rounded-[24px] border border-white/5 hover:bg-white/10 transition-colors">
                                            <Shield className="text-corex-accent h-6 w-6 mb-3" />
                                            <p className="text-white font-black text-lg">Secure</p>
                                            <p className="text-gray-500 text-[10px] font-black uppercase">AES-256 Auth</p>
                                        </div>
                                    </div>
                                    <div className="bg-corex-accent/10 p-5 rounded-[24px] border border-corex-accent/20">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-white text-xs font-black uppercase tracking-wider">Optimization Engine</p>
                                            <span className="text-corex-accent text-[10px] font-black uppercase animate-pulse">Active</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '85%' }}
                                                transition={{ duration: 2, delay: 0.5 }}
                                                className="h-full bg-corex-accent rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating decorative elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-14 -left-10 bg-white p-4 rounded-2xl shadow-2xl hidden lg:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-10 bg-green-500 rounded-full"></div>
                                    <div>
                                        <p className="text-corex-navy font-black text-xs">MARKET OPEN</p>
                                        <p className="text-gray-400 text-[9px] font-black">VOL: 4.8B</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12 text-center lg:text-left">
                        {[
                            { value: '$420B+', label: 'Managed Assets', icon: Globe2 },
                            { value: '1.2M+', label: 'Global Trade Nodes', icon: TrendingUp },
                            { value: '99.99%', label: 'Uptime Precision', icon: Shield },
                            { value: '850K+', label: 'Executive Clients', icon: Users2 }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <stat.icon className="h-8 w-8 text-corex-accent mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform" />
                                <p className="text-4xl font-black text-corex-navy mb-2 tracking-tighter">{stat.value}</p>
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-32 bg-corex-gray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <div className="flex justify-center items-center gap-3 mb-6">
                            <div className="h-1 w-8 bg-corex-accent rounded-full"></div>
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-accent">Platform Capabilities</span>
                            <div className="h-1 w-8 bg-corex-accent rounded-full"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-corex-navy tracking-tight mb-8">
                            Everything you need to <br />
                            <span className="text-corex-accent underline decoration-4 underline-offset-8">command</span> the market.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Institutional Explorer",
                                desc: "Proprietary market scanning technology with millisecond refresh rates for 50,000+ global assets.",
                                icon: BarChart3
                            },
                            {
                                title: "Vector Prediction",
                                desc: "Advanced AI algorithms visualizing potential market trajectories before they manifest in price.",
                                icon: TrendingUp
                            },
                            {
                                title: "Secure Terminal",
                                desc: "Bank-grade encryption protecting every intelligence node and transaction link in our network.",
                                icon: Shield
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-corex-navy flex items-center justify-center mb-8 group-hover:bg-corex-accent transition-colors shadow-xl shadow-corex-navy/10">
                                    <feature.icon className="text-white h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-black text-corex-navy mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
                                    {feature.desc}
                                </p>
                                <button className="text-xs font-black uppercase tracking-widest text-corex-accent flex items-center gap-2 group/btn">
                                    Detailed Specs <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-corex-navy"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-corex-accent/5 skew-x-[-20deg] translate-x-32"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-10 leading-none">
                        Ready to join the <br />
                        <span className="text-corex-accent italic">Elite tier</span> of finance?
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-12 font-medium">
                        Deployment of our full suite takes minutes. Instant access to institutional tools for selected individuals and firms.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="btn-accent px-12 py-5 text-base font-black uppercase tracking-widest">Register Now</button>
                        <button className="px-12 py-5 text-white bg-white/5 border border-white/10 rounded-lg font-black uppercase tracking-widest hover:bg-white/10 transition-all">Schedule Demo</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
