import React, { useState } from 'react';
import {
  TrendingUp, Calendar, DollarSign, Package, Search, Filter,
  ArrowLeft, CheckCircle, AlertCircle, Clock, Building2,
  BarChart3, Info, Shield
} from 'lucide-react';

const NAVY  = '#0f172a';
const GREEN = '#10b981';
const BG    = '#f8fafc';

const STATUS_CONFIG = {
  Open:     { bg: '#10b981', label: 'Open Now'  },
  Upcoming: { bg: '#f59e0b', label: 'Upcoming'  },
  Closed:   { bg: '#64748b', label: 'Closed'    },
};

// ─── Timeline step ───────────────────────────────────────────────────────────
const TimelineStep = ({ label, date, active, done }) => (
  <div className="flex items-start gap-3">
    <div className="flex flex-col items-center">
      <div
        className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: done ? GREEN : active ? `${GREEN}25` : '#e2e8f0',
          border: `2px solid ${done || active ? GREEN : '#cbd5e1'}`,
        }}
      >
        {done
          ? <CheckCircle className="h-4 w-4 text-white" />
          : <div className="h-2 w-2 rounded-full" style={{ background: active ? GREEN : '#94a3b8' }} />
        }
      </div>
    </div>
    <div className="pb-6">
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: active || done ? GREEN : '#94a3b8' }}>{label}</p>
      <p className="text-sm font-black mt-0.5" style={{ color: NAVY }}>{date}</p>
    </div>
  </div>
);

