import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Umbrella, Car, CheckCircle2, ArrowRight, ShieldCheck, ArrowLeft, Activity, Home, Star, Briefcase, Plus } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import BackNavigation from '../components/BackNavigation';

const InsuranceDetail = ({ onBackClick }) => {
  const insuranceTypes = [
    {
      title: "Life Insurance",
      icon: Heart,
      desc: "Secure your family's financial future with comprehensive life cover options including Term, Whole Life, and Endowment plans.",
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "Health Insurance",
      icon: Activity,
      desc: "Get access to the best medical care without financial stress. We offer plans covering hospitalization, critical illness, and maternity.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Motor Insurance",
      icon: Car,
      desc: "Comprehensive protection for your vehicles against accidents, theft, and third-party liabilities with quick claim settlements.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Home Insurance",
      icon: Home,
      desc: "Protect your most valuable asset against fire, natural disasters, and burglary with our tailored home insurance policies.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  const topInsurers = [
    {
      provider: "HDFC Life",
      category: "Term Life",
      feature: "99.7% Claim Settlement",
      usp: "High cover with critical illness riders.",
      color: "from-rose-500/20 to-rose-500/5",
      accent: "text-rose-500",
      details: {
        network: "15,000+ Hospitals",
        claimRatio: "99.7% (FY23)",
        keyBenefit: "Zero cost term plan options",
        riders: ["Critical Illness", "Accidental Death", "Waiver of Premium"]
      }
    },
    {
      provider: "Star Health",
      category: "Health",
      feature: "Cashless in 14k+ Hospitals",
      usp: "Comprehensive coverage for pre-existing diseases.",
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-500",
      details: {
        network: "14,200+ Hospitals",
        claimRatio: "94.5% (Settlement)",
        keyBenefit: "No medical screening up to 50 years",
        riders: ["Ayush Cover", "Automatic Restoration", "Air Ambulance"]
      }
    },
    {
      provider: "ICICI Lombard",
      category: "General/Motor",
      feature: "Instant Policy Issuance",
      usp: "Digital-first claims and high garage network.",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-500",
      details: {
        network: "10,000+ Garages",
        claimRatio: "97.2% (Motor)",
        keyBenefit: "Zero depreciation cover available",
        riders: ["Roadside Assistance", "Engine Protect", "Consumables"]
      }
    },
    {
      provider: "Care Health",
      category: "Health",
      feature: "No Claim Bonus Super",
      usp: "Inflation-protected health cover options.",
      color: "from-indigo-500/20 to-indigo-500/5",
      accent: "text-indigo-500",
      details: {
        network: "21,000+ Partners",
        claimRatio: "95.2% (Health)",
        keyBenefit: "Annual health check-ups included",
        riders: ["Global Cover", "OPD Care", "Alternative Treatments"]
      }
    },
    {
      provider: "TATA AIA",
      category: "Life",
      feature: "Wealth + Protection",
      usp: "Institutional grade investment-linked plans.",
      color: "from-amber-500/20 to-amber-500/5",
      accent: "text-amber-500",
      details: {
        network: "Pan-India Presence",
        claimRatio: "99.0% (Life)",
        keyBenefit: "Customizable premium payment terms",
        riders: ["Income Benefit", "Terminal Illness", "Hospital Cash"]
      }
    }
  ];

  const [expandedInsurer, setExpandedInsurer] = useState(null);

  const benefits = [
    "Institutional grade advisory for policy selection",
    "Hassle-free documentation and claim assistance",
    "Competitive premiums from India's top insurers",
    "Personalized risk assessment for every client"
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
                <Shield className="h-3 w-3" /> Learning Purpose Only
              </div>
              <div className="w-20 h-20 rounded-3xl bg-corex-navy flex items-center justify-center mb-8 shadow-2xl shadow-corex-navy/20">
                <Shield className="h-10 w-10 text-corex-accent" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-corex-navy mb-8 tracking-tighter leading-[0.9]">
                Life & <br />
                <span className="text-corex-accent italic uppercase tracking-tighter">General</span> <br />
                Insurance.
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Comprehensive protection strategies designed to safeguard your family, health, and assets against life's uncertainties with institutional-grade precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
                <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-slate-100 relative z-10">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Why Insurance Matters</h3>
                    <div className="space-y-6">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="h-6 w-6 rounded-full bg-corex-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-corex-accent" />
                                </div>
                                <p className="text-slate-600 font-bold tracking-tight">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-corex-accent/10 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Types Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-corex-accent mb-4">Our Specializations</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">Comprehensive Coverage for Every Need</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {insuranceTypes.map((type, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[32px] border border-slate-100 hover:border-corex-accent/30 hover:shadow-xl hover:shadow-slate-100 transition-all group"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${type.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <type.icon className={`h-7 w-7 ${type.color}`} />
                        </div>
                        <h4 className="text-xl font-black text-corex-navy mb-4 tracking-tight">{type.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                            {type.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Top Rated Plans Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-corex-accent mb-4">Market Leaders</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-corex-navy tracking-tighter">
                        Top Rated <span className="text-corex-accent italic uppercase tracking-tighter">Plans</span>.
                    </h3>
                </div>
                <p className="text-slate-500 font-bold max-w-sm">
                    Curated insurance products with high claim settlement ratios and robust coverage.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-4">
                {topInsurers.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setExpandedInsurer(expandedInsurer === i ? null : i)}
                        className={`group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white p-6 hover:shadow-2xl hover:shadow-slate-200 transition-all flex flex-col h-full cursor-pointer ${expandedInsurer === i ? 'lg:col-span-2' : ''}`}
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-2xl rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 rounded-full bg-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-500">
                                    {item.category}
                                </span>
                                <div className="text-corex-accent">
                                    <Star className="h-4 w-4 fill-current" />
                                </div>
                            </div>

                            <h4 className="text-lg font-black text-corex-navy mb-1 leading-tight group-hover:text-corex-accent transition-colors">
                                {item.provider}
                            </h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{item.feature}</p>
                            
                            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6">
                                {item.usp}
                            </p>

                            <AnimatePresence>
                                {expandedInsurer === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-6 pt-6 border-t border-slate-50 space-y-4"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Network Presence</p>
                                                <p className="text-[10px] font-bold text-corex-navy">{item.details.network}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Claim Ratio</p>
                                                <p className="text-[10px] font-bold text-corex-navy">{item.details.claimRatio}</p>
                                            </div>
                                            <div className="col-span-2">
                                                <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Key Study Node</p>
                                                <p className="text-[10px] font-bold text-corex-navy">{item.details.keyBenefit}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-2">Available Study Riders</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.details.riders.map((r, idx) => (
                                                    <span key={idx} className="px-2 py-1 rounded-md bg-slate-50 text-[9px] font-bold text-slate-500 border border-slate-100">
                                                        {r}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    {expandedInsurer === i ? 'Hide Details' : 'View Policy Study'}
                                </span>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedInsurer(expandedInsurer === i ? null : i);
                                    }}
                                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${expandedInsurer === i ? 'bg-corex-navy text-white rotate-45' : 'bg-slate-50 hover:bg-corex-accent hover:text-white'}`}
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

      {/* Detailed Content Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl font-black mb-10 tracking-tighter">The Importance of <br/><span className="text-corex-accent italic">Strategic Protection.</span></h2>
                    <div className="space-y-8 text-slate-400 font-medium leading-relaxed">
                        <p>
                            At Amigo Associate, we believe that insurance is not just a policy; it's a critical component of your broader financial architecture. Without adequate protection, even the most robust investment portfolios can be derailed by unexpected life events.
                        </p>
                        <p>
                            Our approach involves a thorough analysis of your current liabilities, family structure, and long-term goals to recommend coverage that is neither excessive nor insufficient.
                        </p>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[40px] p-12">
                    <div className="flex items-center gap-4 mb-10">
                        <Briefcase className="h-8 w-8 text-corex-accent" />
                        <h3 className="text-2xl font-black tracking-tight">Enterprise Solutions</h3>
                    </div>
                    <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                        For business owners, we provide specialized general insurance solutions including Office Package Policies, Professional Indemnity, and Workmen's Compensation to ensure your enterprise remains resilient.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {["Commercial Cover", "Marine Insurance", "Asset Protection", "Liability Cover"].map((tag, i) => (
                            <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-corex-accent">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-black text-corex-navy mb-8 tracking-tighter">Ready to protect your <br/>future?</h2>
            <p className="text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto">
                Consult with our expert insurance advisors to build a customized protection plan that fits your lifestyle and financial goals perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-corex-navy text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-corex-accent transition-all shadow-xl shadow-corex-navy/10 hover:shadow-corex-accent/20">
                    Study Policies
                </button>
                <button className="px-10 py-5 bg-slate-100 text-corex-navy rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">
                    Academic Consultation
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default InsuranceDetail;
