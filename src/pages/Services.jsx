import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Landmark, ArrowRight, Globe2, Zap, Users2, BarChart2, ShieldCheck, Briefcase } from 'lucide-react';

const Services = ({ onExploreInsurance, onExploreMutualFunds, onExploreFixedDeposits, onExploreLoans, onExploreEquity, onExploreForex }) => {
  const serviceList = [
    {
      title: "Mutual Funds",
      desc: "Our platform provides data-driven intelligence for SIP, Lumpsum, and ELSS funds. Study historical performance nodes and risk-reward ratios.",
      icon: TrendingUp,
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-500",
      points: ["Data-Driven", "SIP & Lumpsum", "Risk-Reward Ratios"],
      badge: "Institutional Lab"
    },
    {
      title: "Equity & Stocks",
      desc: "Study long-term wealth creation with fundamental study and sector intelligence. Our platform provides high-conviction market nodes for academic study.",
      icon: BarChart2,
      color: "from-indigo-500/20 to-purple-500/20",
      accent: "text-indigo-500",
      points: ["Fundamental Study", "Wealth Creation", "Sector Intelligence"],
      badge: "Market Hub"
    },
    {
      title: "Global Forex Study",
      desc: "Deep-dive into the foreign exchange market with our institutional-grade learning nodes. Study currency pairs, volatility trends, and global macro-economic drivers.",
      icon: Globe2,
      color: "from-indigo-500/20 to-blue-500/20",
      accent: "text-indigo-500",
      points: ["Currency Dynamics", "Market Mechanics", "Macro Forecasting"],
      badge: "Learning Node"
    },
    {
      title: "Capital Protection",
      desc: "Study life, health, and general protection strategies. Our framework helps you analyze various risk-mitigation models.",
      icon: ShieldCheck,
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-500",
      points: ["Risk-Mitigation", "Coverage Study", "Family Protection"],
      badge: "Risk Lab"
    },
    {
      title: "Capital Solutions",
      desc: "Educational framework for debt management, including home, business, and educational credit lines. Study interest rate sensitivity nodes.",
      icon: Briefcase,
      color: "from-rose-500/20 to-pink-500/20",
      accent: "text-rose-500",
      points: ["Debt Management", "Credit Lines", "Rate Sensitivity"],
      badge: "Credit Node"
    },
    {
      title: "Fixed Deposits",
      desc: "Study low-risk capital preservation through fixed income and bond models. Study yield curves and maturity frameworks.",
      icon: Landmark,
      color: "from-amber-500/20 to-orange-500/20",
      accent: "text-amber-500",
      points: ["Yield Curves", "Capital Preservation", "Maturity Frameworks"],
      badge: "Yield Node"
    }
  ];

  return (
    <div className="bg-corex-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-corex-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-pill bg-white/5 border-white/10 text-white mb-10 !px-8 !py-3 !gap-6 mx-auto"
            >
              <Zap className="h-5 w-5 text-corex-accent" />
              <div className="glass-pill bg-yellow-400/10 border-yellow-500/20 text-yellow-600 !px-4 !py-1.5 !gap-3">
                  <Shield className="h-3.5 w-3.5" /> Educational Purpose Only
              </div>
              <span className="text-corex-accent">Intelligence Core</span>
            </motion.div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tight">
              The Amigo <br />
              <span className="text-corex-accent italic uppercase">Study Hub.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover a suite of institutional-grade financial services designed to protect your assets and accelerate your wealth growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {serviceList.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-xl hover:shadow-2xl hover:shadow-corex-accent/10 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.color} rounded-full blur-3xl -mr-24 -mt-24 opacity-50 group-hover:scale-150 transition-transform duration-1000`}></div>
                
                {/* Border Accent Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-corex-accent/20 rounded-[40px] transition-colors duration-500"></div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-corex-navy group-hover:scale-110 transition-all duration-500 shadow-lg shadow-slate-200/50`}>
                    <service.icon className={`h-10 w-10 ${service.accent} group-hover:text-white transition-colors duration-500`} />
                  </div>
                  
                  <h3 className="text-3xl font-black text-corex-navy mb-6 tracking-tight group-hover:text-corex-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed mb-10 font-medium text-lg">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {service.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-600 transition-colors">
                        <div className={`h-1.5 w-1.5 rounded-full ${service.accent} group-hover:scale-150 transition-transform`}></div>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <button 
                    onClick={() => {
                      if (service.title === "Capital Protection") {
                        onExploreInsurance();
                      } else if (service.title === "Mutual Funds") {
                        onExploreMutualFunds();
                      } else if (service.title === "Fixed Deposits") {
                        onExploreFixedDeposits();
                      } else if (service.title === "Capital Solutions") {
                        onExploreLoans();
                      } else if (service.title === "Equity & Stocks") {
                        onExploreEquity();
                      } else if (service.title === "Global Forex Study") {
                        onExploreForex();
                      }
                    }}
                    className="flex items-center gap-3 text-corex-navy font-black uppercase tracking-[0.3em] text-[10px] group/btn bg-slate-50 px-6 py-3 rounded-full hover:bg-corex-accent hover:text-white transition-all cursor-pointer"
                  >
                    Learning Node <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-corex-accent rounded-full"></div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-navy/60">Our Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-corex-navy leading-tight mb-8">
                The Amigo <br />
                <span className="text-corex-accent italic">Difference.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                We combine deep market intelligence with a personalized approach, ensuring that every financial decision you make is backed by data and aligned with your long-term vision.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Globe2, title: "Global Standards", sub: "Institutional grade protocols" },
                  { icon: Zap, title: "Fast Execution", sub: "Optimized deployment cycles" },
                  { icon: Users2, title: "Expert Support", sub: "Dedicated wealth managers" },
                  { icon: Shield, title: "High Security", sub: "Bank-grade encryption" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-md">
                      <item.icon className="h-6 w-6 text-corex-accent" />
                    </div>
                    <div>
                      <p className="font-black text-corex-navy text-sm">{item.title}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-corex-navy rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 relative z-10 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-12">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-corex-accent" />
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-corex-accent/20 text-corex-accent text-[10px] font-black uppercase tracking-widest">Active Intelligence</span>
                  </div>
                  
                  <div className="space-y-8">
                    {[70, 85, 60, 95].map((w, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
                          <span>Metric Node {i+1}</span>
                          <span>{w}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${w}%` }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                            className="h-full bg-corex-accent shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-corex-accent/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
