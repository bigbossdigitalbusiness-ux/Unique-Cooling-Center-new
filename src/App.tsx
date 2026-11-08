/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Snowflake,
  Wrench,
  Settings,
  Phone,
  PhoneCall,
  Star,
  MapPin,
  Clock,
  Check,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Flame,
  Award,
  Users,
  Briefcase,
  ExternalLink,
  Map,
  Sparkles,
  Droplets,
  Navigation,
  ThumbsUp,
  CheckCircle2,
  MessageSquare
} from "lucide-react";
import { businessDetails, services, whyChooseUs, testimonials } from "./data";
import BrandPoster from "./components/BrandPoster";
import Logo from "./components/Logo";

// Authentic Google "G" Logo Icon
const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

// Fallback Icon Mapping for safe compilation in case of variant packages
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Snowflake: Snowflake,
  Wrench: Wrench,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Droplets: Droplets,
  Flame: Flame,
  IndianRupee: () => (
    <span className="font-sans font-bold text-lg select-none">₹</span>
  ),
  AC: Snowflake,
  WashingMachine: () => (
    <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 10a3 3 0 0 1 3 3" />
      <circle cx="6" cy="7" r="1" />
      <circle cx="9" cy="7" r="1" />
    </svg>
  ),
  Refrigerator: () => (
    <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="9" y1="6" x2="9" y2="8" />
      <line x1="9" y1="16" x2="9" y2="18" />
    </svg>
  ),
  Microwave: () => (
    <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <rect x="5" y="7" width="10" height="10" rx="1" />
      <circle cx="18" cy="8" r="1" />
      <circle cx="18" cy="12" r="1" />
      <circle cx="18" cy="16" r="1" />
    </svg>
  )
};

