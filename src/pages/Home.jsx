import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    BarChart,
    Target,
    Award,
    Calculator,
    ArrowRight
} from 'lucide-react';

const Home = ({ onExploreClick, homeData }) => {
    // SIP Calculator State
    const [sipAmount, setSipAmount] = useState(5000);
    const [sipRate, setSipRate] = useState(12);
    const [sipYears, setSipYears] = useState(10);
    const [expandedFeature, setExpandedFeature] = useState(null);
    const [expandedPhase, setExpandedPhase] = useState(null);
    const [expandedTheory, setExpandedTheory] = useState(null);
    const [expandedCalc, setExpandedCalc] = useState(null);

    // Goal Calculator State
    const [goalTarget, setGoalTarget] = useState(1000000);
    const [goalRate, setGoalRate] = useState(12);
    const [goalMonthly, setGoalMonthly] = useState(10000);

    // EMI Calculator State
    const [emiPrincipal, setEmiPrincipal] = useState(500000);
    const [emiRate, setEmiRate] = useState(8.5);
    const [emiTenure, setEmiTenure] = useState(5);

    const calculateGoalTime = () => {
        const FV = goalTarget;
        const P = goalMonthly;
        const r = (goalRate / 100) / 12;
        if (P * (1 + r) <= FV * r) return "N/A (Increase Monthly)";
        const N = Math.log(1 + (FV * r) / (P * (1 + r))) / Math.log(1 + r);
        const years = Math.floor(N / 12);
        const months = Math.round(N % 12);
        return `${years} Years, ${months} Months`;
    };

    const calculateEMI = () => {
        const P = emiPrincipal;
        const r = (emiRate / 100) / 12;
        const n = emiTenure * 12;
        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayable = emi * n;
        const interest = totalPayable - P;
        return {
            monthly: Math.round(emi),
            totalInterest: Math.round(interest),
            totalAmount: Math.round(totalPayable)
        };
    };

    const calculateSIP = () => {
        const P = sipAmount;
        const i = (sipRate / 100) / 12;
        const n = sipYears * 12;
        const M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
        return Math.round(M);
    };

    const investedAmount = sipAmount * sipYears * 12;
    const maturityValue = calculateSIP();
    const estReturns = maturityValue - investedAmount;
    const defaultFeatures = [
        { 
            title: "Precision Insights", 
            desc: "Institutional-grade market foresight delivered through simplified, actionable data nodes.", 
            icon: "TrendingUp",
            details: {
                metric1: { label: "Market Vectors", value: "50,000+ Active Streams" },
                metric2: { label: "Processing Latency", value: "<15ms Node Velocity" },
                metric3: { label: "Accuracy Index", value: "99.4% Precision Score" },
                explain: "Deploying high-frequency statistical models across our distributed intelligence nodes. Integrates advanced Bayesian priors and real-time order-book dynamic pressure studies to extract predictive market foresight."
            }
        },
        { 
            title: "Smart Intelligence", 
            desc: "Proprietary intelligence technology simplifying 50,000+ data nodes for clear decision making.", 
            icon: "BarChart3",
            details: {
                metric1: { label: "Data Pipeline", value: "2.5 Billion Points/Day" },
                metric2: { label: "Core Analytics", value: "Stochastic Inference Engine" },
                metric3: { label: "Downside Buffer", value: "Risk Parity & Volatility Scaler" },
                explain: "Simplifies extreme market noise into digestible, academic-focused action cards. Employs advanced machine learning pipelines to dynamically optimize allocation weights and mitigate portfolio drift."
            }
        },
        { 
            title: "Secure Terminal", 
            desc: "Bank-grade encryption protecting every intelligence node and transaction link in our network.", 
            icon: "Shield",
            details: {
                metric1: { label: "Security Layer", value: "AES-256-GCM Encryption" },
                metric2: { label: "Authentication Link", value: "Multi-Signature Zero-Trust" },
                metric3: { label: "Audit Logging", value: "Immutable Compliance Ledger" },
                explain: "Constructs a fortress around your wealth research files. Ensures all client intelligence data, secure terminal sessions, and transmission channels are safeguarded with hardware-level cryptographic isolation."
            }
        }
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



    const defaultTheoryList = [
        { 
            title: "Mean-Variance Optimization", 
            desc: "Refining Markowitz's foundational theory through Bayesian priors to minimize expected downside while maximizing stochastic alpha.", 
            icon: "BarChart", 
            label: "MPT+", 
            color: "border-blue-500/30",
            details: {
                formula: "min wᵀ Σ w - λ μᵀ w",
                inputs: "Bayesian Shrinkage Estimation",
                objective: "Maximize Sharpe Ratio & Beta Adjustments",
                explain: "Resolves traditional Markowitz instability by applying Ledoit-Wolf shrinkage estimators to the covariance matrix. Reduces extreme portfolio shifts based on historical statistical anomalies, creating highly robust allocation vectors."
            }
        },
        { 
            title: "Bayesian Inference Engine", 
            desc: "Continuously updating market probabilities as new nodes of data emerge, allowing for dynamic portfolio rebalancing in milliseconds.", 
            icon: "Dna", 
            label: "STOCHASTIC", 
            color: "border-purple-500/30",
            details: {
                formula: "P(θ | x) = P(x | θ) P(θ) / P(x)",
                inputs: "Real-Time Volatility Signals",
                objective: "Dynamic Probability Re-weighting",
                explain: "Performs continuous posterior updates as new market vectors are captured by our active nodes. This enables real-time regime modeling, allowing the portfolio to shift defensive postures before trends materialize in moving averages."
            }
        },
        { 
            title: "Risk Parity & Volatility Scaling", 
            desc: "Allocating capital based on risk contribution rather than dollar amount, ensuring a resilient posture across all market regimes.", 
            icon: "Cpu", 
            label: "STABILITY", 
            color: "border-corex-accent/30",
            details: {
                formula: "RCᵢ = RCⱼ for all assets i, j",
                inputs: "Asset Beta & GARCH Volatility",
                objective: "Equalize Risk Contributions",
                explain: "Scales capital allocation inversely to individual asset class volatility. This prevents high-beta assets from dominating the portfolio's absolute risk structure, maintaining a remarkably stable return stream across cycles."
            }
        },
        { 
            title: "Algorithmic execution models", 
            desc: "Advanced VWAP and TWAP logic integrated with order-book pressure study to minimize slippage and hidden transaction costs.", 
            icon: "Zap", 
            label: "EXECUTION", 
            color: "border-orange-500/30",
            details: {
                formula: "VWAP = Σ (Pᵢ Vᵢ) / Σ Vᵢ",
                inputs: "L2 Depth & Bid-Ask Pressure Vectors",
                objective: "Zero Market-Impact Slippage",
                explain: "Splits institutional-grade orders into micro-tranches routed through intelligent pipelines. Executes strictly inside liquidity pocket nodes, minimizing execution drag, slippage, and front-running exposure."
            }
        }
    ];

    const lifePhases = [
        { 
            title: "The Explorer", 
            desc: "Early career professionals focused on wealth creation. We provide the tools to build your first investment nodes and master market basics.", 
            icon: "Globe2",
            points: ["Early Wealth Nodes", "SIP Foundation", "Market Literacy"],
            details: {
                allocation: "Equity 80% | Debt 15% | Gold/Alt 5%",
                horizon: "7 - 15 Years",
                risk: "High Growth / Dynamic Target",
                explain: "Early-stage financial planning leverages time-compounding. Minimizing drag through high-equity asset class SIP models forms the cornerstone of high-velocity capital formation. Primary focus is building systematic capital nodes with high statistical return parameters."
            }
        },
        { 
            title: "The Householder", 
            desc: "Families balancing growth with security. Our focus is on long-term stability, goal-based planning, and protecting your capital.", 
            icon: "Shield",
            points: ["Family Stability", "Goal Tracking", "Capital Protection"],
            details: {
                allocation: "Equity 60% | Debt 30% | Gold/Alt 10%",
                horizon: "5 - 10 Years",
                risk: "Balanced / Multi-Goal Target",
                explain: "Transitioning to family financial protection requires robust asset correlation balancing. Incorporating solid health and term life protection shields high-growth investment engines from liquidity shocks, ensuring structural safety vectors across all markets."
            }
        },
        { 
            title: "The Committed", 
            desc: "Senior professionals refining their legacy. We offer advanced strategies to scale capital and optimize portfolios for high efficiency.", 
            icon: "Target",
            points: ["Portfolio Efficiency", "Scale Capital", "Tax Optimization"],
            details: {
                allocation: "Equity 40% | Debt 50% | Gold/Alt 10%",
                horizon: "3 - 7 Years",
                risk: "Moderate / Conservative Stability",
                explain: "Optimizing legacy accumulation involves reducing high-beta exposure. Integrating premium debt instruments (AAA corporate FDs, government bonds) cushions capital reserves while maintaining steady tax-free returns and minimizing portfolio drawdown vectors."
            }
        },
        { 
            title: "The Legacy", 
            desc: "Sustaining and transferring wealth across generations. Our tools ensure your financial footprint remains strong and enduring.", 
            icon: "Award",
            points: ["Wealth Preservation", "Inheritance Planning", "Legacy Building"],
            details: {
                allocation: "Equity 20% | Debt 70% | Gold/Alt 10%",
                horizon: "1 - 5 Years",
                risk: "Capital Preservation / Zero Drawdown",
                explain: "Generational estate transition mandates near-zero slippage. Using sovereign bonds and structured dividend platforms ensures continuous wealth distribution while preventing inflation attrition. Focuses on total risk mitigation and tax-optimized structures."
            }
        }
    ];

    const calculators = [
        { title: "SIP Returns", desc: "Estimate your systematic investment growth.", icon: "TrendingUp" },
        { title: "Goal Value", desc: "Calculate the time needed for your target.", icon: "Target" },
        { title: "EMI Calc", desc: "Simple loan repayment planning.", icon: "Zap" }
    ];

    const iconsMap = { BarChart3, TrendingUp, Shield, Coins, Landmark, Zap, Search, ArrowUpRight, BarChart, Dna, Cpu, Globe2, Users2, Target, Award, Calculator };

    const getIcon = (item, fallback) => {
        if (typeof item.icon === 'string' && iconsMap[item.icon]) return iconsMap[item.icon];
        if (typeof item.icon === 'function' || typeof item.icon === 'object') return item.icon;
        return fallback;
    };

    return (
        <div className="bg-corex-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-corex-white">
                {/* Background Pattern & Glows */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]"></div>
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.1, 0.05],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-corex-accent/10 blur-[120px] rounded-full"
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.05, 0.1, 0.05],
                            rotate: [0, -90, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, delay: 2 }}
                        className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full"
                    />
                </div>

                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid xl:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center xl:text-left flex flex-col items-center xl:items-start"
                        >
                            <div className="glass-pill bg-slate-50 border-corex-navy/10 text-corex-navy mb-10 !px-4 sm:!px-8 !py-2 sm:!py-3 !gap-3 sm:!gap-6">
                                <Zap className="h-5 w-5 text-corex-accent" />
                                <div className="glass-pill bg-yellow-400/10 border-yellow-500/20 text-yellow-600 !px-4 !py-1.5 !gap-3">
                                    <Search className="h-3.5 w-3.5" /> Educational Purpose Only
                                </div>
                                <span className="text-corex-navy">Institutional Grade</span>
                            </div>
                             <h1 
                                className="text-4xl sm:text-6xl lg:text-8xl xl:text-[120px] font-black text-corex-navy leading-[0.9] mb-12 tracking-tight"
                                dangerouslySetInnerHTML={{ __html: homeData?.hero?.title || "Trustworthy <br />\n<span class='text-corex-accent italic'>Smart</span> Investments." }}
                            />
                             <div className="relative mb-12 flex flex-col items-center xl:items-start">
                                <div className="absolute -left-6 top-0 w-1.5 h-full bg-corex-accent rounded-full hidden xl:block"></div>
                                <p className="text-lg sm:text-2xl text-slate-600 leading-relaxed max-w-lg font-medium xl:pl-8">
                                    {homeData?.hero?.subtitle || "Join India's most advanced financial ecosystem. We combine institutional-grade intelligence with a human-centric approach to grow your wealth."}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <button
                                    onClick={() => onExploreClick('contact')}
                                    className="btn-institutional bg-corex-accent text-white shadow-corex-accent/40 group relative overflow-hidden"
                                >
                                    <span className="relative z-10">Study Market</span>
                                    <ArrowUpRight className="h-6 w-6 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>
                                <button className="btn-institutional text-corex-navy border-2 border-corex-navy/10 hover:bg-corex-navy hover:text-white backdrop-blur-sm">
                                    <PlayCircle className="h-6 w-6" /> Our Vision
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative perspective-1000"
                        >
                            <div className="relative z-10 group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-corex-accent/20 to-blue-500/20 rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative bg-white p-4 rounded-[48px] shadow-2xl border border-white/50 backdrop-blur-3xl">
                                    <div className="relative bg-corex-navy rounded-[40px] overflow-hidden group-hover:shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-shadow duration-700">
                                        <div className="aspect-square lg:aspect-[4/3] overflow-hidden">
                                            <img 
                                                src="/hero_investment.png" 
                                                alt="Investment Intelligence" 
                                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-corex-navy via-corex-navy/80 to-transparent">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="h-3 w-3 rounded-full bg-corex-accent animate-ping"></div>
                                                <span className="text-white font-black text-sm uppercase tracking-[0.3em]">Institutional Core Active</span>
                                            </div>
                                            <p className="text-gray-300 text-base font-medium leading-relaxed max-w-sm">
                                                Deploying proprietary intelligence nodes across 50,000+ market vectors in real-time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
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
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-corex-navy tracking-tight mb-8">
                            Everything you need to <br />
                            <span className="text-corex-accent underline decoration-4 underline-offset-8">command</span> the market.
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(homeData?.features || defaultFeatures).map((feature, i) => {
                            const IconCmp = getIcon(feature, BarChart3);
                            return (
                            <motion.div
                                key={i}
                                whileHover={expandedFeature !== i ? { y: -10 } : {}}
                                className={`bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full ${expandedFeature === i ? 'lg:col-span-2' : ''}`}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-corex-navy flex items-center justify-center mb-8 group-hover:bg-corex-accent transition-colors shadow-xl shadow-corex-navy/10 flex-shrink-0">
                                    <IconCmp className="text-white h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-black text-corex-navy mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
                                    {feature.desc}
                                </p>

                                <AnimatePresence>
                                    {expandedFeature === i && feature.details && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-2 mb-8 pt-6 border-t border-gray-100 space-y-6 text-left"
                                        >
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">{feature.details.metric1.label}</p>
                                                    <p className="text-[11px] font-bold text-corex-navy">{feature.details.metric1.value}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">{feature.details.metric2.label}</p>
                                                    <p className="text-[11px] font-bold text-corex-navy">{feature.details.metric2.value}</p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">{feature.details.metric3.label}</p>
                                                    <p className="text-[11px] font-bold text-corex-navy">{feature.details.metric3.value}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                <p className="text-[8px] font-black uppercase text-corex-accent tracking-widest mb-2">Deep Intelligence Study</p>
                                                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                                    {feature.details.explain}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button 
                                    onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
                                    className="text-xs font-black uppercase tracking-widest text-corex-accent flex items-center gap-2 group/btn mt-auto pt-4 cursor-pointer"
                                >
                                    {expandedFeature === i ? 'Close Specs' : 'Detailed Specs'}
                                    <ChevronRight className={`h-4 w-4 transition-transform ${expandedFeature === i ? 'rotate-90 text-corex-navy' : 'group-hover/btn:translate-x-1'}`} />
                                </button>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Smarter Life Phases Section */}
            <section className="py-32 bg-corex-white overflow-hidden">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-accent mb-4 block">Smarter Life</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-corex-navy tracking-tight">
                            Phases of Financial <span className="text-corex-accent italic">Wellbeing</span>.
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto mt-6 font-medium">
                            Every individual is unique. We tailor our insights to match your specific life stage and goals.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {lifePhases.map((phase, i) => {
                            const IconCmp = iconsMap[phase.icon];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={expandedPhase !== i ? { y: -10 } : {}}
                                    className={`p-10 rounded-[32px] border border-gray-100 hover:shadow-2xl transition-all group bg-white relative overflow-hidden flex flex-col justify-between ${expandedPhase === i ? 'lg:col-span-2' : ''}`}
                                >
                                    <div>
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                            <IconCmp className="w-32 h-32 -mr-10 -mt-10" />
                                        </div>
                                        <div className="w-14 h-14 rounded-2xl bg-corex-gray flex items-center justify-center mb-8 group-hover:bg-corex-accent transition-colors relative z-10 flex-shrink-0">
                                            <IconCmp className="text-corex-navy h-6 w-6 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-black text-corex-navy mb-4 relative z-10">{phase.title}</h3>
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 relative z-10">{phase.desc}</p>
                                        <div className="space-y-3 relative z-10 mb-8">
                                            {phase.points.map((pt, j) => (
                                                <div key={j} className="flex items-center gap-3">
                                                    <div className="w-1 h-1 rounded-full bg-corex-accent"></div>
                                                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{pt}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <AnimatePresence>
                                            {expandedPhase === i && phase.details && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="mt-6 pt-6 border-t border-gray-100 space-y-6 text-left relative z-10"
                                                >
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">Target Horizon</p>
                                                            <p className="text-[11px] font-bold text-corex-navy">{phase.details.horizon}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">Risk Vector</p>
                                                            <p className="text-[11px] font-bold text-corex-navy">{phase.details.risk}</p>
                                                        </div>
                                                        <div className="col-span-2">
                                                            <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">Suggested Asset Mix</p>
                                                            <p className="text-[11px] font-bold text-corex-navy">{phase.details.allocation}</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                        <p className="text-[8px] font-black uppercase text-corex-accent tracking-widest mb-2">Phase Strategy Study</p>
                                                        <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                                            {phase.details.explain}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <button 
                                        onClick={() => setExpandedPhase(expandedPhase === i ? null : i)}
                                        className="text-xs font-black uppercase tracking-widest text-corex-accent flex items-center gap-2 group/btn mt-auto pt-4 relative z-10 cursor-pointer"
                                    >
                                        {expandedPhase === i ? 'Close Study' : 'Detailed Study'}
                                        <ChevronRight className={`h-4 w-4 transition-transform ${expandedPhase === i ? 'rotate-90 text-corex-navy' : 'group-hover/btn:translate-x-1'}`} />
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>



            {/* Amigo Pathshala Teaser Section */}
            <section className="py-32 bg-corex-white">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-50 rounded-[48px] overflow-hidden border border-slate-100 flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 p-12 lg:p-20">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-accent mb-6 block">Education First</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-corex-navy tracking-tighter mb-8 leading-tight">
                                Master the Markets with <br />
                                <span className="text-corex-accent italic">Amigo Pathshala.</span>
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
                                Financial literacy is the ultimate leverage. Access our institutional-grade learning modules, including our comprehensive <span class="text-corex-accent font-black">Forex Study</span> track, market tutorials, and study frameworks designed to turn you into a confident investor.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={() => onExploreClick('pathshala')}
                                    className="px-10 py-5 bg-corex-navy text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-corex-accent transition-all shadow-xl shadow-corex-navy/10 flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    Start Learning <ArrowRight className="h-5 w-5" />
                                </button>
                                <div className="flex -space-x-3 items-center">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-black overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Learner" />
                                        </div>
                                    ))}
                                    <span className="ml-6 text-xs font-bold text-slate-400 uppercase tracking-widest">+12k Learners</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 h-[400px] lg:h-auto self-stretch relative group overflow-hidden">
                            <img 
                                src="/pathshala_hero.png" 
                                alt="Amigo Pathshala" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-transparent hidden lg:block"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smart Calculators Section */}
            <section className="py-32 bg-white">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-corex-navy rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-corex-accent/10 skew-x-[-15deg] translate-x-20"></div>
                        <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-2">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-accent mb-6 block">Interactive Tools</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
                                Plan your future <br />
                                with <span className="text-corex-accent italic">Precision</span>.
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 font-medium">
                                Visualize your wealth trajectory. Adjust the sliders to see how small, consistent steps can lead to significant long-term growth.
                            </p>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-corex-accent/20 flex items-center justify-center">
                                        <TrendingUp className="text-corex-accent h-5 w-5" />
                                    </div>
                                    <span className="text-white font-black text-sm uppercase">Quick SIP Calculator</span>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <label className="text-xs text-gray-400 font-bold uppercase">Monthly Investment</label>
                                            <span className="text-corex-accent font-black">₹{sipAmount.toLocaleString()}</span>
                                        </div>
                                        <input type="range" min="500" max="100000" step="500" value={sipAmount} onChange={e => setSipAmount(Number(e.target.value))} className="w-full accent-corex-accent bg-white/10 rounded-lg h-1.5" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <label className="text-xs text-gray-400 font-bold uppercase">Expected Return (%)</label>
                                            <span className="text-corex-accent font-black">{sipRate}%</span>
                                        </div>
                                        <input type="range" min="1" max="30" step="1" value={sipRate} onChange={e => setSipRate(Number(e.target.value))} className="w-full accent-corex-accent bg-white/10 rounded-lg h-1.5" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <label className="text-xs text-gray-400 font-bold uppercase">Time Period (Years)</label>
                                            <span className="text-corex-accent font-black">{sipYears}y</span>
                                        </div>
                                        <input type="range" min="1" max="40" step="1" value={sipYears} onChange={e => setSipYears(Number(e.target.value))} className="w-full accent-corex-accent bg-white/10 rounded-lg h-1.5" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-gray-400 font-black text-xs uppercase tracking-widest mb-10">Maturity Estimation</h3>
                                    <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4">₹{maturityValue.toLocaleString()}</p>
                                    <p className="text-corex-accent font-black text-sm uppercase tracking-widest">Total Estimated Value</p>
                                </div>
                                <div className="mt-12 space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 font-bold">Invested Amount</span>
                                        <span className="text-white font-black">₹{investedAmount.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 font-bold">Estimated Returns</span>
                                        <span className="text-corex-accent font-black">₹{estReturns.toLocaleString()}</span>
                                    </div>
                                    <div className="h-px bg-white/10 w-full"></div>
                                    <button className="w-full py-4 rounded-xl bg-corex-accent text-white font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">Model SIP Study</button>
                                </div>
                            </div>

                            <div className="grid gap-6">
                                {calculators.slice(1).map((calc, idx) => {
                                    const i = idx + 1; // Align index with calculators array
                                    const IconCmp = iconsMap[calc.icon];
                                    return (
                                        <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[32px] flex flex-col justify-between hover:bg-white/10 transition-all group">
                                            <div>
                                                <div className="flex justify-between items-center mb-6">
                                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-corex-accent transition-colors">
                                                        <IconCmp className="text-white h-5 w-5" />
                                                    </div>
                                                    <button 
                                                        onClick={() => setExpandedCalc(expandedCalc === i ? null : i)}
                                                        className="text-[10px] font-black uppercase tracking-widest text-corex-accent border border-corex-accent/20 hover:border-corex-accent px-4 py-2 rounded-xl transition-all cursor-pointer"
                                                    >
                                                        {expandedCalc === i ? 'Close Tool' : 'Launch Tool'}
                                                    </button>
                                                </div>
                                                <h3 className="text-xl font-black text-white mb-2">{calc.title}</h3>
                                                <p className="text-gray-400 text-xs font-medium leading-relaxed mb-6">{calc.desc}</p>

                                                <AnimatePresence>
                                                    {expandedCalc === 1 && i === 1 && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="pt-6 border-t border-white/10 space-y-6 text-left"
                                                        >
                                                            <div className="space-y-4">
                                                                <div>
                                                                    <div className="flex justify-between mb-2">
                                                                        <label className="text-[10px] text-gray-500 font-bold uppercase">Target Amount</label>
                                                                        <span className="text-corex-accent font-black">₹{goalTarget.toLocaleString()}</span>
                                                                    </div>
                                                                    <input type="range" min="100000" max="10000000" step="100000" value={goalTarget} onChange={e => setGoalTarget(Number(e.target.value))} className="w-full accent-corex-accent bg-white/10 rounded-lg h-1" />
                                                                </div>
                                                                <div>
                                                                    <div className="flex justify-between mb-2">
                                                                        <label className="text-[10px] text-gray-500 font-bold uppercase">Expected Return (%)</label>
                                                                        <span className="text-corex-accent font-black">{goalRate}%</span>
                                                                    </div>
                                                                    <input type="range" min="5" max="25" step="1" value={goalRate} onChange={e => setGoalRate(Number(e.target.value))} className="w-full accent-corex-accent bg-white/10 rounded-lg h-1" />
                                                                </div>
                                                                <div>
                                                                    <div className="flex justify-between mb-2">
                                                                        <label className="text-[10px] text-gray-500 font-bold uppercase">Monthly Savings</label>
                                                                        <span className="text-corex-accent font-black">₹{goalMonthly.toLocaleString()}</span>
                                                                    </div>
                                                                    <input type="range" min="1000" max="100000" step="1000" value={goalMonthly} onChange={e => setGoalMonthly(Number(e.target.value))} className="w-full accent-corex-accent bg-white/10 rounded-lg h-1" />
                                                                </div>
                                                            </div>
                                                            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                                                                <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">Time Horizon Required</p>
                                                                <p className="text-2xl font-black text-white">{calculateGoalTime()}</p>
                                                                <p className="text-[9px] text-gray-500 font-medium mt-2">Compound rate: {goalRate}% p.a. monthly compound study model.</p>
                                                            </div>
                                                        </motion.div>
                                                    )}

                                                    {expandedCalc === 2 && i === 2 && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="pt-6 border-t border-white/10 space-y-6 text-left"
                                                        >
                                                            <div className="space-y-4">
                                                                <div>
                                                                    <div className="flex justify-between mb-2">
                                                                        <label className="text-[10px] text-gray-500 font-bold uppercase">Loan Principal</label>
                                                                        <span className="text-corex-accent font-black">₹{emiPrincipal.toLocaleString()}</span>
                                                                    </div>
                                                                    <input type="range" min="100000" max="5000000" step="50000" value={emiPrincipal} onChange={e => setEmiPrincipal(Number(e.target.value))} className="w-full accent-corex-accent bg-white/10 rounded-lg h-1" />
                                                                </div>
                                                                <div>
                                                                    <div className="flex justify-between mb-2">
                                                                        <label className="text-[10px] text-gray-500 font-bold uppercase">Interest Rate (%)</label>
                                                                        <span className="text-corex-accent font-black">{emiRate}%</span>
                                                                    </div>
                                                                    <input type="range" min="5" max="18" step="0.5" value={emiRate} onChange={e => setEmiRate(Number(e.target.value))} className="w-full accent-corex-accent bg-white/10 rounded-lg h-1" />
                                                                </div>
                                                                <div>
                                                                    <div className="flex justify-between mb-2">
                                                                        <label className="text-[10px] text-gray-500 font-bold uppercase">Tenure (Years)</label>
                                                                        <span className="text-corex-accent font-black">{emiTenure}y</span>
                                                                    </div>
                                                                    <input type="range" min="1" max="25" step="1" value={emiTenure} onChange={e => setEmiTenure(Number(e.target.value))} className="w-full accent-corex-accent bg-white/10 rounded-lg h-1" />
                                                                </div>
                                                            </div>
                                                            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
                                                                <div>
                                                                    <p className="text-[8px] font-black uppercase text-gray-400 tracking-widest">Monthly EMI</p>
                                                                    <p className="text-2xl font-black text-white">₹{calculateEMI().monthly.toLocaleString()}</p>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                                                                    <div>
                                                                        <p className="text-[8px] font-black uppercase text-gray-500">Interest Payable</p>
                                                                        <p className="text-xs font-bold text-gray-300">₹{calculateEMI().totalInterest.toLocaleString()}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-[8px] font-black uppercase text-gray-500">Total Repayable</p>
                                                                        <p className="text-xs font-bold text-gray-300">₹{calculateEMI().totalAmount.toLocaleString()}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
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
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
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

                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                            {(homeData?.theoryList || defaultTheoryList).map((theory, i) => {
                                const IconCmp = getIcon(theory, BarChart);
                                return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={expandedTheory !== i ? { y: -10 } : {}}
                                    className={`bg-white/5 backdrop-blur-sm border ${theory.color} p-8 rounded-[32px] transition-all group flex flex-col justify-between ${expandedTheory === i ? 'sm:col-span-2' : ''}`}
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="bg-white/10 p-3 rounded-2xl group-hover:bg-corex-accent/20 transition-colors flex-shrink-0">
                                                <IconCmp className="h-6 w-6 text-white group-hover:text-corex-accent transition-colors" />
                                            </div>
                                            <span className="text-[10px] font-black text-gray-500 tracking-[0.2em]">{theory.label}</span>
                                        </div>
                                        <h3 className="text-xl font-black text-white mb-4 leading-tight">{theory.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed font-medium mb-8">
                                            {theory.desc}
                                        </p>

                                        <AnimatePresence>
                                            {expandedTheory === i && theory.details && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="mt-2 mb-8 pt-6 border-t border-white/10 space-y-6 text-left"
                                                >
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <p className="text-[8px] font-black uppercase text-gray-500 tracking-widest mb-1">Key Equation</p>
                                                            <p className="text-xs font-black text-corex-accent italic">{theory.details.formula}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[8px] font-black uppercase text-gray-500 tracking-widest mb-1">Stochastic Inputs</p>
                                                            <p className="text-[10px] font-bold text-gray-300">{theory.details.inputs}</p>
                                                        </div>
                                                        <div className="col-span-2">
                                                            <p className="text-[8px] font-black uppercase text-gray-500 tracking-widest mb-1">Primary Objective</p>
                                                            <p className="text-[10px] font-bold text-gray-300">{theory.details.objective}</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                                        <p className="text-[8px] font-black uppercase text-corex-accent tracking-widest mb-2">Academic Core Study</p>
                                                        <p className="text-xs text-gray-400 font-medium leading-relaxed">
                                                            {theory.details.explain}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <button 
                                        onClick={() => setExpandedTheory(expandedTheory === i ? null : i)}
                                        className="text-xs font-black uppercase tracking-widest text-corex-accent flex items-center gap-2 group/btn mt-auto pt-4 cursor-pointer"
                                    >
                                        {expandedTheory === i ? 'Close Specs' : 'Detailed Specs'}
                                        <ChevronRight className={`h-4 w-4 transition-transform ${expandedTheory === i ? 'rotate-90 text-white' : 'group-hover/btn:translate-x-1'}`} />
                                    </button>
                                </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 bg-gray-50/50 relative overflow-hidden">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-[10px] font-black text-corex-accent uppercase tracking-[0.4em] mb-4 block">Proof of Performance</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-corex-navy tracking-tighter">
                            Client <span className="text-corex-accent italic">Success</span> Stories.
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Rahul Sharma", role: "HNW Investor", text: "Amigo Associate has completely transformed how I approach my portfolio. The institutional insights are unlike anything else in the market.", rating: 5 },
                            { name: "Priya Patel", role: "Corporate Professional", text: "The wealth management team is exceptional. They helped me plan my long-term goals with absolute clarity and precision.", rating: 5 },
                            { name: "Vikram Singh", role: "Business Owner", text: "Finally, a platform that speaks the language of serious investors. The data-driven approach gives me the confidence I need.", rating: 5 }
                        ].map((rev, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-500"
                            >
                                <div>
                                    <div className="flex gap-1 mb-6 text-corex-accent">
                                        {[...Array(rev.rating)].map((_, i) => <Award key={i} className="h-4 w-4 fill-current" />)}
                                    </div>
                                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 italic">"{rev.text}"</p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-gray-50 pt-8">
                                    <div className="h-12 w-12 rounded-full bg-corex-navy/5 flex items-center justify-center font-black text-corex-navy text-xl uppercase">
                                        {rev.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-corex-navy text-sm uppercase tracking-wider">{rev.name}</h4>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{rev.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-corex-navy"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-corex-accent/10 skew-x-[-20deg] translate-x-32"></div>

                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tighter mb-10 leading-none">
                        Ready to join the <br />
                        <span className="text-corex-accent italic">Elite tier</span> of finance?
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-12 font-medium">
                        Deployment of our full suite takes minutes. Instant access to institutional tools for selected individuals and firms.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button 
                            onClick={() => onExploreClick('contact')}
                            className="btn-institutional bg-corex-accent text-white shadow-corex-accent/40 px-12 py-5 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all"
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
