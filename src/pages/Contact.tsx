/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { FormEvent } from "react";
import { useSEO } from "../hooks/useSEO";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Sparkles, Inbox, Clock, CheckCircle } from "lucide-react";
import { ContactSubmission } from "../types";

export default function Contact() {
  useSEO(
    "Contact Us | Delhi Office & Customer Care | Outfitbay Crate",
    "Get in touch with the Outfitbay Crate wardrobe desk. Reach Delhi designers, ask about orders, sizing consultations, or delivery pipelines."
  );
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submissions, setSubmissions] = React.useState<ContactSubmission[]>([]);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [lastSubId, setLastSubId] = React.useState("");

  // Load submissions from localStorage on mount
  React.useEffect(() => {
    const saved = localStorage.getItem("outfitbay_contact_submissions");
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        // Fallback
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert("All fields are required. Please check your message inputs.");
      return;
    }

    const newSub: ContactSubmission = {
      id: "MSG-" + Math.floor(1000 + Math.random() * 9000),
      fullName: fullName.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toLocaleTimeString(),
    };

    const updated = [newSub, ...submissions];
    setSubmissions(updated);
    localStorage.setItem("outfitbay_contact_submissions", JSON.stringify(updated));

    setLastSubId(newSub.id);
    setIsSuccess(true);
    
    // Clear inputs
    setFullName("");
    setEmail("");
    setSubject("");
    setMessage("");

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const handleClearSubmissionLogs = () => {
    setSubmissions([]);
    localStorage.removeItem("outfitbay_contact_submissions");
  };

  return (
    <div className="space-y-16 pb-20 px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in" id="contact-us-page">
      
      {/* 1. HEADER HERO BLOCK */}
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-4">
        <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400 font-semibold">Delhi Fashion Desk</span>
        <h1 className="font-sans text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
          Let’s Start a Conversation
        </h1>
        <p className="font-sans text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
          Have queries about standard fittings, custom cotton order quotes, or delivery schedules? Reach out to our New Delhi office directly.
        </p>
      </div>

      {/* 2. GRID DETAILS + INTERACTIVE CONSOLE FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-details-grid">
        
        {/* Left Column: Direct Markers & Information details */}
        <div className="lg:col-span-5 space-y-8 bg-neutral-950 text-white rounded-2xl p-8 border border-neutral-900 shadow-xl">
          
          <div className="space-y-2">
            <h3 className="font-sans text-lg font-extrabold tracking-tight">
              Contact Information
            </h3>
            <p className="text-xs text-neutral-400 leading-normal max-w-xs">
              We operate standard Delhi studio hours from 10:00 AM to 6:00 PM IST, Monday through Saturday.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-neutral-400 block uppercase tracking-wide">Studio Location</span>
                <p className="font-sans text-sm font-semibold max-w-xs text-neutral-200">
                  45 Fashion Avenue, New Delhi, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-neutral-400 block uppercase tracking-wide">Customer Support Phone</span>
                <p className="font-sans text-sm font-semibold text-neutral-200">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-neutral-400 block uppercase tracking-wide">Direct Email Core</span>
                <p className="font-sans text-sm font-semibold text-neutral-200 truncate block">
                  hello@urbanstitchco.com
                </p>
              </div>
            </div>

          </div>

          {/* Social icons row */}
          <div className="pt-6 border-t border-neutral-900 space-y-3">
            <span className="text-[10px] font-bold text-neutral-500 block uppercase tracking-wide">Keep connected</span>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://instagram.com/urbanstitchco" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center space-x-2 text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4 text-neutral-500" />
                <span>Instagram: @urbanstitchco</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center space-x-2 text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4 text-neutral-500" />
                <span>Facebook: Urban S</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-150 p-6 md:p-8 shadow-xs" id="contact-form-card">
          
          <h3 className="font-sans text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-3 block mb-6">
            Send us a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5" id="contact-form-element">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Sarah Mitchell"
                  className="w-full border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm focus:border-neutral-950 outline-hidden"
                  id="contact-fullname"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. sarah@example.com"
                  className="w-full border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm focus:border-neutral-950 outline-hidden"
                  id="contact-email"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Subject</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Product custom sizing quote, shipping, returns..."
                className="w-full border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm focus:border-neutral-950 outline-hidden"
                id="contact-subject"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Message Description</label>
              <textarea
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your garment questions or custom order details here..."
                className="w-full border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm focus:border-neutral-950 outline-hidden resize-none"
                id="contact-message"
              />
            </div>

            {isSuccess && (
              <div 
                className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 text-xs font-medium space-y-1.5 flex flex-col items-start animate-slide-up"
                id="contact-success-banner"
              >
                <div className="flex items-center space-x-1.5 font-bold">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Message Received!</span>
                </div>
                <p className="text-emerald-700">
                  Thank you. Your message was successfully stored locally and linked under Ticket ID: <span className="font-bold">{lastSubId}</span>. We'll consult Delhi inventory files immediately.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-neutral-950 hover:bg-neutral-900 text-white rounded-xl py-4 text-sm font-semibold flex items-center justify-center space-x-2 shadow-md transition-all active:scale-97 cursor-pointer"
              id="contact-submit-btn"
            >
              <Send className="h-4 w-4 shrink-0" />
              <span>Deliver Message Ticket</span>
            </button>

          </form>
          
        </div>
      </div>

      {/* 3. SIMULATED LIVE INBOX LOGS FOR CONSOLE FEEDBACK (VERY CONVENIENT FOR TRIAL) */}
      {submissions.length > 0 && (
        <section className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-150 space-y-6" id="client-sandbox-inbox">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-neutral-200 pb-4">
            <div className="flex items-center space-x-2">
              <Inbox className="h-5 w-5 text-neutral-800" />
              <h4 className="font-sans text-sm font-extrabold text-neutral-900">
                Your Sandboxed Messages History ({submissions.length})
              </h4>
            </div>
            <button
              onClick={handleClearSubmissionLogs}
              className="font-mono text-[9px] font-bold text-neutral-405 tracking-wide bg-neutral-202 hover:bg-neutral-205 border border-neutral-300 rounded px-2.5 py-1.5 transition-colors cursor-pointer"
            >
              Clear Local Inbox Log
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="feedback-ticket-list">
            {submissions.map((sub, index) => (
              <div 
                key={sub.id} 
                className="bg-white border border-neutral-150 p-5 rounded-xl shadow-3xs hover:shadow-xs transition-shadow space-y-4"
                id={`ticket-log-${sub.id}`}
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="space-y-0.5">
                    <span className="font-sans text-xs font-bold text-neutral-900 block leading-tight">{sub.fullName}</span>
                    <span className="text-[10px] text-neutral-400 block">{sub.email}</span>
                  </div>
                  <span className="bg-neutral-900 text-white font-mono text-[9px] px-2 py-0.5 rounded-full font-bold">
                    {sub.id}
                  </span>
                </div>

                <div className="space-y-1 text-xs">
                  <span className="font-bold text-neutral-600 block">Subject: {sub.subject}</span>
                  <p className="text-neutral-500 italic bg-neutral-50 p-2.5 rounded border border-neutral-100 max-h-24 overflow-y-auto leading-relaxed">
                    "{sub.message}"
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Sent at {sub.createdAt}
                  </span>
                  <span className="text-emerald-600 font-extrabold">● Active Demo Post</span>
                </div>

              </div>
            ))}
          </div>

        </section>
      )}

    </div>
  );
}
