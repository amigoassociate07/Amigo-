import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Save, Briefcase, Globe, LayoutDashboard, TrendingUp, Calendar, Package, DollarSign, Lock, User, Eye, EyeOff, LogOut, ShieldCheck, Settings, Link2 } from 'lucide-react';

const NAVY  = '#0f172a';
const GREEN = '#10b981';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'amigo@2026';

// ─────────────────────────────────────────────────────── LOGIN SCREEN
const LoginScreen = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [error, setError]       = useState('');
    const [loading, setLoading]   = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setTimeout(() => {
            if (password === ADMIN_PASS) {
                sessionStorage.setItem('amigo_admin_auth', '1');
                onLogin();
            } else {
                setError('Invalid password.');
            }
            setLoading(false);
        }, 600);
    };

    return (
        <div
            className="flex items-center justify-center px-4 py-20 relative"
            style={{ minHeight: 'calc(100vh - 80px)' }}
        >
            {/* Background glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                style={{ background: GREEN, filter: 'blur(120px)' }}
            />

            <div
                className="relative w-full max-w-md rounded-3xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 64px rgba(0,0,0,0.5)' }}
            >
                {/* Header */}
                <div className="px-10 pt-10 pb-8 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div
                        className="h-16 w-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                        style={{ background: `${GREEN}20`, border: `1px solid ${GREEN}40` }}
                    >
                        <ShieldCheck className="h-8 w-8" style={{ color: GREEN }} />
                    </div>
                    <h1 className="text-2xl font-black text-white mb-1">Admin Portal</h1>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Enter password to manage content
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-10 py-8 space-y-6">
                    {/* Password */}
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            Admin Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
                            <input
                                type={showPass ? 'text' : 'password'}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter password"
                                required
                                className="w-full pl-11 pr-12 py-4 rounded-xl text-sm text-white focus:outline-none transition-all"
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    border: `1px solid ${error ? '#ef4444' : 'rgba(255,255,255,0.1)'}`,
                                }}
                                onFocus={e => e.target.style.borderColor = GREEN}
                                onBlur={e => e.target.style.borderColor = error ? '#ef4444' : 'rgba(255,255,255,0.1)'}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(p => !p)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                                style={{ color: 'rgba(255,255,255,0.3)' }}
                            >
                                {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Error */}
                    {error && (
                        <div
                            className="rounded-xl px-4 py-3 text-sm font-semibold"
                            style={{ background: '#ef444420', color: '#fca5a5', border: '1px solid #ef444440' }}
                        >
                            {error}
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl font-black text-sm transition-all hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 mt-2"
                        style={{ background: GREEN, color: 'white' }}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>

                    <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                        Authorised by Arihant Capital Markets Ltd
                    </p>
                </form>
            </div>
        </div>
    );
};

