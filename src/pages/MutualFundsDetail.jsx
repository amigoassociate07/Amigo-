import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, PieChart, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, Wallet, ArrowLeft, BarChart3, Coins, Rocket } from 'lucide-react';
import BackNavigation from '../components/BackNavigation';

const MutualFundsDetail = ({ onBackClick, onSIPClick, onLumpsumClick, onELSSClick, onDebtClick, onEquityClick, onReviewClick }) => {
  const fundCategories = [
    {
      title: "SIP (Monthly Investment)",
      icon: TrendingUp,
      desc: "Start with as little as ₹500/month to build disciplined wealth over time through rupee cost averaging.",
      sub: "Start with as little as ₹500/month",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Lump Sum Investment",
      icon: Rocket,
      desc: "One-time investments in top-rated funds to capitalize on market opportunities and long-term growth.",
      sub: "One-time investments in top-rated funds",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "ELSS (Tax Saving)",
      icon: ShieldCheck,
      desc: "Save up to ₹46,800 in taxes under Section 80C while enjoying the growth potential of equity.",
      sub: "Save tax under Section 80C",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Debt Funds",
      icon: Coins,
      desc: "Focus on capital preservation and steady income through fixed-income instruments and bonds.",
      sub: "Low-risk, stable returns",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "Equity Funds",
      icon: BarChart3,
      desc: "High-growth potential investments in diversified stocks for long-term wealth creation.",
      sub: "Long-term wealth creation",
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "Portfolio Review",
      icon: PieChart,
      desc: "Get an expert audit of your existing investments to optimize performance and rebalance risk.",
      sub: "Review and rebalance existing investments",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    }
  ];

  const topFunds = [
    {
      name: "Parag Parikh Flexi Cap Fund",
      category: "Flexi Cap",
      returns: "20.5%",
      minSIP: "₹1,000",
      description: "A value-oriented fund with exposure to Indian and international equities for broad diversification.",
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-500",
      expenseRatio: "0.71%",
      risk: "Very High",
      exitLoad: "2.0%"
    },
    {
      name: "HDFC Mid-Cap Opportunities Fund",
      category: "Mid Cap",
      returns: "25.2%",
      minSIP: "₹500",
      description: "Focuses on high-potential mid-sized companies to capture the next generation of industry leaders.",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-500",
      expenseRatio: "0.82%",
      risk: "Very High",
      exitLoad: "1.0%"
    },
    {
      name: "Quant Small Cap Fund",
      category: "Small Cap",
      returns: "35.8%",
      minSIP: "₹1,000",
      description: "Aggressive growth strategy targeting high-growth small-cap stocks with a dynamic momentum approach.",
      color: "from-rose-500/20 to-rose-500/5",
      accent: "text-rose-500",
      expenseRatio: "0.62%",
      risk: "Very High",
      exitLoad: "1.0%"
    },
    {
      name: "ICICI Prudential Bluechip Fund",
      category: "Large Cap",
      returns: "18.4%",
      minSIP: "₹100",
      description: "Stability and growth through investments in India's top 100 established market leaders.",
      color: "from-indigo-500/20 to-indigo-500/5",
      accent: "text-indigo-500",
      expenseRatio: "0.95%",
      risk: "High",
      exitLoad: "1.0%"
    },
    {
      name: "SBI Magnum Equity ESG Fund",
      category: "Thematic (ESG)",
      returns: "16.5%",
      minSIP: "₹500",
      description: "Investing in socially responsible companies with high environmental, social, and governance standards.",
      color: "from-amber-500/20 to-amber-500/5",
      accent: "text-amber-500",
      expenseRatio: "0.91%",
      risk: "High",
      exitLoad: "1.0%"
    }
  ];

  const features = [
    "ARN Certified Distributor with deep market expertise",
    "Goal-based investment planning (Retirement, Education, etc.)",
    "Regular portfolio review and rebalancing",
    "Seamless digital onboarding and transaction tracking"
  ];

  return (
    <div className="bg-white min-h-screen">
      <BackNavigation onBackClick={onBackClick} label="Back to Services" />

      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest mb-6">
                <Rocket className="h-3 w-3" /> Learning Purpose Only
              </div>
              <div className="w-20 h-20 rounded-3xl bg-corex-navy flex items-center justify-center mb-8 shadow-2xl shadow-corex-navy/20">
                <TrendingUp className="h-10 w-10 text-corex-accent" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-corex-navy mb-8 tracking-tighter leading-[0.9]">
                Mutual Funds <br />
                <span className="text-corex-accent italic uppercase tracking-tighter">Distribution</span> <br />
                Services.
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Grow your wealth through expert-guided mutual fund investments. From SIPs to lump sum investments, we help you navigate the market with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
                <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-slate-100 relative z-10">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Investment Advantage</h3>
                    <div className="space-y-6">
                        {features.map((feature, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="h-6 w-6 rounded-full bg-corex-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-corex-accent" />
                                </div>
                                <p className="text-slate-600 font-bold tracking-tight">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-corex-accent/10 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-corex-accent mb-4">Investment Universe</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">Diverse Options for Every Goal</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fundCategories.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[40px] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all group flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-10">
                                <div className={`w-14 h-14 rounded-2xl ${cat.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <cat.icon className={`h-7 w-7 ${cat.color}`} />
                                </div>
                                <div className="px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[6px] font-black uppercase tracking-widest">
                                    Learning Node
                                </div>
                            </div>
                            <h4 className="text-2xl font-black text-corex-navy mb-3 tracking-tight">{cat.title}</h4>
                            <p className="text-slate-400 text-sm font-bold mb-10 tracking-tight">
                                {cat.sub}
                            </p>
                        </div>
                        <button 
                            onClick={() => {
                                if (cat.title === "SIP (Monthly Investment)") onSIPClick();
                                else if (cat.title === "Lump Sum Investment") onLumpsumClick();
                                else if (cat.title === "ELSS (Tax Saving)") onELSSClick();
                                else if (cat.title === "Debt Funds") onDebtClick();
                                else if (cat.title === "Equity Funds") onEquityClick();
                                else if (cat.title === "Portfolio Review") onReviewClick();
                            }}
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-corex-accent transition-colors"
                        >
                            Learn More <ArrowRight className="h-4 w-4" />
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* SIP vs Lumpsum Section */}
      <section className="py-32 bg-corex-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                            <Target className="h-8 w-8 text-corex-accent mb-4" />
                            <h4 className="text-lg font-black mb-2">SIP</h4>
                            <p className="text-slate-400 text-xs font-medium leading-relaxed">Systematic Investment Plan for disciplined, regular savings and rupee cost averaging.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 mt-8">
                            <Rocket className="h-8 w-8 text-blue-400 mb-4" />
                            <h4 className="text-lg font-black mb-2">Lumpsum</h4>
                            <p className="text-slate-400 text-xs font-medium leading-relaxed">Invest a significant amount at once to capitalize on market opportunities.</p>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl font-black mb-8 tracking-tighter">Two Paths to <br/><span className="text-corex-accent italic">Financial Freedom.</span></h2>
                    <p className="text-slate-400 font-medium leading-relaxed mb-8">
                        Whether you want to build wealth gradually through SIPs or deploy capital in bulk, our advisors provide the data-driven insights needed to optimize your entry points and maximize returns.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-corex-accent/20 border border-corex-accent/30 text-corex-accent text-[10px] font-black uppercase tracking-[0.2em]">
                        ARN Certified Guidance
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Top 5 Funds Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-corex-accent mb-4">Market Leaders</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-corex-navy tracking-tighter">
                        Amigo <span className="text-corex-accent italic uppercase tracking-tighter">Top 5</span> Picks.
                    </h3>
                </div>
                <p className="text-slate-500 font-bold max-w-sm">
                    Our analysts' selection of top-performing funds across key categories for the Indian market.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-4">
                {topFunds.map((fund, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white p-6 hover:shadow-2xl hover:shadow-slate-200 transition-all flex flex-col h-full"
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${fund.color} blur-2xl rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 rounded-full bg-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-500">
                                    {fund.category}
                                </span>
                                <div className={`text-lg font-black ${fund.accent} tracking-tighter`}>
                                    {fund.returns} <span className="text-[10px] text-slate-300">3Y</span>
                                </div>
                            </div>

                            <h4 className="text-lg font-black text-corex-navy mb-3 leading-tight group-hover:text-corex-accent transition-colors">
                                {fund.name}
                            </h4>
                            
                            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-4 flex-grow">
                                {fund.description}
                            </p>

                            <div className="grid grid-cols-2 gap-2 mb-6 p-3 bg-slate-50 rounded-xl">
                                <div>
                                    <p className="text-[7px] font-black uppercase text-slate-400">Expense Ratio</p>
                                    <p className="text-[10px] font-black text-slate-600">{fund.expenseRatio}</p>
                                </div>
                                <div>
                                    <p className="text-[7px] font-black uppercase text-slate-400">Risk Profile</p>
                                    <p className="text-[10px] font-black text-rose-500">{fund.risk}</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                <div>
                                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-300">Min SIP</p>
                                    <p className="text-xs font-black text-corex-navy">{fund.minSIP}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-300">Exit Load</p>
                                    <p className="text-xs font-black text-slate-500">{fund.exitLoad}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-16 p-8 rounded-[40px] bg-white border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                        <ShieldCheck className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                        <p className="text-sm font-black text-corex-navy tracking-tight">Invest with Confidence</p>
                        <p className="text-xs text-slate-400 font-medium">All recommendations are based on historical performance and market risk analysis.</p>
                    </div>
                </div>
                <button className="px-8 py-4 bg-corex-navy text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-corex-accent transition-all shadow-lg shadow-corex-navy/10">
                    Study Full Report
                </button>
            </div>
        </div>
      </section>

      {/* Study Guide Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[50px] p-12 lg:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-corex-accent/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
                
                <div className="relative z-10">
                    <div className="max-w-2xl mb-16">
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-corex-accent mb-6">Educational Masterclass</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8">
                            How to <span className="text-corex-accent italic uppercase">Study</span> <br/>Mutual Funds.
                        </h3>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            A step-by-step framework to analyze fund quality beyond just past returns.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Expense Ratio", desc: "Lower is better. It represents the annual fee charged by the AMC." },
                            { step: "02", title: "Standard Deviation", desc: "Measures volatility. A lower SD indicates more stable returns." },
                            { step: "03", title: "Alpha & Beta", desc: "Alpha measures excess returns; Beta measures sensitivity to market." },
                            { step: "04", title: "Sharpe Ratio", desc: "Higher is better. It measures risk-adjusted performance." }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                <span className="text-4xl font-black text-white/10 group-hover:text-corex-accent/20 transition-colors mb-6 block">{item.step}</span>
                                <h4 className="text-lg font-black text-white mb-3">{item.title}</h4>
                                <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-black text-corex-navy mb-8 tracking-tighter">Start your wealth <br/>journey today.</h2>
            <p className="text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto">
                Join thousands of investors who trust Amigo Associate for their mutual fund investments and goal-based planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-corex-navy text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-corex-accent transition-all shadow-xl shadow-corex-navy/10 hover:shadow-corex-accent/20">
                    Study Funds
                </button>
                <button className="px-10 py-5 bg-slate-100 text-corex-navy rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">
                    Academic Study
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MutualFundsDetail;
