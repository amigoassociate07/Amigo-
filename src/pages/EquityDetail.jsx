import React from 'react';
import { motion } from 'framer-motion';
import { Users2, CheckCircle2, ArrowLeft, BarChart2, LineChart, Search, Globe, ShieldAlert, Cpu, Layers, ArrowRight } from 'lucide-react';
import BackNavigation from '../components/BackNavigation';

const EquityDetail = ({ onBackClick }) => {
  const analysisTools = [
    {
      title: "Fundamental Study",
      icon: Search,
      desc: "Deep-dive into company financials, management quality, and industry outlook to identify long-term value creators.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      title: "Technical Insights",
      icon: LineChart,
      desc: "Leverage advanced chart patterns and indicators to optimize entry and exit points for your equity positions.",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Sector Study",
      icon: Globe,
      desc: "Comprehensive analysis of emerging sectors and macro trends to position your portfolio for future growth cycles.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Risk Assessment",
      icon: ShieldAlert,
      desc: "Quantitative and qualitative risk profiling to ensure your exposure remains aligned with your psychological comfort zone.",
      color: "text-rose-500",
      bg: "bg-rose-50"
    }
  ];

  const topStocks = [
    {
      name: "Reliance Industries",
      ticker: "RELIANCE",
      sector: "Diversified",
      price: "₹2,985.40",
      change: "+1.25%",
      peRatio: "28.4",
      marketCap: "₹20.1L Cr",
      dividendYield: "0.3%",
      desc: "Market leader in Energy, Retail, and Digital Services with a robust growth outlook.",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-500"
    },
    {
      name: "HDFC Bank",
      ticker: "HDFCBANK",
      sector: "Financial Services",
      price: "₹1,642.15",
      change: "+0.85%",
      peRatio: "19.2",
      marketCap: "₹12.4L Cr",
      dividendYield: "1.1%",
      desc: "India's largest private sector bank with consistent earnings growth and asset quality.",
      color: "from-indigo-500/20 to-indigo-500/5",
      accent: "text-indigo-500"
    },
    {
      name: "TCS",
      ticker: "TCS",
      sector: "IT Services",
      price: "₹4,120.30",
      change: "-0.15%",
      peRatio: "31.5",
      marketCap: "₹14.9L Cr",
      dividendYield: "1.2%",
      desc: "Global leader in IT services with high cash flow generation and dividend yields.",
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-500"
    },
    {
      name: "Larsen & Toubro",
      ticker: "LT",
      sector: "Infrastructure",
      price: "₹3,580.90",
      change: "+2.10%",
      peRatio: "34.2",
      marketCap: "₹4.9L Cr",
      dividendYield: "0.7%",
      desc: "Prime beneficiary of India's infrastructure push with a massive order book.",
      color: "from-amber-500/20 to-amber-500/5",
      accent: "text-amber-500"
    },
    {
      name: "ICICI Bank",
      ticker: "ICICIBANK",
      sector: "Financial Services",
      price: "₹1,115.45",
      change: "+1.50%",
      peRatio: "18.1",
      marketCap: "₹7.8L Cr",
      dividendYield: "0.9%",
      desc: "Top-tier private bank with strong digital adoption and improving return ratios.",
      color: "from-rose-500/20 to-rose-500/5",
      accent: "text-rose-500"
    }
  ];

  const philosophy = [
    "Unbiased guidance with zero conflict of interest",
    "Data-driven wealth strategies for long-term growth",
    "Tailored planning aligned with specific life goals",
    "Institutional grade research and market intelligence"
  ];

  return (
    <div className="bg-white min-h-screen">
      <BackNavigation onBackClick={onBackClick} label="Back to Services" />

      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest mb-6">
                <Search className="h-3 w-3" /> Learning Purpose Only
              </div>
              <div className="w-20 h-20 rounded-3xl bg-corex-navy flex items-center justify-center mb-8 shadow-2xl shadow-corex-navy/20">
                <Users2 className="h-10 w-10 text-indigo-500" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-corex-navy mb-8 tracking-tighter leading-[0.9]">
                Equity & <br />
                <span className="text-indigo-500 italic uppercase tracking-tighter">Stock</span> <br />
                Intelligence.
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Unlock the power of institutional-grade equity research. We provide the clarity and conviction needed to navigate the stock market and build a robust wealth strategy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
                <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-slate-100 relative z-10">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Investment Philosophy</h3>
                    <div className="space-y-6">
                        {philosophy.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="h-6 w-6 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" />
                                </div>
                                <p className="text-slate-600 font-bold tracking-tight">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-indigo-600 mb-4">Study Excellence</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">Data-Driven Market Intelligence</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {analysisTools.map((tool, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[32px] border border-slate-100 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-slate-100 transition-all group"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${tool.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <tool.icon className={`h-7 w-7 ${tool.color}`} />
                        </div>
                        <h4 className="text-xl font-black text-corex-navy mb-4 tracking-tight">{tool.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                            {tool.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Intelligence Section */}
      <section className="py-32 bg-corex-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl font-black mb-10 tracking-tighter">Active Market <br/><span className="text-corex-accent italic">Intelligence.</span></h2>
                    <div className="space-y-6">
                        {[
                            { icon: Cpu, title: "Algorithmic Screening", text: "Quantitative filters to find the strongest momentum and value plays." },
                            { icon: Layers, title: "Portfolio Optimization", text: "Mathematically balanced asset allocation to maximize risk-adjusted returns." },
                            { icon: BarChart2, title: "Active Monitoring", text: "Real-time updates on your holdings and critical market movements." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="h-12 w-12 rounded-2xl bg-corex-accent/10 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="h-6 w-6 text-corex-accent" />
                                </div>
                                <div>
                                    <h5 className="font-black text-white mb-2 tracking-tight">{item.title}</h5>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 p-12 flex items-center justify-center">
                        <div className="text-center">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="text-7xl font-black text-corex-accent mb-4"
                            >
                                360°
                            </motion.div>
                            <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Market Details</p>
                        </div>
                    </div>
                    {/* Floating Orbs */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/20 blur-2xl rounded-full"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Educational Masterclass */}
      <section className="py-24 px-4 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <div className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[8px] font-black uppercase tracking-widest mb-6">Study Masterclass</div>
                    <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">Mastering the <span className="text-indigo-600 italic">Equity Valuation</span> Node.</h2>
                    <p className="text-slate-500 font-medium leading-relaxed mb-8">
                        For academic study, understanding valuation metrics is paramount. We focus on teaching the relationship between earnings, growth, and price to identify market inefficiencies.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {[
                            { title: "Price-to-Earnings (P/E)", desc: "The ratio for valuing a company that measures its current share price relative to its per-share earnings." },
                            { title: "Price-to-Book (P/B)", desc: "Used to compare a firm's market capitalization to its book value. Ideal for banking & asset-heavy sectors." },
                            { title: "ROE & ROCE", desc: "Critical efficiency metrics measuring how well a company generates profits from its equity and capital." },
                            { title: "Debt-to-Equity", desc: "A measure of a company's financial leverage, indicating the relative proportion of equity and debt used." }
                        ].map((metric, i) => (
                            <div key={i} className="group">
                                <h4 className="text-sm font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{metric.title}</h4>
                                <p className="text-[11px] text-slate-400 font-bold leading-relaxed">{metric.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 bg-slate-50 p-10 rounded-[48px] border border-slate-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px:20px] opacity-10"></div>
                    <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                        <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Simulation Hub</h4>
                        <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden">
                             <div className="text-center">
                                <LineChart className="h-10 w-10 text-indigo-500 mx-auto mb-4" />
                                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Intrinsic Value Projection</p>
                                <p className="text-[8px] text-indigo-400 mt-2 font-bold uppercase tracking-widest">Calculated using DCF Model v2.4</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Top 5 Stocks Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-indigo-500 mb-4">Blue Chip Watch</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-corex-navy tracking-tighter">
                        Market <span className="text-indigo-500 italic uppercase tracking-tighter">Leaders</span>.
                    </h3>
                </div>
                <p className="text-slate-500 font-bold max-w-sm">
                    High-conviction picks from our institutional research desk across core sectors.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-4">
                {topStocks.map((stock, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white p-6 hover:shadow-2xl hover:shadow-slate-200 transition-all flex flex-col h-full"
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stock.color} blur-2xl rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 rounded-full bg-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-500">
                                    {stock.ticker}
                                </span>
                                <div className={`text-xs font-black ${stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'} tracking-tighter`}>
                                    {stock.change}
                                </div>
                            </div>

                            <h4 className="text-lg font-black text-corex-navy mb-1 leading-tight group-hover:text-indigo-500 transition-colors">
                                {stock.name}
                            </h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{stock.sector}</p>
                            
                            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
                                {stock.desc}
                            </p>

                            <div className="grid grid-cols-3 gap-2 mb-6">
                                <div className="p-2 rounded-xl bg-slate-50 text-center">
                                    <p className="text-[7px] font-black uppercase text-slate-400 mb-1">P/E Ratio</p>
                                    <p className="text-[10px] font-black text-corex-navy">{stock.peRatio}</p>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-50 text-center">
                                    <p className="text-[7px] font-black uppercase text-slate-400 mb-1">Mkt Cap</p>
                                    <p className="text-[10px] font-black text-corex-navy">{stock.marketCap}</p>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-50 text-center">
                                    <p className="text-[7px] font-black uppercase text-slate-400 mb-1">Div. Yield</p>
                                    <p className="text-[10px] font-black text-corex-navy">{stock.dividendYield}</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                <div>
                                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-300">Last Price</p>
                                    <p className="text-xs font-black text-corex-navy">{stock.price}</p>
                                </div>
                                <button className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-16 p-8 rounded-[40px] bg-indigo-500 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-indigo-500/20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                </div>
                <div className="flex gap-6 items-center relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <BarChart2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-black tracking-tight">Institutional Study Pack</p>
                        <p className="text-xs text-white/70 font-medium">Access detailed fundamental reports and technical outlooks for 200+ NSE stocks.</p>
                    </div>
                </div>
                <button className="px-8 py-4 bg-white text-indigo-500 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all relative z-10">
                    Subscribe To Reports
                </button>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-black text-corex-navy mb-8 tracking-tighter">Ready to optimize your <br/>portfolio?</h2>
            <p className="text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto">
                Stop guessing and start investing with conviction. Let our equity experts help you build a strategy that stands the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-corex-navy text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-indigo-500 transition-all shadow-xl shadow-corex-navy/10 hover:shadow-indigo-500/20">
                    Study Market
                </button>
                <button className="px-10 py-5 bg-slate-100 text-corex-navy rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">
                    Study Sample
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default EquityDetail;
