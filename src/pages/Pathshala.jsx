import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  PlayCircle, 
  FileText, 
  Award, 
  Lightbulb, 
  Users, 
  ArrowRight, 
  Search, 
  GraduationCap, 
  ArrowLeft, 
  Play, 
  CheckCircle2, 
  Trophy, 
  HelpCircle, 
  ChevronRight, 
  Check,
  Compass,
  Activity,
  ShieldAlert
} from 'lucide-react';

const Pathshala = () => {
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeLessonIdx, setActiveLessonIdx] = useState({ module: 0, lesson: 0 });
  const [completedLessons, setCompletedLessons] = useState({});
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top whenever course or lesson changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [activeCourse, activeLessonIdx]);

  const courses = [
    {
      title: "Stock Market Basics",
      desc: "Learn the fundamentals of equity markets, from how exchanges work to reading price charts.",
      level: "Beginner",
      duration: "4 Hours",
      lessonsCount: 6,
      icon: BookOpen,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Mutual Fund Mastery",
      desc: "Deep dive into SIPs, ELSS, and debt funds. Build a balanced portfolio that works for your goals.",
      level: "Intermediate",
      duration: "6 Hours",
      lessonsCount: 6,
      icon: GraduationCap,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Advanced Trading Theory",
      desc: "Master technical indicators, market psychology, and risk management strategies used by professionals.",
      level: "Advanced",
      duration: "10 Hours",
      lessonsCount: 6,
      icon: Lightbulb,
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ];

  const courseDetailsData = {
    "Stock Market Basics": {
      modules: [
        {
          title: "Module 1: Equities Fundamentals",
          lessons: [
            {
              title: "What is a Share?",
              duration: "20 mins",
              content: "A share represents a unit of ownership in a company. When you acquire shares of a corporation, you become a co-owner, entitled to a proportionate claim on its assets and earnings. Equities allow businesses to raise capital without taking on debt, while offering retail investors a powerful avenue to participate in corporate wealth accumulation.",
              points: [
                "Fractional ownership of a business entity.",
                "Proportional claim on assets and net earnings.",
                "Facilitates long-term corporate compounding."
              ],
              quiz: {
                q: "What does owning a share primarily represent?",
                options: [
                  "A legal loan to the business entity",
                  "Fractional ownership of the corporation",
                  "A guarantee of fixed monthly interest",
                  "A debt obligation issued by the company"
                ],
                a: 1,
                reason: "A share represents fractional ownership of the corporation, giving you a proportional claim on earnings and assets without interest payouts."
              }
            },
            {
              title: "IPOs and Public Markets",
              duration: "25 mins",
              content: "An Initial Public Offering (IPO) is the process by which a private company lists its shares on a public stock exchange for the first time. This transition allows the company to solicit investment capital from public investors in the primary market, facilitating institutional expansion and regulatory transparency.",
              points: [
                "Transition from private to public ownership.",
                "Primary market capital generation.",
                "Requires rigorous SEBI compliance disclosures."
              ],
              quiz: {
                q: "Where does a company sell shares for the first time during an IPO?",
                options: [
                  "The secondary market",
                  "The primary market",
                  "The options exchange",
                  "A private equity bid"
                ],
                a: 1,
                reason: "Initial listings and stock issuances take place in the Primary Market. Subsequent trades between investors occur in the Secondary Market."
              }
            },
            {
              title: "Role of Exchanges (NSE/BSE)",
              duration: "25 mins",
              content: "Stock exchanges like the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) act as regulated secondary marketplaces. They provide the technical and operational infrastructure for buying and selling shares, maintaining liquidity, order matching logic, and absolute price transparency.",
              points: [
                "Regulated secondary market infrastructures.",
                "Maintains bid-ask order matching books.",
                "Guarantees clearing and settlement security."
              ],
              quiz: {
                q: "What is the primary role of NSE and BSE?",
                options: [
                  "To issue loans directly to listing companies",
                  "To act as a regulated secondary market for trading",
                  "To set stock prices arbitrarily",
                  "To manage individual investor portfolios"
                ],
                a: 1,
                reason: "Stock exchanges act as neutral secondary marketplaces that match buy and sell orders based on transparent bidding."
              }
            }
          ]
        },
        {
          title: "Module 2: Technical & Visual Studies",
          lessons: [
            {
              title: "Reading Candlestick Charts",
              duration: "35 mins",
              content: "Candlestick charts display the open, high, low, and close prices (OHLC) of a stock over a specific timeframe. Originating from historic trade tracking, candlesticks provide instant visual clarity on market sentiment: green candles represent bullish buying pressure, while red candles signal bearish selling pressure.",
              points: [
                "Displays Open, High, Low, and Close (OHLC) levels.",
                "Green candles show buying dominance; red shows selling.",
                "Visual patterns help study historical supply and demand."
              ],
              quiz: {
                q: "What does the 'wick' of a candlestick represent?",
                options: [
                  "The average closing price of the session",
                  "The maximum high and minimum low price points",
                  "The total volume traded in that timeframe",
                  "The broker fee markup applied to trades"
                ],
                a: 1,
                reason: "The wicks (or shadows) represent the price extremes (highest high and lowest low) reached during that specific time interval."
              }
            },
            {
              title: "Support and Resistance Levels",
              duration: "30 mins",
              content: "Support and Resistance are key concepts in market charting. Support is the price level where a downtrend tends to pause due to a concentration of demand (buying interest). Resistance is the price level where an uptrend tends to pause due to a concentration of supply (selling interest).",
              points: [
                "Support acts as a price floor where buying emerges.",
                "Resistance acts as a price ceiling where selling emerges.",
                "Breaching these levels often triggers strong trend momentum."
              ],
              quiz: {
                q: "What occurs at a well-established Support level?",
                options: [
                  "Selling pressure completely dominates buying interest",
                  "Buying interest concentration typically pauses a downtrend",
                  "A stock is automatically delisted by the exchange",
                  "Brokerages double the transaction charges"
                ],
                a: 1,
                reason: "Support represents a concentration of buying interest that is strong enough to overcome selling pressure, temporarily pausing a price drop."
              }
            },
            {
              title: "Volume Analysis Basics",
              duration: "25 mins",
              content: "Volume measures the total number of shares traded during a given timeframe. Analyzing volume alongside price helps traders validate the strength of a price movement. Price rises accompanied by high trading volumes indicate strong institutional participation and a reliable trend.",
              points: [
                "Volume acts as a verification vector for price trends.",
                "High volume confirms trend conviction and institutional presence.",
                "Low volume movements signal weak consensus and risk of reversal."
              ],
              quiz: {
                q: "What does high volume during a price breakout indicate?",
                options: [
                  "A weak, speculative price movement",
                  "Strong consensus and high trend conviction",
                  "An immediate market system shutdown",
                  "A mandatory share buyback event"
                ],
                a: 1,
                reason: "High volume during a breakout shows that the movement has strong participation and institutional support, making it highly reliable."
              }
            }
          ]
        }
      ]
    },
    "Mutual Fund Mastery": {
      modules: [
        {
          title: "Module 1: Fund Structures",
          lessons: [
            {
              title: "Active vs Passive Funds",
              duration: "25 mins",
              content: "Active funds are managed by professional fund managers who actively select stocks to beat a benchmark index. Passive funds (like Index Funds or ETFs) simply track an index (e.g. NIFTY 50) and aim to match its performance. Passive funds typically offer much lower expense ratios.",
              points: [
                "Active funds aim to outperform the market index.",
                "Passive funds replicate index performance at minimal cost.",
                "Expense ratios are significantly lower in passive schemes."
              ],
              quiz: {
                q: "What is the primary objective of a passive index fund?",
                options: [
                  "To beat the index by holding high-risk stocks",
                  "To replicate the benchmark index performance and holdings",
                  "To invest purely in government debt bonds",
                  "To guarantee a fixed annual dividend payout"
                ],
                a: 1,
                reason: "Passive index funds aim to replicate the holdings and returns of their benchmark index as closely as possible, minimizing tracking error."
              }
            },
            {
              title: "Direct vs Regular Plans",
              duration: "20 mins",
              content: "Every mutual fund scheme is offered in two plans: Direct and Regular. In a Direct plan, you buy units directly from the Mutual Fund House, bypassing brokers and commissions. In a Regular plan, commissions are paid to brokers from the fund's assets, resulting in a higher Expense Ratio that reduces your long-term compounding returns.",
              points: [
                "Direct plans have zero broker commission overheads.",
                "Regular plans carry recurring broker payout charges.",
                "Direct plans feature lower Expense Ratios and higher returns."
              ],
              quiz: {
                q: "Why do Direct Mutual Fund plans offer higher returns over time?",
                options: [
                  "They invest in completely different high-growth stocks",
                  "They have lower Expense Ratios due to zero broker commissions",
                  "The government subsidizes direct schemes",
                  "They do not incur any fund management costs"
                ],
                a: 1,
                reason: "Direct plans bypass intermediary commissions. This lowers the expense ratio, allowing more capital to compound, leading to significantly higher wealth."
              }
            },
            {
              title: "Expense Ratio Economics",
              duration: "30 mins",
              content: "The Expense Ratio represents the annual fee charged by a mutual fund to manage your money. It covers management fees, administrative fees, and advertising costs. Expressed as a percentage, even a 1% difference in the expense ratio can reduce your final accumulated wealth by lakhs over 20 years.",
              points: [
                "Expressed as an annual percentage of total assets (AUM).",
                "Directly deducted from the NAV daily.",
                "Lower expense ratios amplify long-term compounding."
              ],
              quiz: {
                q: "How is the mutual fund Expense Ratio charged?",
                options: [
                  "As a one-time entry charge when buying units",
                  "As a recurring annual percentage deducted daily from the NAV",
                  "As a fixed fee paid directly to the bank at year-end",
                  "As a government tax levied on capital gains"
                ],
                a: 1,
                reason: "The expense ratio is a recurring cost deducted proportionately from the fund's Net Asset Value (NAV) on a daily basis."
              }
            }
          ]
        },
        {
          title: "Module 2: Strategic Allocation",
          lessons: [
            {
              title: "Asset Allocation Pillars",
              duration: "30 mins",
              content: "Asset allocation is the process of dividing your investments among different asset classes, such as equities, debt, and gold. It is the single most important factor determining your portfolio's risk-reward profile, helping protect your capital from severe volatility in any single market segment.",
              points: [
                "Balances risk and reward based on time horizon.",
                "Reduces correlation across portfolio holdings.",
                "Key defense mechanism during bearish cycles."
              ],
              quiz: {
                q: "What is the primary benefit of asset allocation?",
                options: [
                  "To guarantee immediate profit doubling",
                  "To spread risk and minimize impact of market volatility",
                  "To eliminate the need for paying capital gains tax",
                  "To buy only high-performing small cap equities"
                ],
                a: 1,
                reason: "Asset allocation spreads capital across non-correlated asset classes, ensuring a decline in one sector doesn't wipe out your entire portfolio."
              }
            },
            {
              title: "ELSS Tax Savings",
              duration: "25 mins",
              content: "Equity Linked Savings Schemes (ELSS) are diversified equity mutual funds that qualify for tax deductions under Section 80C of the Income Tax Act. They offer a unique combination of wealth growth potential through equity and tax saving, with the shortest lock-in period among Section 80C options (3 years).",
              points: [
                "Qualifies for tax deduction under Section 80C.",
                "Shortest lock-in period (3 years) among tax-savers.",
                "Offers potential for high equity compounding."
              ],
              quiz: {
                q: "What is the mandatory lock-in period for ELSS investments?",
                options: [
                  "5 years",
                  "3 years",
                  "1 year",
                  "No lock-in period"
                ],
                a: 1,
                reason: "ELSS funds come with a mandatory 3-year lock-in period. This is the shortest lock-in period compared to PPF, NPS, or Tax-Saver FDs."
              }
            },
            {
              title: "SIP Compounding Power",
              duration: "30 mins",
              content: "Systematic Investment Plans (SIPs) utilize the power of regular, disciplined investing. By investing a fixed amount monthly, you accumulate more units when prices are low and fewer when they are high. Over decades, compounding interest turns these small periodic contributions into substantial wealth.",
              points: [
                "Averages purchase costs via Rupee Cost Averaging.",
                "Leverages compound interest for long-term growth.",
                "Instills financial discipline and eliminates market timing."
              ],
              quiz: {
                q: "What is the core principle of Rupee Cost Averaging in SIP?",
                options: [
                  "Timing the exact absolute peak of the market to buy",
                  "Buying more units when prices are low, fewer when high",
                  "Relying entirely on short-term debt instruments",
                  "Bypassing all regulatory compliance norms"
                ],
                a: 1,
                reason: "SIP automates buying. When markets drop, your fixed amount buys more units, lowering your average acquisition cost automatically."
              }
            }
          ]
        }
      ]
    },
    "Advanced Trading Theory": {
      modules: [
        {
          title: "Module 1: Quantitative Abstractions",
          lessons: [
            {
              title: "Exponential Moving Averages",
              duration: "35 mins",
              content: "Exponential Moving Averages (EMA) trace the average price of a security over a specific number of periods, applying higher weighting to the most recent price data. EMAs respond much faster to price fluctuations than Simple Moving Averages (SMA), helping identify short-term trend reversals early.",
              points: [
                "Gives higher weight to recent price fluctuations.",
                "Responds faster than SMAs to trend shifts.",
                "Acts as dynamic support and resistance baselines."
              ],
              quiz: {
                q: "What makes EMAs different from SMAs?",
                options: [
                  "EMAs ignore historical data entirely",
                  "EMAs apply higher weighting to recent price actions",
                  "EMAs are calculated only using trade volumes",
                  "EMAs are restricted to mutual fund analytics"
                ],
                a: 1,
                reason: "EMAs emphasize recent prices, making them more sensitive to recent changes and highly effective for fast-moving markets."
              }
            },
            {
              title: "Relative Strength Index (RSI)",
              duration: "30 mins",
              content: "The Relative Strength Index (RSI) is a momentum oscillator that measures the speed and change of price movements on a scale from 0 to 100. Traditionally, an RSI value above 70 indicates an overbought condition (potential peak), while a value below 30 indicates an oversold condition (potential bottom).",
              points: [
                "Oscillates between a fixed scale of 0 and 100.",
                "Values above 70 flag potential overbought exhaustion.",
                "Values below 30 flag potential oversold stabilization."
              ],
              quiz: {
                q: "What is traditionally indicated when the RSI index rises above 70?",
                options: [
                  "The stock has entered an oversold, bargain zone",
                  "The stock is potentially overbought and experiencing trend exhaustion",
                  "The exchange is going to suspend trading on the stock",
                  "The stock has officially completed an IPO transition"
                ],
                a: 1,
                reason: "An RSI above 70 signals that a security's price momentum is highly stretched, putting it in overbought territory and suggesting a potential pullback."
              }
            },
            {
              title: "Bollinger Bands and Volatility",
              duration: "35 mins",
              content: "Bollinger Bands consist of a middle SMA band flanked by two standard deviation bands. Because standard deviation measures volatility, the bands expand during volatile trading sessions and contract during stable periods. Price touches on the outer bands often signal potential reversal points.",
              points: [
                "Consists of a middle SMA and two standard deviation bands.",
                "Bands dynamically expand and contract based on market volatility.",
                "Band contraction signals a potential upcoming explosive breakout."
              ],
              quiz: {
                q: "What typically happens to Bollinger Bands during a low-volatility period?",
                options: [
                  "The bands expand significantly outward",
                  "The bands contract tightly toward the middle average line",
                  "The standard deviation lines disappear completely",
                  "The security price becomes frozen by the regulatory bodies"
                ],
                a: 1,
                reason: "During quiet market phases, volatility drops and the bands squeeze (contract). A squeeze is often the precursor to a high-volatility breakout."
              }
            }
          ]
        },
        {
          title: "Module 2: Risk Architecture",
          lessons: [
            {
              title: "Risk-to-Reward Ratio",
              duration: "30 mins",
              content: "The Risk-to-Reward ratio measures the prospective reward an investor can earn for every rupee risked on a trade. A professional risk profile aims for at least a 1:2 ratio, meaning the potential profit is twice the size of the maximum stop-loss threshold. This ensures long-term trading viability.",
              points: [
                "Compares maximum downside to prospective upside.",
                "A standard ratio of 1:2 ensures operational viability.",
                "Allows profitability even with a win rate below 50%."
              ],
              quiz: {
                q: "What does a Risk-to-Reward ratio of 1:3 imply?",
                options: [
                  "You are risking ₹3 to potentially earn ₹1",
                  "You are risking ₹1 to potentially earn ₹3",
                  "You must win 3 consecutive trades to break even",
                  "The broker charges 3% commission on your entry"
                ],
                a: 1,
                reason: "A 1:3 ratio means your potential profit (reward) is three times larger than your stop-loss risk, maximizing compounding efficiency."
              }
            },
            {
              title: "Scientific Stop-Loss Placement",
              duration: "30 mins",
              content: "A stop-loss is an automated order placed with a broker to sell a security when it reaches a specific price limit. Placing a stop-loss scientifically involves analyzing support structures, moving averages, or Average True Range (ATR) metrics rather than relying on arbitrary percentage points.",
              points: [
                "Automates downside containment to protect capital.",
                "Set relative to structural supports or technical thresholds.",
                "Eliminates emotional decision-making during price declines."
              ],
              quiz: {
                q: "What is the primary function of a Stop-Loss order?",
                options: [
                  "To maximize transaction commissions paid to brokers",
                  "To automate downside containment and protect capital from heavy losses",
                  "To guarantee a higher public listing price",
                  "To force a company to issue stock dividends"
                ],
                a: 1,
                reason: "A stop-loss order acts as an emergency exit, automatically closing a losing trade at a predetermined price to prevent catastrophic capital loss."
              }
            },
            {
              title: "Position Sizing Matrix",
              duration: "35 mins",
              content: "Position sizing is the calculation of the exact capital to assign to a single trade. As a golden rule, professional risk management limits the risk on any single trade to 1% or 2% of the total trading account equity. This prevents drawdowns from causing terminal capital impairment.",
              points: [
                "Determines the absolute number of shares to acquire.",
                "Limits single trade exposure to a rigid 1-2% baseline.",
                "Protects total account equity from consecutive losing runs."
              ],
              quiz: {
                q: "What is the golden rule of professional account risk management?",
                options: [
                  "Risk 50% of account equity on a single market tip",
                  "Limit maximum risk on any single trade to 1% to 2% of total equity",
                  "Avoid placing stop-loss orders in volatile markets",
                  "Only trade options without buying underlying equity"
                ],
                a: 1,
                reason: "By risking only 1% to 2% of your total capital per trade, you can survive a long string of losses without facing severe capital depletion."
              }
            }
          ]
        }
      ]
    }
  };

  const currentCourseDetails = activeCourse ? courseDetailsData[activeCourse] : null;
  const currentLesson = currentCourseDetails 
    ? currentCourseDetails.modules[activeLessonIdx.module]?.lessons[activeLessonIdx.lesson]
    : null;

  // Complete a lesson
  const handleCompleteLesson = () => {
    const key = `${activeCourse}-${activeLessonIdx.module}-${activeLessonIdx.lesson}`;
    setCompletedLessons(prev => ({
      ...prev,
      [key]: true
    }));
  };

  // Next lesson logic
  const handleNextLesson = () => {
    if (!currentCourseDetails) return;
    
    const currentModule = currentCourseDetails.modules[activeLessonIdx.module];
    setQuizAnswer(null);
    setQuizSubmitted(false);

    if (activeLessonIdx.lesson < currentModule.lessons.length - 1) {
      // Go to next lesson in same module
      setActiveLessonIdx(prev => ({ ...prev, lesson: prev.lesson + 1 }));
    } else if (activeLessonIdx.module < currentCourseDetails.modules.length - 1) {
      // Go to first lesson of next module
      setActiveLessonIdx(prev => ({ module: prev.module + 1, lesson: 0 }));
    }
  };

  // Calculate course completion progress
  const getCourseProgress = (courseTitle) => {
    const details = courseDetailsData[courseTitle];
    if (!details) return 0;
    
    let total = 0;
    let completedCount = 0;
    details.modules.forEach((mod, modIdx) => {
      mod.lessons.forEach((_, lesIdx) => {
        total++;
        if (completedLessons[`${courseTitle}-${modIdx}-${lesIdx}`]) {
          completedCount++;
        }
      });
    });

    return total > 0 ? Math.round((completedCount / total) * 100) : 0;
  };

  const handleQuizSubmit = (selectedOptionIdx) => {
    setQuizAnswer(selectedOptionIdx);
    setQuizSubmitted(true);
    if (selectedOptionIdx === currentLesson.quiz.a) {
      handleCompleteLesson();
    }
  };

  const resources = [
    { title: "Market Glossary", desc: "A-Z of financial terms explained simply.", icon: FileText },
    { title: "Video Tutorials", desc: "Watch and learn with our expert series.", icon: PlayCircle },
    { title: "Community Hub", desc: "Discuss strategies with fellow learners.", icon: Users },
    { title: "Certifications", desc: "Get recognized for your knowledge.", icon: Award }
  ];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    course.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      <AnimatePresence mode="wait">
        {!activeCourse ? (
          /* ── MAIN PATHSHALA PORTAL ── */
          <motion.div
            key="portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-corex-navy">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block px-4 py-2 rounded-full bg-corex-accent/10 text-corex-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-corex-accent/20">
                    Knowledge Hub
                  </span>
                  <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
                    Amigo <span className="text-corex-accent italic">Pathshala.</span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                    Empowering you with institutional-grade financial literacy. Master the markets with our structured learning paths and expert resources.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Hero Image Section */}
            <section className="relative -mt-20 px-4 max-w-7xl mx-auto">
              <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="rounded-[48px] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 aspect-[21/9] relative group"
              >
                  <img 
                      src="/pathshala_hero.png" 
                      alt="Amigo Pathshala Education Hub" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1500";
                      }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-corex-navy/60 to-transparent"></div>
                  <div className="absolute bottom-12 left-12">
                      <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-corex-accent flex items-center justify-center animate-pulse">
                              <PlayCircle className="h-6 w-6 text-white" />
                          </div>
                          <div>
                              <p className="text-white font-black text-lg tracking-tight">Introduction to Investing</p>
                              <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Start your journey here</p>
                          </div>
                      </div>
                  </div>
              </motion.div>
            </section>

            {/* Featured Courses */}
            <section className="py-32">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                      <div>
                          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-corex-accent mb-4">Learning Paths</h2>
                          <p className="text-4xl font-black text-corex-navy tracking-tighter">Curated Courses for Every Level</p>
                      </div>
                      <div className="relative group">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-corex-accent transition-colors" />
                          <input 
                              type="text" 
                              placeholder="Search courses..." 
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="pl-12 pr-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-sm font-bold focus:outline-none focus:ring-2 focus:ring-corex-accent/20 w-64 lg:w-80 transition-all"
                          />
                      </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                      {filteredCourses.map((course, i) => {
                          const progress = getCourseProgress(course.title);
                          return (
                          <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="group bg-white rounded-[40px] p-10 border border-slate-100 hover:border-corex-accent/30 hover:shadow-2xl transition-all flex flex-col justify-between"
                          >
                              <div>
                                  <div className={`w-16 h-16 rounded-2xl ${course.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                      <course.icon className={`h-8 w-8 ${course.color}`} />
                                  </div>
                                  <div className="flex items-center gap-3 mb-4">
                                      <span className="px-3 py-1 rounded-full bg-slate-100 text-[9px] font-black uppercase tracking-widest text-slate-500">{course.level}</span>
                                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{course.duration}</span>
                                  </div>
                                  <h3 className="text-2xl font-black text-corex-navy mb-4 tracking-tight group-hover:text-corex-accent transition-colors">{course.title}</h3>
                                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">
                                      {course.desc}
                                  </p>
                              </div>
                              <div>
                                  {progress > 0 && (
                                    <div className="mb-6">
                                      <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-400 mb-2">
                                        <span>Progress</span>
                                        <span className="text-corex-accent">{progress}%</span>
                                      </div>
                                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-corex-accent rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                      </div>
                                    </div>
                                  )}
                                  <button 
                                      onClick={() => {
                                        setActiveCourse(course.title);
                                        setActiveLessonIdx({ module: 0, lesson: 0 });
                                        setQuizAnswer(null);
                                        setQuizSubmitted(false);
                                      }}
                                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-corex-navy hover:text-corex-accent transition-colors cursor-pointer"
                                  >
                                      {progress > 0 ? "Continue Learning" : "Start Learning"} <ArrowRight className="h-4 w-4" />
                                  </button>
                              </div>
                          </motion.div>
                          );
                      })}
                  </div>
              </div>
            </section>

            {/* Quick Resources */}
            <section className="py-32 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {resources.map((res, i) => (
                          <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                          >
                              <div className="h-12 w-12 rounded-xl bg-corex-navy flex items-center justify-center mb-6">
                                  <res.icon className="h-6 w-6 text-corex-accent" />
                              </div>
                              <h4 className="font-black text-corex-navy mb-2 tracking-tight">{res.title}</h4>
                              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">{res.desc}</p>
                              <div className="h-[1px] w-full bg-slate-100 mb-6"></div>
                              <button className="text-[9px] font-black uppercase tracking-[0.2em] text-corex-accent flex items-center gap-2 group">
                                  Explore <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                              </button>
                          </motion.div>
                      ))}
                  </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-corex-navy relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-corex-accent/20 to-transparent"></div>
              <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                  <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">Stay Ahead of the <br/><span className="text-corex-accent italic">Learning Curve.</span></h2>
                  <p className="text-xl text-gray-400 mb-12 font-medium">
                      Subscribe to our weekly insights newsletter and get curated educational content delivered straight to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                      <input 
                          type="email" 
                          placeholder="Enter your email" 
                          className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-corex-accent/50 font-bold"
                      />
                      <button className="px-8 py-4 bg-corex-accent text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">
                          Subscribe
                      </button>
                  </div>
              </div>
            </section>
          </motion.div>
        ) : (
          /* ── DETAILED COURSE STUDY WORKSPACE ── */
          <motion.div
            key="workspace"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              
              {/* Workspace Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
                <button 
                  onClick={() => setActiveCourse(null)}
                  className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-corex-accent transition-colors cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Portal
                </button>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Active Study Path</p>
                    <p className="text-sm font-black text-corex-navy tracking-tight">{activeCourse}</p>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-corex-navy flex items-center justify-center text-corex-accent">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Grid Workspace Layout */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* LEFT SIDEBAR: Course Curriculum */}
                <div className="lg:col-span-4 bg-white border border-slate-200/60 rounded-[32px] p-6 shadow-sm">
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xs font-black uppercase text-corex-navy tracking-widest">Your Progress</h4>
                      <span className="text-xs font-black text-corex-accent">{getCourseProgress(activeCourse)}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-corex-accent rounded-full transition-all duration-500" 
                        style={{ width: `${getCourseProgress(activeCourse)}%` }}
                      ></div>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-corex-navy tracking-tight mb-5 flex items-center gap-2">
                    <Compass className="h-5 w-5 text-corex-accent" /> Course Syllabus
                  </h3>

                  <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
                    {currentCourseDetails.modules.map((module, modIdx) => (
                      <div key={modIdx} className="space-y-3">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{module.title}</p>
                        
                        <div className="space-y-2">
                          {module.lessons.map((lesson, lesIdx) => {
                            const isActive = activeLessonIdx.module === modIdx && activeLessonIdx.lesson === lesIdx;
                            const isCompleted = completedLessons[`${activeCourse}-${modIdx}-${lesIdx}`];
                            return (
                              <button
                                key={lesIdx}
                                onClick={() => {
                                  setActiveLessonIdx({ module: modIdx, lesson: lesIdx });
                                  setQuizAnswer(null);
                                  setQuizSubmitted(false);
                                }}
                                className={`w-full p-4 rounded-2xl border text-left flex items-start gap-4 transition-all cursor-pointer ${isActive ? 'bg-corex-navy border-corex-navy text-white shadow-lg' : 'bg-slate-50/50 hover:bg-slate-100/50 border-slate-100 text-slate-700'}`}
                              >
                                <div className={`h-6 w-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${isActive ? 'bg-corex-accent/25 text-corex-accent' : isCompleted ? 'bg-emerald-50 text-emerald-500' : 'bg-slate-200/50 text-slate-400'}`}>
                                  {isCompleted ? (
                                    <Check className="h-3.5 w-3.5" />
                                  ) : (
                                    <span className="text-[10px] font-black">{lesIdx + 1}</span>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className={`text-xs font-black leading-tight tracking-tight mb-1 truncate ${isActive ? 'text-white' : 'text-corex-navy'}`}>{lesson.title}</p>
                                  <p className={`text-[9px] font-semibold uppercase tracking-wider ${isActive ? 'text-slate-400' : 'text-slate-400'}`}>{lesson.duration}</p>
                                </div>
                                {isActive && (
                                  <ChevronRight className="h-4 w-4 text-corex-accent mt-1 flex-shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT PANEL: Workspace Lecture Content */}
                <div className="lg:col-span-8 space-y-8">
                  
                  {/* Lecture Screen slide */}
                  <div className="rounded-[40px] overflow-hidden bg-corex-navy text-white border border-white/5 shadow-2xl p-8 relative flex flex-col justify-between min-h-[360px]">
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:30px_30px]"></div>
                    </div>

                    <div className="relative z-10 flex justify-between items-start gap-6">
                      <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corex-accent/10 border border-corex-accent/20 text-corex-accent text-[9px] font-black uppercase tracking-widest mb-4">
                          <Activity className="h-3 w-3" /> Lecture Slide
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-xl leading-tight mb-4">{currentLesson.title}</h2>
                      </div>
                      <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-corex-accent">
                        <Play className="h-5 w-5 fill-current" />
                      </div>
                    </div>

                    {/* Interactive Slide bullet points */}
                    <div className="relative z-10 grid sm:grid-cols-3 gap-6 mt-8">
                      {currentLesson.points.map((pt, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/5 p-5 rounded-2xl flex flex-col justify-between min-h-[120px] backdrop-blur-sm hover:bg-white/10 transition-colors">
                          <span className="text-[10px] font-black text-corex-accent uppercase tracking-widest">Vector 0{idx + 1}</span>
                          <p className="text-[11px] leading-relaxed font-bold text-slate-300">{pt}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Study notes details */}
                  <div className="bg-white border border-slate-200/60 rounded-[32px] p-8 shadow-sm">
                    <h3 className="text-lg font-black text-corex-navy tracking-tight mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-corex-accent" /> Academic Study Notes
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                      {currentLesson.content}
                    </p>
                    
                    <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4 flex items-start gap-4 text-amber-600">
                      <ShieldAlert className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-amber-700">Educational Mandate Notice</p>
                        <p className="text-[11px] leading-relaxed font-bold text-amber-600/80">
                          This study note is drafted strictly for academic and educational purpose only. It does not constituent financial advice, research reports, or specific advisory recommendations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Lesson Knowledge Test */}
                  <div className="bg-white border border-slate-200/60 rounded-[32px] p-8 shadow-sm">
                    <h3 className="text-lg font-black text-corex-navy tracking-tight mb-2 flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-corex-accent" /> Knowledge Test (Lesson Quiz)
                    </h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">Verify your analytical understanding of this lesson to unlock the next chapter.</p>
                    
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 mb-6">
                      <h4 className="font-black text-corex-navy text-sm mb-6 flex gap-3">
                        <span className="text-corex-accent font-black">Q.</span> {currentLesson.quiz.q}
                      </h4>

                      <div className="space-y-3">
                        {currentLesson.quiz.options.map((option, idx) => {
                          const isSelected = quizAnswer === idx;
                          const isCorrect = idx === currentLesson.quiz.a;
                          const isWrong = isSelected && !isCorrect;
                          
                          let cardStyle = "border-slate-200/60 bg-white text-slate-700 hover:bg-slate-100/50";
                          if (quizSubmitted) {
                            if (isCorrect) {
                              cardStyle = "border-emerald-500 bg-emerald-50 text-emerald-800";
                            } else if (isWrong) {
                              cardStyle = "border-rose-500 bg-rose-50 text-rose-800";
                            } else {
                              cardStyle = "border-slate-100 bg-slate-50/50 text-slate-400 opacity-60 pointer-events-none";
                            }
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => !quizSubmitted && handleQuizSubmit(idx)}
                              disabled={quizSubmitted}
                              className={`w-full p-4 rounded-xl border text-left text-xs font-bold transition-all flex justify-between items-center cursor-pointer ${cardStyle}`}
                            >
                              <span>{option}</span>
                              {quizSubmitted && isCorrect && (
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Quiz explanation details */}
                    {quizSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-6 rounded-2xl border ${quizAnswer === currentLesson.quiz.a ? 'bg-emerald-50/50 border-emerald-100 text-emerald-800' : 'bg-rose-50/50 border-rose-100 text-rose-800'}`}
                      >
                        <div className="flex gap-3">
                          <Trophy className="h-5 w-5 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest mb-1">
                              {quizAnswer === currentLesson.quiz.a ? "Knowledge Check Verified" : "Review Material"}
                            </p>
                            <p className="text-xs font-bold leading-relaxed mb-4">{currentLesson.quiz.reason}</p>
                            {quizAnswer === currentLesson.quiz.a ? (
                              <button 
                                onClick={handleNextLesson}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer"
                              >
                                Next Lesson <ArrowRight className="h-3.5 w-3.5" />
                              </button>
                            ) : (
                              <button 
                                onClick={() => {
                                  setQuizAnswer(null);
                                  setQuizSubmitted(false);
                                }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer"
                              >
                                Try Again
                              </button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pathshala;
