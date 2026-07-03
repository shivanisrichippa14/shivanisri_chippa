import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Layers,
  Code,
  ExternalLink,
  ChevronRight,
  Database,
  GitBranch,
  Cpu,
  Sparkles
} from 'lucide-react'
import { ScrollFadeIn } from './components/ScrollFadeIn'
import { AchievementsGallery } from './components/AchievementsGallery'
import { ContactForm } from './components/ContactForm'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Page scroll progress indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#FAF9F6] text-slate-800 min-h-screen bg-mesh font-body relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Sticky Header Nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-full border border-slate-200/80 bg-[#FAF9F6]/85 backdrop-blur-md shadow-md">
        <div className="px-6 py-3 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-sans font-black text-white text-base">
              SC
            </span>
            <span className="font-sans font-bold text-slate-900 text-lg tracking-tight">
              Shivanisri Chippa
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {['home', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize transition-colors ${activeSection === item ? 'text-primary font-bold' : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                {item}
              </a>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="https://github.com/shivanisrichippa14"
            target="_blank"
            className="hidden sm:inline-flex bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary text-xs font-semibold px-4 py-2 rounded-lg items-center gap-1.5 transition-all cursor-pointer"
          >
            <Github size={14} />
            GitHub Profile
          </motion.a>
        </div>
      </nav>

      {/* Background Decorative Glow Elements */}
      <div className="absolute top-[20vh] left-[10vw] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[80vh] right-[10vw] w-[40vw] h-[40vw] rounded-full bg-secondary/5 blur-3xl -z-10 pointer-events-none" />

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 pt-24 md:pt-28 pb-20 space-y-36">

        {/* HERO SECTION */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center py-6 relative overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center text-left relative z-10">

            {/* Intro Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.1
                  }
                }
              }}
              className="md:col-span-7 space-y-6 text-center md:text-left flex flex-col justify-center"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider self-center md:self-start"
              >
                <Cpu size={12} className="animate-spin-slow text-primary" />
                Available for Software Engineering Roles
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
                }}
                className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-slate-900 leading-[1.1] tracking-tight"
              >
                Building <span className="bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent text-glow">Scalable</span> Microservices & Resilient UIs
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-medium"
              >
                Hi, I'm Shivanisri Chippa. I specialize in designing microservices mesh architectures, optimizing spatial and transactional database layers, and crafting responsive frontend dashboards.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
              >
                <a
                  href="#contact"
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md shadow-primary/10 hover:shadow-primary/25 cursor-pointer"
                >
                  Let's Connect
                </a>
                <a
                  href="#experience"
                  className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                >
                  Explore Experience
                  <ChevronRight size={16} className="text-slate-500" />
                </a>
              </motion.div>

              {/* Hero Quick Metrics Strip */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } }
                }}
                className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200/60 mt-8 text-center md:text-left"
              >
                <div>
                  <h4 className="text-2xl md:text-3xl font-extrabold text-primary font-display animate-pulse-slow">10</h4>
                  <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Microservices Deployed</p>
                </div>
                <div className="border-x border-slate-200/60 px-2">
                  <h4 className="text-2xl md:text-3xl font-extrabold text-primary font-display animate-pulse-slow">100+</h4>
                  <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Active VPS Users</p>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-extrabold text-primary font-display animate-pulse-slow">16</h4>
                  <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Scientific Achievements</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Premium Photo & Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 1 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.35 }}
              className="md:col-span-5 flex flex-col gap-6"
            >
              {/* Premium Portrait Frame */}
              <div className="relative group rounded-3xl border border-slate-200/80 bg-white/70 p-3 shadow-md transition-all duration-500 hover:shadow-xl hover:border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                {/* Floating Top-Right Badge */}
                <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl border border-slate-100 shadow-md flex items-center gap-1.5 rotate-[6deg] z-20">
                  <Sparkles size={12} className="text-secondary animate-pulse" />
                  <span className="text-[9px] text-slate-800 font-extrabold uppercase tracking-wider">
                    IIIT Basar
                  </span>
                </div>

                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-slate-100">
                  <img
                    src="/shivani/IMG-20260409-WA0054.jpg"
                    alt="Shivanisri Chippa Portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Floating tag inside photo */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-100 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-slate-800 font-bold uppercase tracking-wider">
                      ISRO YUVIKA Scholar
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Info & Social Row */}
              <div className="glass-card rounded-3xl p-5 border border-slate-200/80 bg-white/70 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h4 className="text-slate-400 font-bold font-sans text-[10px] uppercase tracking-wider">Education</h4>
                    <p className="text-slate-700 text-xs font-bold mt-0.5">RGUKT (IIIT Basar)</p>
                  </div>
                  <div className="text-right">
                    <h4 className="text-slate-400 font-semibold text-[10px] uppercase tracking-wider">Graduation</h4>
                    <p className="text-slate-600 text-[11px] font-semibold mt-0.5">Class of 2027 • 8.24 CGPA</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://linkedin.com/in/shivanisrichippa"
                    target="_blank"
                    className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 hover:text-slate-900 font-semibold transition-colors"
                  >
                    <Linkedin size={14} className="text-primary" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/shivanisrichippa14"
                    target="_blank"
                    className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 hover:text-slate-900 font-semibold transition-colors"
                  >
                    <Github size={14} className="text-primary" />
                    GitHub
                  </a>
                  <a
                    href="mailto:shivanisrichippa@gmail.com"
                    className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 hover:text-slate-900 font-semibold transition-colors col-span-2 justify-center"
                  >
                    <Mail size={14} className="text-primary" />
                    shivanisrichippa@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* TECH MARQUEE TAPE */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden py-5 bg-white/70 backdrop-blur-md border-y border-slate-200/60 shadow-sm">
          <div className="flex gap-16 w-max animate-marquee whitespace-nowrap">
            {['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Nginx', 'PM2', 'AWS S3', 'Framer Motion', 'Tailwind CSS', 'Postman', 'Git & GitHub', 'REST APIs', 'JWT & Auth'].map((tag, i) => (
              <span key={i} className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {tag}
              </span>
            ))}
            {['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Nginx', 'PM2', 'AWS S3', 'Framer Motion', 'Tailwind CSS', 'Postman', 'Git & GitHub', 'REST APIs', 'JWT & Auth'].map((tag, i) => (
              <span key={`dup-${i}`} className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-24 space-y-12">
          <ScrollFadeIn>
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Career Path</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Professional Experience</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto md:mx-0 mt-4" />
            </div>
          </ScrollFadeIn>

          <div className="relative border-l border-slate-200 ml-4 md:ml-6 space-y-16 pl-6 md:pl-10 py-2">

            {/* Experience 1: Jai */}
            <ScrollFadeIn delay={0.1}>
              <div className="relative group text-left">
                {/* Timeline node */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#FAF9F6] border-2 border-primary group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-sans">Software Engineer Intern</h3>
                      <p className="text-primary text-sm font-bold">JAI</p>
                    </div>
                    <span className="bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      May 2026 – July 2026
                    </span>
                  </div>

                  <p className="text-slate-500 text-xs font-bold flex items-center gap-1.5 flex-wrap">
                    <Terminal size={12} className="text-primary" />
                    React.js • Next.js • TanStack Table (v8) • Node.js • Express • MongoDB • Gemini AI
                  </p>

                  {/* The Story block */}
                  <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-5 space-y-3">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles size={12} className="animate-pulse" />
                      The Engineering Story
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      Spearheaded the refactoring of critical administrative panels and database querying pipelines. I migrated split-pane layouts into paginated TanStack Tables, speeding up backend response times by 35%. I also took ownership of the Gemini AI layout generator, building a context-aware system prompt framework that reduced layout generation times by 90% while building resilient Axios refresh interceptors to guarantee secure, uninterrupted sessions.
                    </p>
                  </div>

                  <ul className="space-y-3 list-none p-0 m-0 text-sm text-slate-600 font-medium">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Migrated leads, teams, and contacts dashboards from split-pane layouts into paginated TanStack Tables, optimizing backend aggregations to improve fetch speed by 35%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Reduced AI layout creation time by 90% by building a single/multi-turn Gemini AI generator, optimizing system prompts, and structuring prompt contexts for layout generation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Prevented credential session losses, keeping authentication routing errors at 0, by programming an Axios Interceptor-based refresh queue storing tokens in HttpOnly cookies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Reduced push notification delivery failures to 0 by deploying a Node.js VAPID web-push protocol and registering service worker PushManager subscription handlers on the client.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Experience 2: Shikshaarthi */}
            <ScrollFadeIn delay={0.15}>
              <div className="relative group text-left">
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#FAF9F6] border-2 border-primary group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-sans">Co-Founder & Solo Full-Stack Developer</h3>
                      <p className="text-primary text-sm font-bold">SHIKSHAARTHI</p>
                    </div>
                    <span className="bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      Nov 2024 – Nov 2025
                    </span>
                  </div>

                  <p className="text-slate-500 text-xs font-bold flex items-center gap-1.5 flex-wrap">
                    <Terminal size={12} className="text-primary" />
                    React.js • Node.js • MongoDB • Nginx • PM2 • Git • Payment Gateways
                  </p>

                  {/* The Story block */}
                  <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-5 space-y-3">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles size={12} className="animate-pulse" />
                      The Journey & Product Story
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      Single-handedly architected and launched Shikshaarthi as a one-stop platform for India's 37M hostlers, addressing housing shortages, monotonous mess food, and medical access. I built the 'Supercoin' crowdsourcing engine to reward students up to ₹25 for sharing local data, and created a subscription system where students pay ₹199/year + ₹1/meal to enjoy varied daily food. From location-aware search filters to verification checkpoints for pre-owned stationery, I managed the entire development, deployment, and Nginx reverse proxy routing solo.
                    </p>
                  </div>

                  <ul className="space-y-3 list-none p-0 m-0 text-sm text-slate-600 font-medium">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Acquired 100+ active users post-launch by deploying a 10-service microservices platform on Hostinger VPS using Nginx, PM2, and custom shell env routing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Reduced request hanging and timeouts by 95% by developing an Express API Gateway that handles JWT authentication and propagates custom user headers downstream.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Averted concurrent request failures, keeping session timeouts at 0, by building a client-side Axios Interceptor that locks and queues concurrent API calls.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Reduced database query latency by 60% and double-spending by utilizing GeoJSON Point schemas, 2dsphere indexes, and MongoDB ACID transactions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Reduced browser DOM nodes by 70% by building an administrative panel virtualized with react-window and verifying Razorpay payment callback signatures.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Experience 3: Trolla */}
            <ScrollFadeIn delay={0.2}>
              <div className="relative group text-left">
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#FAF9F6] border-2 border-primary group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-sans">Software Developer & QA Intern</h3>
                      <p className="text-primary text-sm font-bold">Trolla</p>
                    </div>
                    <span className="bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      Mar 2025 – June 2025
                    </span>
                  </div>

                  <p className="text-slate-500 text-xs font-bold flex items-center gap-1.5 flex-wrap">
                    <Terminal size={12} className="text-primary" />
                    Next.js • TypeScript • React Native • Redux Toolkit • REST APIs
                  </p>

                  <ul className="space-y-3 list-none p-0 m-0 text-sm text-slate-600 font-medium">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Reduced runtime typing errors by 40% and improved application load times by migrating the web dashboard from JavaScript to TypeScript and Next.js.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Secured dispatcher-driver communication channels, achieving 99% data integrity, by developing RESTful APIs integrated with JWT authentication.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Enhanced application stability by resolving 50+ critical issues by executing structured API validation and automated integration testing workflows.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-primary mt-1 shrink-0" />
                      <span>Increased production feature release velocity by 25% by translating client specifications into modular, production-ready React Native components.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollFadeIn>

          </div>
        </section>


        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 space-y-12">
          <ScrollFadeIn>
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Code Showcase</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Technical Projects</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto md:mx-0 mt-4" />
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

            {/* Project 1: Verbal AI Judge */}
            <ScrollFadeIn delay={0.1}>
              <div className="glass-card rounded-3xl p-6 border border-slate-200/60 h-full flex flex-col justify-between bg-white shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                      <Code size={20} />
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">React • Puppeteer • S3</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-sans">Verbal AI Judge</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    Custom web-crawling backend and automated consulting-style PDF rendering engine conforming to VMI v1 layout standards.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-600 font-medium">
                    <li className="flex items-start gap-1.5">
                      <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                      <span>Decreased crawler bandwidth and API costs by 50% by developing a headless Puppeteer crawler storing step outputs in AWS S3.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                      <span>Eliminated PDF overflows and layout errors by 99% by building a consulting-style PDF engine conforming to Verbal Marketing Intelligence™ rules.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end">
                  <a
                    href="https://github.com/shivanisrichippa14"
                    target="_blank"
                    className="text-xs text-primary font-bold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    View Source Code
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Project 2: SwipeShare */}
            <ScrollFadeIn delay={0.15}>
              <div className="glass-card rounded-3xl p-6 border border-slate-200/60 h-full flex flex-col justify-between bg-white shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                      <Layers size={20} />
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">MERN • Stripe • Razorpay</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-sans">SwipeShare</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    Peer-to-peer textbook and resource sharing platform with automated temp file lifecycle cleanup and dual payment gateways.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-600 font-medium">
                    <li className="flex items-start gap-1.5">
                      <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                      <span>Boosted cart update speeds by 80% and lowered payment failures to 0 by implementing parallel Context API sync and Stripe/Razorpay receipt loops.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                      <span>Blocked unauthorized listings by 98% and reduced disk leaks by 95% by designing an approval gateway and scripting temp cleanups.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                      <span>Reduced API response times by 35% and resolved 15+ checkout vulnerabilities by implementing manual testing and callback validators.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end">
                  <a
                    href="https://github.com/shivanisrichippa14"
                    target="_blank"
                    className="text-xs text-primary font-bold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    View Source Code
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </ScrollFadeIn>

          </div>
        </section>


        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24 space-y-12 bg-gradient-to-tr from-slate-50 via-primary/5 to-slate-50 py-16 px-6 md:px-10 rounded-[2.5rem] border border-slate-200/50">
          <ScrollFadeIn>
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Proficiencies</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Technical Skillset</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto md:mx-0 mt-4" />
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Bento Card 1: Core Technologies (Spans 2 columns) */}
            <ScrollFadeIn delay={0.1} className="md:col-span-2">
              <div className="glass-card rounded-3xl p-8 border border-slate-200/60 h-full flex flex-col justify-between bg-white shadow-sm hover:border-primary/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-primary"><Code size={28} /></span>
                    <span className="text-[10px] text-slate-400 font-mono">React • Node.js • TS • Express</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-sans">Full-Stack Development & Architecture</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    Designing microservices communication layers and responsive frontend applications. Experienced in state management, rendering lifecycle optimizations, and middleware validation patterns.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Frontend Engine</h5>
                    <p className="text-slate-700 text-sm font-bold mt-1">React, Next.js, TypeScript, TailwindCSS, Context API</p>
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Backend Mesh</h5>
                    <p className="text-slate-700 text-sm font-bold mt-1">Node.js, Express.js, RESTful APIs, JWT Auth, CORS</p>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Bento Card 2: Microservices & Scale */}
            <ScrollFadeIn delay={0.15}>
              <div className="glass-card rounded-3xl p-8 border border-slate-200/60 h-full flex flex-col justify-between bg-white shadow-sm hover:border-primary/30 transition-all duration-300">
                <div className="space-y-4">
                  <span className="text-primary"><Cpu size={28} /></span>
                  <h3 className="text-xl font-bold text-slate-900 font-sans">System Scale</h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    Engineered & deployed a 10-microservice architecture using an API Gateway with custom JWT header validation.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 mt-6">
                  <div className="text-3xl font-black text-primary font-display">10</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Microservices Orchestrated</div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Bento Card 3: Databases & Queries */}
            <ScrollFadeIn delay={0.2}>
              <div className="glass-card rounded-3xl p-8 border border-slate-200/60 h-full flex flex-col justify-between bg-white shadow-sm hover:border-primary/30 transition-all duration-300">
                <div className="space-y-4">
                  <span className="text-primary"><Database size={28} /></span>
                  <h3 className="text-xl font-bold text-slate-900 font-sans">Database Design</h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    Optimizing complex search queries, geospatial lookups, index pipelines, and scaling schema relationships.
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap mt-6">
                  {['MongoDB', 'MySQL', 'Aggregation Pipelines', 'ACID Transactions'].map((db, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-600 font-semibold text-[10px] px-2.5 py-1 rounded-full border border-slate-200/40">
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            {/* Bento Card 4: CI/CD & Deployment (Spans 2 columns) */}
            <ScrollFadeIn delay={0.25} className="md:col-span-2">
              <div className="glass-card rounded-3xl p-8 border border-slate-200/60 h-full flex flex-col justify-between bg-white shadow-sm hover:border-primary/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-primary"><GitBranch size={28} /></span>
                    <span className="text-[10px] text-slate-400 font-mono">Nginx • PM2 • VPS • GitHub Actions</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-sans">Deployment & Operations</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    Solo-engineered and deployed full-stack web platforms on self-managed VPS setups using Nginx reverse proxy routes and PM2 runner processes.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100 text-center">
                  <div>
                    <div className="text-xl font-bold text-slate-800">100+</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-sans">Active Users</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-800 font-sans">VPS</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-sans">Hostinger Cloud</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-800 font-sans">Nginx</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-sans">Reverse Proxy</div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </section>


        {/* ACHIEVEMENTS GALLERY SECTION */}
        <section id="achievements" className="scroll-mt-24 space-y-12 bg-gradient-to-b from-transparent via-secondary/5 to-transparent py-12 px-6 rounded-[2.5rem]">
          <ScrollFadeIn>
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Milestones</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Achievements & Activities</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto md:mx-0 mt-4" />
            </div>
          </ScrollFadeIn>

          <AchievementsGallery />
        </section>


        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24 space-y-12 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 p-8 md:p-14 rounded-[2.5rem] border border-slate-200/50 shadow-sm">
          <ScrollFadeIn>
            <div className="text-center space-y-2">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Inbox</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Get In Touch</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <ContactForm />
          </ScrollFadeIn>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/60 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Shivanisri Chippa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/shivanisrichippa" target="_blank" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            <a href="https://github.com/shivanisrichippa14" target="_blank" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href="mailto:shivanisrichippa@gmail.com" className="hover:text-slate-900 transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
