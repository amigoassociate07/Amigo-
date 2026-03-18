import React from 'react';
import { TrendingUp, TrendingDown, Briefcase, Activity, DollarSign, PieChart, ChevronRight } from 'lucide-react';

const Portfolio = ({ portfolioData }) => {
    const PORTFOLIO_DATA = portfolioData;
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 2
        }).format(value);
    };

    const isPositive = (value) => value >= 0;

    return (
        <div className="min-h-screen bg-gray-50 text-corex-navy pb-24 md:pb-12 pt-8">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-corex-navy p-3 rounded-2xl shadow-xl shadow-corex-navy/20">
                        <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black tracking-tight text-corex-navy">Your Portfolio</h1>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Institutional Holdings</p>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Current Value */}
                    <div className="bg-white border text-center border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group">
                        <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Current Value</p>
                        <h2 className="text-4xl font-black mb-3 text-corex-navy">{formatCurrency(PORTFOLIO_DATA.summary.currentValue)}</h2>
                        <div className="inline-flex bg-gray-50 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-500">
                            Invested: {formatCurrency(PORTFOLIO_DATA.summary.totalInvestment)}
                        </div>
                    </div>

                    {/* Total P&L */}
                    <div className="bg-white border text-center border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group">
                        <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Total Returns</p>
                        <h2 className={`text-4xl font-black mb-3 flex items-center justify-center gap-2 ${isPositive(PORTFOLIO_DATA.summary.totalPnL) ? 'text-green-600' : 'text-red-600'}`}>
                            {isPositive(PORTFOLIO_DATA.summary.totalPnL) ? '+' : ''}{formatCurrency(PORTFOLIO_DATA.summary.totalPnL)}
                        </h2>
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black ${isPositive(PORTFOLIO_DATA.summary.totalPnLPercent) ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            {isPositive(PORTFOLIO_DATA.summary.totalPnLPercent) ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                            <span>{Math.abs(PORTFOLIO_DATA.summary.totalPnLPercent)}%</span>
                        </div>
                    </div>

                    {/* Day P&L */}
                    <div className="bg-white border text-center border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group md:col-span-2 lg:col-span-2">
                        <div className="flex flex-col md:flex-row items-center justify-between h-full">
                            <div className="text-center md:text-left mb-4 md:mb-0">
                                <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-3">1D Returns</p>
                                <h2 className={`text-4xl font-black mb-3 ${isPositive(PORTFOLIO_DATA.summary.dayPnL) ? 'text-green-600' : 'text-red-600'}`}>
                                    {isPositive(PORTFOLIO_DATA.summary.dayPnL) ? '+' : ''}{formatCurrency(PORTFOLIO_DATA.summary.dayPnL)}
                                </h2>
                                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black ${isPositive(PORTFOLIO_DATA.summary.dayPnLPercent) ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                    {isPositive(PORTFOLIO_DATA.summary.dayPnLPercent) ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                                    <span>{Math.abs(PORTFOLIO_DATA.summary.dayPnLPercent)}%</span>
                                </div>
                            </div>
                            <div className="hidden md:flex h-24 w-24 bg-corex-gray rounded-full items-center justify-center -mr-4 group-hover:bg-corex-accent transition-colors shadow-inner">
                                <Activity className="h-10 w-10 text-corex-navy group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Holdings List Section */}
                <div className="bg-white rounded-[2rem] shadow-xl shadow-corex-navy/5 border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                        <h3 className="text-xl font-black text-corex-navy flex items-center gap-3">
                            Current Holdings
                            <span className="bg-white border border-gray-200 text-xs px-3 py-1 rounded-full text-corex-navy">{PORTFOLIO_DATA.holdings.length} Positions</span>
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-white border-b border-gray-100">
                                    <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Company</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-right">Avg. Price</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-right">CMP</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-right hidden lg:table-cell">Investment</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-right">Current Value</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-right">Returns</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {PORTFOLIO_DATA.holdings.map((stock) => {
                                    const investment = stock.quantity * stock.avgPrice;
                                    const currentValue = stock.quantity * stock.cmp;
                                    const totalReturn = currentValue - investment;
                                    const returnPercent = (totalReturn / investment) * 100;

                                    return (
                                        <tr key={stock.id} className="hover:bg-gray-50/80 transition-all group cursor-pointer">
                                            <td className="px-8 py-6 whitespace-nowrap">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex-shrink-0 h-10 w-10 rounded-2xl bg-corex-navy text-white flex items-center justify-center font-black group-hover:bg-corex-accent transition-colors shadow-sm">
                                                        {stock.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-black text-corex-navy group-hover:text-corex-accent transition-colors">{stock.name}</div>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className="px-2 py-0.5 bg-gray-100 text-[10px] font-black uppercase rounded text-gray-500">{stock.ticker}</span>
                                                            <span className="text-[10px] font-bold text-gray-400">{stock.quantity} shares</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 whitespace-nowrap text-right font-medium text-gray-500">
                                                {formatCurrency(stock.avgPrice)}
                                            </td>
                                            <td className="px-8 py-6 whitespace-nowrap text-right">
                                                <div className="font-black text-corex-navy">{formatCurrency(stock.cmp)}</div>
                                                <div className={`inline-flex items-center gap-1 text-[10px] font-black mt-1 ${isPositive(stock.dayChangePercent) ? 'text-green-600' : 'text-red-600'}`}>
                                                    {isPositive(stock.dayChangePercent) ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                                                    {Math.abs(stock.dayChangePercent).toFixed(2)}%
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 whitespace-nowrap text-right font-medium text-gray-400 hidden lg:table-cell">
                                                {formatCurrency(investment)}
                                            </td>
                                            <td className="px-8 py-6 whitespace-nowrap text-right font-black text-corex-navy">
                                                {formatCurrency(currentValue)}
                                            </td>
                                            <td className="px-8 py-6 whitespace-nowrap text-right">
                                                <div className={`font-black ${isPositive(totalReturn) ? 'text-green-600' : 'text-red-600'}`}>
                                                    {isPositive(totalReturn) ? '+' : ''}{formatCurrency(totalReturn)}
                                                </div>
                                                <div className={`text-[10px] font-black mt-1 ${isPositive(returnPercent) ? 'text-green-600/80' : 'text-red-600/80'}`}>
                                                    {isPositive(returnPercent) ? '+' : ''}{returnPercent.toFixed(2)}%
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
