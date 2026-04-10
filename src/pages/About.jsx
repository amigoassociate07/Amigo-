import { TrendingUp, Shield, Users, Target, Award, BarChart2, Globe, Zap, CheckCircle, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const NAVY   = '#0f172a';
const GREEN  = '#10b981';
const BG     = '#f8fafc';

const missionPoints = [
  'Institutional-grade research for every investor',
  'Transparent, SEBI-compliant advisory',
  'Real-time market intelligence & portfolio tools',
  'Personalised guidance for every risk profile',
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
    'Institutional-grade research for every investor',
    'Transparent, SEBI-compliant advisory',
    'Real-time market intelligence & portfolio tools',
    'Personalised guidance for every risk profile',
  ];

  return (
    <div style={{ background: BG, color: NAVY, fontFamily: 'inherit' }}>

      {/* ── HERO ── */}
      <section
        style={{ background: NAVY }}
        className="relative overflow-hidden py-28 px-6"
      >
        {/* decorative blobs */}
        <div
          className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full opacity-10 pointer-events-none"
          style={{ background: GREEN, filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none"
          style={{ background: GREEN, filter: 'blur(60px)' }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-7 text-sm font-semibold uppercase tracking-widest"
            style={{ background: `${GREEN}20`, color: GREEN, border: `1px solid ${GREEN}40` }}
          >
            <TrendingUp className="h-4 w-4" />
            About Amigo Associate
          </div>

          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-white leading-tight">
            Democratising{' '}
            <span style={{ color: GREEN }}>Wealth Creation</span>
          </h1>

          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Amigo Associate aims to enhance understanding of the Indian equity markets through research-driven insights and analysis, accessible to investors at all levels.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: GREEN }} className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 px-6" style={{ background: BG }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* text side */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: GREEN }}
            >
              Our Mission
            </p>
            <h2 className="text-4xl font-black mb-5 leading-tight" style={{ color: NAVY }}>
              Levelling the Playing Field in Indian Finance
            </h2>
            <p className="leading-relaxed mb-8 text-base" style={{ color: '#475569' }}>
              We believe every Indian deserves access to high-quality investment research and
              financial guidance — not just the wealthy few. From identifying multibagger stocks
              to managing risk in volatile markets, Amigo Associate stands beside you at every
              step of your wealth-building journey.
            </p>
            <ul className="space-y-3">
              {activeMissionPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                  <span className="text-sm font-medium" style={{ color: '#334155' }}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* card grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: BarChart2, label: 'Market Research' },
              { icon: Zap,       label: 'Real Time Updates' },
              { icon: Users,     label: 'Community'       },
              { icon: Shield,    label: 'SEBI Compliant'  },
            ].map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col items-center gap-4 text-center transition-all hover:-translate-y-1"
                style={{
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 16px rgba(15,23,42,0.06)',
                }}
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${GREEN}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color: GREEN }} />
                </div>
                <span className="text-sm font-bold" style={{ color: NAVY }}>{label}</span>
              </div>
            ))}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Beyond the charts and research, we are a family of dedicated professionals 
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

      {/* ── CTA ── */}
      <section className="py-20 px-6" style={{ background: NAVY }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Start Your{' '}
            <span style={{ color: GREEN }}>Investment Journey?</span>
          </h2>
          <p className="mb-8 text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Join thousands of investors who trust Amigo Associate for smarter, data-driven investing.
          </p>
          <a
            href="mailto:amigoassociate07@gmail.com"
            className="inline-flex items-center gap-2 font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 text-white"
            style={{ background: GREEN }}
          >
            Get in Touch
          </a>
        </div>
      </section>

    </div>
  );
}
