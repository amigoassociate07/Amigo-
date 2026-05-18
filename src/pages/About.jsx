import { TrendingUp, Shield, Users, Target, Award, BarChart2, Globe, Zap, CheckCircle, Camera, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const NAVY   = '#0f172a';
const GREEN  = '#10b981';
const BG     = '#f8fafc';

const missionPoints = [
  'Institutional-grade study for every investor',
  'Transparent, data-driven analytics',
  'Real-time market intelligence & portfolio tools',
  'Informational insights for every risk profile',
];

const iconsMap = { 
  TrendingUp, 
  Shield, 
  Users, 
  Target, 
  Award, 
  BarChart2, 
  Globe, 
  Zap, 
  CheckCircle,
  Camera
};

const cultureImages = [
  {
    src: '/images/culture/team-1.jpg',
    title: 'Team Spirit',
    desc: 'Our dedicated team celebrating milestones together.',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    src: '/images/culture/office.jpg',
    title: 'Office Life',
    desc: 'Collaboration and innovation at the heart of Amigo.',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    src: '/images/culture/team-2.jpg',
    title: 'Beyond Charts',
    desc: 'Building a community of passionate professionals.',
    span: 'md:col-span-1 md:row-span-1'
  }
];

export default function About({ aboutData }) {
  const { teamMembers = [], values = [], stats = [], missionPoints: dynamicMissionPoints } = aboutData || {};

  const getIcon = (item, fallback = Shield) => {
    if (typeof item.icon === 'string' && iconsMap[item.icon]) return iconsMap[item.icon];
    if (typeof item.icon === 'function' || typeof item.icon === 'object') return item.icon;
    return fallback;
  };

  const activeMissionPoints = dynamicMissionPoints || [
    'Institutional-grade study for every investor',
    'Transparent, data-driven analytics',
    'Real-time market intelligence & portfolio tools',
    'Informational insights for every risk profile',
  ];

  return (
    <div style={{ background: BG, color: NAVY, fontFamily: 'inherit' }}>

      {/* ── HERO ── */}
      <section
        style={{ background: NAVY }}
        className="relative overflow-hidden py-32 px-6"
      >
        {/* decorative blobs */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: GREEN, filter: 'blur(100px)' }}
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 5 }}
          className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: GREEN, filter: 'blur(80px)' }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-pill bg-corex-navy/50 border-white/10 text-white mb-10 !px-8 !py-3 !gap-6"
            style={{ borderColor: `${GREEN}20` }}
          >
            <TrendingUp className="h-5 w-5" style={{ color: GREEN }} />
            <div className="glass-pill bg-yellow-400/10 border-yellow-500/20 text-yellow-600 !px-4 !py-1.5 !gap-3">
                <BookOpen className="h-3.5 w-3.5" /> Educational Purpose Only
            </div>
            <span style={{ color: GREEN }}>Institutional Genesis</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-8 text-white leading-[0.9] tracking-tighter">
            Architecting <br />
            <span style={{ color: GREEN }} className="italic">Financial Trust.</span>
          </h1>

          <p className="text-xl leading-relaxed max-w-3xl mx-auto font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Amigo Associate is built on the foundation of rigorous study and institutional-grade analytics, bringing the world's market intelligence to the modern investor.
          </p>
        </div>
      </section>



      {/* ── MISSION & AIM ── */}
      <section className="py-24 px-6" style={{ background: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: GREEN }}
            >
              Purpose & Focus
            </p>
            <h2 className="text-4xl sm:text-5xl font-black mb-5 tracking-tight" style={{ color: NAVY }}>
              Our Mission & Aim
            </h2>
            <p className="max-w-2xl mx-auto text-base text-slate-500 font-medium">
              Architecting a transparent, academic environment to empower every Indian investor with institutional-grade insights and analytical clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <div
              className="p-8 sm:p-10 rounded-[32px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 24px rgba(15,23,42,0.04)',
              }}
            >
              <div>
                <div
                  className="h-14 w-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6"
                  style={{ background: `${GREEN}12` }}
                >
                  <Target className="h-7 w-7" style={{ color: GREEN }} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight" style={{ color: NAVY }}>
                  Our Mission
                </h3>
                <p className="leading-relaxed text-slate-600 mb-6 text-sm font-medium">
                  To democratize institutional-grade financial intelligence and academic study. We believe that professional tools, deep market insights, and objective educational materials should not be exclusive privileges of institutional elites, but accessible resources for all.
                </p>
              </div>
              <ul className="space-y-3.5">
                {[
                  'Democratizing institutional financial frameworks.',
                  'Enabling absolute transparency in data-driven tools.',
                  'Fostering a scientific and bias-free learning workspace.'
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                    <span className="text-sm font-semibold text-slate-700">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Aim */}
            <div
              className="p-8 sm:p-10 rounded-[32px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 24px rgba(15,23,42,0.04)',
              }}
            >
              <div>
                <div
                  className="h-14 w-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6"
                  style={{ background: `${GREEN}12` }}
                >
                  <TrendingUp className="h-7 w-7" style={{ color: GREEN }} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight" style={{ color: NAVY }}>
                  Our Aim
                </h3>
                <p className="leading-relaxed text-slate-600 mb-6 text-sm font-medium">
                  To serve as India's premier digital financial sanctuary and academic training ground. We aim to nurture analytical logic, minimize market speculativeness through structured studies, and guide retail capital toward highly resilient assets.
                </p>
              </div>
              <ul className="space-y-3.5">
                {[
                  'Building professional analytical mastery in users.',
                  'Mitigating risk profiles through asset rationalization.',
                  'Cultivating zero-bias, educational-first values.'
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                    <span className="text-sm font-semibold text-slate-700">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDY PURPOSE ── */}
      <section className="py-24 px-6 border-t border-gray-100" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-7 text-sm font-semibold uppercase tracking-widest"
            style={{ background: `${GREEN}10`, color: GREEN }}
          >
            <BookOpen className="h-4 w-4" />
            Educational Intent
          </div>
          <h2 className="text-4xl font-black mb-6 leading-tight" style={{ color: NAVY }}>
            Built for <span style={{ color: GREEN }}>Study & Intelligence</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-10" style={{ color: '#475569' }}>
            Amigo Associate is primarily designed as a study-oriented platform for students, studyers, and market enthusiasts. Our core purpose is to facilitate the study of financial markets through historical data study, trend visualization, and educational modules.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 w-full">
            {[
              { title: 'Academic Study', desc: 'In-depth tools for studying market behavior and historical patterns.' },
              { title: 'Skill Development', desc: 'Enhance your technical analysis and data interpretation skills.' },
              { title: 'Pure Study', desc: 'Focused purely on informational data with no commercial or transactional intent.' }
            ].map((box, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-left">
                <h3 className="font-bold text-lg mb-3" style={{ color: NAVY }}>{box.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 font-medium">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── ALLIED SERVICES ── */}
      <section className="py-24 px-6 border-t border-gray-100" style={{ background: '#f1f5f9' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: GREEN }}
              >
                Comprehensive Ecosystem
              </p>
              <h2 className="text-4xl font-black mb-6 leading-tight" style={{ color: NAVY }}>
                Beyond Equity: <br />
                <span style={{ color: GREEN }}>Allied Financial Services</span>
              </h2>
              <p className="leading-relaxed text-base mb-8" style={{ color: '#475569' }}>
                Through our strategic distribution partnerships, we offer a complete suite of financial products to ensure your entire portfolio is robust and protected.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Insurance', sub: 'Life & General' },
                { title: 'Mutual Funds', sub: 'Distribution' },
                { title: 'Fixed Deposits', sub: 'Bonds & NCDs' },
                { title: 'Loans', sub: 'Mortgages & Credits' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="h-2 w-8 bg-corex-accent rounded-full mb-4"></div>
                  <h3 className="font-black text-lg mb-1" style={{ color: NAVY }}>{item.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 px-6" style={{ background: NAVY }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: GREEN }}
            >
              Our Values
            </p>
            <h2 className="text-4xl font-black text-white mb-3">
              What We Stand For
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>The principles that guide everything we do.</p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = getIcon(v, Shield);
              return (
              <div
                key={v.id || i}
                className="rounded-2xl p-6 transition-all hover:-translate-y-1 group"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${GREEN}20` }}
                >
                  <Icon className="h-6 w-6 group-hover:scale-110 transition-transform" style={{ color: GREEN }} />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{v.desc}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── CULTURE GALLERY ── */}
      <section className="py-24 px-6 overflow-hidden" style={{ background: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: GREEN }}
              >
                Our Culture
              </p>
              <h2 className="text-4xl font-black mb-3" style={{ color: NAVY }}>
                Life at Amigo
              </h2>
              <p className="max-w-xl" style={{ color: '#64748b' }}>
                Beyond the charts and study, we are a family of dedicated professionals 
                building the future of retail investing in India.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden md:flex items-center gap-2 text-sm font-bold"
              style={{ color: NAVY }}
            >
              <Camera className="h-5 w-5" style={{ color: GREEN }} />
              Moments that Matter
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {cultureImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative group overflow-hidden rounded-3xl shadow-lg ${img.span}`}
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-white font-bold text-xl mb-1">{img.title}</h3>
                  <p className="text-white/70 text-sm">{img.desc}</p>
                </div>
                
                {/* Fallback pattern if image fails to load */}
                <div className="absolute inset-0 -z-10 bg-slate-50 flex items-center justify-center">
                  <div className="text-slate-200 text-xs font-bold uppercase tracking-widest text-center px-4">
                    Image Preview<br/>{img.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL TRUST ── */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-corex-accent mb-4">Quality Assurance</h2>
                <p className="text-4xl font-black text-corex-navy tracking-tighter">Why Our Study is <span className="text-corex-accent italic uppercase tracking-tighter">Trusted</span>.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "SEBI Compliant", desc: "Adhering to the highest standards of regulatory compliance and data transparency." },
                    { title: "Institutional DNA", desc: "Study methodologies derived from institutional-grade investment frameworks." },
                    { title: "Zero Bias", desc: "Unbiased, data-first approach with no external commercial influence on study." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-corex-accent transition-colors">
                            <CheckCircle className="h-6 w-6 text-corex-accent group-hover:text-white" />
                        </div>
                        <h4 className="text-xl font-black text-corex-navy mb-4 tracking-tight">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
