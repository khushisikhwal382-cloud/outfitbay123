/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useSEO } from "../hooks/useSEO";
import { Award, Zap, Heart, UserCheck, ShieldCheck, HelpCircle } from "lucide-react";

export default function Aboutus() {
  useSEO(
    "Our Story | About Outfitbay Crate Premium Clothing Delhi",
    "Learn about the craft and story behind Outfitbay Crate. Ethically sourced fabrics, Delhi's urban design sheets, and sustainable streetwear."
  );
  const valuesData = [
    {
      title: "Quality",
      desc: "Double-needle loop weavings, high-density cotton fibers, and certified hardware. We inspect garments piece-by-piece because durability matters.",
      icon: ShieldCheck,
      color: "bg-neutral-900 border-neutral-950 text-white",
    },
    {
      title: "Creativity",
      desc: "Drafted straight from urban design sheets. We seek clean silhouettes that integrate style accents without cluttering or larping with tech noise.",
      icon: Zap,
      color: "bg-neutral-900 border-neutral-950 text-white",
    },
    {
      title: "Sustainability",
      desc: "Committed to long-fibered organic yarns, low-impact botanical dyes, and zero-plastic shipping crates inside Delhi logistics pipelines.",
      icon: Heart,
      color: "bg-neutral-900 border-neutral-950 text-white",
    },
    {
      title: "Customer First",
      desc: "Comprehensive size fittings, direct postal shipping channels, and a 14-day hassle-free return architecture mapped around client satisfaction.",
      icon: UserCheck,
      color: "bg-neutral-900 border-neutral-950 text-white",
    },
  ];

  return (
    <div className="space-y-20 pb-20 px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in" id="about-us-view">
      
      {/* 1. EDITORIAL ROW: TEAM PHOTO + OUR STORY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 items-center" id="story-row">
        
        {/* Story Illustration column */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-y-6 -left-4 -right-4 bg-neutral-100 rounded-3xl -z-10 transition-transform group-hover:scale-102" />
          <img
            src="/src/assets/images/womens_collection_1781759853008.jpg"
            alt="Tailoring design office in Delhi"
            referrerPolicy="no-referrer"
            className="w-full aspect-3/4 object-cover rounded-2xl shadow-lg border border-neutral-250 transition-all duration-300 transform group-hover:rotate-1"
          />
          <div className="absolute bottom-4 right-4 bg-neutral-950 text-white p-4 rounded-xl shadow-md max-w-[200px] border border-neutral-750">
            <span className="font-sans text-xs font-bold block">Delhi Sourcing Outlet</span>
            <p className="text-[10px] text-neutral-400 mt-1">Ethically manufactured and distributed from the heart of Delhi, India.</p>
          </div>
        </div>

        {/* Our story information text column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400">Our Identity</span>
            <h1 className="font-sans text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              Our Story
            </h1>
          </div>

          <p className="font-sans text-sm md:text-base text-neutral-600 leading-relaxed indent-4">
            <span className="font-sans text-base font-bold text-neutral-950 block mb-2 font-mono">Urban Stitch Co. is Outfitbay Crate</span>
            <span className="font-bold text-neutral-950">Urban Stitch Co.</span> was created in Delhi to make stylish clothing accessible and comfortable for everyone. We combine modern urban fashion with quality materials to deliver outfits for every lifestyle. By pairing premium cotton wefts with contemporary layouts, we eliminate excessive margins to return value directly to you.
          </p>

          <p className="font-sans text-sm text-neutral-500 leading-relaxed">
            As we matured, we launched <span className="font-bold text-neutral-800 text-xs font-mono uppercase bg-neutral-105 px-1.5 py-0.5 rounded">Outfitbay Crate</span>. This division encapsulates ready-to-wear apparel, seasonal streetwear, and customized consultancies with master weavers. True luxury is not reserved for select runaways. It fits into your commute, coffee dates, and workspace seamlessly.
          </p>

          {/* Mission and Vision side cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            <div className="bg-neutral-50 border border-neutral-150 rounded-xl p-5 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">Our Mission</span>
              <h3 className="font-sans text-base font-extrabold text-neutral-900">
                Inspire Everyday Confidence
              </h3>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                To provide fashion that inspires confidence. We design clothes to hold structural postures so you feel self-assured everywhere you step.
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-150 rounded-xl p-5 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">Our Vision</span>
              <h3 className="font-sans text-base font-extrabold text-neutral-900">
                A Trusted Household Brand
              </h3>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                To become a trusted clothing brand known for style and customer satisfaction, expanding our ethical factory footprints worldwide.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* 2. CORE VALUES GRID */}
      <section className="space-y-12 border-t border-neutral-150 pt-16" id="core-values-section">
        
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400">The Standards We Maintain</span>
          <h2 className="font-sans text-3xl font-black text-neutral-900 tracking-tight">
            Our Core Values
          </h2>
          <div className="h-1 w-12 bg-neutral-900 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" id="values-grid">
          {valuesData.map((v, index) => {
            const Icon = v.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-neutral-150 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                id={`value-card-${v.title.toLowerCase()}`}
              >
                <div className="space-y-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-2xs ${v.color}`}>
                    <Icon className="h-5 w-5 shrink-0" />
                  </div>
                  <h3 className="font-sans text-base font-bold text-neutral-900">
                    {index + 1}. {v.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-neutral-300 font-bold uppercase text-right tracking-widest">
                  OUTFITBAY MAPPED
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. BRAND CERTIFICATE GRID (NO TECH LARPING) */}
      <section className="bg-neutral-950 text-white rounded-2xl p-8 lg:p-12 shadow-xl" id="brand-stat-highlights">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-900">
          
          <div className="pb-6 md:pb-0 pt-6 md:pt-0 space-y-1">
            <span className="font-mono text-4xl font-extrabold text-[#d4af37]">100%</span>
            <span className="text-sm font-bold block text-white">Long-Staple Cotton</span>
            <p className="text-neutral-400 text-xs max-w-[200px] mx-auto leading-normal">Premium natural fabrics holding shapes, colors, and loops beautifully.</p>
          </div>

          <div className="pb-6 md:pb-0 pt-6 md:pt-0 space-y-1">
            <span className="font-mono text-4xl font-extrabold text-[#d4af37]">₹999+</span>
            <span className="text-sm font-bold block text-white">Free standard delivery</span>
            <p className="text-neutral-400 text-xs max-w-[200px] mx-auto leading-normal">Fast, secure door step dispatch coordinates throughout regions.</p>
          </div>

          <div className="pb-6 md:pb-0 pt-6 md:pt-0 space-y-1">
            <span className="font-mono text-4xl font-extrabold text-[#d4af37]">14 Days</span>
            <span className="text-sm font-bold block text-white">Easy exchanges</span>
            <p className="text-neutral-400 text-xs max-w-[200px] mx-auto leading-normal">Self-serve return envelopes with home pickups without questions.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
