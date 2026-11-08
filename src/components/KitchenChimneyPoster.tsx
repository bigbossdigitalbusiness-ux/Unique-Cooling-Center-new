import React from "react";
import { motion } from "motion/react";
import { 
  UserCheck, 
  ShieldCheck, 
  Wallet, 
  Headphones, 
  Wrench, 
  Settings, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall,
  Star
} from "lucide-react";
import { businessDetails } from "../data";
import Logo from "./Logo";
// @ts-expect-error - PNG files are natively resolved by Vite's bundler
import chimneyImage from "../assets/images/regenerated_image_1786914425520.png";

export default function KitchenChimneyPoster() {
  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-white rounded-3xl shadow-2xl border-4 border-[#0f4c81] overflow-hidden font-sans">
      
      {/* Top Banner / Poster Header */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-white to-sky-50 border-b border-slate-200 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          
          {/* Brand Logo & Sub-tagline */}
          <div className="flex items-center gap-3">
            <Logo size={48} className="rounded-full bg-white border border-slate-200 shadow-md shrink-0" />
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0f4c81] tracking-tight leading-none uppercase">
                UNIQUE COOLING CENTER
              </h3>
              <p className="text-xs text-slate-600 font-bold tracking-wide mt-1">
                Cooling Solutions, Trusted Service
              </p>
            </div>
          </div>

          {/* Quick Dial Header Badge */}
          <a
            href={`tel:${businessDetails.phoneFormatted}`}
            className="inline-flex items-center gap-2 bg-[#ff9f1c] hover:bg-[#f39100] text-slate-950 font-display font-black text-xs sm:text-sm px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call: {businessDetails.phone}</span>
          </a>
        </div>

        {/* Main Poster Title & Tagline */}
        <div className="mt-8 text-center sm:text-left relative z-10">
          <h2 className="font-display font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-[1.05] uppercase">
            KITCHEN<br />
            <span className="inline-block bg-[#0f4c81] text-white px-4 py-1 rounded-xl text-3xl sm:text-5xl mt-1.5 shadow-md">
              CHIMNEY
            </span>
          </h2>
          <div className="mt-2 inline-block bg-[#00f0ff]/20 text-[#0f4c81] border border-[#00f0ff]/50 px-3 py-1 rounded-lg text-lg sm:text-2xl font-black uppercase tracking-wider font-display">
            REPAIR SERVICE
          </div>
          <p className="text-slate-700 font-extrabold text-base sm:text-lg mt-3 flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff9f1c]" />
            Breathe Clean, Live Healthy
          </p>
        </div>
      </div>

      {/* Main Body: Technician Graphic + 4 Benefits + 100% Satisfaction Badge */}
      <div className="p-6 sm:p-8 grid md:grid-cols-12 gap-8 items-center bg-gradient-to-b from-white to-slate-50">
        
        {/* Left Side: 4 Core Benefit Badges */}
        <div className="md:col-span-5 space-y-4">
          
          {/* 1. Expert Technicians */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0f4c81]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#0f4c81] text-[#00f0ff] flex items-center justify-center shrink-0 shadow-sm">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-black text-slate-900 text-sm sm:text-base leading-tight">
                Expert Technicians
              </h4>
              <p className="text-xs text-slate-600 font-bold mt-0.5">
                12 Years Service Experience
              </p>
            </div>
          </div>

          {/* 2. Quick & Reliable */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0f4c81]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#0f4c81] text-[#00f0ff] flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-black text-slate-900 text-sm sm:text-base leading-tight">
                Quick &amp; Reliable
              </h4>
              <p className="text-xs text-slate-600 font-bold mt-0.5">
                On-Time Service
              </p>
            </div>
          </div>

          {/* 3. Affordable Pricing */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0f4c81]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#0f4c81] text-[#00f0ff] flex items-center justify-center shrink-0 shadow-sm">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-black text-slate-900 text-sm sm:text-base leading-tight">
                Affordable Pricing
              </h4>
              <p className="text-xs text-slate-600 font-bold mt-0.5">
                No Hidden Charges
              </p>
            </div>
          </div>

          {/* 4. 24/7 Customer Support */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0f4c81]/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#0f4c81] text-[#00f0ff] flex items-center justify-center shrink-0 shadow-sm">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-black text-slate-900 text-sm sm:text-base leading-tight">
                24/7 Customer Support
              </h4>
              <p className="text-xs text-slate-600 font-bold mt-0.5">
                Always Here to Help
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Visual Showcase + 100% Satisfaction Badge */}
        <div className="md:col-span-7 relative">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 bg-slate-900 aspect-[4/3] min-h-[320px] sm:min-h-[380px]">
            <img 
              src={chimneyImage} 
              alt="Kitchen Chimney Repair and Servicing by Unique Cooling Center"
              className="w-full h-full max-w-full object-cover object-[center_10%] hover:scale-105 transition-transform duration-700 block"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            {/* Subtle bottom vignette only so chimney top remains 100% crystal clear */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            
            {/* Overlay banner */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-white shadow-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-extrabold uppercase text-[#0f4c81] tracking-wider block">
                  On-Site Inspection &amp; Servicing
                </span>
                <span className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                  Auto-clean, Baffle &amp; Mesh Filter Specialists
                </span>
              </div>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-md shrink-0">
                Certified
              </span>
            </div>
          </div>

          {/* 100% Satisfaction Guarantee Shield Badge - Positioned cleanly without blocking the chimney */}
          <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-3 bg-gradient-to-b from-slate-900 to-[#0f4c81] text-white p-3 sm:p-3.5 rounded-2xl shadow-2xl border-2 border-amber-400 text-center max-w-[130px] sm:max-w-[150px] z-20">
            <div className="flex justify-center gap-0.5 text-amber-400 mb-0.5">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <div className="text-xl sm:text-2xl font-display font-black text-white leading-none">
              100%
            </div>
            <div className="bg-[#ff9f1c] text-slate-950 font-black text-[8px] sm:text-[9px] uppercase tracking-wider py-0.5 px-1 rounded my-0.5 shadow-xs">
              SATISFACTION
            </div>
            <div className="text-[9px] sm:text-[10px] font-black tracking-widest text-slate-200 uppercase">
              GUARANTEE
            </div>
          </div>

        </div>

      </div>

      {/* WE REPAIR ALL MAJOR BRANDS SECTION */}
      <div className="px-6 sm:px-8 py-6 bg-slate-100 border-t border-b border-slate-200">
        <div className="text-center mb-4">
          <span className="inline-block bg-[#0f4c81] text-[#00f0ff] font-display font-black text-xs sm:text-sm uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
            WE REPAIR ALL MAJOR BRANDS
          </span>
        </div>

        {/* Brand Logos Strip (Elica, Faber, Glen, Hindware, KAFF) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 items-center">
          
          {/* Elica */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs flex flex-col items-center justify-center h-14">
            <span className="font-display font-black text-lg text-[#0f4c81] tracking-wider">elica</span>
          </div>

          {/* Faber */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs flex flex-col items-center justify-center h-14">
            <span className="font-display font-black text-base text-emerald-800 tracking-wider">FABER</span>
            <span className="text-[7px] text-slate-500 font-bold uppercase -mt-0.5">Franke&apos;s Air Expert</span>
          </div>

          {/* Glen */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs flex flex-col items-center justify-center h-14">
            <span className="font-display font-black text-lg text-blue-700 tracking-widest">GLEN</span>
          </div>

          {/* Hindware */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs flex flex-col items-center justify-center h-14">
            <span className="font-display font-black text-sm text-red-700 leading-none">hindware</span>
            <span className="text-[7px] text-slate-600 font-bold mt-0.5">smart appliances</span>
          </div>

          {/* KAFF */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs flex flex-col items-center justify-center h-14 col-span-2 sm:col-span-1">
            <span className="font-display font-black text-xl text-slate-900 tracking-wider">KAFF<sup className="text-xs">®</sup></span>
          </div>

        </div>
      </div>

      {/* 4 CORE SERVICES PILLARS (Installation, Repair, Cleaning, Maintenance) */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0f4c81] via-[#135995] to-[#0f4c81] text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* INSTALLATION */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15 hover:border-[#00f0ff] transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white text-[#0f4c81] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Wrench className="w-5 h-5" />
            </div>
            <h5 className="font-display font-black text-sm uppercase tracking-wider text-[#00f0ff]">
              INSTALLATION
            </h5>
            <p className="text-xs text-slate-200 font-medium mt-1 leading-relaxed">
              Expert installation for all chimney types.
            </p>
          </div>

          {/* REPAIR */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15 hover:border-[#00f0ff] transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white text-[#0f4c81] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Settings className="w-5 h-5" />
            </div>
            <h5 className="font-display font-black text-sm uppercase tracking-wider text-[#00f0ff]">
              REPAIR
            </h5>
            <p className="text-xs text-slate-200 font-medium mt-1 leading-relaxed">
              Quick &amp; reliable repair for all major brands.
            </p>
          </div>

          {/* CLEANING */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15 hover:border-[#00f0ff] transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white text-[#0f4c81] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h5 className="font-display font-black text-sm uppercase tracking-wider text-[#00f0ff]">
              CLEANING
            </h5>
            <p className="text-xs text-slate-200 font-medium mt-1 leading-relaxed">
              Deep cleaning for better performance &amp; hygiene.
            </p>
          </div>

          {/* MAINTENANCE */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15 hover:border-[#00f0ff] transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white text-[#0f4c81] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h5 className="font-display font-black text-sm uppercase tracking-wider text-[#00f0ff]">
              MAINTENANCE
            </h5>
            <p className="text-xs text-slate-200 font-medium mt-1 leading-relaxed">
              Regular maintenance for long lasting life.
            </p>
          </div>

        </div>
      </div>

      {/* Poster Footer CTA */}
      <div className="p-6 sm:p-8 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-display font-black text-slate-900 text-base sm:text-lg uppercase leading-tight">
            CHOOSE <span className="text-[#0f4c81]">UNIQUE COOLING CENTER</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 font-bold mt-0.5">
            for Reliable Kitchen Chimney Repair Service
          </p>
        </div>

        <a
          href={`tel:${businessDetails.phoneFormatted}`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0f4c81] hover:bg-[#0c3c66] active:scale-95 text-white font-display font-black text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <PhoneCall className="w-4 h-4 text-[#00f0ff]" />
          <span>CALL NOW FOR SERVICE</span>
        </a>
      </div>

    </div>
  );
}
