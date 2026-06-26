/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { ArrowRight, Star, Layers, Scissors, Truck, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, PenTool } from "lucide-react";
import { Review } from "../types";

interface HomeProps {
  setActiveTab?: (tab: string) => void;
  reviews: Review[];
  setReviewFormOpen: (open: boolean) => void;
}

export default function Home({ setActiveTab, reviews, setReviewFormOpen }: HomeProps) {
  const navigate = useNavigate();
  const [activeReviewIdx, React_useState] = React.useState(0);
  const setActiveReviewIdx = React_useState;

  useSEO(
    "Outfitbay Crate | Premium Clothes & Fashion Consultations Delhi",
    "Discover Delhi's premium ready-to-wear clothing collection at Outfitbay Crate. High-density fabrics, modern streetwear, and expert design consultations."
  );

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Why choose us blocks
  const whyChooseUsData = [
    {
      title: "Premium Fabric",
      desc: "We ethically source top-tier, long-staple organic cottons, French Terries, and airy linen blends that hold structured shape wash after wash.",
      icon: Layers,
    },
    {
      title: "Trend-Based Designs",
      desc: "Our active Delhi outfit desk drafts bespoke pattern files weekly, blending contemporary silhouettes with relaxed confidence.",
      icon: Sparkles,
    },
    {
      title: "Fast Delivery",
      desc: "Equipped with automated urban postal handovers to guarantee secure door-to-door transit schedules across all regions.",
      icon: Truck,
    },
    {
      title: "Easy Returns",
      desc: "Confidence comes hassle-free with our generous 14-day exchange and pickup frames. Customer satisfactions remains paramount.",
      icon: CheckCircle2,
    },
  ];

  const categories = [
    {
      name: "Men’s Wear",
      tagline: "Tailored structures & everyday neutrals",
      image: "/src/assets/images/mens_collection_1781759837786.jpg",
      id: "mens",
    },
    {
      name: "Women’s Wear",
      tagline: "Elegant utility blazer silhouettes",
      image: "/src/assets/images/womens_collection_1781759853008.jpg",
      id: "womens",
    },
    {
      name: "Streetwear",
      tagline: "Heavy French-Terry hoodies & joggers",
      image: "/src/assets/images/streetwear_style_1781759868082.jpg",
      id: "streetwear",
    },
    {
      name: "Accessories",
      tagline: "Minimalist shades, bags & unstructured caps",
      image: "https://picsum.photos/seed/accsgrid/600/600",
      id: "acc",
    },
  ];

  return (
    <div className="space-y-20 pb-20 animate-fade-in" id="home-view-container">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-neutral-900 text-white rounded-3xl mx-6 lg:mx-8 my-6" id="hero-section">
        {/* Absolute Background image */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/fashion_hero_banner_1781759823362.jpg"
            alt="Outfitbay models photoshoot"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center opacity-45 grayscale-15 brightness-90 transition-transform duration-10000 hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-start space-y-8 max-w-2xl">
          
          {/* Accent small tag */}
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            New Drop Available
          </span>

          {/* Heading */}
          <h1 className="font-sans text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            Modern Clothing for <br />
            <span className="text-neutral-100 underline decoration-neutral-400 decoration-wavy py-1 block">Everyday Confidence</span>
          </h1>

          {/* Description */}
          <p className="font-sans text-lg text-neutral-300 leading-relaxed max-w-lg">
            Discover trend-forward fashion designed for comfort, quality, and self-expression. Elevate your everyday stance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              id="hero-shop-collection-btn"
              onClick={() => navigate("/services")}
              className="group cursor-pointer flex items-center space-x-2 bg-white text-neutral-950 font-sans font-bold px-6 py-3.5 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Shop Collection</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              id="hero-explore-services-btn"
              onClick={() => navigate("/services")} // Serves under Products & Services
              className="cursor-pointer bg-neutral-800/80 hover:bg-neutral-800 text-white font-sans font-semibold px-6 py-3.5 rounded-xl border border-neutral-700 backdrop-blur-xs transition-colors"
            >
              Explore Services
            </button>
          </div>

        </div>
      </section>

      {/* 2. FEATURED CATEGORIES SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8" id="featured-categories">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400">Curated Capsules</span>
          <h2 className="font-sans text-3xl font-black text-neutral-900 tracking-tight">
            Featured Categories
          </h2>
          <div className="h-1 w-12 bg-neutral-900 mx-auto rounded-full" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => navigate("/services")}
              className="group cursor-pointer relative overflow-hidden rounded-2xl border border-neutral-150 bg-white shadow-3xs transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-50">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-sans text-lg font-bold tracking-tight">
                  {cat.name}
                </h3>
                <p className="mt-1 font-sans text-xs text-neutral-300 opacity-90 leading-tight">
                  {cat.tagline}
                </p>
                <span className="mt-3 inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-200 group-hover:text-white">
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="bg-neutral-50 py-16 border-y border-neutral-100" id="why-choose-us">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto space-y-3 pb-12">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400">Our Standards</span>
            <h2 className="font-sans text-3xl font-black text-neutral-900 tracking-tight">
              Why Choose Us
            </h2>
            <div className="h-1 w-12 bg-neutral-900 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUsData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 border border-neutral-150 shadow-2xs hover:shadow-sm transition-shadow flex flex-col items-start space-y-4"
                  id={`why-card-${idx}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-xs">
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-neutral-900">
                      ✔ {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs text-neutral-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. CUSTOMER REVIEW SECTION */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8" id="testimonials">
        <div className="bg-white rounded-3xl border border-neutral-150 p-8 md:p-12 shadow-xs relative overflow-hidden">
          
          {/* Subtle Quotation mark background */}
          <div className="absolute -top-6 -left-6 text-neutral-100 font-serif text-[180px] leading-none select-none pointer-events-none">
            “
          </div>

          <div className="relative flex flex-col items-center text-center space-y-6">
            
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400">Community Verdict</span>

            {/* Current Review layout */}
            <div className="space-y-4 min-h-[140px] flex flex-col justify-center animate-fade-in" key={activeReviewIdx}>
              <div className="flex justify-center space-x-1">
                {Array.from({ length: reviews[activeReviewIdx]?.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-sans text-base md:text-lg italic text-neutral-800 leading-relaxed max-w-2xl font-medium">
                {reviews[activeReviewIdx]?.comment}
              </p>
              
              <div className="flex items-center justify-center space-x-3 pt-2">
                {reviews[activeReviewIdx]?.avatar && (
                  <img
                    src={reviews[activeReviewIdx].avatar}
                    alt={reviews[activeReviewIdx].name}
                    referrerPolicy="no-referrer"
                    className="h-10 w-10 rounded-full object-cover border border-neutral-200"
                  />
                )}
                <div className="text-left">
                  <span className="font-sans text-sm font-extrabold text-neutral-900 block leading-tight">
                    — {reviews[activeReviewIdx]?.name}
                  </span>
                  <span className="font-sans text-[10px] text-neutral-400 block uppercase tracking-wider font-semibold">
                    Verified Buyer • {reviews[activeReviewIdx]?.categoryPurchased}
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center justify-between w-full max-w-md pt-4">
              <button
                onClick={prevReview}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50 text-neutral-600 transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setReviewFormOpen(true)}
                className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 px-4 py-2.5 rounded-lg transition-transform hover:scale-102 cursor-pointer"
                id="testimonial-submit-trigger"
              >
                <PenTool className="h-3.5 w-3.5" />
                <span>Write a Review</span>
              </button>

              <button
                onClick={nextReview}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50 text-neutral-600 transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
