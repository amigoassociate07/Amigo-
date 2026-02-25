import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Info, Activity, Globe, Clock } from 'lucide-react';

const StockDetail = ({ stock, onBack }) => {
    if (!stock) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[32px] shadow-2xl shadow-corex-navy/10 border border-gray-100 overflow-hidden max-w-5xl mx-auto"
        >
            <div className="bg-corex-navy p-10 text-white relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-corex-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>

                <button
                    onClick={onBack}
                    className="mb-10 text-xs font-black uppercase tracking-[0.2em] text-corex-accent hover:text-white transition-all flex items-center gap-2 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Market Explorer
                </button>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-corex-accent text-white px-3 py-1.5 rounded-lg font-black text-[10px] tracking-[0.2em] uppercase shadow-lg shadow-corex-accent/20">{stock.symbol}</span>
                            <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Global Exchange • Institutional Grade</span>
                        </div>
                        <h2 className="text-5xl font-black text-white tracking-tight">{stock.name}</h2>
                    </div>
                    <div className="text-right">
                        <div className="text-6xl font-black mb-2 tracking-tighter">₹{stock.price.toLocaleString()}</div>
                        <div className={`text-lg font-black flex items-center justify-end gap-2 ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {stock.change >= 0 ? <ArrowUpRight className="h-6 w-6" /> : <ArrowDownRight className="h-6 w-6" />}
                            {Math.abs(stock.change)}% <span className="text-sm opacity-60 font-medium ml-1">Today</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10 bg-corex-gray/30">
                {/* Left Column: Stats */}
                <div className="md:col-span-2 space-y-10">
                    <div className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100">
                        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                            <Activity className="h-4 w-4 text-corex-accent" /> Institutional Analytics
                        </h3>
                        {/* Mock Chart Area */}
                        <div className="aspect-video bg-gray-50 rounded-[20px] relative flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner group">
                            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-corex-accent/10 to-transparent"></div>
                            <TrendingUp className="h-28 w-28 text-corex-navy opacity-5 group-hover:opacity-10 transition-opacity" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="px-6 py-2 bg-white/80 backdrop-blur-md rounded-full text-xs font-black text-corex-navy border border-white shadow-xl">Real-time Visualization Engine</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {[
                            { label: 'Market Capital', value: stock.marketCap },
                            { label: 'Daily Volume', value: stock.volume },
                            { label: 'P/E Analytics', value: '28.43' },
                            { label: 'Yield Projection', value: '1.24%' },
                            { label: 'Yearly High', value: '₹4,320.50' },
                            { label: 'Yearly Low', value: '₹3,212.00' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 border-b border-gray-50 pb-2">{stat.label}</p>
                                <p className="text-sm font-black text-corex-navy">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Actions & Info */}
                <div className="space-y-8">
                    <div className="bg-corex-navy p-8 rounded-[24px] shadow-2xl shadow-corex-navy/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-corex-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150"></div>
                        <h3 className="text-white font-black text-lg mb-6 relative z-10 tracking-tight">Executive Trade</h3>
                        <div className="space-y-4 relative z-10">
                            <button className="w-full bg-corex-accent text-white font-black py-4 rounded-xl hover:bg-white hover:text-corex-navy transition-all shadow-lg shadow-corex-accent/20 flex items-center justify-center gap-2">
                                Execute Buy <ArrowUpRight className="h-4 w-4" />
                            </button>
                            <button className="w-full bg-white/5 border border-white/10 text-white font-black py-4 rounded-xl hover:bg-white/10 transition-all text-sm tracking-tight">
                                Intelligence Watchlist
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
                        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                            <Info className="h-4 w-4 text-corex-accent" /> Asset Overview
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium">
                            Synthesized intelligence report providing fundamental analysis and proprietary sentiment scoring for <span className="text-corex-navy font-black">{stock.name}</span>.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-[11px] font-bold text-corex-navy">
                                <div className="p-2 bg-corex-gray rounded-lg"><Globe className="h-4 w-4 text-corex-accent" /></div>
                                amigo-associate.io/{stock.symbol.toLowerCase()}
                            </div>
                            <div className="flex items-center gap-3 text-[11px] font-bold text-corex-navy">
                                <div className="p-2 bg-corex-gray rounded-lg"><Clock className="h-4 w-4 text-corex-accent" /></div>
                                Standard Session: Open
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StockDetail;
