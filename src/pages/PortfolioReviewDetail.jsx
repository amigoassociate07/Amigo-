import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Search, BarChart, RefreshCw, CheckCircle2, ArrowRight, ShieldCheck, ArrowLeft, Star, Plus } from 'lucide-react';
import BackNavigation from '../components/BackNavigation';

const PortfolioReviewDetail = ({ onBackClick }) => {
  const steps = [
    { title: "Risk Alignment Audit", desc: "Evaluate if your active asset exposure boundaries align with your current age and life liabilities.", icon: ShieldCheck },
    { title: "Performance Benchmarking", desc: "Compare rolling returns against respective benchmark indices to isolate persistent underperformers.", icon: BarChart },
    { title: "Overlap Resolution", desc: "Identify stock concentration overlap across distinct funds to eliminate redundant fee loads.", icon: Search },
    { title: "Strategic Rebalancing", desc: "Prune structural drag factors and redirect capital to premium, high-conviction models.", icon: RefreshCw }
  ];

  const topFunds = [
    {
      name: "Parag Parikh Flexi Cap",
      category: "Flexi Cap",
      returns: "20.5%",
      sip: "₹1,000",
      desc: "Top-tier flexi cap fund with a value-investing approach and global exposure.",
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-500",
      details: {
        house: "Parag Parikh Financial Advisory Services",
        aum: "₹52,000 Cr+",
        benchmark: "NIFTY 500 TRI",
        expense: "0.62% (Direct)",
        holdings: ["Alphabet Inc.", "Microsoft", "HDFC Bank", "ITC", "Bajaj Holdings"]
      }
    },
    {
      name: "HDFC Mid-Cap Opp.",
      category: "Mid Cap",
      returns: "25.2%",
      sip: "₹500",
      desc: "Consistent performer in the mid-cap space with a focus on high-growth companies.",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-500",
      details: {
        house: "HDFC Mutual Fund",
        aum: "₹60,000 Cr+",
        benchmark: "NIFTY Midcap 150 TRI",
        expense: "0.85% (Direct)",
        holdings: ["The Indian Hotels", "Tata Motors", "Apollo Tyres", "Federal Bank", "Cummins India"]
      }
    },
    {
      name: "Quant Small Cap",
      category: "Small Cap",
      returns: "35.8%",
      sip: "₹500",
      desc: "High-conviction small-cap fund utilizing predictive analytics for stock selection.",
      color: "from-rose-500/20 to-rose-500/5",
      accent: "text-rose-500",
      details: {
        house: "Quant Mutual Fund",
        aum: "₹15,000 Cr+",
        benchmark: "NIFTY Smallcap 250 TRI",
        expense: "0.77% (Direct)",
        holdings: ["Reliance Industries", "HDFC Bank", "Jindal Stainless", "IRB Infra", "RBL Bank"]
      }
    },
    {
      name: "SBI Bluechip Fund",
      category: "Large Cap",
      returns: "15.8%",
      sip: "₹5,000",
      desc: "Stable large-cap fund providing exposure to India's most resilient market leaders.",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-500",
      details: {
        house: "SBI Mutual Fund",
        aum: "₹40,000 Cr+",
        benchmark: "S&P BSE 100 TRI",
        expense: "0.88% (Direct)",
        holdings: ["HDFC Bank", "ICICI Bank", "Larsen & Toubro", "ITC", "Infosys"]
      }
    },
    {
      name: "ICICI Pru Bluechip",
      category: "Large Cap",
      returns: "16.2%",
      sip: "₹100",
      desc: "Robust performance through diversified large-cap holdings and risk management.",
      color: "from-indigo-500/20 to-indigo-500/5",
      accent: "text-indigo-500",
      details: {
        house: "ICICI Prudential Mutual Fund",
        aum: "₹45,000 Cr+",
        benchmark: "NIFTY 100 TRI",
        expense: "0.91% (Direct)",
        holdings: ["ICICI Bank", "Reliance Industries", "HDFC Bank", "Infosys", "Larsen & Toubro"]
      }
    }
  ];

  const [expandedFund, setExpandedFund] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      <BackNavigation onBackClick={onBackClick} label="Back to Mutual Funds" />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest mb-6">
                <PieChart className="h-3 w-3" /> Learning Purpose Only
          </div>
          <div className="w-20 h-20 rounded-3xl bg-indigo-500 flex items-center justify-center mb-8 mx-auto shadow-2xl shadow-indigo-500/20">
            <PieChart className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-corex-navy mb-8 tracking-tighter leading-tight">
            Review: Portfolio <br />
            <span className="text-indigo-500 italic uppercase">Optimization.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
            Don't let your investments drift. A regular health check is essential to ensure your portfolio remains healthy and on track for your goals.
          </p>
        </motion.div>
      </section>

      {/* Steps Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
                {steps.map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="p-8 rounded-[32px] border border-slate-100 bg-white hover:shadow-2xl transition-all">
                        <s.icon className="h-8 w-8 text-indigo-500 mb-6" />
                        <h3 className="text-lg font-black text-corex-navy mb-4 leading-tight">{s.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-indigo-500 mb-4">Our Methodology</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">The 3-Tier Audit Workflow</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Data Integration", desc: "We aggregate all your investments across different platforms to get a holistic view.", icon: RefreshCw },
                    { title: "Deep Intelligence", desc: "Evaluating overlapping holdings, high-cost funds, and risk concentration.", icon: Search },
                    { title: "Strategic Roadmap", desc: "Providing a clear transition plan to move from your current state to an optimal portfolio.", icon: BarChart }
                ].map((s, i) => (
                    <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 group shadow-sm">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
                            <s.icon className="h-6 w-6 text-indigo-500 group-hover:text-white" />
                        </div>
                        <h4 className="text-xl font-black text-corex-navy mb-4">{s.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Rebalancing Comparison Table */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[48px] border border-slate-100 shadow-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-corex-navy text-white">
                            <th className="p-8 text-sm font-black uppercase tracking-widest">Audit Metric</th>
                            <th className="p-8 text-sm font-black uppercase tracking-widest text-indigo-400">Drifting Current State</th>
                            <th className="p-8 text-sm font-black uppercase tracking-widest">Optimized Rebalanced State</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-600 font-bold">
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Stock Overlap</td>
                            <td className="p-8 text-sm text-red-500 font-extrabold">High (12+ stocks duplicated)</td>
                            <td className="p-8 text-sm text-indigo-600 font-extrabold">Consolidated (Zero stock redundancy)</td>
                        </tr>
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Fee Load</td>
                            <td className="p-8 text-sm text-red-500 font-extrabold">1.8% average (Regular plans)</td>
                            <td className="p-8 text-sm text-indigo-600 font-extrabold">0.6% average (Direct plans migration)</td>
                        </tr>
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Asset Drift</td>
                            <td className="p-8 text-sm text-red-500 font-extrabold">85% Equities (Over-exposed)</td>
                            <td className="p-8 text-sm text-indigo-600 font-extrabold">65% Equity / 35% Capital Shield</td>
                        </tr>
                        <tr>
                            <td className="p-8 text-sm">Fund Performance</td>
                            <td className="p-8 text-sm text-red-500 font-extrabold">Holding bottom-quartile drags</td>
                            <td className="p-8 text-sm text-indigo-600 font-extrabold">Swapped for top active alpha picks</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* Top 5 Picks Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-indigo-500 mb-4">Recommended Shifts</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-corex-navy tracking-tighter">
                        Amigo <span className="text-indigo-500 italic uppercase tracking-tighter">Top 5 Picks</span>.
                    </h3>
                </div>
                <p className="text-slate-500 font-bold max-w-sm">
                    Strategic fund recommendations to optimize your portfolio returns and risk profile.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-4">
                {topFunds.map((fund, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setExpandedFund(expandedFund === i ? null : i)}
                        className={`group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white p-6 hover:shadow-2xl hover:shadow-slate-200 transition-all flex flex-col h-full cursor-pointer ${expandedFund === i ? 'lg:col-span-2' : ''}`}
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${fund.color} blur-2xl rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 rounded-full bg-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-500">
                                    {fund.category}
                                </span>
                                <div className="text-indigo-500">
                                    <Star className="h-4 w-4 fill-current" />
                                </div>
                            </div>

                            <h4 className="text-lg font-black text-corex-navy mb-1 leading-tight group-hover:text-indigo-500 transition-colors">
                                {fund.name}
                            </h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Min. SIP: {fund.sip}</p>
                            
                            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6">
                                {fund.desc}
                            </p>

                            <AnimatePresence>
                                {expandedFund === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-6 pt-6 border-t border-slate-50 space-y-4"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Fund House</p>
                                                <p className="text-[10px] font-bold text-corex-navy">{fund.details.house}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Total AUM</p>
                                                <p className="text-[10px] font-bold text-corex-navy">{fund.details.aum}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Benchmark</p>
                                                <p className="text-[10px] font-bold text-corex-navy">{fund.details.benchmark}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Expense Ratio</p>
                                                <p className="text-[10px] font-bold text-corex-navy">{fund.details.expense}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-2">Top Conviction Holdings</p>
                                            <div className="flex flex-wrap gap-2">
                                                {fund.details.holdings.map((h, idx) => (
                                                    <span key={idx} className="px-2 py-1 rounded-md bg-slate-50 text-[9px] font-bold text-slate-500 border border-slate-100">
                                                        {h}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                <div>
                                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-300">3Y Returns</p>
                                    <p className="text-xs font-black text-indigo-500">{fund.returns}</p>
                                </div>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedFund(expandedFund === i ? null : i);
                                    }}
                                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${expandedFund === i ? 'bg-corex-navy text-white rotate-45' : 'bg-slate-50 hover:bg-indigo-500 hover:text-white'}`}
                                >
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-corex-navy mb-12 text-center tracking-tight">Review Insights</h2>
            <div className="space-y-6">
                {[
                    { q: "How often should I review my portfolio?", a: "We recommend a comprehensive review at least once every six months or whenever there is a major life change or market shift." },
                    { q: "Will you suggest new funds?", a: "Yes, but only if they better align with your goals or if your current holdings are consistently underperforming their peers." },
                    { q: "Is the portfolio review paid?", a: "We offer an initial complimentary audit for new clients to demonstrate the value of institutional-grade analysis." }
                ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h4 className="font-black text-corex-navy mb-4 flex gap-4">
                            <span className="text-indigo-500">Q.</span> {item.q}
                        </h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed pl-8 border-l-2 border-slate-200">
                            {item.a}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-32 bg-corex-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-black mb-8">Get your health check today.</h2>
            <p className="text-gray-400 mb-12">Submit your current portfolio for a complimentary, unbiased audit by our senior advisors.</p>
            <button className="px-10 py-5 bg-indigo-500 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all">
                Request Audit Study
            </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioReviewDetail;
