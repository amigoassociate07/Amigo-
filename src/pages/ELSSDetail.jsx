import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowLeft, Percent, Lock, Landmark, Star, ArrowRight, History } from 'lucide-react';
import BackNavigation from '../components/BackNavigation';

const ELSSDetail = ({ onBackClick }) => {
  const benefits = [
    { 
      title: "80C Tax Savings", 
      desc: "Secure tax deductions of up to ₹1.5 Lakh per financial year, translating to up to ₹46,800 in direct tax savings.", 
      icon: Percent 
    },
    { 
      title: "Shortest Lock-in", 
      desc: "Only a 3-year lock-in buffer, which is the shortest timeframe among all traditional instruments like PPF or tax FDs.", 
      icon: Lock 
    },
    { 
      title: "Active Equity Growth", 
      desc: "Unlike standard tax-savers, ELSS deploys wealth in equities to deliver potentially higher inflation-beating returns.", 
      icon: ShieldCheck 
    }
  ];

  const topFunds = [
    {
      name: "Parag Parikh ELSS Tax Saver",
      category: "ELSS",
      returns: "21.2%",
      minSIP: "₹500",
      desc: "Focuses on large-cap value leaders with disciplined portfolio turnover parameters.",
      color: "from-purple-500/20 to-purple-500/5",
      accent: "text-purple-500",
      details: {
        house: "Parag Parikh Mutual Fund",
        aum: "₹6,200 Cr+",
        benchmark: "NIFTY 500 TRI",
        expense: "0.68% (Direct)",
        holdings: ["HDFC Bank", "Reliance Industries", "ITC Ltd", "ICICI Bank", "Infosys"]
      }
    },
    {
      name: "Quant Active Tax Plan",
      category: "ELSS",
      returns: "34.5%",
      minSIP: "₹500",
      desc: "Deploys multi-asset predictive analytics to optimize sector weights dynamically.",
      color: "from-rose-500/20 to-rose-500/5",
      accent: "text-rose-500",
      details: {
        house: "Quant Mutual Fund",
        aum: "₹9,800 Cr+",
        benchmark: "NIFTY 500 TRI",
        expense: "0.76% (Direct)",
        holdings: ["Reliance Industries", "Jindal Stainless", "HDFC Bank", "Adani Power", "SAIL"]
      }
    },
    {
      name: "Mirae Asset ELSS Tax Saver",
      category: "ELSS",
      returns: "18.9%",
      minSIP: "₹500",
      desc: "Maintains a diversified, core-growth portfolio featuring large-cap market leaders.",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-500",
      details: {
        house: "Mirae Asset Mutual Fund",
        aum: "₹22,000 Cr+",
        benchmark: "NIFTY 500 TRI",
        expense: "0.59% (Direct)",
        holdings: ["HDFC Bank", "ICICI Bank", "Reliance Industries", "Larsen & Toubro", "Axis Bank"]
      }
    },
    {
      name: "HDFC ELSS Tax Saver",
      category: "ELSS",
      returns: "17.4%",
      minSIP: "₹500",
      desc: "Value-centric selection targeting robust businesses with healthy dividend track records.",
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-500",
      details: {
        house: "HDFC Mutual Fund",
        aum: "₹14,500 Cr+",
        benchmark: "NIFTY 500 TRI",
        expense: "0.82% (Direct)",
        holdings: ["ICICI Bank", "HDFC Bank", "State Bank of India", "NTPC Ltd", "Bharti Airtel"]
      }
    },
    {
      name: "SBI Long Term Equity",
      category: "ELSS",
      returns: "19.8%",
      minSIP: "₹500",
      desc: "One of the longest-running tax-saver schemes with resilient multi-cap allocations.",
      color: "from-indigo-500/20 to-indigo-500/5",
      accent: "text-indigo-500",
      details: {
        house: "SBI Mutual Fund",
        aum: "₹16,000 Cr+",
        benchmark: "S&P BSE 500 TRI",
        expense: "0.89% (Direct)",
        holdings: ["HDFC Bank", "ICICI Bank", "Larsen & Toubro", "Reliance Industries", "ITC Ltd"]
      }
    }
  ];

  const [expandedFund, setExpandedFund] = useState(null);

  return (
    <div className="bg-white min-h-screen">

      
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest mb-6">
                <History className="h-3 w-3" /> Learning Purpose Only
          </div>
          <div className="w-20 h-20 rounded-3xl bg-purple-500 flex items-center justify-center mb-8 mx-auto shadow-2xl shadow-purple-500/20">
            <ShieldCheck className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-corex-navy mb-8 tracking-tighter leading-tight">
            ELSS: Tax-Free <br />
            <span className="text-purple-500 italic uppercase">Wealth.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
            Equity Linked Savings Schemes are the most efficient way to save tax while building long-term wealth through stock market participation.
          </p>
        </motion.div>
      </section>

      {/* Benefits grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
                {benefits.map((b, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="p-10 rounded-[40px] border border-slate-100 bg-white hover:shadow-2xl transition-all">
                        <b.icon className="h-8 w-8 text-purple-500 mb-6" />
                        <h3 className="text-xl font-black text-corex-navy mb-4">{b.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{b.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Steps process */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-purple-500 mb-4">Tax Process</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">Systematic Tax Optimization</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Bracket Audit", desc: "Identify your income bracket to evaluate exact 80C rebate room parameters." },
                    { step: "02", title: "Target Mix", desc: "Select preferred ELSS funds that complement existing stock market holdings." },
                    { step: "03", title: "KYC Verification", desc: "Complete paperless digital verification using Aadhar and PAN in minutes." },
                    { step: "04", title: "Auto Invest", desc: "Set up monthly SIPs to distribute the tax-saving load evenly across the year." }
                ].map((s, i) => (
                    <div key={i} className="relative group">
                        <div className="text-6xl font-black text-purple-500/10 mb-6 group-hover:text-purple-500/20 transition-colors">{s.step}</div>
                        <h4 className="text-xl font-black text-corex-navy mb-4">{s.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-purple-500 mb-4">Market Comparison</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">ELSS vs Traditional Tax Savers</p>
            </div>
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl overflow-hidden max-w-4xl mx-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-purple-600 text-white">
                            <th className="p-8 text-sm font-black uppercase tracking-widest">Feature</th>
                            <th className="p-8 text-sm font-black uppercase tracking-widest">ELSS</th>
                            <th className="p-8 text-sm font-black uppercase tracking-widest">PPF / FD</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-600 font-bold">
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Lock-in Period</td>
                            <td className="p-8 text-sm text-purple-600 font-extrabold">3 Years (Shortest)</td>
                            <td className="p-8 text-sm">5 - 15 Years</td>
                        </tr>
                        <tr className="border-b border-slate-50">
                            <td className="p-8 text-sm">Potential Returns</td>
                            <td className="p-8 text-sm text-purple-600 font-extrabold">Market Linked (High Growth)</td>
                            <td className="p-8 text-sm">Fixed Yield (Moderate)</td>
                        </tr>
                        <tr>
                            <td className="p-8 text-sm">Asset Class</td>
                            <td className="p-8 text-sm text-purple-600 font-extrabold">Equity Exposure (80%+)</td>
                            <td className="p-8 text-sm">Debt / Sovereign Bonds</td>
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
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-purple-500 mb-4">Tax Pillars</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-corex-navy tracking-tighter">
                        Amigo <span className="text-purple-500 italic uppercase tracking-tighter">Top Tax Savers</span>.
                    </h3>
                </div>
                <p className="text-slate-500 font-bold max-w-sm">
                    Our selection of leading tax-saving equity funds that blend Section 80C rebates with long-term compound growth.
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
                                <div className="text-purple-500">
                                    <Star className="h-4 w-4 fill-current" />
                                </div>
                            </div>

                            <h4 className="text-lg font-black text-corex-navy mb-1 leading-tight group-hover:text-purple-500 transition-colors">
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
                                    <p className="text-xs font-black text-purple-500">{fund.returns}</p>
                                </div>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedFund(expandedFund === i ? null : i);
                                    }}
                                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${expandedFund === i ? 'bg-corex-navy text-white rotate-45' : 'bg-slate-50 hover:bg-purple-500 hover:text-white'}`}
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
            <h2 className="text-3xl font-black text-corex-navy mb-12 text-center tracking-tight">Tax Queries</h2>
            <div className="space-y-6">
                {[
                    { q: "Is the dividend from ELSS taxable?", a: "Dividends are added to your income and taxed at your slab rate. Long-term capital gains (LTCG) above ₹1 Lakh are taxed at 10%." },
                    { q: "What happens after the 3-year lock-in?", a: "The investment becomes open-ended. You can choose to withdraw, stay invested for longer growth, or reinvest." },
                    { q: "Can I do an SIP in ELSS?", a: "Yes! Many investors prefer monthly ELSS SIPs to spread their tax-saving burden across the entire financial year." }
                ].map((item, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h4 className="font-black text-corex-navy mb-4 flex gap-4">
                            <span className="text-purple-500">Q.</span> {item.q}
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
            <h2 className="text-4xl font-black mb-8">Save tax before March 31.</h2>
            <p className="text-gray-400 mb-12">Don't wait until the last minute. Start your ELSS investment now to optimize your tax liability for the year.</p>
            <button className="px-10 py-5 bg-purple-500 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-purple-600 transition-all">
                Calculate Savings
            </button>
        </div>
      </section>
    </div>
  );
};

export default ELSSDetail;