// ─── IPO DETAIL VIEW ─────────────────────────────────────────────────────────
const IPODetail = ({ ipo, onBack }) => {
  const st = STATUS_CONFIG[ipo.status] || STATUS_CONFIG.Upcoming;

  // Derive minimum investment from price range upper bound and lot size
  const upperPrice = parseFloat(ipo.priceRange.replace(/[^0-9.]/g, '').split('–').pop()) || 0;
  const minInvestment = upperPrice && ipo.lotSize
    ? `₹${(upperPrice * Number(ipo.lotSize)).toLocaleString('en-IN')}`
    : 'N/A';

  const isOpen     = ipo.status === 'Open';
  const isUpcoming = ipo.status === 'Upcoming';
  const isDone     = ipo.status === 'Closed';

  const steps = [
    { label: 'IPO Opens',   date: ipo.openDate,    done: isOpen || isDone, active: isUpcoming },
    { label: 'IPO Closes',  date: ipo.closeDate,   done: isDone,           active: isOpen    },
    { label: 'Allotment',   date: '—',             done: isDone,           active: false     },
    { label: 'Listing Day', date: ipo.listingDate, done: isDone,           active: false     },
  ];

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: NAVY }} className="relative overflow-hidden px-6 py-16">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: GREEN, filter: 'blur(80px)', transform: 'translate(30%,-30%)' }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] mb-8 transition-all hover:-translate-x-1"
            style={{ color: GREEN }}
          >
            <ArrowLeft className="h-4 w-4" /> Back to IPO List
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${st.bg}30`, color: st.bg, border: `1px solid ${st.bg}50` }}
                >
                  {st.label}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {ipo.sector}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">{ipo.company}</h1>
              <p className="mt-3 text-base max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {ipo.description}
              </p>
            </div>

            {/* Price highlight */}
            <div
              className="rounded-2xl p-6 flex-shrink-0 min-w-[200px]"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: GREEN }}>Price Band</p>
              <p className="text-3xl font-black text-white">{ipo.priceRange}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} className="mt-3 pt-3">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Min. Investment</p>
                <p className="text-lg font-black" style={{ color: GREEN }}>{minInvestment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">

        {/* Row 1: Key Details + Timeline */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Key Details */}
          <div
            className="rounded-2xl p-8"
            style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 2px 16px rgba(15,23,42,0.06)' }}
          >
            <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-6" style={{ color: GREEN }}>
              <BarChart3 className="h-4 w-4" /> Key Details
            </h2>
            <div className="space-y-4">
              {[
                { icon: DollarSign, label: 'Price Band',    value: ipo.priceRange  },
                { icon: Package,    label: 'Lot Size',      value: `${ipo.lotSize} shares` },
                { icon: DollarSign, label: 'Min. Apply',    value: minInvestment   },
                { icon: Building2,  label: 'Sector',        value: ipo.sector      },
                { icon: Calendar,   label: 'Open Date',     value: ipo.openDate    },
                { icon: Calendar,   label: 'Close Date',    value: ipo.closeDate   },
                { icon: TrendingUp, label: 'Listing Date',  value: ipo.listingDate },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" style={{ color: GREEN }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#94a3b8' }}>{label}</span>
                  </div>
                  <span className="text-sm font-black" style={{ color: NAVY }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div
            className="rounded-2xl p-8"
            style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 2px 16px rgba(15,23,42,0.06)' }}
          >
            <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-6" style={{ color: GREEN }}>
              <Clock className="h-4 w-4" /> IPO Timeline
            </h2>
            <div>
              {steps.map((s, i) => (
                <TimelineStep key={i} {...s} />
              ))}
            </div>

            {/* Status CTA */}
            <div
              className="mt-2 rounded-xl px-4 py-4 text-center"
              style={{
                background: isOpen ? `${GREEN}15` : `${NAVY}08`,
                border: `1px solid ${isOpen ? GREEN : '#e2e8f0'}40`
              }}
            >
              {isOpen && (
                <>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: GREEN }}>IPO is currently Open!</p>
                  <p className="text-xs" style={{ color: '#64748b' }}>Apply through your broker's platform before the close date.</p>
                </>
              )}
              {isUpcoming && (
                <>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#f59e0b' }}>Opens on {ipo.openDate}</p>
                  <p className="text-xs" style={{ color: '#64748b' }}>Keep funds ready in your demat account.</p>
                </>
              )}
              {isDone && (
                <>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#64748b' }}>IPO Subscription Closed</p>
                  <p className="text-xs" style={{ color: '#64748b' }}>Check your allotment status via your broker.</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Row 2: About Company */}
        <div
          className="rounded-2xl p-8"
          style={{ background: NAVY, boxShadow: '0 4px 24px rgba(15,23,42,0.15)' }}
        >
          <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-5 text-white">
            <Building2 className="h-4 w-4" style={{ color: GREEN }} />
            <span style={{ color: GREEN }}>About</span>&nbsp;{ipo.company}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {ipo.description}
          </p>

          {/* Mini stats from lot/price */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { label: 'Sector',       value: ipo.sector },
              { label: 'Lot Size',     value: `${ipo.lotSize} shares` },
              { label: 'Min. Invest',  value: minInvestment },
            ].map((s, i) => (
              <div key={i} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: GREEN }}>{s.label}</p>
                <p className="text-sm font-black text-white">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: How to Apply + Risk */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* How to Apply */}
          <div
            className="rounded-2xl p-8"
            style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 2px 16px rgba(15,23,42,0.06)' }}
          >
            <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-6" style={{ color: GREEN }}>
              <Shield className="h-4 w-4" /> How to Apply
            </h2>
            <ul className="space-y-4">
              {[
                'Log into your broker (Zerodha, Groww, Angel One, etc.)',
                'Navigate to the IPO section and find this listing',
                `Enter lot quantity and bid at cut-off price`,
                'Confirm UPI mandate and approve in your UPI app',
                'Wait for allotment — check status on NSE/BSE',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black text-white mt-0.5"
                    style={{ background: GREEN }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risk & Disclaimer */}
          <div
            className="rounded-2xl p-8"
            style={{ background: '#fffbeb', border: '1px solid #fde68a', boxShadow: '0 2px 16px rgba(15,23,42,0.04)' }}
          >
            <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-6" style={{ color: '#b45309' }}>
              <AlertCircle className="h-4 w-4" /> Risk Factors
            </h2>
            <ul className="space-y-3">
              {[
                'IPO allotment is not guaranteed — subject to subscription demand.',
                'Listing price may be above or below the issue price.',
                'Market volatility can significantly affect listing gains.',
                'Invest only within your approved risk appetite.',
                'Past performance of other IPOs is not indicative of future results.',
              ].map((risk, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Info className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#d97706' }} />
                  <span className="text-sm leading-relaxed" style={{ color: '#78350f' }}>{risk}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4" style={{ borderTop: '1px solid #fde68a' }}>
              <p className="text-xs" style={{ color: '#92400e' }}>
                <strong>Authorised by Arihant Capital Markets Ltd.</strong> This is for informational purposes only and does not constitute investment advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── IPO CARD ────────────────────────────────────────────────────────────────
const IPOCard = ({ ipo, onClick }) => {
  const st = STATUS_CONFIG[ipo.status] || STATUS_CONFIG.Upcoming;
  const upperPrice = parseFloat(ipo.priceRange.replace(/[^0-9.]/g, '').split('–').pop()) || 0;
  const minInv = upperPrice && ipo.lotSize
    ? `₹${(upperPrice * Number(ipo.lotSize)).toLocaleString('en-IN')}`
    : '—';

  return (
    <div
      onClick={onClick}
      className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1 cursor-pointer group"
      style={{
        background: 'white',
        border: '1px solid #e2e8f0',
        boxShadow: '0 2px 20px rgba(15,23,42,0.07)',
      }}
    >
      {/* top bar */}
      <div className="px-6 pt-5 pb-4 flex items-start justify-between gap-3">
        <div>
          <h3
            className="text-lg font-black leading-tight group-hover:underline"
            style={{ color: NAVY, textDecorationColor: GREEN }}
          >
            {ipo.company}
          </h3>
          <span className="text-xs font-semibold uppercase tracking-widest mt-1 inline-block" style={{ color: GREEN }}>
            {ipo.sector}
          </span>
        </div>
        <span
          className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 mt-1"
          style={{ background: `${st.bg}20`, color: st.bg, border: `1px solid ${st.bg}40` }}
        >
          {st.label}
        </span>
      </div>

      <div style={{ borderTop: '1px solid #f1f5f9' }} />

      <div className="px-6 py-4 grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <DollarSign className="h-3.5 w-3.5" style={{ color: GREEN }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#94a3b8' }}>Price Band</span>
          </div>
          <span className="text-sm font-black" style={{ color: NAVY }}>{ipo.priceRange}</span>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <Package className="h-3.5 w-3.5" style={{ color: GREEN }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#94a3b8' }}>Lot Size</span>
          </div>
          <span className="text-sm font-black" style={{ color: NAVY }}>{ipo.lotSize} shares</span>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <Calendar className="h-3.5 w-3.5" style={{ color: GREEN }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#94a3b8' }}>Open Date</span>
          </div>
          <span className="text-sm font-semibold" style={{ color: NAVY }}>{ipo.openDate}</span>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <Calendar className="h-3.5 w-3.5" style={{ color: '#f59e0b' }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#94a3b8' }}>Close Date</span>
          </div>
          <span className="text-sm font-semibold" style={{ color: NAVY }}>{ipo.closeDate}</span>
        </div>
      </div>

      <div
        className="mx-6 mb-4 rounded-xl px-4 py-2 flex items-center justify-between"
        style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25` }}
      >
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>Min. Investment</span>
        <span className="text-xs font-black" style={{ color: NAVY }}>{minInv}</span>
      </div>

      <div className="px-6 pb-5">
        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: '#64748b' }}>{ipo.description}</p>
      </div>

      <div
        className="px-6 py-3 flex items-center justify-between text-xs font-bold transition-all"
        style={{ borderTop: '1px solid #f1f5f9', color: GREEN }}
      >
        <span>View Full Details</span>
        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </div>
    </div>
  );
};

