import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Zap, TrendingUp, BarChart, History, ArrowLeft, Star, ArrowRight, CheckCircle2, ShieldCheck, Landmark } from 'lucide-react';
import BackNavigation from '../components/BackNavigation';

const LumpsumDetail = ({ onBackClick }) => {
  const points = [
    { 
      title: "Valuation Capture", 
      desc: "Capitalize directly on market corrections by deploying bulk capital when absolute valuation ratios are highly attractive.", 
      icon: Zap 
    },
    { 
      title: "One-Time Deployment", 
      desc: "No recurring monthly commitments. Invest your capital surplus once and capture compounding returns over multi-year horizons.", 
      icon: Rocket 
    },
    { 
      title: "Capital Reinvestment", 
      desc: "Put high asset-sale windfalls, inheritance, or corporate bonuses to work immediately to maximize purchasing power.", 
      icon: TrendingUp 
    }
  ];

  const topFunds = [
    {
      name: "Nippon India Growth Fund",
      category: "Mid Cap",
      returns: "22.8%",
      minInvest: "₹5,000",
      desc: "Active mid-cap selector targeting fast-growing corporate leaders in industrial recovery.",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-500",
      details: {
        house: "Nippon India Mutual Fund",
        aum: "₹24,000 Cr+",
        benchmark: "NIFTY Midcap 150 TRI",
        expense: "0.81% (Direct)",
        holdings: ["Cholamandalam Investment", "Supreme Industries", "Power Grid Corp", "L&T Finance", "HDFC Bank"]
      }
    },
    {
      name: "ICICI Prudential Asset Allocator",
      category: "Multi Asset",
      returns: "18.5%",
      minInvest: "₹5,000",
      desc: "Dynamically rebalances capital across Equity, Debt, and Gold based on in-house valuations.",
      color: "from-purple-500/20 to-purple-500/5",
      accent: "text-purple-500",
      details: {
        house: "ICICI Prudential Mutual Fund",
        aum: "₹21,000 Cr+",
        benchmark: "CRISIL Multi Asset Index",
        expense: "0.74% (Direct)",
        holdings: ["HDFC Bank", "ICICI Bank", "Sovereign Gold Bonds", "Treasury Bills", "Infosys"]
      }
    },
    {
      name: "HDFC Top 100 Fund",
      category: "Large Cap",
      returns: "16.9%",
      minInvest: "₹5,000",
      desc: "High-conviction blue-chip selection targeting India's leading market capitalizations.",
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-500",
      details: {
        house: "HDFC Mutual Fund",
        aum: "₹32,000 Cr+",
        benchmark: "NIFTY 100 TRI",
        expense: "0.88% (Direct)",
        holdings: ["Reliance Industries", "HDFC Bank", "ICICI Bank", "Larsen & Toubro", "Infosys"]
      }
    },
    {
      name: "SBI Arbitrage Opportunities",
      category: "Arbitrage",
      returns: "7.8%",
      minInvest: "₹5,000",
      desc: "Low-risk arbitrage model capturing pricing differentials between spot and derivative markets.",
      color: "from-amber-500/20 to-amber-500/5",
      accent: "text-amber-500",
      details: {
        house: "SBI Mutual Fund",
        aum: "₹18,000 Cr+",
        benchmark: "NIFTY Arbitrage Index",
        expense: "0.45% (Direct)",
        holdings: ["Cash Equivalents", "Sovereign Debt Nodes", "Equity spot/future spreads", "Commercial Paper"]
      }
    },
    {
      name: "Parag Parikh Conservative Hybrid",
      category: "Hybrid",
      returns: "13.5%",
      minInvest: "₹5,000",
      desc: "Defensive capital allocation splitting holdings between highly-rated debt and value equities.",
      color: "from-indigo-500/20 to-indigo-500/5",
      accent: "text-indigo-500",
      details: {
        house: "Parag Parikh Mutual Fund",
        aum: "₹10,000 Cr+",
        benchmark: "CRISIL Hybrid 85+15 TRI",
        expense: "0.52% (Direct)",
        holdings: ["State Development Loans", "InvITs Infrastructure Nodes", "Power Grid Corp", "Coal India Ltd"]
      }
    }
  ];

  const [expandedFund, setExpandedFund] = useState(null);

  return (
    <div className="bg-white min-h-screen">

      
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest mb-6">
                <Rocket className="h-3 w-3" /> Learning Purpose Only
          </div>
          <div className="w-20 h-20 rounded-3xl bg-blue-500 flex items-center justify-center mb-8 mx-auto shadow-2xl shadow-blue-500/20">
            <Rocket className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-corex-navy mb-8 tracking-tighter leading-tight">
            Lump Sum: Big <br />
            <span className="text-blue-500 italic uppercase">Commitments.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
            Invest a significant amount of money in one go. Ideal for investors with surplus cash looking for long-term capital appreciation.
          </p>
        </motion.div>
      </section>

      {/* Points section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
                {points.map((p, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="p-10 rounded-[40px] border border-slate-100 bg-white hover:shadow-2xl transition-all">
                        <p.icon className="h-8 w-8 text-blue-500 mb-6" />
                        <h3 className="text-xl font-black text-corex-navy mb-4">{p.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-500 mb-4">Strategic Deployment</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">The Lumpsum Strategy</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Capital Audit", desc: "Evaluate your idle surplus funds, verifying that emergency contingency buffers are isolated." },
                    { step: "02", title: "Valuation Check", desc: "Study broader market metrics (P/E ratios, sector drawdowns) to pick optimal entry nodes." },
                    { step: "03", title: "Allocation Mix", desc: "Select a balanced pool of Large, Mid, and Hybrid asset structures to control beta." },
                    { step: "04", title: "Deploy Tranches", desc: "Deploy either fully or through Systematic Transfer Plans (STP) over several weeks." }
                ].map((s, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 group">
                        <div className="text-5xl font-black text-blue-500/10 mb-6 group-hover:text-blue-500 transition-colors">{s.step}</div>
                        <h4 className="text-lg font-black text-corex-navy mb-4">{s.title}</h4>
                        <p className="text-slate-500 text-xs font-medium leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Lumpsum vs SIP comparison table */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[48px] border border-slate-100 shadow-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-corex-navy text-white">
                            <th className="p-8 text-sm font-black uppercase tracking-widest">Feature</th>
                            <th className="p-8 text-sm font-black uppercase tracking-widest text-blue-500">Lumpsum</th>
                            <th className="p-8 text-sm font-black uppercase tracking-widest">SIP</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-600 font-bold">
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Deployment Mode</td>
                            <td className="p-8 text-sm text-blue-600 font-extrabold">One-time / Tranche</td>
                            <td className="p-8 text-sm">Periodic / Weekly / Monthly</td>
                        </tr>
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Market Vulnerability</td>
                            <td className="p-8 text-sm text-blue-600 font-extrabold">Highly dependent on entry timing</td>
                            <td className="p-8 text-sm">Mitigated via Cost Averaging</td>
                        </tr>
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Maturity Compounding</td>
                            <td className="p-8 text-sm text-blue-600 font-extrabold">Absolute initial capital weight</td>
                            <td className="p-8 text-sm">Gradual incremental scale</td>
                        </tr>
                        <tr>
                            <td className="p-8 text-sm">Suitability</td>
                            <td className="p-8 text-sm text-blue-600 font-extrabold">Windfalls / Idle Cash Reserves</td>
                            <td className="p-8 text-sm">Regular monthly salary allocations</td>
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
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-500 mb-4">Tactical Entry</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-corex-navy tracking-tighter">
                        Amigo <span className="text-blue-500 italic uppercase tracking-tighter">Lump Sum Picks</span>.
                    </h3>
                </div>
                <p className="text-slate-500 font-bold max-w-sm">
                    Our curated selection of mutual fund models ideally suited for high initial capital allocations across market phases.
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
                                <div className="text-blue-500">
                                    <Star className="h-4 w-4 fill-current" />
                                </div>
                            </div>

                            <h4 className="text-lg font-black text-corex-navy mb-1 leading-tight group-hover:text-blue-500 transition-colors">
                                {fund.name}
                            </h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Min. Invest: {fund.minInvest}</p>
                            
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
                                    <p className="text-xs font-black text-blue-500">{fund.returns}</p>
                                </div>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedFund(expandedFund === i ? null : i);
                                    }}
                                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${expandedFund === i ? 'bg-corex-navy text-white rotate-45' : 'bg-slate-50 hover:bg-blue-500 hover:text-white'}`}
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
            <h2 className="text-3xl font-black text-corex-navy mb-12 text-center tracking-tight">Essential Questions</h2>
            <div className="space-y-6">
                {[
                    { q: "When is the best time for a lumpsum investment?", a: "Historically, investing during market corrections or when you have a long-term goal (5+ years) is best. Trying to time the exact bottom is difficult; consistency is better." },
                    { q: "Is lumpsum riskier than SIP?", a: "Yes, because you enter at a single price point. However, over a very long period (10+ years), the difference often narrows as markets grow." },
                    { q: "Can I switch from Lumpsum to SIP?", a: "You can use a Systematic Transfer Plan (STP) to invest a lumpsum in a liquid fund and gradually move it into equity funds." }
                ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h4 className="font-black text-corex-navy mb-4 flex gap-4">
                            <span className="text-blue-500">Q.</span> {item.q}
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
            <h2 className="text-4xl font-black mb-8">Deploy your capital wisely.</h2>
            <p className="text-gray-400 mb-12">Let our advisors help you identify the best funds and entry points for your lumpsum investment.</p>
            <button className="px-10 py-5 bg-blue-500 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">
                Study Lumpsum Models
            </button>
        </div>
      </section>
    </div>
  );
};

export default LumpsumDetail;
