import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, CheckCircle2, ArrowLeft, Globe, Zap, LineChart, Star, ArrowRight, History } from 'lucide-react';
import BackNavigation from '../components/BackNavigation';

const EquityFundsDetail = ({ onBackClick }) => {
  const themes = [
    { 
      title: "Large Cap Funds", 
      desc: "Invest in established industry giants and blue-chip corporate entities with high stability and robust capital parameters.", 
      icon: Globe 
    },
    { 
      title: "Mid & Small Cap", 
      desc: "Capitalize on high-potential emerging enterprises designed to deliver exceptional growth over market cycles.", 
      icon: Zap 
    },
    { 
      title: "Sectoral & Thematic", 
      desc: "Concentrated strategic exposure targeting specific high-performing sectors like Technology, Banking, or Healthcare.", 
      icon: BarChart3 
    }
  ];

  const topFunds = [
    {
      name: "Quant Small Cap Fund",
      category: "Small Cap",
      returns: "35.8%",
      minSIP: "₹500",
      desc: "Aggressive small-cap strategy capturing deep pricing anomalies via dynamic predictive algorithms.",
      color: "from-rose-500/20 to-rose-500/5",
      accent: "text-rose-500",
      details: {
        house: "Quant Mutual Fund",
        aum: "₹15,000 Cr+",
        benchmark: "NIFTY Smallcap 250 TRI",
        expense: "0.77% (Direct)",
        holdings: ["Reliance Industries", "HDFC Bank", "Jindal Stainless", "IRB Infrastructure", "RBL Bank"]
      }
    },
    {
      name: "HDFC Mid-Cap Opportunities",
      category: "Mid Cap",
      returns: "25.2%",
      minSIP: "₹500",
      desc: "Resilient mid-cap selector investing in premium quality businesses showing high market-share gains.",
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
      name: "SBI Bluechip Fund",
      category: "Large Cap",
      returns: "15.8%",
      minSIP: "₹5,000",
      desc: "Sovereign-backed blue-chip framework focused on stable cash-flow giants and dividend compounders.",
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-500",
      details: {
        house: "SBI Mutual Fund",
        aum: "₹40,000 Cr+",
        benchmark: "S&P BSE 100 TRI",
        expense: "0.88% (Direct)",
        holdings: ["HDFC Bank", "ICICI Bank", "Larsen & Toubro", "ITC Ltd", "Infosys"]
      }
    },
    {
      name: "ICICI Pru Value Discovery",
      category: "Value Fund",
      returns: "23.4%",
      minSIP: "₹1,000",
      desc: "Deploys a value-centric model, targeting high-margin stocks trading below their intrinsic worth.",
      color: "from-purple-500/20 to-purple-500/5",
      accent: "text-purple-500",
      details: {
        house: "ICICI Prudential Mutual Fund",
        aum: "₹30,000 Cr+",
        benchmark: "NIFTY 500 Value 50 TRI",
        expense: "0.61% (Direct)",
        holdings: ["ONGC Ltd", "NTPC Ltd", "State Bank of India", "Sun Pharma", "Coal India Ltd"]
      }
    },
    {
      name: "Parag Parikh Flexi Cap",
      category: "Flexi Cap",
      returns: "20.5%",
      minSIP: "₹1,000",
      desc: "Multi-cap allocations integrating localized blue-chips with overseas high-growth tech nodes.",
      color: "from-indigo-500/20 to-indigo-500/5",
      accent: "text-indigo-500",
      details: {
        house: "Parag Parikh Mutual Fund",
        aum: "₹52,000 Cr+",
        benchmark: "NIFTY 500 TRI",
        expense: "0.62% (Direct)",
        holdings: ["Alphabet Inc.", "Microsoft Corp", "HDFC Bank", "Bajaj Holdings", "Maruti Suzuki"]
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
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest mb-6">
                <BarChart3 className="h-3 w-3" /> Learning Purpose Only
          </div>
          <div className="w-20 h-20 rounded-3xl bg-rose-500 flex items-center justify-center mb-8 mx-auto shadow-2xl shadow-rose-500/20">
            <BarChart3 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-corex-navy mb-8 tracking-tighter leading-tight">
            Equity: Maximum <br />
            <span className="text-rose-500 italic uppercase">Alpha.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
            Power your portfolio with the growth potential of the Indian stock market. Equity funds are designed for long-term investors seeking high inflation-beating returns.
          </p>
        </motion.div>
      </section>

      {/* Themes grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
                {themes.map((t, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="p-10 rounded-[40px] border border-slate-100 bg-white hover:shadow-2xl transition-all">
                        <t.icon className="h-8 w-8 text-rose-500 mb-6" />
                        <h3 className="text-xl font-black text-corex-navy mb-4">{t.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{t.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Strategy Process */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-rose-500 mb-4">Market Strategies</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">Diverse Equity Styles</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Vol Assessment", desc: "Evaluate index-level sector volatilities to optimize capitalization allocations." },
                    { step: "02", title: "Style Allocation", desc: "Balance growth themes with value frameworks depending on macro cycles." },
                    { step: "03", title: "Horizon Matching", desc: "Lock in multi-year target limits (5-7+ years) to absorb short-term index shifts." },
                    { step: "04", title: "Active Beta Tuning", desc: "Optimize high-conviction portfolios to beat index benchmarks consistently." }
                ].map((s, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 group">
                        <div className="text-5xl font-black text-rose-500/10 mb-6 group-hover:text-rose-500 transition-colors">{s.step}</div>
                        <h4 className="text-lg font-black text-corex-navy mb-4">{s.title}</h4>
                        <p className="text-slate-500 text-xs font-medium leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[48px] border border-slate-100 shadow-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-corex-navy text-white">
                            <th className="p-8 text-sm font-black uppercase tracking-widest">Category</th>
                            <th className="p-8 text-sm font-black uppercase tracking-widest text-rose-500">Volatility Rank</th>
                            <th className="p-8 text-sm font-black uppercase tracking-widest">Growth Potential</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-600 font-bold">
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Large Cap Funds</td>
                            <td className="p-8 text-sm text-rose-600 font-extrabold">Moderate / Defensive</td>
                            <td className="p-8 text-sm">Steady compounding alpha (12-15%)</td>
                        </tr>
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Mid & Small Cap</td>
                            <td className="p-8 text-sm text-rose-600 font-extrabold">High Volatility / Growth</td>
                            <td className="p-8 text-sm">Exceptional long-term alpha (18-25%+)</td>
                        </tr>
                        <tr>
                            <td className="p-8 text-sm">Sectoral / Thematic</td>
                            <td className="p-8 text-sm text-rose-600 font-extrabold">Extremely High / Cyclical</td>
                            <td className="p-8 text-sm">Highly concentrated growth vectors</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-rose-500 mb-4">Alpha Nodes</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-corex-navy tracking-tighter">
                        Amigo <span className="text-rose-500 italic uppercase tracking-tighter">Top Equity Picks</span>.
                    </h3>
                </div>
                <p className="text-slate-500 font-bold max-w-sm">
                    Our selection of leading equity portfolios designed to beat index benchmarks over multi-year compounding cycles.
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
                                <div className="text-rose-500">
                                    <Star className="h-4 w-4 fill-current" />
                                </div>
                            </div>

                            <h4 className="text-lg font-black text-corex-navy mb-1 leading-tight group-hover:text-rose-500 transition-colors">
                                {fund.name}
                            </h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Min. SIP: {fund.minSIP}</p>
                            
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
                                    <p className="text-xs font-black text-rose-500">{fund.returns}</p>
                                </div>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedFund(expandedFund === i ? null : i);
                                    }}
                                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${expandedFund === i ? 'bg-corex-navy text-white rotate-45' : 'bg-slate-50 hover:bg-rose-500 hover:text-white'}`}
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
            <h2 className="text-3xl font-black text-corex-navy mb-12 text-center tracking-tight">Equity Queries</h2>
            <div className="space-y-6">
                {[
                    { q: "What is the ideal tenure for equity funds?", a: "To ride out market volatility and capture growth, we recommend an investment horizon of at least 5-7 years." },
                    { q: "Are equity funds guaranteed?", a: "No, returns are linked to the stock market. However, historical data shows that equity consistently outperforms other assets over the long term." },
                    { q: "What are the tax implications?", a: "Long-term capital gains (after 1 year) are taxed at 10% on gains exceeding ₹1 Lakh per financial year." }
                ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h4 className="font-black text-corex-navy mb-4 flex gap-4">
                            <span className="text-rose-500">Q.</span> {item.q}
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
            <h2 className="text-4xl font-black mb-8">Invest in India's growth story.</h2>
            <p className="text-gray-400 mb-12">Expertly managed equity portfolios to help you achieve your long-term financial milestones.</p>
            <button className="px-10 py-5 bg-rose-500 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-rose-600 transition-all">
                Study Equity Models
            </button>
        </div>
      </section>
    </div>
  );
};

export default EquityFundsDetail;
