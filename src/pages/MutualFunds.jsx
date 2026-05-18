import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, TrendingUp, ShieldCheck, Wallet, Landmark, LineChart, ArrowRight, ChevronRight } from 'lucide-react';

const MutualFunds = ({ onBackClick, onSIPClick, onLumpsumClick, onELSSClick, onDebtClick, onEquityClick, onReviewClick }) => {
    const [expandedFund, setExpandedFund] = useState(null);
    const fundTypes = [
        {
            title: "SIP (Monthly Investment)",
            desc: "Start with as little as ₹500/month",
            icon: TrendingUp,
            accent: "text-emerald-500",
            bg: "bg-emerald-50",
            details: {
                metric1: { label: "Minimum Investment", value: "₹500 / Month" },
                metric2: { label: "Compounding Frequency", value: "Monthly Yield Node" },
                metric3: { label: "Optimal Horizon", value: "5+ Years (Systematic)" },
                explain: "Systematic Investment Plans (SIP) process mathematical averaging over distinct market cycles. By acquiring more units during downturns and fewer during upswings, it mitigates sequencing risk, achieving highly efficient compounding benchmarks."
            }
        },
        {
            title: "Lump Sum Investment",
            desc: "One-time investments in top-rated funds",
            icon: Wallet,
            accent: "text-blue-500",
            bg: "bg-blue-50",
            details: {
                metric1: { label: "Minimum Investment", value: "₹5,000 One-Time" },
                metric2: { label: "Valuation Sensitivity", value: "Entry Timing Vector" },
                metric3: { label: "Optimal Horizon", value: "7+ Years (Absolute Growth)" },
                explain: "Designed for long-term compound growth where capital is deployed in structured tranches. Ideal during market consolidations or corrections when absolute asset class valuations present attractive risk-premium ratios."
            }
        },
        {
            title: "ELSS (Tax Saving)",
            desc: "Save tax under Section 80C",
            icon: ShieldCheck,
            accent: "text-purple-500",
            bg: "bg-purple-50",
            details: {
                metric1: { label: "Tax Deduction", value: "Section 80C (Up to ₹1.5L)" },
                metric2: { label: "Lock-in Period", value: "3 Years (Shortest in Section)" },
                metric3: { label: "Asset Allocation", value: "80%+ Active Equity Node" },
                explain: "Equity Linked Saving Scheme (ELSS) merges tax deduction capabilities with active wealth compounding. The strict 3-year lock-in period prevents premature fund exits during market panics, allowing managers to capture complete corporate growth cycles."
            }
        },
        {
            title: "Debt Funds",
            desc: "Low-risk, stable returns",
            icon: Landmark,
            accent: "text-amber-500",
            bg: "bg-amber-50",
            details: {
                metric1: { label: "Sovereign / Corporate Credit", value: "AAA / AA rated bonds" },
                metric2: { label: "Volatility Parameter", value: "Low to Moderate Beta" },
                metric3: { label: "Optimal Horizon", value: "1 - 3 Years (Capital Shield)" },
                explain: "Allocation of capital across fixed-income instruments, treasury nodes, and highly-rated commercial paper. Serves as a defensive ballast during high volatility cycles, safeguarding capital reserves while delivering predictable yields."
            }
        },
        {
            title: "Equity Funds",
            desc: "Long-term wealth creation",
            icon: LineChart,
            accent: "text-rose-500",
            bg: "bg-rose-50",
            details: {
                metric1: { label: "Security Allocation", value: "Blue-Chip & Multi-Cap Focus" },
                metric2: { label: "Volatility Parameter", value: "High Beta Growth Engine" },
                metric3: { label: "Optimal Horizon", value: "7+ Years (Inflation Beating)" },
                explain: "Allocates wealth directly into high-growth equity nodes across diverse economic sectors. Aims to generate maximum long-term purchasing power by capturing expansion dynamics and reinvesting dividends to drive compounding."
            }
        },
        {
            title: "Portfolio Review",
            desc: "Review and rebalance existing investments",
            icon: PieChart,
            accent: "text-indigo-500",
            bg: "bg-indigo-50",
            details: {
                metric1: { label: "Audit Interval", value: "Bi-Annual Structural Audit" },
                metric2: { label: "Balancing Priority", value: "Asset Correlation Control" },
                metric3: { label: "Target Strategy", value: "Drawdown Minimization" },
                explain: "A comprehensive structural study of active investment streams. Flags overlapping holdings, re-aligns drifting weights back to target risk bounds, and removes underperforming management structures to ensure optimum portfolio health."
            }
        }
    ];

    const topPicks = [
        { name: "Parag Parikh Flexi Cap", returns: "20.5%", cat: "Flexi Cap" },
        { name: "HDFC Mid-Cap Opp.", returns: "25.2%", cat: "Mid Cap" },
        { name: "Quant Small Cap", returns: "35.8%", cat: "Small Cap" }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-corex-navy py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
                </div>
                
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest mb-6">
                            <TrendingUp className="h-3 w-3" /> Learning Purpose Only
                        </div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-corex-accent/20 text-corex-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-corex-accent/30">
                            Wealth Distribution
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                            Strategic <span className="text-corex-accent italic">Mutual Fund</span> Solutions.
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
                            Tailored investment vehicles designed to align with your financial goals, risk appetite, and time horizon.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Amigo Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white border-l-4 border-blue-500 p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 mb-20"
                    >
                        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">
                            Why invest in Mutual Funds through Amigo?
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            We analyze your financial profile, explain every option in simple language, and recommend only those funds that genuinely fit your needs. 
                            <span className="block mt-4 text-blue-600 font-bold">No jargon. No pressure. Just the right advice.</span>
                        </p>
                    </motion.div>

                    {/* Types Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fundTypes.map((type, i) => {
                            const IconCmp = type.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={expandedFund !== i ? { y: -5 } : {}}
                                    onClick={() => {
                                        if (type.title === "SIP (Monthly Investment)") onSIPClick();
                                        else if (type.title === "Lump Sum Investment") onLumpsumClick();
                                        else if (type.title === "ELSS (Tax Saving)") onELSSClick();
                                        else if (type.title === "Debt Funds") onDebtClick();
                                        else if (type.title === "Equity Funds") onEquityClick();
                                        else if (type.title === "Portfolio Review") onReviewClick();
                                    }}
                                    className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between cursor-pointer ${expandedFund === i ? 'lg:col-span-2' : ''}`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-14 h-14 rounded-2xl ${type.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <IconCmp className={`w-7 h-7 ${type.accent}`} />
                                            </div>
                                            <div className="px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[6px] font-black uppercase tracking-widest">
                                                Study Node
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-corex-accent transition-colors">
                                            {type.title}
                                        </h3>
                                        <p className="text-slate-500 font-bold text-sm mb-8">
                                            {type.desc}
                                        </p>

                                        <AnimatePresence>
                                            {expandedFund === i && type.details && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="mt-2 mb-8 pt-6 border-t border-slate-100 space-y-6 text-left"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">{type.details.metric1.label}</p>
                                                            <p className="text-[11px] font-bold text-slate-800">{type.details.metric1.value}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">{type.details.metric2.label}</p>
                                                            <p className="text-[11px] font-bold text-slate-800">{type.details.metric2.value}</p>
                                                        </div>
                                                        <div className="col-span-2">
                                                            <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">{type.details.metric3.label}</p>
                                                            <p className="text-[11px] font-bold text-slate-800">{type.details.metric3.value}</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                        <p className="text-[8px] font-black uppercase text-corex-accent tracking-widest mb-2">Fund Strategy Study</p>
                                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                                            {type.details.explain}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50/50">
                                        <div 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (type.title === "SIP (Monthly Investment)") onSIPClick();
                                                else if (type.title === "Lump Sum Investment") onLumpsumClick();
                                                else if (type.title === "ELSS (Tax Saving)") onELSSClick();
                                                else if (type.title === "Debt Funds") onDebtClick();
                                                else if (type.title === "Equity Funds") onEquityClick();
                                                else if (type.title === "Portfolio Review") onReviewClick();
                                            }}
                                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-corex-accent transition-colors hover:text-corex-navy cursor-pointer"
                                        >
                                            Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>

                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setExpandedFund(expandedFund === i ? null : i);
                                            }}
                                            className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-corex-accent flex items-center gap-1.5 cursor-pointer"
                                        >
                                            {expandedFund === i ? 'Close Specs' : 'Detailed Specs'}
                                            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${expandedFund === i ? 'rotate-90 text-corex-accent' : ''}`} />
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Picks Summary */}
            <section className="pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-corex-accent/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
                        
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black text-white mb-6 tracking-tight">
                                    Amigo <span className="text-corex-accent italic uppercase tracking-tighter">Top Picks</span>
                                </h2>
                                <p className="text-slate-400 font-medium mb-8">
                                    Our curated selection of top-performing funds across the Indian market.
                                </p>
                                <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-corex-accent hover:translate-x-2 transition-transform">
                                    View All Top Funds <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                            
                            <div className="grid gap-4">
                                {topPicks.map((pick, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{pick.cat}</p>
                                            <h4 className="text-white font-black">{pick.name}</h4>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-corex-accent font-black">{pick.returns}</p>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">3Y CAGR</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Study Intelligence Guide */}
            <section className="py-20 px-4 border-t border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-[8px] font-black uppercase tracking-widest mb-6">Analytical Framework</div>
                            <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Understanding <span className="text-blue-600 italic">Portfolio Diversification</span>.</h2>
                            <p className="text-slate-500 font-medium leading-relaxed mb-8">
                                For academic study, it is critical to understand how different asset classes (Equity, Debt, Gold) interact. A well-diversified portfolio reduces unsystematic risk and optimizes the efficient frontier.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Correlation analysis between indices",
                                    "Risk-adjusted return modeling",
                                    "Historical drawdown study",
                                    "Capital Asset Pricing Model (CAPM) application"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                                        <span className="text-sm font-bold text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/2 bg-slate-50 p-10 rounded-[40px] border border-slate-100">
                            <div className="aspect-video bg-white rounded-3xl shadow-inner flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px:20px] opacity-10"></div>
                                <div className="text-center p-8">
                                    <LineChart className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Educational Simulation Node</p>
                                    <p className="text-[10px] text-slate-300 mt-2 font-medium">Historical Volatility Index (VIX) vs Mutual Fund Alpha</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                        Start Your <span className="text-corex-accent italic">SIP</span> Journey Today.
                    </h2>
                    <p className="text-slate-400 mb-12 font-medium">
                        Consistency is the key to wealth creation. Join 18,000+ investors building their future with Amigo.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="px-10 py-4 bg-corex-accent text-white font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
                            Study Funds
                        </button>
                        <button className="px-10 py-4 border-2 border-white/10 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all">
                            Learning Session
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MutualFunds;
