/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { X, Calendar, Clock, Tag } from "lucide-react";
import { BlogPost } from "../types";

interface FullBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

export default function FullBlogModal({ isOpen, onClose, post }: FullBlogModalProps) {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden" id="blog-modal-outer">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 flex flex-col max-h-[85vh] animate-zoom-in">
        
        {/* Banner Image */}
        <div className="relative h-48 md:h-64 overflow-hidden shrink-0">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent" />
          
          {/* Tag Category */}
          <span className="absolute bottom-4 left-6 rounded-full bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-950 shadow-md">
            {post.category}
          </span>

          {/* Close button inside header banner */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 text-white hover:bg-black/60 p-1.5 rounded-full backdrop-blur-sm transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Layout Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* Article headers info */}
          <div className="space-y-3">
            <h3 className="font-sans text-xl md:text-2xl font-black text-neutral-900 leading-tight">
              {post.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {post.publishDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Author info box */}
          <div className="flex items-center space-x-3 bg-neutral-50 px-4 py-3 rounded-xl border border-neutral-150">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              referrerPolicy="no-referrer"
              className="h-10 w-10 rounded-full object-cover shrink-0 border border-neutral-200"
            />
            <div>
              <span className="font-sans text-xs font-extrabold text-neutral-900 block leading-tight">
                {post.author.name}
              </span>
              <span className="font-sans text-[10px] text-neutral-400">
                {post.author.role} • OUTFITBAY CRATE Columnist
              </span>
            </div>
          </div>

          {/* Main paragraphs */}
          <div className="space-y-4 font-sans text-sm text-neutral-600 leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="indent-2 md:indent-4">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Article Footer branding disclaimer */}
          <div className="border-t border-neutral-100 pt-6 flex items-center justify-between text-xs text-neutral-400">
            <span>Published on Delhi fashion desk.</span>
            <span className="font-mono text-[9px] tracking-widest text-neutral-300 uppercase font-semibold">
              Outfitbay Crate
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