export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [showDirectDialTip, setShowDirectDialTip] = useState(false);
  const [selectedReviewCategory, setSelectedReviewCategory] = useState<string>("all");
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [reviewDisplayMode, setReviewDisplayMode] = useState<"slider" | "grid">("slider");

  const filteredReviews = testimonials.filter((rev) => {
    if (selectedReviewCategory === "all") return true;
    if (selectedReviewCategory === "ac") {
      return rev.serviceTag?.toLowerCase().includes("ac");
    }
    if (selectedReviewCategory === "fridge-wash") {
      return (
        rev.serviceTag?.toLowerCase().includes("refrigerator") ||
        rev.serviceTag?.toLowerCase().includes("washing")
      );
    }
    if (selectedReviewCategory === "chimney-ro") {
      return (
        rev.serviceTag?.toLowerCase().includes("chimney") ||
        rev.serviceTag?.toLowerCase().includes("aquaguard")
      );
    }
    if (selectedReviewCategory === "geyser-micro") {
      return (
        rev.serviceTag?.toLowerCase().includes("geyser") ||
        rev.serviceTag?.toLowerCase().includes("microwave")
      );
    }
    return true;
  });

  // Safe active index boundary check
  const currentReview = filteredReviews[activeReviewIndex] || filteredReviews[0] || testimonials[0];

  // Reset slider index when category changes
  useEffect(() => {
    setActiveReviewIndex(0);
  }, [selectedReviewCategory]);

  // Monitor scroll for sticky header treatment
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance review slider every 6 seconds unless hovered or in grid mode
  useEffect(() => {
    if (isSliderHovered || reviewDisplayMode !== "slider" || filteredReviews.length <= 1) return;
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isSliderHovered, reviewDisplayMode, filteredReviews.length]);

  const nextTestimonial = () => {
    setActiveReviewIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevTestimonial = () => {
    setActiveReviewIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  // Helper to dynamically render corresponding icon
  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    if (iconName === "Snowflake") {
      return <Snowflake className={className} />;
    }
    if (iconName === "WashingMachine") {
      const CustomWM = iconMap.WashingMachine;
      return <div className={className}><CustomWM /></div>;
    }
    if (iconName === "Refrigerator") {
      const CustomRef = iconMap.Refrigerator;
      return <div className={className}><CustomRef /></div>;
    }
    if (iconName === "Microwave") {
      const CustomMicro = iconMap.Microwave;
      return <div className={className}><CustomMicro /></div>;
    }
    const Comp = iconMap[iconName] || Wrench;
    return <Comp className={className} />;
  };

  // Smooth local navigation wrapper
  const handleScrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-50 flex flex-col font-sans select-text select-none">
      
      {/* Dynamic Pop-up Prompt to encourage booking clicks on desktop calls */}
      <AnimatePresence>
        {showDirectDialTip && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 md:bottom-24 right-4 z-50 bg-[#072a4b] text-white p-4 rounded-xl shadow-2xl max-w-sm border border-cyan-400/30"
          >
            <div className="flex items-start gap-3">
              <div className="bg-[#00f0ff]/10 p-2 rounded-lg text-cyan-300">
                <PhoneCall className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm text-[#00f0ff]">Direct Phone Service Desk</h4>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  Call is active! Dial <span className="text-[#ff9f1c] font-bold font-mono">098308 70878</span> to explain appliance symptoms directly to local supervisor on-call.
                </p>
                <div className="flex gap-2 mt-3">
                  <a 
                    href={`tel:${businessDetails.phoneFormatted}`} 
                    className="bg-[#ff9f1c] hover:bg-amber-600 text-black font-semibold text-xs px-3 py-1.5 rounded transition-colors duration-150 inline-flex items-center gap-1.5"
                  >
                    Dial Now
                  </a>
                  <button 
                    onClick={() => setShowDirectDialTip(false)}
                    className="text-neutral-400 hover:text-white text-xs px-2 py-1.5"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER SECTION - LOGO AND NAVIGATION */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          navScrolled 
            ? "bg-[#0f4c81] border-b-4 border-[#00f0ff] py-3 text-white shadow-xl" 
            : "bg-white/95 border-b-4 border-slate-150 py-4 text-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Typographic/Iconic Brand Logo & Title with Tagline */}
          <div 
            onClick={() => handleScrollToSection("home")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <Logo size={42} className="group-hover:scale-105 transition-transform duration-300 shadow-md rounded-full bg-white border border-slate-200" />
            
            <div className="flex flex-col">
              <span className={`font-display font-black text-sm sm:text-lg tracking-tight leading-none transition-colors ${
                navScrolled ? "text-white" : "text-[#072a4b]"
              }`}>
                Unique Cooling Center
              </span>
              <span className={`font-mono text-[9px] sm:text-[10px] uppercase font-extrabold tracking-[0.15em] mt-0.5 transition-colors ${
                navScrolled ? "text-[#00f0ff]" : "text-slate-500"
              }`}>
                12 Years Exp. • Appliance Repair
              </span>
            </div>
          </div>

          {/* Core Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => handleScrollToSection("home")}
              className={`text-xs uppercase tracking-wider font-extrabold transition-colors cursor-pointer ${
                navScrolled ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-[#0f4c81]"
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleScrollToSection("services")}
              className={`text-xs uppercase tracking-wider font-extrabold transition-colors cursor-pointer ${
                navScrolled ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-[#0f4c81]"
              }`}
            >
              Our Services
            </button>
            <button 
              onClick={() => handleScrollToSection("why-choose-us")}
              className={`text-xs uppercase tracking-wider font-extrabold transition-colors cursor-pointer ${
                navScrolled ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-[#0f4c81]"
              }`}
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => handleScrollToSection("reviews")}
              className={`text-xs uppercase tracking-wider font-extrabold transition-colors cursor-pointer ${
                navScrolled ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-[#0f4c81]"
              }`}
            >
              Customer Reviews
            </button>
            <button 
              onClick={() => handleScrollToSection("contact")}
              className={`text-xs uppercase tracking-wider font-extrabold transition-colors cursor-pointer ${
                navScrolled ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-[#0f4c81]"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Call-To-Action Right Desk Header button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className={`hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold transition-colors ${
              navScrolled 
                ? "bg-white/10 border-white/20 text-[#00f0ff]" 
                : "bg-amber-500/10 border-amber-500/30 text-amber-700"
            }`}>
              <Award className="w-3.5 h-3.5 text-[#ff9f1c]" />
              <span>12 Years of Service Experience</span>
            </div>
            <div className="flex flex-col items-end">
              <span className={`text-[10px] uppercase tracking-wider font-mono ${
                navScrolled ? "text-white/50" : "text-slate-400"
              }`}>Daily Service Hotline</span>
              <a 
                href={`tel:${businessDetails.phoneFormatted}`}
                onClick={() => {
                  setShowDirectDialTip(true);
                }}
                className={`font-mono font-bold text-base transition-colors ${
                  navScrolled ? "text-[#00f0ff] hover:text-cyan-300" : "text-[#0f4c81] hover:text-[#00f0ff]"
                }`}
              >
                {businessDetails.phone}
              </a>
            </div>
            <a 
              href={`tel:${businessDetails.phoneFormatted}`}
              onClick={() => {
                setShowDirectDialTip(true);
              }}
              className="bg-[#ff9f1c] hover:bg-[#f39100] text-slate-900 font-display font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg active:scale-95 transition-all duration-150 flex items-center gap-2 border-b-2 border-orange-700"
            >
              <Phone className="w-3.5 h-3.5" />
              Book Repair
            </a>
          </div>

          {/* Interactive Hamburger button for small layouts */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-150 cursor-pointer ${
              navScrolled ? "bg-white/10 hover:bg-white/20 text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-800"
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {/* MOBILE FULLSCREEN NAVIGATION OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#072a4b]/95 backdrop-blur-md lg:hidden"
          >
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col h-full justify-between p-8 pt-20">
              <div className="space-y-6">
                <div className="flex items-center gap-2.5 border-b border-neutral-800 pb-6">
                  <Logo size={40} className="rounded-full bg-white border border-neutral-700 shadow-md shrink-0" />
                  <div>
                    <h3 className="font-display font-extrabold text-white text-base tracking-wide leading-none">
                      Unique Cooling Center
                    </h3>
                    <p className="text-[10px] text-[#ff9f1c] font-bold tracking-widest mt-1 uppercase">12 Years Service Experience</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#ff9f1c]/15 text-[#ff9f1c] px-3 py-1.5 rounded-lg border border-[#ff9f1c]/30 text-xs font-mono font-bold">
                  <Award className="w-4 h-4 text-[#ff9f1c]" />
                  <span>12 Years of Service Experience</span>
                </div>

                <nav className="flex flex-col gap-5">
                  <button 
                    onClick={() => handleScrollToSection("home")}
                    className="text-left text-xl font-display font-semibold text-white hover:text-[#00f0ff] py-1 border-l-2 border-transparent hover:border-[#00f0ff] pl-3 transition-all cursor-pointer"
                  >
                    Home Base
                  </button>
                  <button 
                    onClick={() => handleScrollToSection("services")}
                    className="text-left text-xl font-display font-semibold text-white hover:text-[#00f0ff] py-1 border-l-2 border-transparent hover:border-[#00f0ff] pl-3 transition-all cursor-pointer"
                  >
                    Our Services
                  </button>
                  <button 
                    onClick={() => handleScrollToSection("why-choose-us")}
                    className="text-left text-xl font-display font-semibold text-white hover:text-[#00f0ff] py-1 border-l-2 border-transparent hover:border-[#00f0ff] pl-3 transition-all cursor-pointer"
                  >
                    Why Choose Us
                  </button>
                  <button 
                    onClick={() => handleScrollToSection("reviews")}
                    className="text-left text-xl font-display font-semibold text-white hover:text-[#00f0ff] py-1 border-l-2 border-transparent hover:border-[#00f0ff] pl-3 transition-all cursor-pointer"
                  >
                    Customer Reviews
                  </button>
                  <button 
                    onClick={() => handleScrollToSection("contact")}
                    className="text-left text-xl font-display font-semibold text-white hover:text-[#00f0ff] py-1 border-l-2 border-transparent hover:border-[#00f0ff] pl-3 transition-all cursor-pointer"
                  >
                    Support &amp; Location
                  </button>
                </nav>
              </div>

              <div className="space-y-4 border-t border-neutral-800 pt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#ff9f1c]/10 p-2 rounded-lg text-[#ff9f1c]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Business Hours</p>
                    <p className="text-sm font-semibold text-white">{businessDetails.hours}</p>
                  </div>
                </div>

                <a 
                  href={`tel:${businessDetails.phoneFormatted}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#ff9f1c] hover:bg-amber-600 active:scale-95 text-neutral-900 font-display font-extrabold text-base py-4 rounded-xl shadow-lg shadow-amber-500/10 flex items-center justify-center gap-3 transition-all"
                >
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                  Call Now: {businessDetails.phone}
                </a>

                <p className="text-center text-[10px] text-neutral-500 uppercase tracking-widest">
                  Serving North Barrackpur and Surrounds
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION DECORATED WITH ICE-BLUE GRADIENT & SERVICE BADGE */}
      <section 
        id="home" 
        className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-r from-white to-[#e0f7fa] border-b-2 border-slate-200"
      >
        {/* Absolute Background graphics */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-100/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center justify-center text-center">
          
          {/* 12 Years of Service Experience Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#0f4c81] text-white px-4 py-2 rounded-full border-2 border-[#00f0ff] shadow-lg mb-6"
          >
            <Award className="w-4 h-4 text-[#ff9f1c]" />
            <span className="text-xs sm:text-sm font-display font-black tracking-wide text-white">
              12 Years of Service Experience
            </span>
            <span className="text-[#00f0ff] font-mono text-xs hidden sm:inline">•</span>
            <span className="text-amber-300 font-mono text-xs font-bold hidden sm:inline">Barrackpore &amp; Kolkata</span>
          </motion.div>

          {/* Centered Live Interactive Brand Poster */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-xl relative"
          >
            <BrandPoster />
          </motion.div>

        </div>
      </section>

      {/* FLOAT PERFORMANCE METRIC COUNTERS OVER THE TRANISTION */}
      <section className="relative z-20 bg-[#0f4c81] text-white border-y-4 border-[#00f0ff] py-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/10 text-center">
            
            <div className="pt-0 md:pt-0 flex flex-col justify-center items-center">
              <span className="block font-display font-black text-3xl md:text-5xl text-[#ff9f1c] tracking-tight">
                12 Years
              </span>
              <span className="block text-[10px] md:text-xs uppercase text-slate-300 tracking-[0.15em] font-mono font-bold mt-1.5">
                Service Experience
              </span>
            </div>

            <div className="pt-6 md:pt-0 flex flex-col justify-center items-center">
              <span className="block font-display font-black text-3xl md:text-5xl text-[#00f0ff] tracking-tight">
                4.9 Stars
              </span>
              <span className="block text-[10px] md:text-xs uppercase text-slate-300 tracking-[0.15em] font-mono font-bold mt-1.5">
                ★ Google Verified
              </span>
            </div>

            <div className="pt-6 md:pt-0 flex flex-col justify-center items-center">
              <span className="block font-display font-black text-3xl md:text-5xl text-[#ff9f1c] tracking-tight">
                251+ Reviews
              </span>
              <span className="block text-[10px] md:text-xs uppercase text-slate-300 tracking-[0.15em] font-mono font-bold mt-1.5">
                Real Local Feedback
              </span>
            </div>

            <div className="pt-6 md:pt-0 flex flex-col justify-center items-center">
              <span className="block font-display font-black text-3xl md:text-5xl text-[#00f0ff] tracking-tight">
                Same-Day
              </span>
              <span className="block text-[10px] md:text-xs uppercase text-slate-300 tracking-[0.15em] font-mono font-bold mt-1.5">
                On-site Diagnostics
              </span>
            </div>

            <div className="pt-6 md:pt-0 col-span-2 md:col-span-1 flex flex-col justify-center items-center">
              <span className="block font-display font-black text-2xl md:text-3.5xl text-white tracking-tight leading-none pt-2 md:pt-0">
                Barrackpore
              </span>
              <span className="block text-[10px] md:text-xs uppercase text-amber-400 tracking-[0.15em] font-mono font-bold mt-1.5">
                Primary Serviced Hub
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION - BEAUTIFUL GRID WITH GEOMETRIC BALANCE DESIGN */}
      <section id="services" className="py-24 bg-slate-50 border-b-2 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Subheading */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase text-[#0f4c81] font-extrabold tracking-[0.25em] font-mono">Our Professional Care</h2>
            <h3 className="font-display font-black text-3xl sm:text-5.5xl text-[#0f4c81] tracking-tight">
              Elite Repair Services <br />
              <span className="text-xl sm:text-2xl font-mono text-[#ff9f1c] uppercase font-bold tracking-widest mt-2 block">Tailored For Your Absolute Comfort</span>
            </h3>
            <div className="w-24 h-1.5 bg-[#00f0ff] mx-auto rounded-full my-4"></div>
            <p className="text-slate-600 text-[15px] sm:text-lg leading-relaxed pt-2">
              We send humble, highly experienced local technicians equipped with premium testing tools. Enjoy upfront diagnostic quotes and comfortable prices.
            </p>
          </div>

          {/* Grid of beautifully designed service cards with geometric borders and responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border-2 border-slate-200 hover:border-[#00f0ff] group transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* 100% Responsive Image Container */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-slate-100 border-b-4 border-[#0f4c81]">
                  <img 
                    src={service.imageUrl} 
                    alt={`${service.title} at Unique Cooling Center`} 
                    className={`w-full h-full max-w-full object-cover ${service.id === 'kitchen-chimney' ? 'object-[center_15%]' : service.id === 'aquaguard-ro' ? 'object-[center_12%]' : service.id === 'geyser-repair' ? 'object-[center_10%]' : 'object-center'} group-hover:scale-105 transition-transform duration-500 block`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Content area */}
                <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between bg-white hover:bg-slate-50 transition-colors">
                  <div className="space-y-3">
                    <h4 className="font-display font-black text-xl sm:text-2xl text-[#0f4c81] group-hover:text-[#00b8d4] transition-colors duration-150">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed sm:text-base">
                      {service.description}
                    </p>

                    {/* Benefit bullets */}
                    <div className="pt-4 border-t border-slate-200 space-y-2.5">
                      {service.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-start gap-2.5">
                          <div className="bg-[#e0f7fa] p-0.5 rounded-md text-cyan-700 mt-1 shrink-0 border border-cyan-200">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 font-bold">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Immediate Direct Lead Action Button */}
                  <div className="pt-4">
                    <a 
                      href={`tel:${businessDetails.phoneFormatted}`}
                      onClick={() => setShowDirectDialTip(true)}
                      className="w-full bg-white text-[#0f4c81] border-2 border-[#0f4c81] hover:bg-[#00f0ff] hover:text-[#0f4c81] hover:border-[#00f0ff] font-mono font-extrabold text-xs uppercase tracking-widest py-3 rounded-lg block text-center transition-all duration-200"
                    >
                      Call for Repair
                    </a>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

          {/* Prompt banner under the services with geometric balance styling */}
          <div className="mt-16 bg-white rounded-2xl p-6 sm:p-10 border-2 border-[#0f4c81] text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#00f0ff]"></div>
            <div className="absolute top-0 right-0 w-2 h-full bg-[#ff9f1c]"></div>
            
            <h4 className="font-display font-black text-lg sm:text-2xl text-[#0f4c81]">
              Need secondary appliance troubleshooting or immediate AC maintenance?
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
              We diagnose multi-appliance errors with highly attractive discount rates when serviced together. No bookable web forms necessary, call our dispatch supervisor directly for instantaneous connection.
            </p>
            <div className="pt-2">
              <a 
                href={`tel:${businessDetails.phoneFormatted}`}
                onClick={() => setShowDirectDialTip(true)}
                className="inline-flex items-center gap-2.5 bg-[#ff9f1c] hover:bg-[#f39100] font-sans font-black text-slate-900 px-8 py-3.5 rounded-lg border-b-4 border-amber-800 shadow-md transition-all text-sm uppercase tracking-wider scale-100 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Hotline Call: {businessDetails.phone}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US SECTION - LOCAL TRUST & COMFORTABLE PRICING */}
      <section id="why-choose-us" className="py-24 bg-[#0f4c81] text-white overflow-hidden relative border-b-4 border-[#00f0ff]">
        <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-700/20 blur-3xl pointer-events-none" />
        <div className="absolute right-[-5%] top-[-5%] w-[400px] h-[400px] rounded-full bg-blue-900/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Why Choose Us Left Side layout: The Core Quote Badge */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs uppercase text-[#00f0ff] font-extrabold tracking-[0.25em] font-mono">Our Core Pledge</h2>
              <h3 className="font-display font-black text-3xl sm:text-4.5xl tracking-tight leading-tight">
                Our Absolute Commitment To Local West Bengal Homes
              </h3>
              
              <div className="relative p-8 rounded-xl bg-white/5 border-2 border-white/20 overflow-hidden shadow-inner">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#ff9f1c]" />
                <p className="font-display font-black text-2xl text-[#ff9f1c] leading-relaxed">
                  &ldquo;Comfortable prices for perfect service&rdquo;
                </p>
                <p className="text-xs text-slate-350 mt-4 leading-relaxed font-bold">
                  We reject the modern practice of massive overhead margins and complex scheduling filters. By remaining local and lean across North Barrackpur and Ichhapur, we pass substantial savings directly down to our residential customers.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2.5 rounded-lg text-[#00f0ff] border border-white/10">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">250+ Homes Serviced</h5>
                    <p className="text-xs text-slate-300">Locally Trusted Repairs</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2.5 rounded-lg text-[#00f0ff] border border-white/10">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">12 Years of Service Experience</h5>
                    <p className="text-xs text-slate-300">Trusted Since 2014</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Why Choose Us Right Side layout: Benefit cards grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 border-2 border-white/10 hover:border-[#00f0ff] p-6 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-cyan-400/10 text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black rounded-lg flex items-center justify-center transition-all duration-200 mb-5 border border-white/10">
                    {renderIcon(item.iconName, "w-6 h-6")}
                  </div>
                  <h4 className="font-display font-black text-lg text-white group-hover:text-[#00f0ff] transition-colors duration-150">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* REVIEWS SECTION - AUTHENTIC GOOGLE BUSINESS PROFILE REVIEWS */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b-2 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-xs">
              <GoogleIcon className="w-4 h-4" />
              <span className="text-xs uppercase text-[#0f4c81] font-extrabold tracking-wider font-mono">
                Official Google Business Profile
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#0f4c81] tracking-tight">
              Real Google Reviews from Barrackpore
            </h2>
            <div className="w-24 h-1.5 bg-[#ff9f1c] mx-auto rounded-full my-3"></div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Read verified customer experiences from local homeowners across Barrackpore, Ichhapur, Palta, and Shyamnagar.
            </p>
          </div>

          {/* Google Business Profile Main Hero Card */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl p-6 sm:p-8 mb-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Score Box */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start text-center sm:text-left lg:text-left gap-4 pb-6 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-200 pr-0 lg:pr-8">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-200 flex items-center justify-center p-3 shrink-0">
                  <GoogleIcon className="w-10 h-10" />
                </div>
                <div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <span className="font-display font-black text-4xl sm:text-5xl text-slate-900 leading-none">4.9</span>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center text-[#ff9f1c]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-500 mt-0.5">251+ Google Reviews</span>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-700 font-bold flex items-center gap-1.5 mt-2 justify-center sm:justify-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>100% Verified Customer Ratings</span>
                  </p>
                </div>
              </div>

              {/* Center Trust Metrics */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">Location Verified</span>
                  <p className="text-xs font-black text-[#0f4c81] mt-0.5">Barrackpore &amp; North 24 Pgs</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">Experience</span>
                  <p className="text-xs font-black text-[#0f4c81] mt-0.5">12 Years Certified Service</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">Response Time</span>
                  <p className="text-xs font-black text-[#0f4c81] mt-0.5">Within 30–60 Mins On-Site</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">Customer Rating</span>
                  <p className="text-xs font-black text-amber-600 mt-0.5">★ 4.9 / 5.0 Star Average</p>
                </div>
              </div>

              {/* Right CTA Actions */}
              <div className="lg:col-span-3 flex flex-col gap-2.5">
                <a
                  href={businessDetails.googleReviewsUrl || businessDetails.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0f4c81] hover:bg-[#072a4b] text-white px-4 py-3 rounded-xl font-mono font-black text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all"
                >
                  <GoogleIcon className="w-4 h-4" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-300" />
                </a>

                <a
                  href={businessDetails.googleReviewsUrl || businessDetails.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#ff9f1c] hover:bg-[#f39100] text-slate-950 px-4 py-3 rounded-xl font-mono font-black text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Write a Google Review</span>
                </a>
              </div>

            </div>
          </div>

          {/* Controls Bar: Category Filters & Display Mode Toggle */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-xs font-mono font-bold text-slate-500 mr-1 flex items-center gap-1">
                Filter by Service:
              </span>
              {[
                { id: "all", label: "All Reviews (8)" },
                { id: "ac", label: "AC Servicing (2)" },
                { id: "fridge-wash", label: "Fridge & Washing (2)" },
                { id: "chimney-ro", label: "Chimney & RO (2)" },
                { id: "geyser-micro", label: "Geyser & Microwave (2)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedReviewCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    selectedReviewCategory === tab.id
                      ? "bg-[#0f4c81] text-white shadow-md scale-105"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Slider / Grid Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
              <button
                onClick={() => setReviewDisplayMode("slider")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  reviewDisplayMode === "slider"
                    ? "bg-[#0f4c81] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🎠 Review Slider
              </button>
              <button
                onClick={() => setReviewDisplayMode("grid")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  reviewDisplayMode === "grid"
                    ? "bg-[#0f4c81] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                ⊞ All Reviews Grid
              </button>
            </div>
          </div>

          {/* Review Slider Display Mode */}
          {reviewDisplayMode === "slider" ? (
            <div 
              className="relative max-w-4xl mx-auto px-2 sm:px-12"
              onMouseEnter={() => setIsSliderHovered(true)}
              onMouseLeave={() => setIsSliderHovered(false)}
            >
              {/* Slider Main Active Review Card */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#0f4c81] shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-between">
                
                {/* Google Multicolor Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                  <div className="w-1/4 bg-[#4285F4]" />
                  <div className="w-1/4 bg-[#EA4335]" />
                  <div className="w-1/4 bg-[#FBBC05]" />
                  <div className="w-1/4 bg-[#34A853]" />
                </div>

                {/* Card Top: Customer Avatar, Name, Verified Badge & Google Logo */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-200 shadow-sm">
                      <img
                        src={currentReview.avatarUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80"}
                        alt={currentReview.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-slate-900 text-lg leading-tight">
                        {currentReview.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-bold flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#ff9f1c] shrink-0" />
                        <span>{currentReview.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Verified Google Reviewer
                    </span>
                    <div className="p-2 bg-slate-50 rounded-xl border border-slate-200 shadow-2xs">
                      <GoogleIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Rating & Service Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 my-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-[#ff9f1c]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(currentReview.rating)
                              ? "fill-[#ff9f1c] text-[#ff9f1c]"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-800">
                      {currentReview.rating.toFixed(1)} / 5.0
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      {currentReview.date}
                    </span>
                  </div>

                  {currentReview.serviceTag && (
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-[#0f4c81] text-xs font-mono font-black uppercase px-3 py-1 rounded-lg">
                      🔧 {currentReview.serviceTag}
                    </span>
                  )}
                </div>

                {/* Review Feedback Text with AnimatePresence */}
                <div className="my-2 relative flex-grow">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentReview.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-slate-800 text-base sm:text-lg italic leading-relaxed font-semibold border-l-4 border-[#00f0ff] pl-4 sm:pl-5 bg-slate-50/70 py-4 rounded-r-xl"
                    >
                      &ldquo;{currentReview.text}&rdquo;
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Slide Footer: Helpful count & Direct Google Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-500 font-mono">
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-md text-slate-600 font-bold">
                      <ThumbsUp className="w-3.5 h-3.5 text-blue-600" />
                      Helpful ({currentReview.helpfulCount || 5} people found this helpful)
                    </span>
                  </div>

                  <a
                    href={businessDetails.googleReviewsUrl || businessDetails.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0f4c81] hover:text-blue-700 font-mono font-bold hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Slider Controls: Left Arrow (<) and Right Arrow (>) */}
              <button
                onClick={prevTestimonial}
                className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 bg-white hover:bg-slate-50 text-[#0f4c81] rounded-full border-2 border-[#0f4c81] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center cursor-pointer active:scale-95 z-20"
                aria-label="Previous Google Review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 bg-[#0f4c81] hover:bg-[#072a4b] text-white rounded-full border-2 border-[#00f0ff] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center cursor-pointer active:scale-95 z-20"
                aria-label="Next Google Review"
              >
                <ChevronRight className="w-6 h-6 text-[#00f0ff]" />
              </button>

              {/* Slider Bottom Navigation: Dots & Counter */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono font-bold text-slate-500">
                  Showing review <span className="text-[#0f4c81] font-black">{activeReviewIndex + 1}</span> of <span className="text-[#0f4c81] font-black">{filteredReviews.length}</span>
                </div>

                <div className="flex items-center gap-2">
                  {filteredReviews.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setActiveReviewIndex(dotIndex)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeReviewIndex === dotIndex
                          ? "w-8 bg-[#0f4c81]"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to review ${dotIndex + 1}`}
                    />
                  ))}
                </div>

                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Auto-advancing • Hover to pause</span>
                </div>
              </div>

              {/* Quick Jump Review Cards Strip */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-[11px] font-mono uppercase font-bold text-slate-400 mb-3 text-center sm:text-left">
                  Quick Select Any Review:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {filteredReviews.map((rev, rIdx) => (
                    <button
                      key={rev.id}
                      onClick={() => setActiveReviewIndex(rIdx)}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        activeReviewIndex === rIdx
                          ? "bg-blue-50 border-[#0f4c81] shadow-xs"
                          : "bg-white hover:bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 truncate">{rev.name}</span>
                        <span className="text-[10px] text-amber-500 font-bold">★{rev.rating}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 truncate mt-0.5">{rev.serviceTag}</p>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0f4c81] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3.5">
                    
                    {/* Top Bar: Reviewer profile + Google Icon */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-slate-200 shadow-xs">
                          <img
                            src={review.avatarUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80"}
                            alt={review.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h4 className="font-display font-black text-slate-900 text-sm leading-tight group-hover:text-[#0f4c81] transition-colors">
                            {review.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-bold flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-[#ff9f1c] shrink-0" />
                            <span>{review.location}</span>
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 p-1.5 bg-slate-50 rounded-lg border border-slate-200 group-hover:border-blue-300 transition-colors">
                        <GoogleIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Rating Stars + Date */}
                    <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(review.rating)
                                ? "fill-[#ff9f1c] text-[#ff9f1c]"
                                : "text-slate-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs font-mono font-bold text-slate-700 ml-1">
                          {review.rating.toFixed(1)}
                        </span>
                      </div>

                      <span className="text-[11px] text-slate-400 font-mono font-medium">
                        {review.date}
                      </span>
                    </div>

                    {/* Service Tag */}
                    {review.serviceTag && (
                      <div className="inline-block bg-cyan-50 border border-cyan-200/80 text-[#0f4c81] text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-md">
                        🔧 {review.serviceTag}
                      </div>
                    )}

                    {/* Testimonial Quote */}
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic font-medium pt-1">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Footer: Google Verified Badge + Helpful Counter */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified Google Review
                    </span>

                    <span className="text-slate-400 font-mono flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3 text-slate-400" />
                      Helpful ({review.helpfulCount || 5})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Google CTA Box */}
          <div className="mt-14 bg-[#0f4c81] rounded-2xl p-6 sm:p-8 text-white shadow-xl border-4 border-[#00f0ff] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left flex-col sm:flex-row">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2.5 shrink-0 shadow-md">
                <GoogleIcon className="w-9 h-9" />
              </div>
              <div>
                <h4 className="font-display font-black text-xl sm:text-2xl text-white">
                  Have You Serviced An Appliance With Us?
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  Help fellow homeowners in Barrackpore by rating our service on Google Maps.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={businessDetails.googleReviewsUrl || businessDetails.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff9f1c] hover:bg-[#f39100] text-slate-950 px-6 py-3 rounded-xl font-mono font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                <span>Rate on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT & MAP RADIUS SECTION */}
      <section id="contact" className="py-24 bg-slate-50 border-b-2 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact details left column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-3">
                <span className="text-xs uppercase text-[#0f4c81] font-extrabold tracking-[0.25em] font-mono">Get in Touch</span>
                <h3 className="font-display font-black text-3xl sm:text-4.5xl text-[#0f4c81] tracking-tight">
                  Reach Our Dispatch Desk Instantly
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Call us on the phone to explain your appliance's symptoms (e.g. split AC blowing warm air, washing machine not draining, fridge failing to freeze). Our supervisor acts as a friendly support engineer.
                </p>
              </div>

              {/* Verified Contact Details list */}
              <div className="space-y-4">
                
                {/* Desk Telephone */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-lg border-2 border-slate-200 hover:border-[#00f0ff] transition-all">
                  <div className="bg-[#0f4c81]/5 p-3 rounded-lg text-[#0f4c81] shrink-0 border border-slate-105">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-widest">Daily Service Hotline</h5>
                    <a 
                      href={`tel:${businessDetails.phoneFormatted}`}
                      onClick={() => setShowDirectDialTip(true)}
                      className="font-mono text-xl font-black text-[#0f4c81] hover:text-[#00f0ff] mt-0.5 block"
                    >
                      {businessDetails.phone}
                    </a>
                    <span className="text-[10px] text-[#ff9f1c] font-black tracking-widest uppercase mt-0.5 block">Tap to Dial Hotline</span>
                  </div>
                </div>

                {/* Operations Base Location */}
                {/* Contact Card: Location */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-lg border-2 border-slate-200 hover:border-[#00f0ff] transition-all">
                  <div className="bg-[#0f4c81]/5 p-3 rounded-lg text-[#0f4c81] shrink-0 border border-slate-105">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h5 className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-widest">Headquarters &amp; Dispatch</h5>
                    <p className="text-sm font-black text-[#0f4c81] leading-relaxed">
                      {businessDetails.location}
                    </p>
                    <span className="text-xs text-slate-500 block leading-normal font-semibold">
                      Serving Babanpur, Ichhapur Defence Estate, Palta, Shyamnagar, &amp; surrounds.
                    </span>
                    {businessDetails.mapUrl && (
                      <a 
                        href={businessDetails.mapUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-[#0f4c81] hover:text-[#ff9f1c] pt-1 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open in Google Maps
                      </a>
                    )}
                  </div>
                </div>

                {/* Hours of Activity */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-lg border-2 border-slate-200 hover:border-[#00f0ff] transition-all">
                  <div className="bg-[#0f4c81]/5 p-3 rounded-lg text-[#0f4c81] shrink-0 border border-slate-105">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-widest">Operating Hours</h5>
                    <p className="text-sm font-black text-[#0f4c81] mt-0.5">
                      {businessDetails.hours}
                    </p>
                    <span className="text-xs text-emerald-600 font-bold mt-1 block">
                      Open Daily until 10:00 PM (Emergency weekend calls accommodated)
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Map Placeholder mockup right column */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-slate-200 shadow-xl overflow-hidden space-y-4">
                <div className="flex items-center justify-between px-2 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-display font-black text-sm text-[#0f4c81] uppercase tracking-wider">Active Service Area Map</span>
                  </div>
                  {businessDetails.mapUrl ? (
                    <a
                      href={businessDetails.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-black text-[#0f4c81] hover:text-[#ff9f1c] flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md border border-slate-200 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#ff9f1c]" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider font-extrabold">WEST BENGAL SECTOR</span>
                  )}
                </div>

                {/* Actual responsive Google Maps iframe with verified exact coordinates pinpoint */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 shadow-inner border-2 border-[#0f4c81] relative">
                  <iframe 
                    title="Unique Cooling Center Exact Location Map"
                    src="https://maps.google.com/maps?q=loc:22.7728495,88.3733732+(Unique+Cooling+Center)&t=m&z=17&ie=UTF8&iwloc=B&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 z-10"
                  />
                </div>

                {/* Exact Business Pinpoint Verification Bar */}
                <div className="bg-[#0f4c81] text-white p-3 sm:p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-4 border-[#ff9f1c]">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                      <span className="text-[11px] font-mono font-black text-[#00f0ff] uppercase tracking-wider">Exact Business Pinpoint (22.7728° N, 88.3734° E)</span>
                    </div>
                    <p className="text-xs font-bold text-white leading-tight">
                      Unique Cooling Center • 25(8/A), Purba Dhangar Para, Barrackpore
                    </p>
                  </div>

                  <a
                    href={businessDetails.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#ff9f1c] hover:bg-[#f39100] text-slate-950 px-3.5 py-2 rounded-md font-mono font-black text-xs uppercase tracking-wider shadow-md transition-all shrink-0 hover:scale-105"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="px-2 pt-1 flex flex-wrap gap-2">
                  {businessDetails.servingAreas.map((area, sIndex) => (
                    <span 
                      key={sIndex} 
                      className="bg-slate-100 font-mono hover:bg-slate-200 text-slate-800 text-[10px] uppercase font-bold px-3 py-1.5 rounded-md border border-slate-200 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER SECTION & MOBILE QUICK DIAL HOTBAR */}
      <footer className="bg-[#0f4c81] text-slate-300 pt-16 pb-28 md:pb-16 border-t-4 border-[#ff9f1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 border-b border-white/10 pb-12 items-start">
            
            {/* Column 1: Brand details and tagline */}
            <div className="md:col-span-5 space-y-4">
              <div 
                onClick={() => handleScrollToSection("home")}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <Logo size={40} className="rounded-full bg-white border border-slate-200 shadow-md shrink-0" />
                <div>
                  <h4 className="font-display font-black text-[#00f0ff] text-base uppercase tracking-wider leading-none">
                    Unique Cooling Center
                  </h4>
                  <p className="text-[10px] text-amber-400 font-bold tracking-widest uppercase mt-1">12 Years Service Experience</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-slate-200">
                The premier Air Conditioning &amp; Appliance Repair solution in North Barrackpur, West Bengal. Serving private residencies and offices daily with 12 Years of Service Experience, certified expertise, and competitive, comfortable prices.
              </p>

              <div className="flex items-center gap-1.5 text-[#ff9f1c] font-black text-xs sm:text-sm">
                <Star className="w-4 h-4 fill-current text-[#ff9f1c]" />
                <span>4.9 Star Rating based on 251+ Verified Reviews</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 space-y-4 text-left">
              <h5 className="font-display font-black text-white text-xs uppercase tracking-wider border-b-2 border-[#00f0ff]/20 pb-1 max-w-[120px]">Quick Actions</h5>
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                <button 
                  onClick={() => handleScrollToSection("home")}
                  className="text-left text-slate-350 hover:text-white transition-colors cursor-pointer font-bold"
                >
                  Home Base
                </button>
                <button 
                  onClick={() => handleScrollToSection("services")}
                  className="text-left text-slate-350 hover:text-white transition-colors cursor-pointer font-bold"
                >
                  AC &amp; Appliance Repairs
                </button>
                <button 
                  onClick={() => handleScrollToSection("why-choose-us")}
                  className="text-left text-slate-350 hover:text-white transition-colors cursor-pointer font-bold"
                >
                  Our Core Pledge
                </button>
                <button 
                  onClick={() => handleScrollToSection("reviews")}
                  className="text-left text-slate-350 hover:text-white transition-colors cursor-pointer font-bold"
                >
                  Verified Neighborhood Reviews
                </button>
                <button 
                  onClick={() => handleScrollToSection("contact")}
                  className="text-left text-slate-350 hover:text-white transition-colors cursor-pointer font-bold"
                >
                  Base &amp; Directional Radius
                </button>
              </div>
            </div>

            {/* Column 3: Contact & Hours Recap */}
            <div className="md:col-span-4 space-y-4 text-left">
              <h5 className="font-display font-black text-white text-xs uppercase tracking-wider border-b-2 border-[#ff9f1c]/20 pb-1 max-w-[170px]">Dispatch Support Desk</h5>
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <p className="text-[#00f0ff] text-[10px] uppercase font-bold tracking-widest font-mono">Local Phone Calls</p>
                  <a 
                    href={`tel:${businessDetails.phoneFormatted}`} 
                    onClick={() => setShowDirectDialTip(true)}
                    className="font-mono text-base font-black text-white hover:text-cyan-300 mt-0.5 block"
                  >
                    {businessDetails.phone}
                  </a>
                </div>

                <div>
                  <p className="text-[#00f0ff] text-[10px] uppercase font-bold tracking-widest font-mono">Operation Base Address</p>
                  {businessDetails.mapUrl ? (
                    <a 
                      href={businessDetails.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00f0ff] font-semibold mt-0.5 leading-relaxed block group transition-colors"
                    >
                      <span>{businessDetails.location} - West Bengal, India.</span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#00f0ff] font-mono font-bold ml-1.5 underline">
                        View Map <ExternalLink className="w-3 h-3 inline" />
                      </span>
                    </a>
                  ) : (
                    <p className="text-white font-semibold mt-0.5 leading-relaxed">
                      {businessDetails.location} - West Bengal, India.
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-[#00f0ff] text-[10px] uppercase font-bold tracking-widest font-mono">Standard Shifts</p>
                  <p className="text-white font-semibold mt-0.5">
                    {businessDetails.hours} (Open Daily)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom regulatory copyright declaration */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="text-center md:text-left font-semibold">
              &copy; {new Date().getFullYear()} Unique Cooling Center. All Rights Reserved. &ldquo;Comfortable prices for perfect service.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <span className="shrink-0 font-bold">North Barrackpur, West Bengal</span>
              <span className="text-white/20">|</span>
              <a 
                href={`tel:${businessDetails.phoneFormatted}`}
                onClick={() => setShowDirectDialTip(true)}
                className="text-[#00f0ff] hover:text-[#ff9f1c] flex items-center gap-1 shrink-0 font-bold"
              >
                Emergency Dispatch <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* STICKY FOOTER ANCHOR HOTBAR FOR MOBILE PHONES - Drives instant call leads on single tap */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#0f4c81] text-white border-t-4 border-[#00f0ff] px-4 py-4 md:hidden shadow-2xl backdrop-blur-md bg-opacity-95">
        <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#00f0ff] font-extrabold uppercase tracking-widest">UNIQUE COOLING CENTER</span>
            <span className="font-mono text-xs font-black text-white tracking-tight mt-0.5">Dial {businessDetails.phone}</span>
          </div>

          <a 
            href={`tel:${businessDetails.phoneFormatted}`}
            onClick={() => setShowDirectDialTip(true)}
            className="flex-1 bg-[#ff9f1c] hover:bg-[#f39100] active:scale-95 text-slate-900 font-display font-black text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 transition-all text-center border-b-2 border-amber-800"
          >
            <PhoneCall className="w-4 h-4 text-slate-900 animate-bounce" />
            Tap to Call Now
          </a>
        </div>
      </div>

      {/* FLOATING ACTION CTA WIDGET (CALL & WHATSAPP) - Stays persistently accessible across the complete website */}
      <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 flex flex-col gap-3 items-end pointer-events-none">
        {/* Floating WhatsApp Action Button */}
        <a 
          href={`https://wa.me/${businessDetails.phoneFormatted.replace('+', '')}?text=Hello%20Unique%20Cooling%20Center%2C%20I%20would%20like%20to%20inquire%20about%20appliance%20repair%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white hover:text-white px-4 py-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border border-emerald-400/20"
          title="Chat on WhatsApp"
        >
          <span className="text-xs font-black uppercase tracking-wider font-display max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-out whitespace-nowrap">
            WhatsApp Us
          </span>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
            <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.473 1.332 4.985L2 22l5.177-1.359c1.464.798 3.11 1.218 4.823 1.218 5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm4.331 14.195c-.24.673-1.185 1.227-1.635 1.282-.44.053-.984.076-1.62-.128-.42-.134-.96-.31-1.603-.585-2.73-1.171-4.49-3.957-4.626-4.14-.136-.182-1.107-1.472-1.107-2.812 0-1.34.701-1.998.951-2.261.25-.263.548-.329.73-.329s.366.002.527.01c.164.008.384-.062.602.464.223.539.762 1.856.828 1.993.067.136.111.295.02.477s-.137.295-.273.454c-.137.159-.286.355-.409.476-.136.136-.28.284-.12.56.16.276.711 1.171 1.523 1.894.654.582 1.207.763 1.378.854.17.091.272.076.374-.04.102-.116.44-.515.558-.693.117-.178.235-.148.396-.089s1.026.484 1.202.573c.176.089.293.133.336.208.043.076.043.438-.197 1.111z" />
          </svg>
        </a>

        {/* Floating Phone Direct Call Button */}
        <a 
          href={`tel:${businessDetails.phoneFormatted}`}
          onClick={() => setShowDirectDialTip(true)}
          className="pointer-events-auto flex items-center gap-2 bg-[#ff9f1c] hover:bg-[#f39100] text-slate-900 hover:text-slate-900 px-4 py-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border border-amber-400/20"
          title="Call Service Desk"
        >
          <span className="text-xs font-black uppercase tracking-wider font-display max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-out whitespace-nowrap">
            Call Service
          </span>
          <Phone className="w-6 h-6 shrink-0" />
        </a>
      </div>

    </div>
  );
}
