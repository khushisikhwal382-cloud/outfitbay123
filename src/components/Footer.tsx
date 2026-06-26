/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

interface FooterProps {
  setActiveTab?: (tab: string) => void;
}

export default function Footer({ }: FooterProps) {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 4500);
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-900" id="main-footer">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1 - Brand Identity & Mission statement */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-neutral-950 font-mono text-lg font-black tracking-tighter">
                O
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-lg font-extrabold tracking-tight text-white leading-none">
                  Outfitbay
                </span>
                <span className="font-mono text-[8px] tracking-widest text-neutral-400 uppercase font-semibold">
                  CRATE
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              We combine modern trend-forward designs with certified premium fabrics to deliver outfits for every lifestyle, curated for modern confidence.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-xs text-neutral-400">
                <MapPin className="h-4 w-4 text-neutral-500 shrink-0" />
                <span>45 Fashion Avenue, New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-neutral-400">
                <Phone className="h-4 w-4 text-neutral-500 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-neutral-400">
                <Mail className="h-4 w-4 text-neutral-500 shrink-0" />
                <span>hello@urbanstitchco.com</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Navigation shortcuts */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white">
              Sitemap
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <Link 
                to="/" 
                className="text-left text-neutral-400 hover:text-white transition-colors"
              >
                Home Page
              </Link>
              <Link 
                to="/services" 
                className="text-left text-neutral-400 hover:text-white transition-colors"
              >
                Products & Services
              </Link>
              <Link 
                to="/blog" 
                className="text-left text-neutral-400 hover:text-white transition-colors"
              >
                Blog & Fashion Guides
              </Link>
              <Link 
                to="/about" 
                className="text-left text-neutral-400 hover:text-white transition-colors"
              >
                About Us & Story
              </Link>
              <Link 
                to="/contact" 
                className="text-left text-neutral-400 hover:text-white transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Column 3 - Branding / Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white">
              Social Handles
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a 
                href="https://instagram.com/urbanstitchco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Instagram: @urbanstitchco
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Facebook: Urban S
              </a>
              <span className="text-xs text-neutral-500 mt-2 block">
                Brand ID: outfitbay_crate
              </span>
            </div>
          </div>

          {/* Column 4 - Premium Newsletter subscribe */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white">
              Stay in Season
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Subscribe to unlock early drops, limited edition capsules, and fashion design stories. No spam.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2" id="newsletter-form">
              <div className="flex overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 focus-within:border-neutral-750 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-transparent px-4 py-3 font-sans text-xs text-white placeholder-neutral-500 outline-hidden"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-white px-4 text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {error && (
                <p className="mt-1 font-sans text-[11px] text-red-500" id="newsletter-err">
                  {error}
                </p>
              )}

              {subscribed && (
                <div 
                  className="mt-3 flex items-center space-x-2 rounded-md bg-emerald-950/40 border border-emerald-900 px-3 py-2 text-xs text-emerald-400 animate-slide-up"
                  id="newsletter-success-alert"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Welcome to Outfitbay! Check your inbox for 10% off.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Footer Base */}
        <div className="mt-12 border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            <span>© 2026 Outfitbay Crate. Premium Apparels for Confidence. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <span>Premium Fabric</span>
            <span>Trend-Based Designs</span>
            <span>Fast Delivery</span>
            <span>Easy Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
