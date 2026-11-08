import React from "react";
import { motion } from "motion/react";
import { 
  Snowflake, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Award, 
  Phone, 
  MapPin, 
  ThumbsUp, 
  Sparkles,
  Heart
} from "lucide-react";
import { businessDetails } from "../data";
// @ts-expect-error - PNG files are natively resolved by Vite's bundler
import posterImage from "../assets/images/regenerated_image_1780639298733.png";

export default function BrandPoster() {
  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      {/* Decorative background outline for Geometric Balance vibe */}
      <div className="absolute -inset-2 border-4 border-dashed border-[#00f0ff] rounded-2xl pointer-events-none opacity-80 translate-x-3 translate-y-3 z-0"></div>
      <div className="absolute -inset-1 bg-[#ff9f1c] rounded-2xl pointer-events-none opacity-20 -translate-x-2 -translate-y-2 z-0"></div>

      {/* Main Poster Container */}
      <div className="relative z-10 w-full min-h-[580px] bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-white rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0f4c81] flex flex-col justify-between p-5 sm:p-6 font-sans">
        
        {/* Poster Header */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 bg-[#0f4c81]/10 w-fit px-2.5 py-1 rounded-full border border-[#0f4c81]/20">
              <Snowflake className="w-4 h-4 text-[#0f4c81] animate-spin-slow" />
              <span className="text-[10px] sm:text-xs font-mono font-black text-[#0f4c81] uppercase tracking-wider">COOL COMFORT</span>
            </div>
            
            <div className="mt-3">
              <span className="block text-[11px] sm:text-xs font-mono font-black text-[#ff9f1c] uppercase tracking-widest leading-none">
                PREMIUM AC SERVICES IN
              </span>
              <h2 className="block text-3xl sm:text-4xl font-display font-black text-[#0f4c81] tracking-tight leading-none mt-1 uppercase">
                BARRACKPORE
              </h2>
              <div className="h-1.5 bg-[#0f4c81] w-28 rounded-full mt-2 mb-3 shadow-sm" />
              
              <p className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-700 font-extrabold tracking-tight">
                Cool Comfort, Right at Home <span className="text-[#00b8d4]" role="img" aria-label="ice">❄️</span>
              </p>
            </div>
          </div>

          <div className="bg-[#0f4c81] px-3 py-2 rounded-xl border-b-4 border-[#00f0ff] text-center shadow-md shrink-0">
            <span className="block font-display font-black text-lg sm:text-xl text-[#00f0ff] leading-none">12+</span>
            <span className="block text-[8px] sm:text-[9px] font-mono font-bold text-amber-300 uppercase tracking-tighter leading-tight mt-0.5">Years Exp.</span>
          </div>
        </div>

        {/* Core Value Pillars Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 my-4 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-slate-200 shadow-xs z-10">
          <div className="flex items-center gap-2 border border-slate-100 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
            <div className="bg-emerald-50 text-emerald-600 p-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-slate-700 uppercase tracking-tight">12 YRS SERVICE EXP.</span>
          </div>

          <div className="flex items-center gap-2 border border-slate-100 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
            <div className="bg-amber-50 text-amber-600 p-1 rounded-full border border-amber-200">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-slate-700 uppercase tracking-tight">QUALITY SERVICE</span>
          </div>

          <div className="flex items-center gap-2 border border-slate-100 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
            <div className="bg-blue-50 text-blue-600 p-1 rounded-full border border-blue-200">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-slate-700 uppercase tracking-tight">ON TIME SERVICE</span>
          </div>

          <div className="flex items-center gap-2 border border-slate-100 p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
            <div className="bg-indigo-50 text-indigo-600 p-1 rounded-full border border-indigo-200">
              <span className="font-sans font-bold text-xs">₹</span>
            </div>
            <span className="text-[10px] sm:text-xs font-extrabold text-slate-700 uppercase tracking-tight">AFFORDABLE PRICING</span>
          </div>
        </div>

        {/* Interactive Visual/Illustration Center */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-slate-200 bg-slate-100 aspect-video sm:aspect-[4/3] my-2 z-10 flex">
          
          {/* Full Width Scenic & Professional AC Technician Service Image */}
          <div className="w-full h-full relative overflow-hidden">
            <img 
              src={posterImage} 
              alt="Professional AC technician servicing split air conditioner unit"
              className="w-full h-full max-w-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out block"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            {/* Soft dark vignette gradient overlay for text readability and cinematic color pop */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/20 z-10 pointer-events-none" />
          </div>

          {/* West Bengal / Barrackpore Signboard Replica (Overlaying bottom left/center) */}
          <div className="absolute bottom-3 left-3 z-30 flex flex-col gap-1 max-w-[170px] sm:max-w-[200px]">
            <div className="bg-[#ffd700] text-slate-900 border-2 border-slate-900 rounded px-3 py-1 text-center shadow-lg transform -rotate-1 relative font-sans">
              <div className="absolute -top-1 left-1 w-1 h-1 bg-slate-900 rounded-full" />
              <div className="absolute -top-1 right-1 w-1 h-1 bg-slate-900 rounded-full" />
              <div className="text-[10px] sm:text-xs font-semibold leading-none text-slate-800 tracking-tight">ব্যারাকপুর</div>
              <div className="text-[13px] sm:text-base font-black tracking-wider leading-none mt-1 sm:mt-1.5 border-t border-slate-900/30 pt-0.5 sm:pt-1">BARRACKPORE</div>
            </div>
          </div>

          {/* AC Technician Badge (Overlaying top right) */}
          <div className="absolute top-3 right-3 bg-[#0f4c81]/95 text-white py-1.5 px-3 rounded-lg shadow-md border border-cyan-400/40 backdrop-blur-md flex items-center gap-1.5 z-30">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
            <span className="text-[9px] font-mono font-black tracking-widest uppercase text-white">12 YEARS SERVICE EXPERIENCE</span>
          </div>
        </div>

        {/* Proudly Serving Badge */}
        <div className="bg-[#0f4c81] text-white p-3 rounded-xl border-l-4 border-[#ff9f1c] shadow-md mb-4 flex items-center gap-3 z-10">
          <div className="bg-[#ff9f1c]/20 p-1.5 rounded-lg text-[#ff9f1c]">
            <MapPin className="w-5 h-5 text-[#ff9f1c]" />
          </div>
          <div>
            <h5 className="font-display font-black text-xs uppercase tracking-wider text-[#00f0ff]">PROUDLY SERVING BARRACKPORE</h5>
            <p className="text-[10px] sm:text-xs text-slate-200 font-medium">Your comfort is our top priority! <Heart className="w-3 h-3 inline fill-red-500 text-red-500 ml-0.5" /></p>
          </div>
        </div>


        {/* Footer Deep Blue Bar */}
        <div className="bg-[#0f4c81] text-white p-3 sm:p-3.5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-2.5 border-b-4 border-[#00f0ff] shadow-md z-10">
          <a 
            href={`tel:${businessDetails.phoneFormatted}`}
            className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors"
          >
            <div className="bg-[#ff9f1c] text-slate-900 p-1.5 rounded-lg shadow-xs">
              <Phone className="w-3.5 h-3.5 fill-current" />
            </div>
            <div className="text-left">
              <span className="block text-[8px] text-slate-300 font-mono leading-none">CALL US ON-SITE</span>
              <span className="block text-xs sm:text-sm font-mono font-black text-[#ff9f1c] leading-tight tracking-tight mt-0.5">
                {businessDetails.phone}
              </span>
            </div>
          </a>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[9px] sm:text-xs font-bold justify-center border-t sm:border-t-0 sm:border-l border-white/10 pt-1.5 sm:pt-0 sm:pl-3 w-full sm:w-auto">
            <div className="flex items-center gap-1 text-teal-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Trusted Service</span>
            </div>
            <div className="flex items-center gap-1 text-[#ff9f1c]">
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>100% Satisfaction</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
