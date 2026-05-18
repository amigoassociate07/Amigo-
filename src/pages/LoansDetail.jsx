import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, ArrowLeft, Home, User, Briefcase, Building2, Clock, BadgePercent, FileText, ArrowRight, TrendingUp, Landmark, Percent, ShieldCheck } from 'lucide-react';
import BackNavigation from '../components/BackNavigation';

const LoansDetail = ({ onBackClick }) => {
  const loanTypes = [
    {
      title: "Home Loans",
      icon: Home,
      desc: "Turn your dream home into reality with our flexible mortgage solutions. We assist with new purchases, construction, and plot loans.",
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "Personal Loans",
      icon: User,
      desc: "Get instant financial support for your personal needs—be it travel, education, or weddings—with minimal documentation.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      title: "Business Loans",
      icon: Briefcase,
      desc: "Fuel your enterprise growth with working capital or term loans designed for MSMEs and established businesses alike.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Loan Against Property",
      icon: Building2,
      desc: "Unlock the value of your real estate assets for higher loan amounts at lower interest rates compared to personal loans.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  const featuredRates = [
    {
      lender: "SBI",
      type: "Home Loan",
      rate: "8.40%",
      feature: "Zero Processing Fee",
      usp: "Most trusted public sector lender with stable rates.",
      color: "from-blue-500/20 to-blue-500/5",
      accent: "text-blue-500"
    },
    {
      lender: "HDFC Bank",
      type: "Home Loan",
      rate: "8.50%",
      feature: "Quick Sanction",
      usp: "Industry leading turnaround time and digital process.",
      color: "from-indigo-500/20 to-indigo-500/5",
      accent: "text-indigo-500"
    },
    {
      lender: "ICICI Bank",
      type: "Personal Loan",
      rate: "10.65%",
      feature: "Pre-approved Offers",
      usp: "Instant credit for salaried professionals with minimal docs.",
      color: "from-rose-500/20 to-rose-500/5",
      accent: "text-rose-500"
    },
    {
      lender: "Kotak Mahindra",
      type: "Business Loan",
      rate: "13.50%",
      feature: "Flexible Tenure",
      usp: "Customized repayment schedules for growing MSMEs.",
      color: "from-emerald-500/20 to-emerald-500/5",
      accent: "text-emerald-500"
    },
    {
      lender: "Muthoot Finance",
      type: "Gold Loan",
      rate: "9.90%",
      feature: "Instant Cash",
      usp: "High LTV and safe vaulting for your precious assets.",
      color: "from-amber-500/20 to-amber-500/5",
      accent: "text-amber-500"
    }
  ];

  const features = [
    "Competitive interest rates from leading financial institutions",
    "End-to-end assistance with documentation and processing",
    "Transparent charges with no hidden cost structures",
    "Specialized advisory for balance transfers and top-ups"
  ];

  return (
    <div className="bg-white min-h-screen">
      <BackNavigation onBackClick={onBackClick} label="Back to Services" />

      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] font-black uppercase tracking-widest mb-6">
                <BadgePercent className="h-3 w-3" /> Learning Purpose Only
              </div>
              <div className="w-20 h-20 rounded-3xl bg-corex-navy flex items-center justify-center mb-8 shadow-2xl shadow-corex-navy/20">
                <Zap className="h-10 w-10 text-rose-500" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-corex-navy mb-8 tracking-tighter leading-[0.9]">
                Loans & <br />
                <span className="text-rose-500 italic uppercase tracking-tighter">Mortgages</span> <br />
                Solutions.
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Navigate the complex landscape of credit with expert guidance. We help you secure the best interest rates and ensure a smooth, hassle-free approval process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
                <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-slate-100 relative z-10">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Process Advantage</h3>
                    <div className="space-y-6">
                        {features.map((feature, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="h-6 w-6 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-rose-500" />
                                </div>
                                <p className="text-slate-600 font-bold tracking-tight">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-rose-500/10 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-rose-600 mb-4">Capital Deployment</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">Tailored Lending for Every Milestone</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {loanTypes.map((loan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[32px] border border-slate-100 hover:border-rose-500/30 hover:shadow-xl hover:shadow-slate-100 transition-all group"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${loan.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <loan.icon className={`h-7 w-7 ${loan.color}`} />
                        </div>
                        <h4 className="text-xl font-black text-corex-navy mb-4 tracking-tight">{loan.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                            {loan.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Featured Rates Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-rose-600 mb-4">Lending Hub</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-corex-navy tracking-tighter">
                        Featured <span className="text-rose-500 italic uppercase tracking-tighter">Rates</span>.
                    </h3>
                </div>
                <p className="text-slate-500 font-bold max-w-sm">
                    Competitive interest rates from India's leading banks and financial institutions.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-4">
                {featuredRates.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white p-6 hover:shadow-2xl hover:shadow-slate-200 transition-all flex flex-col h-full"
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-2xl rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 rounded-full bg-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-500">
                                    {item.type}
                                </span>
                                <div className="text-rose-500">
                                    <TrendingUp className="h-4 w-4" />
                                </div>
                            </div>

                            <h4 className="text-lg font-black text-corex-navy mb-1 leading-tight group-hover:text-rose-500 transition-colors">
                                {item.lender}
                            </h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Starting @ {item.rate}</p>
                            
                            <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
                                {item.usp}
                            </p>

                            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.feature}</span>
                                <button className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl font-black mb-10 tracking-tighter">Fast Execution. <br/><span className="text-rose-500 italic">Smooth Processing.</span></h2>
                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { icon: Clock, title: "Quick Approval", sub: "Minimal turnaround time" },
                            { icon: BadgePercent, title: "Best Rates", sub: "Market leading interest" },
                            { icon: FileText, title: "Easy Documentation", sub: "Digital-first approach" },
                            { icon: User, title: "Dedicated Help", sub: "One-on-one assistance" }
                        ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <item.icon className="h-6 w-6 text-rose-500" />
                                <h5 className="font-black text-sm tracking-tight">{item.title}</h5>
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{item.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[40px] p-12">
                    <p className="text-lg font-medium text-slate-300 leading-relaxed italic mb-8">
                        "Our goal is to remove the friction from the borrowing experience. We leverage our institutional relationships with 30+ banks and NBFCs to ensure our clients get preferential treatment and the most competitive pricing available."
                    </p>
                    <div className="h-[1px] w-full bg-white/10 mb-8"></div>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-rose-500 flex items-center justify-center text-xs font-black">AA</div>
                        <div>
                            <p className="text-sm font-black tracking-tight text-white uppercase">Credit Advisory Team</p>
                            <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Amigo Associate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-black text-corex-navy mb-8 tracking-tighter">Unlock your capital <br/>potential.</h2>
            <p className="text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto">
                Consult with our loan specialists today and get a personalized quote that perfectly matches your financial requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-corex-navy text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-rose-500 transition-all shadow-xl shadow-corex-navy/10 hover:shadow-rose-500/20">
                    Study Lending
                </button>
                <button className="px-10 py-5 bg-slate-100 text-corex-navy rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">
                    Lending Study
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default LoansDetail;
