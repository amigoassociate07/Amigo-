import React, { useState } from 'react';
import { Search, ArrowUpRight, ArrowDownRight, Filter, Download, ChevronRight, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StockDetail from './StockDetail';

const MOCK_STOCKS = [
    { id: 1, symbol: 'TCS', name: 'Tata Consultancy Services', price: 4120.50, change: +1.24, volume: '2.4M', marketCap: '14.8T' },
    { id: 2, symbol: 'HCLTECH', name: 'HCL Technologies', price: 1650.12, change: -0.45, volume: '1.8M', marketCap: '4.5T' },
    { id: 3, symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', price: 1745.32, change: +0.82, volume: '8.2M', marketCap: '13.2T' },
    { id: 4, symbol: 'ICICIBANK', name: 'ICICI Bank Ltd', price: 1274.45, change: +2.15, volume: '15.1M', marketCap: '9.1T' },
    { id: 5, symbol: 'MARUTI', name: 'Maruti Suzuki India Ltd', price: 11726.13, change: +4.32, volume: '0.7M', marketCap: '3.7T' },
    { id: 6, symbol: 'M&M', name: 'Mahindra & Mahindra Ltd', price: 2993.57, change: -1.82, volume: '2.3M', marketCap: '3.6T' },
    { id: 7, symbol: 'RELIANCE', name: 'Reliance Industries Ltd', price: 3024.03, change: +0.12, volume: '5.6M', marketCap: '20.4T' },
    { id: 8, symbol: 'ITC', name: 'ITC Ltd (ITC)', price: 478.20, change: -0.22, volume: '13.1M', marketCap: '5.9T' },
];

const Stocks = ({ selectedStock, setSelectedStock }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStocks = MOCK_STOCKS.filter(stock =>
        stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <AnimatePresence mode="wait">
                {!selectedStock ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="h-1 w-12 bg-corex-accent rounded-full"></div>
                                    <span className="text-xs font-black uppercase tracking-[0.3em] text-corex-accent">Market Intelligence</span>
                                </div>
                                <h1 className="text-5xl font-black text-corex-navy tracking-tight mb-3">
                                    Stock Explorer
                                </h1>
                                <p className="text-gray-500 font-medium max-w-xl">
                                    Track and analyze market-leading companies with our advanced institutional-grade intelligence platform.
                                </p>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-sm font-bold text-corex-navy shadow-sm">
                                    <Filter className="h-4 w-4" /> Filter
                                </button>
                                <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-corex-navy text-white rounded-xl hover:bg-corex-blue transition-all text-sm font-bold shadow-lg shadow-corex-navy/10">
                                    <Download className="h-4 w-4" /> Export Data
                                </button>
                            </div>
                        </div>

                        {/* Market Summary Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {[
                                { label: 'NIFTY 50', value: '25,424.65', change: '-1.12%', isDown: true },
                                { label: 'S&P B6 SENSEX', value: '82,225.92', change: '-1.28%', isDown: true },
                                { label: 'BANK NIFTY', value: '61,047.30', change: '-0.35%', isDown: true },
                                { label: 'MIDCAP NIFTY', value: '13,448.65', change: '-0.22%', isDown: true },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-corex-accent transition-colors">{item.label}</p>
                                        <div className={`p-1.5 rounded-lg ${item.isDown ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                            {item.isDown ? <ArrowDownRight className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
                                        </div>
                                    </div>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-2xl font-black text-corex-navy tracking-tight">{item.value}</span>
                                        <span className={`text-sm font-bold ${item.isDown ? 'text-red-600' : 'text-green-600'}`}>{item.change}</span>
                                    </div>
                                    <div className="mt-4 h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-1000 ${item.isDown ? 'bg-red-500 w-2/3' : 'bg-green-500 w-3/4'}`}></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main Table Content */}
                        <div className="bg-white rounded-3xl shadow-xl shadow-corex-navy/5 border border-gray-100 overflow-hidden">
                            <div className="p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6 bg-gray-50/50">
                                <div className="relative w-full sm:w-[450px] group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-corex-accent transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search by company name or ticker..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-white text-sm font-medium rounded-2xl pl-12 pr-6 py-4 border-gray-200 focus:ring-4 focus:ring-corex-accent/10 focus:border-corex-accent transition-all shadow-sm"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                                        {filteredStocks.length} Assets Found
                                    </span>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-white">
                                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100">Symbol</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100">Asset Name</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100 text-right">Last Price</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100 text-right">24h Change</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100 text-right">Market Cap</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {filteredStocks.map((stock) => (
                                            <tr
                                                key={stock.id}
                                                onClick={() => setSelectedStock(stock)}
                                                className="hover:bg-corex-gray/50 transition-all cursor-pointer group"
                                            >
                                                <td className="px-8 py-6 whitespace-nowrap">
                                                    <span className="px-3 py-1.5 bg-corex-navy text-white text-[10px] font-black rounded-lg shadow-sm group-hover:bg-corex-accent transition-colors tracking-tighter uppercase">{stock.symbol}</span>
                                                </td>
                                                <td className="px-8 py-6 whitespace-nowrap">
                                                    <div className="text-sm font-black text-corex-navy group-hover:text-corex-accent transition-colors">{stock.name}</div>
                                                    <div className="text-[10px] font-bold text-gray-400 uppercase mt-0.5 tracking-wider">National Stock Exchange</div>
                                                </td>
                                                <td className="px-8 py-6 whitespace-nowrap text-right text-sm font-black text-corex-navy">
                                                    ₹{stock.price.toLocaleString()}
                                                </td>
                                                <td className="px-8 py-6 whitespace-nowrap text-right">
                                                    <div className={`inline-flex items-center gap-1.5 text-xs font-black px-3 py-1.5 rounded-full ${stock.change >= 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                                        {stock.change >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                                                        {Math.abs(stock.change)}%
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6 whitespace-nowrap text-right text-xs font-bold text-gray-500 tabular-nums">
                                                    {stock.marketCap}
                                                </td>
                                                <td className="px-8 py-6 whitespace-nowrap text-right">
                                                    <button className="p-3 rounded-xl bg-gray-50 text-gray-400 group-hover:bg-corex-accent group-hover:text-white transition-all shadow-sm">
                                                        <ChevronRight className="h-4 w-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {filteredStocks.length === 0 && (
                                <div className="py-24 text-center">
                                    <div className="relative inline-block mb-6">
                                        <Search className="h-16 w-16 text-gray-100 mx-auto" strokeWidth={1} />
                                        <div className="absolute inset-0 bg-corex-accent/5 rounded-full scale-150 -z-10 animate-pulse"></div>
                                    </div>
                                    <h3 className="text-xl font-black text-corex-navy mb-2">Inventory Exhausted</h3>
                                    <p className="text-gray-400 font-medium max-w-xs mx-auto text-sm">We couldn't find any assets matching your search criteria. Please adjust your filters.</p>
                                </div>
                            )}

                            <div className="p-8 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center bg-white">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Displaying 1 - 8 of 50 Global Assets</span>
                                <div className="flex gap-3">
                                    <button className="px-6 py-2.5 text-xs font-black text-gray-300 border border-gray-200 rounded-xl cursor-not-allowed uppercase tracking-wider transition-all">Previous</button>
                                    <button className="px-6 py-2.5 text-xs font-black text-corex-navy bg-white border border-gray-200 rounded-xl hover:bg-corex-navy hover:text-white hover:border-corex-navy transition-all uppercase tracking-wider shadow-sm">Next Page</button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <StockDetail stock={selectedStock} onBack={() => setSelectedStock(null)} />
                )}
            </AnimatePresence>
        </div>
    )
}

export default Stocks;
