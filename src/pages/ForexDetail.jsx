import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe2, ArrowLeft, BookOpen, Clock, BarChart3, Zap, 
  ShieldCheck, Search, Info, Target, TrendingUp, Users2,
  ChevronRight, PlayCircle, Landmark, Award
} from 'lucide-react';

const ForexDetail = ({ onBackClick }) => {
  const [activeLesson, setActiveLesson] = useState(0);

  const lessons = [
    {
      id: "1.1",
      title: "Forex Fundamentals",
      subtitle: "What is Forex Trading?",
      icon: Globe2,
      content: (
        <div className="space-y-12 text-slate-700">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Info className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-black text-corex-navy tracking-tight">Introduction</h3>
            </div>
            <p className="text-lg leading-relaxed font-medium mb-6">
              Forex (Foreign Exchange) is the largest financial market in the world, with over <span className="text-indigo-600 font-bold">$7.5 trillion</span> traded daily. But what exactly is it?
            </p>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] mb-8">
              <h4 className="text-sm font-black uppercase tracking-widest text-indigo-500 mb-4">Simple Definition</h4>
              <p className="text-base font-medium leading-relaxed">
                Forex trading is buying one currency while simultaneously selling another. Think of it like exchanging money at the airport, but for profit instead of travel.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-black text-corex-navy tracking-tight">Real-World Example</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm">
                <h5 className="font-black text-corex-navy mb-4 uppercase text-xs tracking-widest">Initial Exchange</h5>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex justify-between"><span>Capital:</span> <span className="font-bold">$1,000 USD</span></li>
                  <li className="flex justify-between"><span>Rate:</span> <span className="font-bold">1 USD = 0.90 EUR</span></li>
                  <li className="pt-3 border-t flex justify-between text-indigo-600"><span>Result:</span> <span className="font-bold">€900</span></li>
                </ul>
              </div>
              <div className="p-8 rounded-[32px] bg-indigo-600 text-white shadow-xl">
                <h5 className="font-black mb-4 uppercase text-xs tracking-widest opacity-80">Two Weeks Later</h5>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex justify-between"><span>New Rate:</span> <span className="font-bold">1 USD = 0.85 EUR</span></li>
                  <li className="flex justify-between"><span>Re-exchange:</span> <span className="font-bold">€900 back to USD</span></li>
                  <li className="pt-3 border-t border-white/20 flex justify-between text-white"><span>New Capital:</span> <span className="font-bold">$1,058</span></li>
                  <li className="flex justify-between text-emerald-300 font-black"><span>Profit:</span> <span>+$58 (5.8% return)</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black text-corex-navy mb-8 tracking-tight">Why People Trade Forex</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "24/5 Accessibility", desc: "Open 24 hours, 5 days a week. Trade from anywhere with internet." },
                { title: "High Liquidity", desc: "Instant buy/sell execution and tight spreads (low costs)." },
                { title: "Leverage", desc: "Control large positions with small capital to magnify results." },
                { title: "Any Direction", desc: "Make money when currencies rise OR fall." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="h-2 w-8 bg-indigo-500 rounded-full mb-4"></div>
                  <h4 className="font-black text-corex-navy text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-corex-navy text-white p-10 rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-black mb-8 relative z-10">Market Size Comparison</h3>
            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest mb-1">
                  <span>Forex Daily Volume</span>
                  <span className="text-emerald-400">$7.5 Trillion</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} className="h-full bg-emerald-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest mb-1">
                  <span>Stock Markets</span>
                  <span className="text-indigo-400">$200 Billion</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "3%" }} className="h-full bg-indigo-500" />
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    },
    {
      id: "1.2",
      title: "Currency Pairs",
      subtitle: "The Language of FX",
      icon: TrendingUp,
      content: (
        <div className="space-y-12 text-slate-700">
          <section>
            <h3 className="text-2xl font-black text-corex-navy mb-6 tracking-tight">Understanding the Pair</h3>
            <div className="bg-white border-2 border-indigo-500/20 p-10 rounded-[40px] text-center shadow-2xl">
              <div className="text-xs font-black text-slate-400 uppercase tracking-[0.5em] mb-6">Pair Format</div>
              <div className="flex justify-center items-center gap-4 text-5xl md:text-7xl font-black text-corex-navy tracking-tighter">
                <span className="text-indigo-600">EUR</span>
                <span className="text-slate-300">/</span>
                <span>USD</span>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-10 max-w-md mx-auto">
                <div className="text-left">
                  <p className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-1">Base Currency</p>
                  <p className="text-sm font-medium text-slate-500">What you are buying/selling</p>
                </div>
                <div className="text-right">
                  <p className="text-corex-navy font-black text-xs uppercase tracking-widest mb-1">Quote Currency</p>
                  <p className="text-sm font-medium text-slate-500">What you use to buy/sell</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black text-corex-navy mb-8 tracking-tight">Categories of Pairs</h3>
            <div className="space-y-4">
              {[
                { type: "Major Pairs", pairs: "EUR/USD, GBP/USD, USD/JPY", desc: "Include USD + 1 major currency. Highest liquidity, best for beginners.", color: "indigo" },
                { type: "Minor Pairs", pairs: "EUR/GBP, EUR/AUD, GBP/JPY", desc: "No USD, but two major currencies. Good for diversification.", color: "emerald" },
                { type: "Exotic Pairs", pairs: "USD/TRY, USD/MXN, GBP/ZAR", desc: "Major + Emerging market. High spreads & volatility. NOT for beginners.", color: "rose" }
              ].map((cat, i) => (
                <div key={i} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                  <div className={`h-16 w-full md:w-48 rounded-2xl bg-${cat.color}-500/10 flex flex-col items-center justify-center flex-shrink-0`}>
                    <span className={`text-${cat.color}-600 font-black text-[10px] uppercase tracking-widest`}>{cat.type}</span>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-lg font-black text-corex-navy mb-1">{cat.pairs}</p>
                    <p className="text-sm text-slate-500 font-medium">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-indigo-50 p-10 rounded-[40px] border border-indigo-100">
            <h3 className="text-xl font-black text-corex-navy mb-6">Buying vs Selling</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-black text-[10px]">L</div>
                  <h4 className="font-black uppercase text-xs tracking-widest text-emerald-600">Buy (Go Long)</h4>
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  You think the <span className="font-bold">Base</span> currency will STRENGTHEN. You profit if the price rises.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-rose-500 flex items-center justify-center text-white font-black text-[10px]">S</div>
                  <h4 className="font-black uppercase text-xs tracking-widest text-rose-600">Sell (Go Short)</h4>
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  You think the <span className="font-bold">Base</span> currency will WEAKEN. You profit if the price falls.
                </p>
              </div>
            </div>
          </section>
        </div>
      )
    },
    {
      id: "1.3",
      title: "Essential Terminology",
      subtitle: "Master the FX Vocabulary",
      icon: BookOpen,
      content: (
        <div className="space-y-12 text-slate-700">
          <section className="grid sm:grid-cols-2 gap-6">
            {[
              { term: "PIP", def: "Percentage in Point. Smallest move (4th decimal).", example: "1.1000 to 1.1001 = 1 Pip" },
              { term: "SPREAD", def: "The difference between Buy (Ask) and Sell (Bid) price.", example: "This is the broker's fee." },
              { term: "LOT", def: "Standard unit of trade (100k units).", example: "Micro Lot = 1k units." },
              { term: "LEVERAGE", def: "Borrowed capital to control larger positions.", example: "100:1 means $1 controls $100." },
              { term: "MARGIN", def: "Required deposit to open a trade.", example: "Collateral for your leverage." },
              { term: "EQUITY", def: "Current value including floating profit/loss.", example: "Balance + Open P/L." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-white border border-slate-100 hover:shadow-xl transition-all">
                <h4 className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-3">{item.term}</h4>
                <p className="text-base font-bold text-corex-navy mb-4 tracking-tight leading-tight">{item.def}</p>
                <div className="text-[10px] font-black uppercase text-slate-400 bg-slate-50 p-3 rounded-xl tracking-wider">
                  <span className="text-indigo-500">Node:</span> {item.example}
                </div>
              </div>
            ))}
          </section>

          <section className="bg-rose-50 p-10 rounded-[40px] border border-rose-100">
            <div className="flex items-center gap-4 mb-6 text-rose-600">
              <ShieldCheck className="h-6 w-6" />
              <h3 className="text-xl font-black tracking-tight">Critical Safety Controls</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-rose-200 shadow-sm">
                <h4 className="font-black text-rose-600 text-sm mb-2 uppercase tracking-widest">Stop Loss (SL)</h4>
                <p className="text-sm font-medium leading-relaxed text-slate-600">
                  Automatic order to close at a loss level. <span className="font-bold">Non-negotiable</span> for risk management.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-emerald-200 shadow-sm">
                <h4 className="font-black text-emerald-600 text-sm mb-2 uppercase tracking-widest">Take Profit (TP)</h4>
                <p className="text-sm font-medium leading-relaxed text-slate-600">
                  Automatic order to close at a profit target. Secures your gains without monitoring.
                </p>
              </div>
            </div>
          </section>
        </div>
      )
    },
    {
      id: "1.4",
      title: "Market Mechanics",
      subtitle: "How Markets Move",
      icon: Landmark,
      content: (
        <div className="space-y-12 text-slate-700">
          <section>
            <h3 className="text-2xl font-black text-corex-navy mb-8 tracking-tight">The 24-Hour Cycle</h3>
            <div className="space-y-4">
              {[
                { city: "London", power: "30% Volume", time: "8 AM - 5 PM GMT", desc: "The most important session. Major trends develop here.", active: true },
                { city: "New York", power: "20% Volume", time: "1 PM - 10 PM GMT", desc: "USD pairs dominate. Major data releases happen here.", active: false },
                { city: "Tokyo", power: "10% Volume", time: "11 PM - 8 AM GMT", desc: "Lower volatility, ideal for range trading beginners.", active: false }
              ].map((session, i) => (
                <div key={i} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                   <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center flex-shrink-0 text-white font-black">
                      {session.city[0]}
                   </div>
                   <div className="flex-grow text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                        <h4 className="text-xl font-black text-corex-navy tracking-tight">{session.city}</h4>
                        <span className="text-[10px] font-black uppercase text-indigo-500 tracking-widest bg-indigo-50 px-2 py-0.5 rounded-full">{session.power}</span>
                      </div>
                      <p className="text-sm text-slate-500 font-medium">{session.desc}</p>
                   </div>
                   <div className="text-center md:text-right">
                      <div className="flex items-center gap-2 justify-center md:justify-end text-slate-400 mb-1">
                        <Clock className="h-3 w-3" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{session.time}</span>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-emerald-600 p-12 rounded-[48px] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Award className="h-8 w-8 text-emerald-300" />
                <h3 className="text-3xl font-black tracking-tight">The Golden Overlap</h3>
              </div>
              <p className="text-xl font-medium leading-relaxed mb-8 opacity-90">
                The <span className="font-black underline decoration-emerald-300">London-New York Overlap</span> (1 PM - 5 PM GMT) is when 70% of total daily volume occurs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Highest Global Liquidity",
                  "Tightest Bid-Ask Spreads",
                  "Major Trend Accelerations",
                  "Peak Volatility Opportunities"
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    <span className="text-xs font-black uppercase tracking-widest opacity-80">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
             <h3 className="text-2xl font-black text-corex-navy mb-8 tracking-tight">Market Hierarchy</h3>
             <div className="space-y-4">
                {[
                  { tier: "Tier 1: Interbank", who: "Major Banks (JP Morgan, Citi)", scale: "Billions", desc: "The source of price feed and highest liquidity." },
                  { tier: "Tier 2: Institutional", who: "Hedge Funds, Commercial Banks", scale: "Millions", desc: "Medium-large scale professional speculation." },
                  { tier: "Tier 3: Retail Brokers", who: "Aggregators & Platforms", scale: "Varies", desc: "Providing leverage and access to you." },
                  { tier: "Tier 4: Individual", who: "You (Retail Trader)", scale: "K-Millions", desc: "Smallest participants using leverage." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                    <div className="text-2xl font-black text-indigo-500/20 w-8">{i+1}</div>
                    <div>
                      <h4 className="font-black text-corex-navy text-sm uppercase tracking-wider mb-1">{item.tier}</h4>
                      <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-3">{item.who} | Scale: {item.scale}</p>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </section>
        </div>
      )
    },
    {
      id: "1.5",
      title: "Cryptocurrency Markets",
      subtitle: "Digital Assets & Blockchain",
      icon: Zap,
      content: (
        <div className="space-y-12 text-slate-700">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-2xl font-black text-corex-navy tracking-tight">How Cryptocurrency Works</h3>
            </div>
            <p className="text-lg leading-relaxed font-medium mb-6">
              Unlike traditional fiat currencies, cryptocurrencies are not issued or controlled by any central authority like a government or bank. Instead, they rely on a combination of cryptography and distributed ledger technology called the <span className="font-bold text-orange-600">Blockchain</span>.
            </p>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] mb-8">
              <h4 className="text-sm font-black uppercase tracking-widest text-orange-500 mb-4">The Blockchain Engine</h4>
              <p className="text-base font-medium leading-relaxed mb-4">
                Think of a blockchain as a digital, public ledger that records all transactions. But instead of one entity holding this ledger, it is distributed across thousands of computers worldwide (called nodes).
              </p>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-orange-500"></div> Transactions are grouped into "blocks".</li>
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-orange-500"></div> Each block is mathematically linked to the previous one, forming a "chain".</li>
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-orange-500"></div> This makes it virtually impossible to alter past transactions, ensuring extreme security.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black text-corex-navy mb-8 tracking-tight">Market Mechanics</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm">
                <h4 className="font-black text-corex-navy mb-4 uppercase text-xs tracking-widest">Decentralized Exchanges (DEXs)</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">
                  Platforms where users trade directly with each other via automated algorithms called smart contracts, without a middleman.
                </p>
                <div className="text-[10px] font-black uppercase text-slate-400 bg-slate-50 p-3 rounded-xl tracking-wider">
                  Example: Uniswap, PancakeSwap
                </div>
              </div>
              <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm">
                <h4 className="font-black text-corex-navy mb-4 uppercase text-xs tracking-widest">Centralized Exchanges (CEXs)</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">
                  Platforms operated by a company that facilitate trades, hold your funds, and act similarly to traditional stock brokers.
                </p>
                <div className="text-[10px] font-black uppercase text-slate-400 bg-slate-50 p-3 rounded-xl tracking-wider">
                  Example: Binance, Coinbase
                </div>
              </div>
            </div>
          </section>

          <section className="bg-orange-50 p-10 rounded-[40px] border border-orange-100">
            <h3 className="text-xl font-black text-corex-navy mb-6">Key Differences from Forex</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "24/7/365 Market", desc: "Never closes. Trades continuously over weekends and holidays." },
                { title: "Extreme Volatility", desc: "Prices can swing dramatically in short periods. High risk, high reward." },
                { title: "True Ownership", desc: "You hold the private keys in your own digital wallet, giving you complete control." },
                { title: "Programmable Money", desc: "Smart contracts allow money to execute complex logic automatically." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center flex-shrink-0 text-orange-600 font-black text-[10px]">{i+1}</div>
                  <div>
                    <h4 className="font-black text-orange-600 text-sm mb-1 uppercase tracking-widest">{item.title}</h4>
                    <p className="text-sm font-medium leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )
    },
    {
      id: "1.6",
      title: "Forex vs Crypto",
      subtitle: "Market Comparison",
      icon: Search,
      content: (
        <div className="space-y-12 text-slate-700">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Search className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-2xl font-black text-corex-navy tracking-tight">Market Comparison</h3>
            </div>
            <p className="text-lg leading-relaxed font-medium mb-8">
              Understanding the core differences between traditional Forex and the Cryptocurrency market is essential for diversifying your portfolio and managing risk effectively.
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Forex Card */}
              <div className="bg-white border-2 border-indigo-100 rounded-[32px] overflow-hidden shadow-xl shadow-indigo-900/5">
                <div className="bg-indigo-600 p-6 text-white">
                  <h4 className="text-xl font-black tracking-tight mb-1">Forex (Foreign Exchange)</h4>
                  <p className="text-indigo-200 text-xs font-black uppercase tracking-widest">Traditional Fiat Markets</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-6">
                    {[
                      { label: "What it trades", value: "Traditional government-issued currencies (USD, EUR, GBP, JPY, etc.)" },
                      { label: "Trading hours", value: "24/5 (Monday to Friday)" },
                      { label: "Regulation", value: "Heavily regulated by governments and central banks" },
                      { label: "Examples", value: "EUR/USD, GBP/JPY, USD/INR" },
                      { label: "Market type", value: "Decentralized, but through traditional banks and brokers" }
                    ].map((item, i) => (
                      <li key={i} className="flex flex-col border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-1">{item.label}</span>
                        <span className="text-sm font-medium text-slate-700">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Crypto Card */}
              <div className="bg-white border-2 border-orange-100 rounded-[32px] overflow-hidden shadow-xl shadow-orange-900/5">
                <div className="bg-orange-500 p-6 text-white">
                  <h4 className="text-xl font-black tracking-tight mb-1">Cryptocurrency Market</h4>
                  <p className="text-orange-200 text-xs font-black uppercase tracking-widest">Digital Asset Markets</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-6">
                    {[
                      { label: "What it trades", value: "Digital/virtual currencies (Bitcoin, Ethereum, etc.)" },
                      { label: "Trading hours", value: "24/7 (every day, including weekends)" },
                      { label: "Regulation", value: "Less regulated (varies by country)" },
                      { label: "Examples", value: "BTC/USD, ETH/USD, BTC/ETH" },
                      { label: "Market type", value: "Decentralized, blockchain-based" }
                    ].map((item, i) => (
                      <li key={i} className="flex flex-col border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                        <span className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-1">{item.label}</span>
                        <span className="text-sm font-medium text-slate-700">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-32">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Sidebar Lesson Selector */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-48">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Study Roadmap</span>
              </div>
              <div className="space-y-4">
                {lessons.map((lesson, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLesson(index)}
                    className={`w-full text-left p-8 rounded-[32px] transition-all flex items-center gap-6 group cursor-pointer ${
                      activeLesson === index 
                      ? "bg-corex-navy text-white shadow-2xl shadow-corex-navy/20 scale-[1.02]" 
                      : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                    }`}
                  >
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-colors ${
                      activeLesson === index ? "bg-indigo-600" : "bg-slate-200 group-hover:bg-indigo-600/10"
                    }`}>
                      <lesson.icon className={`h-6 w-6 ${activeLesson === index ? "text-white" : "text-slate-500 group-hover:text-indigo-600"}`} />
                    </div>
                    <div className="flex-grow">
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${activeLesson === index ? "text-indigo-400" : "text-slate-400"}`}>
                        Lesson {lesson.id}
                      </p>
                      <h4 className={`text-xl font-black tracking-tight ${activeLesson === index ? "text-white" : "text-corex-navy"}`}>
                        {lesson.title}
                      </h4>
                    </div>
                    <ChevronRight className={`h-5 w-5 transition-transform ${activeLesson === index ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                  </button>
                ))}
              </div>


            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLesson}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white min-h-[600px]"
              >
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-[8px] font-black uppercase tracking-widest">
                      Module 01 • Lesson {lessons[activeLesson].id}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                       <Clock className="h-3 w-3" />
                       <span className="text-[8px] font-black uppercase tracking-widest">Est. Study Time: 15 Mins</span>
                    </div>
                  </div>
                  <h2 className="text-5xl lg:text-7xl font-black text-corex-navy tracking-tighter leading-none mb-6">
                    {lessons[activeLesson].subtitle}
                  </h2>
                  <div className="h-1 w-24 bg-indigo-600 rounded-full"></div>
                </div>

                {lessons[activeLesson].content}

                {/* Lesson Navigation */}
                <div className="mt-20 pt-12 border-t border-slate-100 flex justify-between items-center">
                  <button 
                    disabled={activeLesson === 0}
                    onClick={() => setActiveLesson(prev => prev - 1)}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 disabled:opacity-0 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" /> Previous Lesson
                  </button>
                  {activeLesson < lessons.length - 1 ? (
                    <button 
                      onClick={() => setActiveLesson(prev => prev + 1)}
                      className="flex items-center gap-6 group cursor-pointer"
                    >
                      <div className="text-right">
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Up Next</p>
                        <p className="text-sm font-black text-corex-navy uppercase tracking-tight group-hover:text-indigo-600 transition-colors">{lessons[activeLesson + 1].title}</p>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </button>
                  ) : (
                    <div className="text-center bg-emerald-50 px-8 py-4 rounded-2xl border border-emerald-100">
                       <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Module 01 Complete ✅</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Institutional Support CTA */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-100">
         <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-black text-corex-navy mb-8 tracking-tighter">Need clarification on these <span className="text-indigo-600 italic">Nodes?</span></h3>
            <p className="text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
               Our institutional analysts are available for academic study sessions to help you master the intricacies of global currency dynamics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <button className="px-10 py-5 bg-corex-navy text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all shadow-xl shadow-corex-navy/10 flex items-center justify-center gap-3 cursor-pointer">
                  Schedule Study Session <PlayCircle className="h-5 w-5" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ForexDetail;
