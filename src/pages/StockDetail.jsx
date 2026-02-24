import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Info, Activity, Globe, Clock } from 'lucide-react';

const StockDetail = ({ stock, onBack }) => {
    if (!stock) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto"
        >
            <div className="bg-amigo-black p-8 text-white relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amigo-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                <button
                    onClick={onBack}
                    className="mb-8 text-sm text-amigo-blue hover:text-white transition-colors flex items-center gap-2"
                >
                    ← Back to Explorer
                </button>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-amigo-blue text-amigo-black px-3 py-1 rounded-lg font-bold text-sm tracking-widest">{stock.symbol}</span>
                            <span className="text-gray-400 text-sm font-medium">NasdaqGS • Real-time</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-white">{stock.name}</h2>
                    </div>
                    <div className="text-right">
                        <div className="text-5xl font-extrabold mb-1">${stock.price.toLocaleString()}</div>
                        <div className={`text-lg font-bold flex items-center justify-end gap-2 ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            <ArrowUpRight className="h-5 w-5" />
                            {Math.abs(stock.change)}% (+${(stock.price * (Math.abs(stock.change) / 100)).toFixed(2)})
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 bg-amigo-beige/30">
                {/* Left Column: Stats */}
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Activity className="h-4 w-4" /> Market Analytics
                        </h3>
                        {/* Mock Chart Area */}
                        <div className="aspect-video bg-gray-50 rounded-xl relative flex items-center justify-center overflow-hidden border border-dashed border-gray-200">
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-amigo-blue/20 to-transparent"></div>
                            <TrendingUp className="h-24 w-24 text-amigo-blue opacity-30 animate-pulse" />
                            <p className="absolute bottom-4 text-xs font-bold text-gray-400">Interactive Chart Placeholder</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {[
                            { label: 'Market Cap', value: stock.marketCap },
                            { label: 'Volume', value: stock.volume },
                            { label: 'P/E Ratio', value: '28.43' },
                            { label: 'Dividend Yield', value: '1.24%' },
                            { label: '52 Week High', value: '$198.50' },
                            { label: '52 Week Low', value: '$124.12' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">{stat.label}</p>
                                <p className="text-sm font-bold text-amigo-black">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Actions & Info */}
                <div className="space-y-6">
                    <div className="bg-amigo-black p-6 rounded-2xl shadow-lg">
                        <h3 className="text-white font-bold mb-4">Trade {stock.symbol}</h3>
                        <button className="w-full bg-amigo-blue text-amigo-black font-bold py-3 rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 mb-3">
                            Quick Buy
                        </button>
                        <button className="w-full bg-transparent border border-gray-700 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-all">
                            Add to Watchlist
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Info className="h-4 w-4" /> Company Info
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Premium intelligence and detailed fundamental analysis for {stock.name}.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-medium text-amigo-black">
                                <Globe className="h-4 w-4 text-gray-400" /> www.{stock.symbol.toLowerCase()}.com
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-amigo-black">
                                <Clock className="h-4 w-4 text-gray-400" /> Exchange: NASDAQ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StockDetail;