// ─── MAIN IPO PAGE ────────────────────────────────────────────────────────────
const IPOPage = ({ ipos = [] }) => {
  const [search, setSearch]       = useState('');
  const [filter, setFilter]       = useState('All');
  const [selectedIpo, setSelectedIpo] = useState(null);

  const statuses = ['All', 'Open', 'Upcoming', 'Closed'];

  const filtered = ipos.filter(ipo => {
    const matchSearch = ipo.company.toLowerCase().includes(search.toLowerCase()) ||
                        ipo.sector.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || ipo.status === filter;
    return matchSearch && matchFilter;
  });

  const counts = {
    Open:     ipos.filter(i => i.status === 'Open').length,
    Upcoming: ipos.filter(i => i.status === 'Upcoming').length,
    Closed:   ipos.filter(i => i.status === 'Closed').length,
  };

  // Show detail view if IPO selected
  if (selectedIpo) {
    return <IPODetail ipo={selectedIpo} onBack={() => setSelectedIpo(null)} />;
  }

  return (
    <div style={{ background: BG, minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: NAVY }} className="relative overflow-hidden py-20 px-6">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: GREEN, filter: 'blur(80px)', transform: 'translate(30%, -30%)' }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-sm font-semibold uppercase tracking-widest"
            style={{ background: `${GREEN}20`, color: GREEN, border: `1px solid ${GREEN}40` }}
          >
            <TrendingUp className="h-4 w-4" />
            IPO Watch
          </div>
          <h1 className="text-5xl font-black text-white mb-4 leading-tight">
            Upcoming & Live <span style={{ color: GREEN }}>IPOs</span>
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Track all upcoming, open, and recently listed IPOs. Click any card for full details,
            timeline, how to apply, and risk factors.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
              <div
                key={key}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
                style={{ background: `${cfg.bg}20`, color: cfg.bg, border: `1px solid ${cfg.bg}40` }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: cfg.bg }} />
                {counts[key]} {key}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }} className="sticky top-[80px] z-30 px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search company or sector..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl focus:outline-none"
              style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', color: NAVY }}
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 flex-shrink-0" style={{ color: '#94a3b8' }} />
            {statuses.map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className="px-4 py-2 rounded-full text-xs font-bold transition-all"
                style={filter === s
                  ? { background: NAVY, color: 'white' }
                  : { background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0' }
                }
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* IPO Cards */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(ipo => (
                <IPOCard key={ipo.id} ipo={ipo} onClick={() => setSelectedIpo(ipo)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" style={{ color: '#cbd5e1' }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>No IPOs found</h3>
              <p style={{ color: '#94a3b8' }}>Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl px-6 py-4 text-xs leading-relaxed"
            style={{ background: `${NAVY}08`, border: `1px solid ${NAVY}15`, color: '#64748b' }}
          >
            <strong style={{ color: NAVY }}>Disclaimer:</strong> IPO information is for informational purposes only and does not constitute investment advice. Authorised by Arihant Capital Markets Ltd.
          </div>
        </div>
      </section>
    </div>
  );
};

export default IPOPage;
