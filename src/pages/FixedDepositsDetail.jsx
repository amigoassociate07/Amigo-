import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Landmark, Clock, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, Wallet, ArrowLeft, Landmark as BankIcon, Shield, Percent, History, Banknote, Plus } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import BackNavigation from '../components/BackNavigation';

const FixedDepositsDetail = ({ onBackClick }) => {
  const investmentOptions = [
    {
      title: "Bank Fixed Deposits",
      icon: BankIcon,
      desc: "The safest way to grow your savings. Choose from flexible tenures and get guaranteed returns with DICGC insurance protection up to ₹5 Lakh.",
      color: "text-amber-500",
      bg: "bg-amber-50",
      details: {
        tenure: "7 Days to 10 Years",
        safety: "DICGC Insured (₹5 Lakh)",
        liquidity: "Premature withdrawal available",
        interest: "Quarterly/Monthly Payouts"
      }
    },
    {
      title: "Corporate FDs",
      icon: Wallet,
      desc: "Earn higher interest rates compared to traditional bank FDs by investing in high-rated corporate deposit schemes from trusted companies.",
      color: "text-orange-500",
      bg: "bg-orange-50",
      details: {
        tenure: "1 to 5 Years",
        safety: "AAA/AA Rated Corporates",
        liquidity: "Subject to company terms",
        interest: "Higher than bank FDs"
      }
    },
    {
      title: "Government Bonds",
      icon: Shield,
      desc: "Invest in sovereign-backed securities that offer maximum safety and competitive interest rates for long-term capital preservation.",
      color: "text-blue-500",
      bg: "bg-blue-50",
      details: {
        tenure: "5 to 40 Years",
        safety: "Sovereign Guarantee",
        liquidity: "Traded on secondary market",
        interest: "Fixed Coupon Rates"
      }
    },
    {
      title: "Tax-Free Bonds",
      icon: Percent,
      desc: "Ideal for investors in higher tax brackets. Earn fixed interest that is completely exempt from income tax under Section 10(15)(iv)(h).",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      details: {
        tenure: "10 to 20 Years",
        safety: "PSU Backed",
        liquidity: "Secondary market listing",
        interest: "Tax-exempt income"
      }
    }
  ];

  const [expandedOption, setExpandedOption] = useState(null);

  const features = [
    "Capital protection with guaranteed interest rates",
    "Flexible tenure options ranging from 7 days to 10 years",
    "Regular interest payout options (Monthly/Quarterly)",
    "Loan facility available against your deposits"
  ];

  return (
    <div className="bg-white min-h-screen">
      <BackNavigation onBackClick={onBackClick} label="Back to Services" />

      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest mb-6">
                <Landmark className="h-3 w-3" /> Learning Purpose Only
              </div>
              <div className="w-20 h-20 rounded-3xl bg-corex-navy flex items-center justify-center mb-8 shadow-2xl shadow-corex-navy/20">
                <Landmark className="h-10 w-10 text-amber-500" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-corex-navy mb-8 tracking-tighter leading-[0.9]">
                Fixed Deposits <br />
                <span className="text-amber-500 italic uppercase tracking-tighter">& Bonds</span> <br />
                Portfolio.
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Secure your wealth with low-risk, high-reliability investment instruments. We help you find the best rates across banks and corporate houses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
                <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-slate-100 relative z-10">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Security & Stability</h3>
                    <div className="space-y-6">
                        {features.map((feature, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="h-6 w-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                                </div>
                                <p className="text-slate-600 font-bold tracking-tight">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-amber-600 mb-4">Stable Income Streams</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">Guaranteed Returns with Capital Safety</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {investmentOptions.map((option, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setExpandedOption(expandedOption === i ? null : i)}
                        className={`p-8 rounded-[32px] border border-slate-100 hover:border-amber-500/30 hover:shadow-xl transition-all group flex flex-col cursor-pointer ${expandedOption === i ? 'lg:col-span-2' : ''}`}
                    >
                        <div className={`w-14 h-14 rounded-2xl ${option.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <option.icon className={`h-7 w-7 ${option.color}`} />
                        </div>
                        <h4 className="text-xl font-black text-corex-navy mb-4 tracking-tight">{option.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                            {option.desc}
                        </p>

                        <AnimatePresence>
                            {expandedOption === i && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="pt-6 border-t border-slate-100 space-y-4"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Tenure Node</p>
                                            <p className="text-[10px] font-bold text-corex-navy">{option.details.tenure}</p>
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Safety Vector</p>
                                            <p className="text-[10px] font-bold text-corex-navy">{option.details.safety}</p>
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Liquidity</p>
                                            <p className="text-[10px] font-bold text-corex-navy">{option.details.liquidity}</p>
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Yield Study</p>
                                            <p className="text-[10px] font-bold text-corex-navy">{option.details.interest}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="mt-auto pt-8">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setExpandedOption(expandedOption === i ? null : i);
                                }}
                                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 cursor-pointer ${expandedOption === i ? 'bg-corex-navy text-white' : 'bg-slate-50 text-slate-400 hover:bg-amber-500 hover:text-white'}`}
                            >
                                {expandedOption === i ? 'Close Study' : 'Detailed Study'}
                                <ArrowRight className={`h-4 w-4 transition-transform ${expandedOption === i ? 'rotate-90' : ''}`} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Stability Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl font-black mb-8 tracking-tighter">The Foundation of <br/><span className="text-amber-500 italic">Financial Security.</span></h2>
                    <p className="text-slate-400 font-medium leading-relaxed mb-8">
                        Fixed income investments provide the necessary stability to any investment portfolio. They act as a hedge against market volatility, ensuring that a portion of your wealth remains unaffected by stock market fluctuations.
                    </p>
                    <div className="space-y-4">
                        {[
                            { icon: History, text: "Compounding growth over time" },
                            { icon: Banknote, text: "Highest safety standards (AAA Rated)" },
                            { icon: Percent, text: "Optimized tax efficiency strategies" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <item.icon className="h-5 w-5 text-amber-500" />
                                <span className="text-sm font-bold tracking-tight">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[40px] p-12 relative z-10">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">Yield Comparison</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Fixed Income vs Savings</span>
                        </div>
                        <div className="space-y-6">
                            {[75, 45, 90].map((w, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${w}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className="h-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-xs text-slate-500 font-medium text-center">Historical data shows fixed income consistently outperforms standard savings accounts while maintaining low risk profiles.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-black text-corex-navy mb-8 tracking-tighter">Secure your capital <br/>now.</h2>
            <p className="text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto">
                Don't let your savings sit idle. Put your money to work in the safest and most reliable fixed income instruments available in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-corex-navy text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-all shadow-xl shadow-corex-navy/10 hover:shadow-amber-500/20">
                    Study Yields
                </button>
                <button className="px-10 py-5 bg-slate-100 text-corex-navy rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">
                    Study Session
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default FixedDepositsDetail;
