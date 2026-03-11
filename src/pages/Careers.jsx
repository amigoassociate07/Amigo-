import React, { useState, useEffect } from 'react';
import { Briefcase, Zap, Globe, TrendingUp, Users, Award, ChevronRight, Edit2, Trash2, Plus, X, Save } from 'lucide-react';
import { INITIAL_POSITIONS } from '../data/careersData';

const Careers = () => {
    const [positions, setPositions] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const [showAdminLogin, setShowAdminLogin] = useState(false);

    // Initialize positions from localStorage or careersData
    useEffect(() => {
        const savedPositions = localStorage.getItem('amigo_positions');
        if (savedPositions) {
            setPositions(JSON.parse(savedPositions));
        } else {
            setPositions(INITIAL_POSITIONS);
            localStorage.setItem('amigo_positions', JSON.stringify(INITIAL_POSITIONS));
        }
    }, []);

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

    const savePositions = (updatedPositions) => {
        setPositions(updatedPositions);
        localStorage.setItem('amigo_positions', JSON.stringify(updatedPositions));
    };

    const handleAddJob = () => {
        const newJob = {
            id: Date.now().toString(),
            title: "New Position",
            department: "Engineering",
            location: "On-site",
            type: "Full-time",
            description: ""
        };
        setEditingJob(newJob);
        setIsEditing(true);
    };

    const handleEditJob = (job) => {
        setEditingJob({ ...job });
        setIsEditing(true);
    };

    const handleDeleteJob = (id) => {
        if (window.confirm('Are you sure you want to delete this position?')) {
            const updated = positions.filter(j => j.id !== id);
            savePositions(updated);
        }
    };

    const handleSaveJob = (e) => {
        e.preventDefault();
        let updated;
        if (positions.find(j => j.id === editingJob.id)) {
            updated = positions.map(j => j.id === editingJob.id ? editingJob : j);
        } else {
            updated = [...positions, editingJob];
        }
        savePositions(updated);
        setIsEditing(false);
        setEditingJob(null);
    };

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
                    <div className="inline-block px-4 py-1.5 rounded-full border border-corex-accent/30 bg-corex-accent/10 text-corex-accent text-xs font-bold tracking-widest uppercase mb-8">
                        Join The Mission
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                        Build the <span className="text-corex-accent relative inline-block">Future
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
                        <button className="btn-accent px-8 py-4 w-full sm:w-auto text-base" onClick={() => {
                            document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' });
                        }}>
                            View Open Positions
                        </button>
                        <button className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors w-full sm:w-auto text-base">
                            Learn About Our Culture
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
                        {isAdmin && (
                            <button 
                                onClick={handleAddJob}
                                className="flex items-center gap-2 bg-corex-accent text-corex-navy px-4 py-2 rounded-lg font-bold hover:bg-white transition-colors"
                            >
                                <Plus className="w-4 h-4" /> Add Position
                            </button>
                        )}
                    </div>

                    <div className="space-y-4">
                        {positions.map((job) => (
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
                                        {isAdmin ? (
                                            <div className="flex items-center gap-2">
                                                <button 
                                                    onClick={() => handleEditJob(job)}
                                                    className="p-2 rounded-lg bg-white/5 hover:bg-corex-accent hover:text-corex-navy transition-all"
                                                    title="Edit Position"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    onClick={() => handleDeleteJob(job.id)}
                                                    className="p-2 rounded-lg bg-white/5 hover:bg-red-500 text-white transition-all"
                                                    title="Delete Position"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <button className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-white transition-colors">
                                                    Apply Now <ChevronRight className="w-4 h-4" />
                                                </button>
                                                <div className="md:hidden w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center p-8 bg-corex-accent/10 border border-corex-accent/20 rounded-2xl relative">
                        <h3 className="text-xl font-bold mb-2">Don't see a fit?</h3>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future openings.</p>
                        <button className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-bold transition-colors text-sm">
                            Submit General Application
                        </button>
                        
                        {/* Admin Trigger */}
                        <div 
                            className="absolute bottom-4 right-4 group/admin"
                            onClick={() => setIsAdmin(!isAdmin)}
                        >
                            <div className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${isAdmin ? 'bg-corex-accent text-corex-navy opacity-100' : 'bg-white/5 text-gray-400 opacity-20 hover:opacity-100 hover:bg-white/10'}`}>
                                <Edit2 className="w-4 h-4" />
                            </div>
                            {!isAdmin && (
                                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black/80 text-[10px] py-1 px-2 rounded opacity-0 group-hover/admin:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Toggle Admin Mode
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Edit Modal */}
            {isEditing && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsEditing(false)}></div>
                    <div className="relative bg-corex-navy border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-xl font-bold">{editingJob?.id ? 'Edit Position' : 'Add Position'}</h2>
                            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleSaveJob} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Title</label>
                                    <input 
                                        type="text" 
                                        value={editingJob.title}
                                        onChange={e => setEditingJob({...editingJob, title: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-corex-accent outline-none"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Department</label>
                                    <input 
                                        type="text" 
                                        value={editingJob.department}
                                        onChange={e => setEditingJob({...editingJob, department: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-corex-accent outline-none"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Location</label>
                                    <input 
                                        type="text" 
                                        value={editingJob.location}
                                        onChange={e => setEditingJob({...editingJob, location: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-corex-accent outline-none"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Type</label>
                                    <input 
                                        type="text" 
                                        value={editingJob.type}
                                        onChange={e => setEditingJob({...editingJob, type: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-corex-accent outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Description</label>
                                <textarea 
                                    value={editingJob.description}
                                    onChange={e => setEditingJob({...editingJob, description: e.target.value})}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:border-corex-accent outline-none h-32 resize-none"
                                    required
                                />
                            </div>
                            <div className="pt-4 flex gap-3">
                                <button 
                                    type="submit"
                                    className="flex-1 bg-corex-accent text-corex-navy font-bold py-3 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
                                >
                                    <Save className="w-4 h-4" /> Save Changes
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="flex-1 bg-white/5 border border-white/10 font-bold py-3 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Careers;
