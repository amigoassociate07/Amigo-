import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, CheckCircle2, ArrowLeft, Shield, Banknote, History, Landmark, Star, ArrowRight } from 'lucide-react';
import BackNavigation from '../components/BackNavigation';

const DebtFundsDetail = ({ onBackClick }) => {
  const categories = [
    { 
      title: "Liquid Funds", 
      desc: "Highest liquidity parameters for short-term surpluses. Ideal for emergency contingencies with better yields than basic savings accounts.", 
      icon: Banknote 
    },
    { 
      title: "Corporate Bond Funds", 
      desc: "Deploys capital exclusively in high-rated corporate debt for stable growth indices with highly controlled risk factors.", 
      icon: Landmark 
    },
    { 
      title: "Gilt Funds", 
      desc: "Sovereign-backed security investments offering maximum regulatory safety for robust capital preservation over longer horizons.", 
      icon: Shield 
    }
  ];

  const topFunds = [
    {
      name: "Aditya Birla SL Liquid Fund",
      category: "Liquid Fund",
      returns: "7.2%",
      minSIP: "₹500",
      desc: "Ultra-short term liquidity node targeting high safety commercial papers and certificates of deposit.",
      color: "from-amber-500/20 to-amber-500/5",
      accent: "text-amber-500",
      details: {
        house: "Aditya Birla Sun Life Mutual Fund",
        aum: "₹34,000 Cr+",
        benchmark: "NIFTY Liquid Index A-I",
        expense: "0.20% (Direct)",
        holdings: ["NABARD CD", "HDFC Bank CD", "Small Industries Dev Bank CP", "Sovereign Treasury Bills", "Axis Bank CD"]
      }
    },
    {
      name: "HDFC Corporate Bond Fund",
      category: "Corporate Bond",
      returns: "7.9%",
      minSIP: "₹500",
      desc: "Allocates 80%+ of portfolio in AAA-rated corporate debt instruments to deliver steady income yield.",
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-500",
      details: {
        house: "HDFC Mutual Fund",
        aum: "₹28,000 Cr+",
        benchmark: "NIFTY Corporate Bond Index B-III",
        expense: "0.35% (Direct)",
        holdings: ["National Highway Authority Bonds", "REC Ltd Bonds", "Power Finance Corp Bonds", "HDFC Bank Debentures", "SIDBI Bonds"]
      }
    },
    {
      name: "ICICI Pru Gilt Fund",
      category: "Gilt Fund",
      returns: "8.4%",
      minSIP: "₹500",
      desc: "Sovereign security focus designed to capture interest rate movements with zero default probability.",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-500",
      details: {
        house: "ICICI Prudential Mutual Fund",
        aum: "₹5,200 Cr+",
        benchmark: "NIFTY All Duration G-Sec Index",
        expense: "0.42% (Direct)",
        holdings: ["7.18% GS 2033 (Sovereign)", "7.26% GS 2032 (Sovereign)", "7.06% GS 2028 (Sovereign)", "Treasury Bills", "State Development Loans"]
      }
    },
    {
      name: "SBI Savings Fund",
      category: "Ultra Short",
      returns: "7.4%",
      minSIP: "₹500",
      desc: "Maintains optimal duration matching to mitigate interest rate shocks while keeping funds highly liquid.",
      color: "from-purple-500/20 to-purple-500/5",
      accent: "text-purple-500",
      details: {
        house: "SBI Mutual Fund",
        aum: "₹14,000 Cr+",
        benchmark: "NIFTY Ultra Short Duration Index B-I",
        expense: "0.28% (Direct)",
        holdings: ["Reliance Industries CP", "L&T CP", "ICICI Bank CD", "Treasury Bills", "Power Grid Corp Bonds"]
      }
    },
    {
      name: "Nippon India Arbitrage Fund",
      category: "Arbitrage",
      returns: "7.6%",
      minSIP: "₹500",
      desc: "Captures pricing spreads between spot and futures with fully hedged asset protection protocols.",
      color: "from-indigo-500/20 to-indigo-500/5",
      accent: "text-indigo-500",
      details: {
        house: "Nippon India Mutual Fund",
        aum: "₹12,000 Cr+",
        benchmark: "NIFTY Arbitrage Index",
        expense: "0.38% (Direct)",
        holdings: ["HDFC Bank Futures Spread", "Reliance Futures Spread", "Cash Equivalents", "Corporate AAA Bonds", "Treasury Bills"]
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
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest mb-6">
                <Coins className="h-3 w-3" /> Learning Purpose Only
          </div>
          <div className="w-20 h-20 rounded-3xl bg-amber-500 flex items-center justify-center mb-8 mx-auto shadow-2xl shadow-amber-500/20">
            <Coins className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-corex-navy mb-8 tracking-tighter leading-tight">
            Debt Funds: Stable <br />
            <span className="text-amber-500 italic uppercase">Protection.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
            Balance your portfolio with fixed-income instruments. Debt funds provide steady returns and act as a cushion during stock market volatility.
          </p>
        </motion.div>
      </section>

      {/* Categories grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
                {categories.map((c, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="p-10 rounded-[40px] border border-slate-100 bg-white hover:shadow-2xl transition-all">
                        <c.icon className="h-8 w-8 text-amber-500 mb-6" />
                        <h3 className="text-xl font-black text-corex-navy mb-4">{c.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{c.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Strategy Process */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-amber-500 mb-4">Risk Management</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">The Debt Strategy Matrix</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Duration Match", desc: "Select maturity terms matching your target horizon to mitigate interest rate shocks." },
                    { step: "02", title: "Credit Filtering", desc: "Isolate AAA-rated papers and Government sovereign nodes for maximum security bounds." },
                    { step: "03", title: "Yield Check", desc: "Identify optimal yield spreads above traditional bank fixed deposits." },
                    { step: "04", title: "Defensive Cushion", desc: "Secure steady yields that buffer portfolio drawdowns during equity market corrections." }
                ].map((s, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 group">
                        <div className="text-5xl font-black text-amber-500/10 mb-6 group-hover:text-amber-500 transition-colors">{s.step}</div>
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
                            <th className="p-8 text-sm font-black uppercase tracking-widest">Type</th>
                            <th className="p-8 text-sm font-black uppercase tracking-widest text-amber-500">Maturity Focus</th>
                            <th className="p-8 text-sm font-black uppercase tracking-widest">Credit Risk Parameter</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-600 font-bold">
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Liquid Funds</td>
                            <td className="p-8 text-sm text-amber-600 font-extrabold">1 to 91 Days</td>
                            <td className="p-8 text-sm">Minimal / Government & Bank Papers</td>
                        </tr>
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Corporate Bond</td>
                            <td className="p-8 text-sm text-amber-600 font-extrabold">1 to 3 Years</td>
                            <td className="p-8 text-sm">Moderate / AAA Corporate Debt</td>
                        </tr>
                        <tr>
                            <td className="p-8 text-sm">Gilt Funds</td>
                            <td className="p-8 text-sm text-amber-600 font-extrabold">3 to 10+ Years</td>
                            <td className="p-8 text-sm">Zero Default / Government Backed</td>
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
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-amber-500 mb-4">Capital Shields</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-corex-navy tracking-tighter">
                        Amigo <span className="text-amber-500 italic uppercase tracking-tighter">Top Debt Picks</span>.
                    </h3>
                </div>
                <p className="text-slate-500 font-bold max-w-sm">
                    Our selection of leading fixed-income mutual funds designed to defend capital value while securing systematic yields.
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
                                <div className="text-amber-500">
                                    <Star className="h-4 w-4 fill-current" />
                                </div>
                            </div>

                            <h4 className="text-lg font-black text-corex-navy mb-1 leading-tight group-hover:text-amber-500 transition-colors">
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
                                    <p className="text-xs font-black text-amber-500">{fund.returns}</p>
                                </div>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedFund(expandedFund === i ? null : i);
                                    }}
                                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${expandedFund === i ? 'bg-corex-navy text-white rotate-45' : 'bg-slate-50 hover:bg-amber-500 hover:text-white'}`}
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
            <h2 className="text-3xl font-black text-corex-navy mb-12 text-center tracking-tight">Debt Market Insights</h2>
            <div className="space-y-6">
                {[
                    { q: "Are debt funds risk-free?", a: "No investment is entirely risk-free. Debt funds carry interest rate risk and credit risk, which we mitigate through rigorous fund manager selection." },
                    { q: "How are debt funds taxed?", a: "From April 2023, capital gains from debt funds are added to your income and taxed according to your individual tax slab." },
                    { q: "When should I choose Debt over Equity?", a: "Debt is ideal for short to medium-term goals (1-3 years) or when you need to preserve capital for a specific upcoming expense." }
                ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h4 className="font-black text-corex-navy mb-4 flex gap-4">
                            <span className="text-amber-500">Q.</span> {item.q}
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
            <h2 className="text-4xl font-black mb-8">Stability is key to growth.</h2>
            <p className="text-gray-400 mb-12">Let us help you choose the right debt funds based on your investment horizon and liquidity needs.</p>
            <button className="px-10 py-5 bg-amber-500 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-amber-600 transition-all">
                Study Debt Models
            </button>
        </div>
      </section>
    </div>
  );
};

export default DebtFundsDetail;
