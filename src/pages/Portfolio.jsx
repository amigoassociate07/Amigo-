import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Shield, Activity, ArrowUpRight, Clock, Globe } from 'lucide-react';

const Portfolio = ({ portfolioData, onBackClick }) => {
    return (
        <div className="bg-corex-navy min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[8px] font-black uppercase tracking-widest mb-6">
                            <Activity className="h-3 w-3" /> Live Study Terminal
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                            {portfolioData?.title || "Study Portfolio"}.
                        </h1>
                        <p className="text-xl text-gray-400 mt-4 max-w-xl font-medium leading-relaxed">
                            {portfolioData?.description || "Real-time tracking of high-conviction analysis nodes."}
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl"
                    >
                        <div className="text-emerald-500 text-3xl font-black mb-1">98.4%</div>
                        <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Accuracy Vector</div>
                    </motion.div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Intelligence Nodes */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {portfolioData?.nodes?.map((node, i) => (
                                <motion.div
                                    key={node.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <h3 className="text-2xl font-black text-white mb-1 group-hover:text-emerald-400 transition-colors">{node.symbol}</h3>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{node.name}</p>
                                        </div>
                                        <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                                            node.trend === 'Bullish' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                                        }`}>
                                            {node.trend}
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                                        <div>
                                            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Status</p>
                                            <p className="text-sm font-black text-white">{node.status}</p>
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Allocation</p>
                                            <p className="text-sm font-black text-emerald-500">{node.allocation}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Insights & Stats */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-8 rounded-[40px] bg-emerald-500 text-white shadow-2xl shadow-emerald-500/20"
                        >
                            <h3 className="text-2xl font-black mb-6 tracking-tight">Study Insights</h3>
                            <div className="space-y-6">
                                {portfolioData?.insights?.map((insight) => (
                                    <div key={insight.id} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
                                        <h4 className="text-sm font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <TrendingUp className="h-4 w-4" /> {insight.title}
                                        </h4>
                                        <p className="text-xs text-emerald-50/70 font-medium leading-relaxed">
                                            {insight.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
                            <h3 className="text-xl font-black text-white mb-8 tracking-tight">Framework Distribution</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Equity Study', value: 65 },
                                    { label: 'Forex Intelligence', value: 20 },
                                    { label: 'Fixed Income', value: 15 }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                                            <span className="text-gray-400">{item.label}</span>
                                            <span className="text-emerald-500">{item.value}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.value}%` }}
                                                className="h-full bg-emerald-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
