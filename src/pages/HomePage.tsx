import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COMPANY_STATS, SERVICES_DATA, WHY_CHOOSE_US_DATA, TEAM_MEMBERS_DATA } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { DynamicIcon } from '../components/ui/DynamicIcon';
import { ArrowRight, CheckCircle2, Cpu, Cloud, Award, Building2, Search, Globe, Zap, BarChart3, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'mission' | 'architecture' | 'security'>('mission');

  const featuredServices = SERVICES_DATA.filter((s) => s.featured);

  const handleNavClick = (path: string) => {
    navigate(path);
    // Scroll reset on route change is handled globally by <ScrollToTop />.
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#001220] via-[#001c31] to-[#002642] text-white pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Grid Box Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main grid lines - clean box style */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00315225_1px,transparent_1px),linear-gradient(to_bottom,#00315225_1px,transparent_1px)] bg-[size:40px_40px]" />
          {/* Secondary finer grid for depth */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00315210_1px,transparent_1px),linear-gradient(to_bottom,#00315210_1px,transparent_1px)] bg-[size:10px_10px]" />
          {/* Soft fade mask for elegant edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_40%,#001c31_85%)]" />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 right-10 w-[520px] h-[520px] bg-[#003152]/40 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-[#62aff0]/20 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
              >
                WELCOME TO{" "}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                  className="text-[#62aff0] inline-block"
                >
                  INFORMATEX TECH
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                Words are strong tools for human expression and the primary means through which search engines communicate information.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => handleNavClick('/contact')}
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto shadow-xl shadow-[#003152]/30"
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleNavClick('/services')}
                  className="w-full sm:w-auto border-slate-600 text-white hover:bg-white/10 hover:border-slate-400"
                >
                  Explore Capabilities
                </Button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white">99.99%</div>
                  <div className="text-xs text-slate-400">SLA Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white">SOC2 II</div>
                  <div className="text-xs text-slate-400">& ISO 27001 Certified</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#62aff0]">450+</div>
                  <div className="text-xs text-slate-400">Enterprise Systems Built</div>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Visual / Stacked Glassmorphic Cards */}
            <div className="lg:col-span-5 relative flex items-center justify-center py-6">
              {/* Background Glow Orb inside container */}
              <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#003152] to-[#62aff0]/30 rounded-full blur-[80px] pointer-events-none" />

              {/* Main Glassmorphic Center Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                className="relative z-10 w-full rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,49,82,0.5)] overflow-hidden"
              >
                {/* Subtle sheen highlight across top */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                {/* Header inside Glass Card */}
                <div className="flex items-center justify-between pb-6 border-b border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#62aff0] to-[#003152] flex items-center justify-center shadow-lg shadow-[#62aff0]/20 text-white">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white tracking-tight">Semantic Search Indexer</h3>
                      <p className="text-xs text-[#a7d5fa]">Language Processing & Retrieval</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Sync
                  </span>
                </div>

                {/* Simulated Search & Human Expression Bar */}
                <div className="my-6">
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-2 font-medium">
                    <span>Query Semantic Depth</span>
                    <span className="text-[#62aff0] font-bold">99.8% Precision</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#003152] via-[#62aff0] to-cyan-300 rounded-full shadow-sm"
                    />
                  </div>
                </div>

                {/* Feature Metric Glass Cards */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <Globe className="w-5 h-5 text-[#62aff0]" />
                      <span className="text-xs font-bold text-white">Global</span>
                    </div>
                    <div className="text-xl font-black text-white group-hover:scale-105 transition-transform origin-left">140M+</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">Indexed Expressions</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <Sparkles className="w-5 h-5 text-[#62aff0]" />
                      <span className="text-xs font-bold text-white">AI Engine</span>
                    </div>
                    <div className="text-xl font-black text-white group-hover:scale-105 transition-transform origin-left">&lt; 12ms</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">Response Latency</div>
                  </div>
                </div>

                {/* Bottom glass summary bar */}
                <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#a7d5fa]">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-slate-200 font-medium">Search Ranking Optimization Active</span>
                  </div>
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
              </motion.div>

              {/* Floating Glass Pill Card Top-Right */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.5 },
                  x: { duration: 0.6, delay: 0.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-4 -right-2 sm:-right-6 z-20 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#003152]/90 to-[#001c31]/90 backdrop-blur-xl border border-white/25 shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#62aff0]/20 text-[#62aff0] flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Human Expression</div>
                  <div className="text-[10px] text-[#a7d5fa]">Enhanced Clarity</div>
                </div>
              </motion.div>

              {/* Floating Glass Pill Card Bottom-Left */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.7 },
                  x: { duration: 0.6, delay: 0.7 },
                  y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="absolute -bottom-4 -left-2 sm:-left-6 z-20 px-4 py-3 rounded-2xl bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border border-white/30 shadow-2xl flex items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-[#003152] text-white shadow-md">
                  <Cloud className="w-4 h-4 text-[#62aff0]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Search Protocol</div>
                  <div className="text-[10px] text-slate-200">Continuous Indexing</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW SECTION */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003152]/10 text-[#003152] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" /> Company Overview
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineering Resilience & Innovation Since 2012.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Informatech was founded on a simple premise: enterprise technology transformations should be rigorous, transparent, and built to withstand decades of scale. We combine rigorous domain architecture with agile execution.
              </p>

              {/* Interactive Info Tabs */}
              <div className="pt-2">
                <div className="flex gap-2 p-1.5 bg-slate-100 rounded-xl max-w-md">
                  {[
                    { id: 'mission', label: 'Our Mission' },
                    { id: 'architecture', label: 'Architecture First' },
                    { id: 'security', label: 'Security Standard' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-[#003152] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-700 leading-relaxed min-h-[110px]">
                  {activeTab === 'mission' && (
                    <p>
                      To empower global enterprises to turn complex technology challenges into decisive competitive advantages through battle-tested engineering, uncompromising security, and ethical AI development.
                    </p>
                  )}
                  {activeTab === 'architecture' && (
                    <p>
                      We never compromise on software design patterns. Our blueprints prioritize loose coupling, event-driven scaling, and modular microservices to eliminate technical debt before it begins.
                    </p>
                  )}
                  {activeTab === 'security' && (
                    <p>
                      Every system we deploy adheres to strict Zero-Trust protocols. We integrate automated penetration testing and compliance audits directly into your continuous integration pipeline.
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <Button variant="outline" onClick={() => handleNavClick('/gallery')}>
                  View Gallery
                </Button>
              </div>
            </div>

            {/* Right Key Stats Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              {COMPANY_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-[#003152]/30 transition-all group"
                >
                  <div className="text-3xl sm:text-4xl font-black text-[#003152] group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-700 mt-2">
                    {stat.label}
                  </div>
                  <div className="w-10 h-1 bg-[#003152]/20 rounded-full mt-4 group-hover:w-16 group-hover:bg-[#003152] transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY SERVICES SECTION */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003152]/10 text-[#003152] text-xs font-bold uppercase tracking-wider mb-3">
                <Cpu className="w-3.5 h-3.5" /> Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Engineered for High-Stakes Enterprises.
              </h2>
              <p className="text-slate-600 max-w-xl mt-3 text-base">
                Discover our specialized technology practice areas, built to modernize your infrastructure and accelerate growth.
              </p>
            </div>
            <Button
              onClick={() => handleNavClick('/services')}
              icon={<ArrowRight className="w-4 h-4" />}
              className="self-start md:self-auto shrink-0"
            >
              View All Services
            </Button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} hoverEffect className="flex flex-col h-full bg-white p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-[#003152]/10 text-[#003152] flex items-center justify-center mb-6 group-hover:bg-[#003152] group-hover:text-white transition-all duration-300">
                  <DynamicIcon name={service.iconName} className="w-7 h-7" />
                </div>
                
                <span className="text-xs font-bold uppercase tracking-wider text-[#003152] mb-2">
                  {service.category}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#003152] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-slate-500">Fixed & Agile Pods</span>
                  <button
                    onClick={() => handleNavClick('/services')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#003152] group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003152]/10 text-[#003152] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" /> Why Choose Informatech
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Informatech Engineering Standard.
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Why leading enterprises select our team over traditional consulting conglomerates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US_DATA.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row gap-6 hover:shadow-lg hover:border-[#003152]/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#003152] text-white flex items-center justify-center shrink-0 shadow-md">
                  <DynamicIcon name={item.iconName} className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#003152]/10 text-[#003152] font-mono text-xs font-bold">
                      {item.metric}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{item.metricLabel}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET OUR TEAM SECTION */}
      <section className="py-24 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,#00315240_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003152] border border-[#62aff0]/30 text-xs font-bold uppercase tracking-wider text-[#a7d5fa] mb-3">
              <Users className="w-3.5 h-3.5 text-[#62aff0]" /> Our People
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Meet the Team Behind Informatech.
            </h2>
            <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto">
              A passionate group of developers, strategists, designers, and analysts dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS_DATA.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 text-center shadow-xl backdrop-blur-sm hover:border-[#62aff0]/40 transition-all duration-300 hover:-translate-y-1">
                  {/* Avatar */}
                  <div className="relative mx-auto mb-5 w-24 h-24 sm:w-28 sm:h-28">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#62aff0] to-[#003152] opacity-70 group-hover:opacity-100 transition-opacity -m-0.5" />
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="relative w-full h-full rounded-full object-cover border-2 border-slate-800"
                    />
                  </div>

                  {/* Name & Position */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#62aff0] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#62aff0] mt-1 mb-3">
                    {member.position}
                  </p>

                  {/* Bio */}
                  {member.bio && (
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#003152] to-[#001c31] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to Architect Your Enterprise Transformation?
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto">
            Book a 45-minute discovery consultation with one of our principal system architects to evaluate your cloud, security, or AI roadmaps.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              variant="white"
              size="lg"
              onClick={() => handleNavClick('/contact')}
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get in Touch Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleNavClick('/services')}
              className="border-slate-400 text-white hover:bg-white/10"
            >
              Review Delivery Methodologies
            </Button>
          </div>
          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free 2-Week Architectural Review Available</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> NDA Signed Before First Discussion</span>
          </div>
        </div>
      </section>
    </div>
  );
};