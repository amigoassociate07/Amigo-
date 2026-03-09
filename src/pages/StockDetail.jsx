import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, TrendingUp, Info, Activity, Globe, Clock, Building, Users, Briefcase, BarChart3, PieChart, ShieldCheck } from 'lucide-react';
import { TCS_DETAILED_DATA, HCLTECH_DETAILED_DATA, HDFCBANK_DETAILED_DATA, ICICIBANK_DETAILED_DATA, MARUTI_DETAILED_DATA, MM_DETAILED_DATA, RELIANCE_DETAILED_DATA, ITC_DETAILED_DATA } from '../data/stocksData';

const StockDetail = ({ stock, onBack }) => {
    if (!stock) return null;

    const stockDataMap = {
        'TCS': TCS_DETAILED_DATA,
        'HCLTECH': HCLTECH_DETAILED_DATA,
        'HDFCBANK': HDFCBANK_DETAILED_DATA,
        'ICICIBANK': ICICIBANK_DETAILED_DATA,
        'MARUTI': MARUTI_DETAILED_DATA,
        'M&M': MM_DETAILED_DATA,
        'RELIANCE': RELIANCE_DETAILED_DATA,
        'ITC': ITC_DETAILED_DATA
    };

    const detailData = stockDataMap[stock.symbol] || {
        description: `${stock.name} (${stock.symbol}) is a publicly traded company. This is a synthesized auto-generated intelligence report based on real-time market data aggregates.`,
        keyDetails: {
            founded: "Information Not Available",
            headquarters: "Information Not Available",
            parentCompany: "Publicly Traded",
            workforce: "Data Pending Aggregation",
            globalPresence: "Global Markets",
            revenue: `Market Capitalization: ${stock.marketCap}`,
            keyServices: "Diversified Operations",
            majorPlatforms: "Enterprise Solutions",
            stockInformation: `Listed on NSE (${stock.symbol})`,
            website: `https://www.nseindia.com/get-quotes/equity?symbol=${stock.symbol}`
        },
        highlights: [
            { title: "Market Position", content: `Currently trading at ₹${stock.price.toLocaleString()} with a daily volume of ${stock.volume}.` },
            { title: "Valuation", content: `Total Market Capitalization stands at ${stock.marketCap}.` },
            { title: "Recent Trend", content: `Stock showed a ${stock.change >= 0 ? 'positive' : 'negative'} change of ${Math.abs(stock.change)}% in the recent session.` },
            { title: "Sector Strength", content: "Maintains strong correlation with broader national indices and sector benchmarks." }
        ],
        investorOutlook: {
            strategicAIPivot: "Company is currently under algorithmic evaluation for AI integration and digital transformation initiatives.",
            tpgPartnership: "Institutional holding patterns are currently being updated in our backend.",
            financialsQ3FY26: {
                revenue: "Awaiting Quarter Reports",
                netIncome: "Awaiting Quarter Reports",
                operatingMargin: "Data Pending",
                shareholderReturns: "Subject to board approval"
            },
            marketSentiment: "Algorithmic consensus suggests holding patterns based on current volatility and liquidity metrics."
        },
        workforcePerformance: {
            realTimePerformance: "Operational efficiency metrics are stable.",
            aiCannibalisation: "Workforce optimization studies are ongoing.",
            restructuring: [
                "Standard operational scaling based on market conditions.",
                "Continuous talent acquisition in key growth areas."
            ],
            upskilling: "Corporate training budgets maintained at industry averages."
        },
        kpis: [
            { metric: "Current Price", value: `₹${stock.price.toLocaleString()}` },
            { metric: "Daily Change", value: `${stock.change}%` },
            { metric: "Trading Volume", value: stock.volume },
            { metric: "Market Cap", value: stock.marketCap }
        ],
        shareholdingPattern: [
            { label: "Promoters", value: 45.0, color: "#0066FF" },
            { label: "FII/FPI", value: 20.0, color: "#1E90FF" },
            { label: "Mutual Funds", value: 15.0, color: "#00BFFF" },
            { label: "Retail", value: 15.0, color: "#87CEEB" },
            { label: "Others", value: 5.0, color: "#ADD8E6" }
        ],
        promoterPledging: [
            { date: "Current Qtr", promoter: 45.00, pledge: 0.00 }
        ]
    };

    // Force the complex view for all stocks
    const showDetailView = true;

    // Simple SVG Pie Chart Component
    const StockPieChart = ({ data }) => {
        let cumulativePercent = 0;

        function getCoordinatesForPercent(percent) {
            const x = Math.cos(2 * Math.PI * percent);
            const y = Math.sin(2 * Math.PI * percent);
            return [x, y];
        }

        return (
            <div className="relative w-64 h-64 mx-auto">
                <svg viewBox="-1 -1 2 2" className="transform -rotate-90 w-full h-full">
                    {data.map((slice, index) => {
                        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
                        cumulativePercent += slice.value / 100;
                        const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
                        const largeArcFlag = slice.value / 100 > 0.5 ? 1 : 0;
                        const pathData = [
                            `M ${startX} ${startY}`,
                            `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                            `L 0 0`,
                        ].join(' ');

                        return (
                            <path
                                key={index}
                                d={pathData}
                                fill={slice.color}
                                className="transition-all duration-500 hover:opacity-80 cursor-pointer"
                            >
                                <title>{`${slice.label}: ${slice.value}%`}</title>
                            </path>
                        );
                    })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full w-24 h-24 shadow-inner flex items-center justify-center border border-gray-100">
                        <PieChart className="h-8 w-8 text-corex-navy opacity-20" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[32px] shadow-2xl shadow-corex-navy/10 border border-gray-100 overflow-hidden max-w-[1800px] mx-auto mb-12"
        >
            {/* Header Section */}
            <div className="bg-corex-navy p-10 text-white relative overflow-hidden">
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
                            <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">National Stock Exchange • Institutional Grade</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <h2 className="text-6xl font-black text-white tracking-tight leading-tight">{stock.name}</h2>
                            {detailData.keyDetails?.website && (
                                <a
                                    href={detailData.keyDetails.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 hover:bg-corex-accent text-white rounded-xl transition-all shadow-lg backdrop-blur-sm group/web flex items-center gap-2"
                                    title="Visit Official Website"
                                >
                                    <Globe className="h-5 w-5" />
                                    <span className="text-[10px] font-black uppercase tracking-widest hidden group-hover/web:block">Official Website</span>
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-7xl font-black mb-2 tracking-tighter">₹{stock.price.toLocaleString()}</div>
                        <div className={`text-xl font-black flex items-center justify-end gap-2 ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {stock.change >= 0 ? <ArrowUpRight className="h-7 w-7" /> : <ArrowDownRight className="h-7 w-7" />}
                            {Math.abs(stock.change)}% <span className="text-sm opacity-60 font-medium ml-1">Today</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-10 bg-gray-50/30">
                {showDetailView && detailData ? (
                    <div className="space-y-12">
                        {/* Company Overview */}
                        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            <div className="lg:col-span-2 bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-corex-accent uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                                    <Building className="h-4 w-4" /> Corporate Intelligence
                                </h3>
                                <p className="text-lg text-corex-navy/80 leading-relaxed font-medium mb-8 italic">
                                    "{detailData.description}"
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Founded</span>
                                            <span className="text-sm font-bold text-corex-navy">{detailData.keyDetails.founded}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Headquarters</span>
                                            <span className="text-sm font-bold text-corex-navy">{detailData.keyDetails.headquarters}</span>
                                        </div>
                                        <div className="flex flex-col items-start border-b border-gray-50 pb-3 gap-1">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Parent Company</span>
                                            <span className="text-sm font-bold text-corex-navy">{detailData.keyDetails.parentCompany}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Workforce</span>
                                            <span className="text-sm font-bold text-corex-navy">{detailData.keyDetails.workforce}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Presence</span>
                                            <span className="text-sm font-bold text-corex-navy">55 Countries</span>
                                        </div>
                                        <div className="flex flex-col items-start border-b border-gray-50 pb-3 gap-1">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Stock Listing</span>
                                            <span className="text-sm font-bold text-corex-navy">{detailData.keyDetails.stockInformation}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-corex-navy p-10 rounded-[32px] text-white shadow-xl shadow-corex-navy/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-corex-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-lg font-black mb-8 relative z-10 tracking-tight">Executive Summary</h3>
                                <ul className="space-y-6 relative z-10">
                                    {detailData.highlights.map((item, idx) => (
                                        <li key={idx} className="flex gap-4">
                                            <div className="mt-1.5 h-1.5 w-1.5 bg-corex-accent rounded-full shrink-0"></div>
                                            <div>
                                                <p className="text-[10px] font-black text-corex-accent uppercase tracking-widest mb-1">{item.title}</p>
                                                <p className="text-xs text-blue-100 leading-normal font-medium">{item.content}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Charts & Analytics */}
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10">
                                <div className="flex-1 w-full">
                                    <h3 className="text-xs font-black text-corex-accent uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                                        <BarChart3 className="h-4 w-4" /> Shareholding Pattern
                                    </h3>
                                    <div className="space-y-4">
                                        {detailData.shareholdingPattern.map((slice, idx) => (
                                            <div key={idx} className="flex items-center justify-between group">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: slice.color }}></div>
                                                    <span className="text-xs font-bold text-corex-navy">{slice.label}</span>
                                                </div>
                                                <span className="text-xs font-black text-gray-400 group-hover:text-corex-navy transition-colors">{slice.value}%</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-10 px-8 py-3 bg-corex-navy text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-corex-blue transition-all shadow-lg shadow-corex-navy/10 self-start">
                                        Investors List
                                    </button>
                                </div>
                                <div className="flex-1 flex justify-center py-6">
                                    <StockPieChart data={detailData.shareholdingPattern} />
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-corex-accent uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4" /> Promoter Pledging %
                                </h3>
                                <div className="overflow-hidden rounded-2xl border border-gray-100">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-blue-50/50">
                                                <th className="px-6 py-4 text-[9px] font-black text-corex-blue uppercase tracking-widest">Date</th>
                                                <th className="px-6 py-4 text-[9px] font-black text-corex-blue uppercase tracking-widest text-right">Promoter %</th>
                                                <th className="px-6 py-4 text-[9px] font-black text-corex-blue uppercase tracking-widest text-right">Pledge %</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {detailData.promoterPledging.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 text-xs font-bold text-corex-navy">{row.date}</td>
                                                    <td className="px-6 py-4 text-xs font-black text-corex-navy text-right">{row.promoter.toFixed(2)}</td>
                                                    <td className="px-6 py-4 text-xs font-black text-corex-navy text-right tabular-nums">{row.pledge.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Investor Outlook */}
                        <section className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                                <div>
                                    <h3 className="text-xs font-black text-corex-accent uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                                        <TrendingUp className="h-4 w-4" /> Investor Outlook & Financials
                                    </h3>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-tight">Q3 FY26 Strategic Analysis</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 bg-green-50 rounded-full border border-green-100">
                                        <span className="text-[10px] font-black text-green-700 uppercase">Buy Rating: Goldman Sachs</span>
                                    </div>
                                    <div className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                                        <span className="text-[10px] font-black text-corex-blue uppercase">Sentiment: Strong</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                {[
                                    { label: 'Revenue', value: detailData.investorOutlook.financialsQ3FY26.revenue },
                                    { label: 'Net Income', value: detailData.investorOutlook.financialsQ3FY26.netIncome },
                                    { label: 'Operating Margin', value: detailData.investorOutlook.financialsQ3FY26.operatingMargin },
                                    { label: 'Dividend', value: detailData.investorOutlook.financialsQ3FY26.shareholderReturns },
                                ].map((card, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-corex-accent transition-colors group">
                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3 group-hover:text-corex-accent transition-colors">{card.label}</p>
                                        <p className="text-sm font-black text-corex-navy leading-tight">{card.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <div className="p-6 rounded-2xl bg-corex-navy/5 border-l-4 border-corex-accent">
                                        <h4 className="text-[10px] font-black text-corex-navy uppercase tracking-widest mb-3">Strategic AI Pivot</h4>
                                        <p className="text-sm text-corex-navy/80 font-medium leading-relaxed">{detailData.investorOutlook.strategicAIPivot}</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-corex-navy/5 border-l-4 border-corex-blue">
                                        <h4 className="text-[10px] font-black text-corex-navy uppercase tracking-widest mb-3">TPG Partnership</h4>
                                        <p className="text-sm text-corex-navy/80 font-medium leading-relaxed">{detailData.investorOutlook.tpgPartnership}</p>
                                    </div>
                                </div>
                                <div className="p-8 rounded-2xl bg-orange-50/50 border border-orange-100">
                                    <h4 className="text-[10px] font-black text-orange-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Info className="h-4 w-4" /> Market Sentiment Note
                                    </h4>
                                    <p className="text-sm text-orange-950 font-medium leading-relaxed italic">
                                        "{detailData.investorOutlook.marketSentiment}"
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Workforce Performance */}
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-corex-accent uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                                    <Users className="h-4 w-4" /> Workforce & Culture Analytics
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="h-12 w-12 bg-corex-gray rounded-xl flex items-center justify-center shrink-0">
                                            <Activity className="h-6 w-6 text-corex-blue" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-corex-navy mb-1 tracking-tight">Feedback to Feedforward™</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed font-medium">{detailData.workforcePerformance.realTimePerformance}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                                            <Briefcase className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-corex-navy mb-1 tracking-tight">AI Capability Transformation</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed font-medium">{detailData.workforcePerformance.aiCannibalisation}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 p-6 bg-blue-50 rounded-[20px] border border-blue-100">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="text-3xl">🚀</span>
                                        <h4 className="text-sm font-black text-corex-blue tracking-tight">Organic Talent Upskilling</h4>
                                    </div>
                                    <p className="text-xs text-corex-blue/80 font-bold">{detailData.workforcePerformance.upskilling}</p>
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-corex-accent uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                                    <Activity className="h-4 w-4" /> Workforce Restructuring
                                </h3>
                                <div className="space-y-6">
                                    {detailData.workforcePerformance.restructuring.map((fact, idx) => (
                                        <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 relative group overflow-hidden">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-red-500 group-hover:w-2 transition-all"></div>
                                            <p className="text-sm text-corex-navy/80 font-bold leading-relaxed">{fact}</p>
                                        </div>
                                    ))}
                                    <div className="pt-4 flex items-center justify-between text-[10px] font-black text-gray-300 uppercase tracking-widest">
                                        <span>Status: Processing</span>
                                        <span>Reporting Period: FY25-26</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* KPIs Table */}
                        <section className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
                            <h3 className="text-xs font-black text-corex-accent uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                                <Activity className="h-4 w-4" /> Key Performance Indicators (KPIs)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 border border-gray-100 rounded-[24px]">
                                {detailData.kpis.map((kpi, idx) => (
                                    <div key={idx} className="p-10 hover:bg-gray-50/50 transition-colors">
                                        <p className="text-[9px] font-black text-gray-400 transition-colors uppercase tracking-[0.2em] mb-4">{kpi.metric}</p>
                                        <p className="text-2xl font-black text-corex-navy tracking-tight">{kpi.value}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Legacy Detailed View for other stocks */}
                        <div className="md:col-span-2 space-y-10">
                            <div className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100">
                                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                                    <Activity className="h-4 w-4 text-corex-accent" /> Institutional Analytics
                                </h3>
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
                                    <div className="flex items-center gap-3 text-[11px] font-bold text-corex-navy overflow-hidden">
                                        <div className="p-2 bg-corex-gray rounded-lg"><Globe className="h-4 w-4 text-corex-accent" /></div>
                                        <a href={detailData.keyDetails?.website || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-corex-accent transition-colors truncate">
                                            {detailData.keyDetails?.website ? detailData.keyDetails.website.replace('https://', '').replace('http://', '') : `amigo-associate.io/${stock.symbol.toLowerCase()}`}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-[11px] font-bold text-corex-navy">
                                        <div className="p-2 bg-corex-gray rounded-lg"><Clock className="h-4 w-4 text-corex-accent" /></div>
                                        Standard Session: Open
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default StockDetail;
