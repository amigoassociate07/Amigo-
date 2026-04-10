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
    PlayCircle,
    Coins,
    Landmark,
    Zap,
    Search,
    BookOpen,
    Cpu,
    Dna,
    BarChart
} from 'lucide-react';

const Home = ({ onExploreClick, homeData }) => {
    const defaultFeatures = [
        { title: "Institutional Explorer", desc: "Proprietary market scanning technology with millisecond refresh rates for 50,000+ global assets.", icon: "BarChart3" },
        { title: "Vector Prediction", desc: "Advanced AI algorithms visualizing potential market trajectories before they manifest in price.", icon: "TrendingUp" },
        { title: "Secure Terminal", desc: "Bank-grade encryption protecting every intelligence node and transaction link in our network.", icon: "Shield" }
    ];

    const defaultCapitalSolutions = [
        { title: "Strategic Credit Lines", desc: "Flexible debt solutions for mid-to-large scale operations.", icon: "Coins" },
        { title: "Structured Finance", desc: "Complex capital structures tailored for unique market positions.", icon: "Landmark" },
        { title: "Liquidity Velocity", desc: "Instant deployment of capital nodes across global markets.", icon: "Zap" }
    ];

    const defaultCapitalNodes = [
        { label: "EMEA Credit Node", value: "$2.4B", progress: "78%" },
        { label: "APAC Liquidity Pool", value: "$4.1B", progress: "92%" },
        { label: "AMER Debt Facility", value: "$1.8B", progress: "64%" }
    ];

    const defaultGlobalMarkets = [
        { title: "Sentiment Analysis", data: "Extreme Greed", trend: "Increasing", items: ["Twitter/X", "News", "Whitepapers"], icon: "Search" },
        { title: "Flow Monitor", data: "+$12.4B", trend: "Capital Inflow", items: ["Institutional", "Retail", "VC"], icon: "ArrowUpRight" },
        { title: "Volatility Scorer", data: "18.4", trend: "Stable", items: ["Historical", "Implied", "Skew"], icon: "BarChart3" },
        { title: "Alpha Signals", data: "A+ Grade", trend: "High Confidence", items: ["Momentum", "Value", "Mean Reversion"], icon: "Zap" }
    ];

    const defaultTheoryList = [
        { title: "Mean-Variance Optimization", desc: "Refining Markowitz's foundational theory through Bayesian priors to minimize expected downside while maximizing stochastic alpha.", icon: "BarChart", label: "MPT+", color: "border-blue-500/30" },
        { title: "Bayesian Inference Engine", desc: "Continuously updating market probabilities as new nodes of data emerge, allowing for dynamic portfolio rebalancing in milliseconds.", icon: "Dna", label: "STOCHASTIC", color: "border-purple-500/30" },
        { title: "Risk Parity & Volatility Scaling", desc: "Allocating capital based on risk contribution rather than dollar amount, ensuring a resilient posture across all market regimes.", icon: "Cpu", label: "STABILITY", color: "border-corex-accent/30" },
        { title: "Algorithmic execution models", desc: "Advanced VWAP and TWAP logic integrated with order-book pressure analysis to minimize slippage and hidden transaction costs.", icon: "Zap", label: "EXECUTION", color: "border-orange-500/30" }
    ];

    const iconsMap = { BarChart3, TrendingUp, Shield, Coins, Landmark, Zap, Search, ArrowUpRight, BarChart, Dna, Cpu, Globe2, Users2 };

    const getIcon = (item, fallback) => {
        if (typeof item.icon === 'string' && iconsMap[item.icon]) return iconsMap[item.icon];
        if (typeof item.icon === 'function' || typeof item.icon === 'object') return item.icon;
        return fallback;
    };

    return (
        <div className="bg-corex-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-corex-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
                </div>

                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 bg-corex-accent rounded-full"></div>
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-navy/60">Institutional Finance</span>
                            </div>
                            <h1 
                                className="text-5xl lg:text-7xl font-black text-corex-navy leading-[1.1] mb-8 tracking-tighter"
                                dangerouslySetInnerHTML={{ __html: homeData?.hero?.title || "Trustworthy <br />\n<span class='text-corex-accent italic'>Smart</span> Investments." }}
                            />
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                                {homeData?.hero?.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <button
                                    onClick={onExploreClick}
                                    className="btn-accent px-10 py-5 text-base font-black uppercase tracking-widest shadow-2xl shadow-corex-accent/20 flex items-center justify-center gap-3 group"
                                >
                                    Start Explorer <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                                <button className="px-10 py-5 text-corex-navy border border-corex-navy/10 rounded-lg font-black uppercase tracking-widest hover:bg-corex-navy/5 transition-all flex items-center justify-center gap-3">
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
                            <div className="relative z-10 bg-corex-navy backdrop-blur-xl border border-white/10 rounded-[40px] p-8 shadow-2xl overflow-hidden group">
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
                                                className="h-full bg-corex-accent rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-corex-white border-b border-corex-gray">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12 text-center">
                        {(homeData?.stats || []).map((stat, i) => {
                            const icons = [Globe2, TrendingUp, Shield, Users2];
                            const IconCmp = icons[i % icons.length];
                            return (
                            <motion.div
                                key={stat.id || i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <IconCmp className="h-8 w-8 text-corex-accent mb-6 mx-auto group-hover:scale-110 transition-transform" />
                                <p className="text-4xl font-black text-corex-navy mb-2 tracking-tighter">{stat.value}</p>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-32 bg-corex-gray">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
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
                        {(homeData?.features || defaultFeatures).map((feature, i) => {
                            const IconCmp = getIcon(feature, BarChart3);
                            return (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-corex-navy flex items-center justify-center mb-8 group-hover:bg-corex-accent transition-colors shadow-xl shadow-corex-navy/10">
                                    <IconCmp className="text-white h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-black text-corex-navy mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
                                    {feature.desc}
                                </p>
                                <button className="text-xs font-black uppercase tracking-widest text-corex-accent flex items-center gap-2 group/btn">
                                    Detailed Specs <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Institutional Lending & Capital Section */}
            <section className="py-32 bg-corex-white overflow-hidden">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 bg-corex-accent rounded-full"></div>
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-navy/60">Capital Solutions</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black text-corex-navy leading-[1.1] mb-8 tracking-tighter">
                                Institutional <span className="text-corex-accent">Lending</span> & Structured Capital.
                            </h2>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                                Access bespoke credit facilities and high-liquidity capital markets. Our platform connects institutional borrowers with Tier-1 liquidity providers through automated smart-matching engines.
                            </p>
                            
                            <div className="space-y-6 mb-10">
                                {(homeData?.capitalSolutions || defaultCapitalSolutions).map((item, i) => {
                                    const IconCmp = getIcon(item, Coins);
                                    return (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="mt-1 bg-corex-accent/10 p-2 rounded-lg">
                                            <IconCmp className="h-5 w-5 text-corex-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-corex-navy text-lg">{item.title}</h4>
                                            <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-corex-navy rounded-[40px] p-10 relative z-10 shadow-2xl overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8">
                                    <div className="h-2 w-2 bg-corex-accent rounded-full animate-ping"></div>
                                </div>
                                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-10 opacity-60">Capital Allocation Live</h4>
                                <div className="space-y-8">
                                    {(homeData?.capitalNodes || defaultCapitalNodes).map((node, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-end mb-3">
                                                <span className="text-xs font-black text-white/50 uppercase">{node.label}</span>
                                                <span className="text-sm font-black text-corex-accent">{node.value}</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: node.progress }}
                                                    transition={{ duration: 1.5, delay: 0.2 + (i * 0.1) }}
                                                    viewport={{ once: true }}
                                                    className="h-full bg-corex-accent"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            {/* Decorative background element */}
                            <div className="absolute -inset-4 bg-corex-accent/20 blur-3xl rounded-[40px] -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Market Intelligence Section */}
            <section className="py-32 bg-corex-gray relative overflow-hidden">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-accent mb-4 block">Global Intelligence</span>
                        <h2 className="text-4xl lg:text-5xl font-black text-corex-navy tracking-tight">
                            The World's Markets, <br />
                            <span className="italic">Integrated</span> in Real-Time.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {(homeData?.globalMarkets || defaultGlobalMarkets).map((card, i) => {
                            const IconCmp = getIcon(card, Search);
                            return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-[32px] border border-white/50 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="bg-corex-navy w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-corex-accent transition-colors">
                                    <IconCmp className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-black text-corex-navy mb-2">{card.title}</h3>
                                <p className="text-2xl font-black text-corex-navy mb-1">{card.data}</p>
                                <p className="text-xs font-black text-corex-accent uppercase mb-6 tracking-widest">{card.trend}</p>
                                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                                    {card.items.map((item, j) => (
                                        <span key={j} className="text-[9px] font-black uppercase text-slate-400 bg-slate-50 px-2 py-1 rounded-full">{item}</span>
                                    ))}
                                </div>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Strategic Investment Framework (Theory) Section */}
            <section className="py-32 bg-corex-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:60px_60px]"></div>
                </div>
                
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/3">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 bg-corex-accent rounded-full"></div>
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-accent/60">The Intelligence Core</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
                                The Theory Behind <br />
                                <span className="text-corex-accent italic">Exceptional</span> Returns.
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                We don't just process data; we apply rigorous mathematical frameworks to navigate market complexity. Our engine is built on the intersection of academic finance and advanced machine learning.
                            </p>
                            <button className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm group">
                                View Mathematical Whitepaper <ArrowUpRight className="h-5 w-5 text-corex-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>

                        <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                            {(homeData?.theoryList || defaultTheoryList).map((theory, i) => {
                                const IconCmp = getIcon(theory, BarChart);
                                return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`bg-white/5 backdrop-blur-sm border ${theory.color} p-8 rounded-[32px] hover:bg-white/10 transition-all group`}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-white/10 p-3 rounded-2xl group-hover:bg-corex-accent/20 transition-colors">
                                            <IconCmp className="h-6 w-6 text-white group-hover:text-corex-accent transition-colors" />
                                        </div>
                                        <span className="text-[10px] font-black text-gray-500 tracking-[0.2em]">{theory.label}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-4 leading-tight">{theory.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                        {theory.desc}
                                    </p>
                                </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-corex-navy"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-corex-accent/10 skew-x-[-20deg] translate-x-32"></div>

                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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