// ─────────────────────────────────────────────────────── CAREERS TAB
const CareersTab = ({ jobs, onAddJob, onUpdateJob, onDeleteJob, applicationLink, setApplicationLink }) => {
    const [isEditing, setIsEditing]   = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const [tempLink, setTempLink]     = useState(applicationLink);
    const [linkSaved, setLinkSaved]   = useState(false);

    const handleEdit = (job) => { setEditingJob({ ...job }); setIsEditing(true); };
    const handleAddNew = () => {
        setEditingJob({ title: '', department: 'Engineering', location: '', type: 'Full-time', description: '' });
        setIsEditing(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        editingJob.id ? onUpdateJob(editingJob) : onAddJob(editingJob);
        setIsEditing(false); setEditingJob(null);
    };

    const handleSaveLink = () => {
        setApplicationLink(tempLink);
        setLinkSaved(true);
        setTimeout(() => setLinkSaved(false), 3000);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <h2 className="text-2xl font-bold mb-1">Open Positions</h2>
                    <p className="text-gray-400 text-sm">Manage open positions and recruitment.</p>
                </div>
                <button onClick={handleAddNew} className="btn-accent px-6 py-3 flex items-center gap-2 self-start md:self-auto">
                    <Plus className="w-5 h-5" /> Add Position
                </button>
            </div>

            <div className="grid gap-6 mb-12">
                {jobs.map(job => (
                    <div key={job.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/10 transition-all">
                        <div>
                            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                                <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">{job.department}</span>
                                <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {job.location}</span>
                                <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.type}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={() => handleEdit(job)} className="p-3 rounded-xl bg-white/5 hover:bg-corex-accent hover:text-corex-navy transition-all" title="Edit">
                                <Edit2 className="w-5 h-5" />
                            </button>
                            <button onClick={() => { if (window.confirm('Delete this position?')) onDeleteJob(job.id); }} className="p-3 rounded-xl bg-white/5 hover:bg-red-500 transition-all" title="Delete">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {jobs.length === 0 && (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10 mb-12">
                    <Briefcase className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">No open positions. Create one to get started.</p>
                </div>
            )}

            {/* Google Form Link Section */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-corex-accent/20 flex items-center justify-center border border-corex-accent/30">
                        <Link2 className="text-corex-accent h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Application Gate</h2>
                        <p className="text-gray-400 text-sm">Configure where candidates are redirected when they apply.</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                            Google Form Link
                        </label>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                value={tempLink}
                                onChange={(e) => setTempLink(e.target.value)}
                                placeholder="Enter Google Form URL"
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-corex-accent transition-all"
                            />
                            <button
                                onClick={handleSaveLink}
                                className="bg-corex-accent hover:bg-corex-accent/90 text-white font-bold py-3 px-8 rounded-xl text-sm transition-all shadow-lg shadow-corex-accent/20 active:scale-95 whitespace-nowrap"
                            >
                                Save Link
                            </button>
                        </div>
                        {linkSaved && (
                            <p className="text-green-400 text-xs font-bold flex items-center gap-2 mt-2">
                                <ShieldCheck className="w-4 h-4" /> Link updated successfully!
                            </p>
                        )}
                        <p className="text-[11px] text-gray-500 mt-2">
                            This link is used for all "Apply Now" buttons and the "General Application" button on the Careers page.
                        </p>
                    </div>
                </div>
            </div>

            {/* Careers Edit Modal */}
            {isEditing && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsEditing(false)} />
                    <div className="relative bg-corex-navy border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl">
                        <div className="p-8 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-2xl font-black">{editingJob?.id ? 'Edit Position' : 'New Position'}</h2>
                            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Title</label>
                                    <input type="text" value={editingJob.title} onChange={e => setEditingJob({...editingJob, title: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-corex-accent outline-none transition-colors"
                                        placeholder="e.g. Senior Frontend Engineer" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Department</label>
                                    <select value={editingJob.department} onChange={e => setEditingJob({...editingJob, department: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-corex-accent outline-none transition-colors appearance-none">
                                        {['Engineering','Product','Design','Marketing','Sales','Customer Success','Operations','Management','Business'].map(d =>
                                            <option key={d} value={d}>{d}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Location</label>
                                    <input type="text" value={editingJob.location} onChange={e => setEditingJob({...editingJob, location: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-corex-accent outline-none transition-colors"
                                        placeholder="e.g. Remote / Mumbai" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Type</label>
                                    <input type="text" value={editingJob.type} onChange={e => setEditingJob({...editingJob, type: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-corex-accent outline-none transition-colors"
                                        placeholder="e.g. Full-time / Contract" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Description</label>
                                <textarea value={editingJob.description} onChange={e => setEditingJob({...editingJob, description: e.target.value})}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-corex-accent outline-none h-40 resize-none transition-colors"
                                    placeholder="Describe the role, responsibilities, and requirements..." required />
                            </div>
                            <div className="pt-4 flex gap-4">
                                <button type="submit" className="flex-1 bg-corex-accent text-corex-navy font-black py-4 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                                    <Save className="w-5 h-5" /> {editingJob.id ? 'Update Position' : 'Create Position'}
                                </button>
                                <button type="button" onClick={() => setIsEditing(false)} className="flex-1 bg-white/5 border border-white/10 font-black py-4 rounded-xl hover:bg-white/10 transition-colors">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

// ─────────────────────────────────────────────────────── IPO TAB
const STATUS_OPTIONS = ['Upcoming', 'Open', 'Closed'];

const IPOTab = ({ ipos, onAddIpo, onUpdateIpo, onDeleteIpo }) => {
    const [isEditing, setIsEditing]   = useState(false);
    const [editingIpo, setEditingIpo] = useState(null);

    const blankIpo = { company: '', sector: '', priceRange: '', lotSize: '', openDate: '', closeDate: '', listingDate: '', status: 'Upcoming', description: '' };

    const handleEdit   = (ipo) => { setEditingIpo({ ...ipo }); setIsEditing(true); };
    const handleAddNew = () => { setEditingIpo({ ...blankIpo }); setIsEditing(true); };
    const handleSubmit = (e) => {
        e.preventDefault();
        editingIpo.id ? onUpdateIpo(editingIpo) : onAddIpo(editingIpo);
        setIsEditing(false); setEditingIpo(null);
    };

    const statusColor = { Open: '#10b981', Upcoming: '#f59e0b', Closed: '#64748b' };

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <p className="text-gray-400 text-sm">Manage upcoming and live IPO listings.</p>
                <button onClick={handleAddNew} className="btn-accent px-6 py-3 flex items-center gap-2">
                    <Plus className="w-5 h-5" /> Add IPO
                </button>
            </div>

            <div className="grid gap-6">
                {ipos.map(ipo => (
                    <div key={ipo.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/10 transition-all">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold">{ipo.company}</h3>
                                <span className="text-xs font-bold px-3 py-1 rounded-full"
                                    style={{ background: `${statusColor[ipo.status] || '#64748b'}25`, color: statusColor[ipo.status] || '#64748b' }}>
                                    {ipo.status}
                                </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                                <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">{ipo.sector}</span>
                                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {ipo.priceRange}</span>
                                <span className="flex items-center gap-1"><Package className="w-3 h-3" /> Lot: {ipo.lotSize}</span>
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {ipo.openDate} → {ipo.closeDate}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={() => handleEdit(ipo)} className="p-3 rounded-xl bg-white/5 hover:bg-corex-accent hover:text-corex-navy transition-all" title="Edit">
                                <Edit2 className="w-5 h-5" />
                            </button>
                            <button onClick={() => { if (window.confirm('Delete this IPO?')) onDeleteIpo(ipo.id); }} className="p-3 rounded-xl bg-white/5 hover:bg-red-500 transition-all" title="Delete">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {ipos.length === 0 && (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                    <TrendingUp className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">No IPOs listed. Add one to get started.</p>
                </div>
            )}

            {/* IPO Edit Modal */}
            {isEditing && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsEditing(false)} />
                    <div className="relative bg-corex-navy border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-corex-navy z-10">
                            <h2 className="text-2xl font-black">{editingIpo?.id ? 'Edit IPO' : 'New IPO'}</h2>
                            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: 'Company Name',  key: 'company',     placeholder: 'e.g. Swiggy Ltd' },
                                    { label: 'Sector',        key: 'sector',      placeholder: 'e.g. Consumer Tech' },
                                    { label: 'Price Range',   key: 'priceRange',  placeholder: 'e.g. ₹350 – ₹390' },
                                    { label: 'Lot Size',      key: 'lotSize',     placeholder: 'e.g. 150' },
                                    { label: 'Open Date',     key: 'openDate',    placeholder: 'e.g. 25 Mar 2026' },
                                    { label: 'Close Date',    key: 'closeDate',   placeholder: 'e.g. 27 Mar 2026' },
                                    { label: 'Listing Date',  key: 'listingDate', placeholder: 'e.g. 01 Apr 2026' },
                                ].map(({ label, key, placeholder }) => (
                                    <div key={key} className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">{label}</label>
                                        <input type="text" value={editingIpo[key]} onChange={e => setEditingIpo({...editingIpo, [key]: e.target.value})}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-corex-accent outline-none transition-colors"
                                            placeholder={placeholder} required />
                                    </div>
                                ))}
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Status</label>
                                    <select value={editingIpo.status} onChange={e => setEditingIpo({...editingIpo, status: e.target.value})}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-corex-accent outline-none transition-colors appearance-none">
                                        {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Description</label>
                                <textarea value={editingIpo.description} onChange={e => setEditingIpo({...editingIpo, description: e.target.value})}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-corex-accent outline-none h-32 resize-none transition-colors"
                                    placeholder="Short description about the company..." required />
                            </div>
                            <div className="pt-4 flex gap-4">
                                <button type="submit" className="flex-1 bg-corex-accent text-corex-navy font-black py-4 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                                    <Save className="w-5 h-5" /> {editingIpo.id ? 'Update IPO' : 'Create IPO'}
                                </button>
                                <button type="button" onClick={() => setIsEditing(false)} className="flex-1 bg-white/5 border border-white/10 font-black py-4 rounded-xl hover:bg-white/10 transition-colors">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

// ─────────────────────────────────────────────────────── MAIN ADMIN
const Admin = ({ jobs, onAddJob, onUpdateJob, onDeleteJob, ipos, onAddIpo, onUpdateIpo, onDeleteIpo, applicationLink, setApplicationLink }) => {
    const [activeTab, setActiveTab]   = useState('careers');
    const [isAuthed, setIsAuthed]     = useState(() => sessionStorage.getItem('amigo_admin_auth') === '1');

    const handleLogout = () => {
        sessionStorage.removeItem('amigo_admin_auth');
        setIsAuthed(false);
    };

    if (!isAuthed) {
        return <LoginScreen onLogin={() => setIsAuthed(true)} />;
    }

    const tabs = [
        { id: 'careers', label: 'Careers',  icon: Briefcase  },
        { id: 'ipo',     label: 'IPO',      icon: TrendingUp },
    ];

    return (
        <div className="bg-corex-navy text-white pt-10 pb-20 px-4 sm:px-6 lg:px-8 relative" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between gap-4 mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-corex-accent/20 flex items-center justify-center border border-corex-accent/30">
                            <LayoutDashboard className="text-corex-accent h-6 w-6" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">Admin Panel</h1>
                            <p className="text-gray-400 text-sm">Manage careers and IPO listings.</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:bg-red-500/20 border border-white/10 hover:border-red-500/40"
                        style={{ color: '#f87171' }}
                    >
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>

                {/* Tab Bar */}
                <div className="flex gap-2 mb-10 border-b border-white/10 pb-0">
                    {tabs.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            className={`flex items-center gap-2 px-6 py-3 font-bold text-sm rounded-t-xl transition-all border-b-2 -mb-px ${
                                activeTab === id
                                    ? 'text-corex-accent border-corex-accent bg-white/5'
                                    : 'text-gray-400 border-transparent hover:text-white'
                            }`}
                        >
                            <Icon className="w-4 h-4" /> {label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'careers' && (
                    <CareersTab 
                        jobs={jobs} 
                        onAddJob={onAddJob} 
                        onUpdateJob={onUpdateJob} 
                        onDeleteJob={onDeleteJob} 
                        applicationLink={applicationLink} 
                        setApplicationLink={setApplicationLink} 
                    />
                )}
                {activeTab === 'ipo' && (
                    <IPOTab ipos={ipos || []} onAddIpo={onAddIpo} onUpdateIpo={onUpdateIpo} onDeleteIpo={onDeleteIpo} />
                )}
            </div>
        </div>
    );
};

export default Admin;
