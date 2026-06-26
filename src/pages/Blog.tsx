/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useSEO } from "../hooks/useSEO";
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react";
import { BlogPost } from "../types";

interface BlogProps {
  blogs: BlogPost[];
  onOpenBlog: (post: BlogPost) => void;
}

export default function Blog({ blogs, onOpenBlog }: BlogProps) {
  useSEO(
    "Fashion Editorial, Trends & Style Advice | Outfitbay Crate Blog",
    "Read exclusive Delhi fashion design columns, textile care guidelines, and lookbook edits. Curated for your everyday confidence style."
  );
  const [selectedSubTab, setSelectedSubTab] = React.useState("All");

  const subTabs = ["All", "Trends", "Guides", "Sustainability", "Styling"];

  const filteredBlogs = blogs.filter((b) => {
    return selectedSubTab === "All" || b.category === selectedSubTab;
  });

  return (
    <div className="space-y-12 pb-20 px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in" id="blog-page-view">
      
      {/* Blog Titles Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-4">
        <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400">Outfitbay Columns</span>
        <h1 className="font-sans text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
          Editorial & Style Advice
        </h1>
        <p className="font-sans text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
          Unlock design breakdowns, capsule guides, textile instructions, and modern trends crafted weekly by our editorial team in New Delhi.
        </p>
      </div>

      {/* Categories filters */}
      <div className="flex flex-wrap gap-2 justify-center border-b border-neutral-100 pb-5" id="blog-category-filters">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedSubTab(tab)}
            className={`cursor-pointer px-4 py-1.5 text-xs font-bold rounded-full border transition-all ${
              selectedSubTab === tab
                ? "bg-neutral-900 border-neutral-900 text-white"
                : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50"
            }`}
            id={`blog-tab-${tab.toLowerCase()}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Blogs list grid catalog */}
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-10 text-neutral-400">
          No articles posted in this category folder.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="blogs-grid-list">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              onClick={() => onOpenBlog(post)}
              className="group cursor-pointer flex flex-col md:flex-row bg-white rounded-2xl border border-neutral-150 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300"
              id={`blog-card-${post.id}`}
            >
              
              {/* Thumbnail representation */}
              <div className="relative w-full md:w-44 md:max-h-full aspect-video md:aspect-auto shrink-0 bg-neutral-100 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                />
                
                {/* Meta classification badges */}
                <span className="absolute top-3 left-3 rounded-md bg-neutral-950 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Title & summaries */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[10px] text-neutral-400 font-mono uppercase tracking-wide">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-sans text-base font-extrabold text-neutral-900 leading-snug group-hover:text-neutral-700 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Author profile and "Read" call-to-action */}
                <div className="pt-4 border-t border-neutral-50 flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      referrerPolicy="no-referrer"
                      className="h-7 w-7 rounded-full object-cover border border-neutral-200"
                    />
                    <span className="font-sans text-[11px] font-bold text-neutral-800">
                      {post.author.name}
                    </span>
                  </div>

                  <span className="inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-900 group-hover:underline">
                    <span>Read Guide</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>

            </article>
          ))}
        </div>
      )}

      {/* Bottom Editorial Callout card */}
      <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-150 flex flex-col md:flex-row items-center justify-between gap-6" id="editorial-callout-banner">
        <div className="space-y-1 max-w-xl text-center md:text-left">
          <span className="font-sans text-sm font-extrabold text-neutral-900 block">Want to submit an apparel essay?</span>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Members of the Outfitbay crate collective can publish textile feedback or fashion history essays in cooperation with local designers. Let your voice explore confidence metrics.
          </p>
        </div>
        <button
          onClick={() => alert("Please register as an author via the Contact form or email us at hello@urbanstitchco.com to join the crew!")}
          className="cursor-pointer bg-neutral-950 text-white rounded-lg px-4.5 py-2.5 text-xs font-semibold hover:bg-neutral-900 transition-all active:scale-95 shrink-0"
        >
          Apply as Designer columnist
        </button>
      </div>

    </div>
  );
}
