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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <AnimatePresence mode="wait">
                {!selectedStock ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                            <div>
                                <h1 className="text-4xl font-extrabold text-amigo-black mb-2 flex items-center gap-3">
                                    Stock Explorer
                                    <TrendingUp className="h-8 w-8 text-amigo-blue fill-amigo-blue/20" />
                                </h1>
                                <p className="text-gray-600">Track and analyze market-leading companies in real time.</p>
                            </div>
                            <div className="flex gap-3 w-full md:w-auto">
                                <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-all text-sm font-medium text-amigo-black">
                                    <Filter className="h-4 w-4" /> Filter
                                </button>
                                <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-amigo-black text-white rounded-lg hover:bg-opacity-90 transition-all text-sm font-medium">
                                    <Download className="h-4 w-4" /> Export
                                </button>
                            </div>
                        </div>

                        {/* Market Summary Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {[
                                { label: 'NIFTY', value: '25,424.65', change: '-1.12%', color: 'text-red-600' },
                                { label: 'SENSEX', value: '82,225.92', change: '-1.28%', color: 'text-red-600' },
                                { label: 'BANKNIFTY', value: '61,047.30', change: '-0.35%', color: 'text-red-600' },
                                { label: 'MIDCPNIFTY', value: '13,448.65', change: '-0.22%', color: 'text-red-600' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                >
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-2xl font-bold text-amigo-black">{item.value}</span>
                                        <span className={`text-sm font-semibold ${item.color}`}>{item.change}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main Table Content */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div className="relative w-full sm:w-96">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by name or symbol..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-gray-50 text-sm rounded-xl pl-10 pr-4 py-3 border-none focus:ring-2 focus:ring-amigo-blue transition-all"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-xs font-medium text-gray-400 px-3 py-1 bg-gray-50 rounded-full">Showing {filteredStocks.length} Results</span>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50/50">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Symbol</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Company</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Price</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Change</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Market Cap</th>
                                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {filteredStocks.map((stock) => (
                                            <tr
                                                key={stock.id}
                                                onClick={() => setSelectedStock(stock)}
                                                className="hover:bg-amigo-blue/10 transition-colors cursor-pointer group"
                                            >
                                                <td className="px-6 py-5 whitespace-nowrap">
                                                    <span className="px-3 py-1 bg-amigo-blue text-amigo-black text-xs font-bold rounded-lg">{stock.symbol}</span>
                                                </td>
                                                <td className="px-6 py-5 whitespace-nowrap">
                                                    <div className="text-sm font-bold text-amigo-black">{stock.name}</div>
                                                    <div className="text-xs text-gray-500">NSE</div>
                                                </td>
                                                <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-bold text-amigo-black">
                                                    ₹{stock.price.toLocaleString()}
                                                </td>
                                                <td className="px-6 py-5 whitespace-nowrap text-right">
                                                    <span className={`inline-flex items-center gap-1 text-sm font-bold ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {stock.change >= 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                                                        {Math.abs(stock.change)}%
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium text-gray-600">
                                                    {stock.marketCap}
                                                </td>
                                                <td className="px-6 py-5 whitespace-nowrap text-right">
                                                    <button className="p-2 rounded-full hover:bg-white text-gray-300 group-hover:text-amigo-black transition-all">
                                                        <ChevronRight className="h-5 w-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {filteredStocks.length === 0 && (
                                <div className="py-20 text-center">
                                    <Search className="h-12 w-12 text-gray-200 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-amigo-black">No stocks found</h3>
                                    <p className="text-gray-500">Try searching for a different name or symbol.</p>
                                </div>
                            )}

                            <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
                                <span className="text-sm text-gray-500">Page 1 of 5</span>
                                <div className="flex gap-2">
                                    <button className="px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed">Previous</button>
                                    <button className="px-4 py-2 text-sm font-medium text-amigo-black hover:bg-white rounded-lg transition-all border border-gray-200">Next</button>
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
