import React from 'react';
import { Briefcase, Zap, Globe, TrendingUp, Users, Award, ChevronRight } from 'lucide-react';

const Careers = ({ jobs, applicationLink }) => {
    const perks = [
        {
            icon: <Zap className="h-6 w-6 text-corex-accent" />,
            title: "Impactful Work",
            description: "Build tools used by thousands of investors daily to make critical financial decisions."
        },
        {
            icon: <Globe className="h-6 w-6 text-corex-accent" />,
            title: "On-Site Excellence",
            description: "Work with top talent in our modern, fully-equipped headquarters."
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-corex-accent" />,
            title: "Growth Budget",
            description: "Annual stipend for courses, conferences, and books to fuel your professional growth."
        },
        {
            icon: <Users className="h-6 w-6 text-corex-accent" />,
            title: "Top-Tier Team",
            description: "Collaborate with talented engineers, quants, and designers from around the globe."
        },
        {
            icon: <Briefcase className="h-6 w-6 text-corex-accent" />,
            title: "Comprehensive Health",
            description: "Premium medical, dental, and vision coverage for you and your dependents."
        },
        {
            icon: <Award className="h-6 w-6 text-corex-accent" />,
            title: "Equity Package",
            description: "Competitive compensation with generous equity options. We win together."
        }
    ];

    return (
        <div className="bg-corex-navy min-h-screen text-white font-sans overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden bg-corex-navy">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:40px_40px]"></div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-corex-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center z-10 relative">
                    <div className="glass-pill bg-yellow-400/10 border-yellow-500/20 text-yellow-600 mb-6">
                        <Briefcase className="h-3 w-3" /> Educational Purpose Only
                    </div>
                    <div className="glass-pill border-corex-accent/30 bg-corex-accent/10 text-corex-accent mb-8">
                        Join The Mission
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] uppercase">
                        Build the <span className="text-corex-accent relative inline-block italic">Future
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-corex-accent opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span><br />
                        of Financial Trust
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We are looking for exceptional talent to help us democratize institutional-grade financial data and empower investors worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="btn-institutional bg-corex-accent text-white shadow-corex-accent/40 w-full sm:w-auto" onClick={() => {
                            document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' });
                        }}>
                            View Open Positions
                        </button>
                        <button className="btn-institutional bg-white/5 border border-white/10 text-white hover:bg-white/10 w-full sm:w-auto">
                            Our Vision
                        </button>
                    </div>
                </div>
            </section>

            {/* Perks Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-corex-navy"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-corex-accent/5 skew-x-[-20deg] translate-x-32"></div>

                <div className="max-w-[1800px] mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-corex-accent/30 bg-corex-accent/10 text-corex-accent text-xs font-bold tracking-widest uppercase mb-6">
                            Life at Amigo
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Join Amigo?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">We offer a fast-paced, innovative environment where your work directly impacts the platform with industry-leading benefits.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {perks.map((perk, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[24px] hover:bg-white/10 hover:border-corex-accent/50 transition-all group overflow-hidden relative shadow-xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-corex-accent/10 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                                <div className="bg-corex-navy w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-lg group-hover:border-corex-accent/30 transition-colors">
                                    {perk.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 tracking-tight">{perk.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm font-medium">
                                    {perk.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section id="open-positions" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20 border-t border-white/10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-2">Open Positions</h2>
                            <p className="text-gray-400">Join us in building the ultimate financial platform.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((job) => (
                            <div key={job.id} className="group bg-white/5 border border-white/10 hover:border-corex-accent/50 rounded-xl p-6 transition-all flex flex-col gap-4 hover:bg-white/10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-corex-accent transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
                                            <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">{job.department}</span>
                                            <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {job.location}</span>
                                            <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.type}</span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                                            {job.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <a 
                                            href={applicationLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-white transition-colors cursor-pointer"
                                        >
                                            Submit Application <ChevronRight className="w-4 h-4" />
                                        </a>
                                        <a 
                                            href={applicationLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="md:hidden w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer"
                                        >
                                            <ChevronRight className="w-4 h-4 text-gray-400" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center p-8 bg-corex-accent/10 border border-corex-accent/20 rounded-2xl relative">
                        <h3 className="text-xl font-bold mb-2">Don't see a fit?</h3>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future openings.</p>
                        <a 
                            href={applicationLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-bold transition-colors text-sm"
                        >
                            Submit General Application
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
