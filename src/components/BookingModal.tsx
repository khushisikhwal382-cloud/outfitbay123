/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { FormEvent } from "react";
import { X, Calendar, Sparkles, CheckCircle, Clock, ShieldAlert } from "lucide-react";
import { Service } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: Service | null;
  allServices: Service[];
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedService,
  allServices,
}: BookingModalProps) {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [serviceType, setServiceType] = React.useState("");
  const [prefDate, setPrefDate] = React.useState("");
  const [prefTime, setPrefTime] = React.useState("11:00");
  const [notes, setNotes] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [ticketId, setTicketId] = React.useState("");

  // Sync serviceType when model opens or changes
  React.useEffect(() => {
    if (selectedService) {
      setServiceType(selectedService.title);
    } else if (allServices.length > 0) {
      setServiceType(allServices[0].title);
    }
  }, [selectedService, allServices]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !serviceType || !prefDate) {
      alert("Please solve all required form fields.");
      return;
    }
    const id = "OB-TSK-" + Math.floor(1000 + Math.random() * 9000);
    setTicketId(id);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName("");
    setEmail("");
    setPrefDate("");
    setPrefTime("11:00");
    setNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden" id="booking-modal-outer">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity" 
        onClick={handleResetAndClose} 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 flex flex-col max-h-[90vh] animate-zoom-in">
        
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50 shrink-0">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-neutral-900" />
            <h3 className="font-sans text-md font-extrabold text-neutral-900">
              {isSubmitted ? "Consultation Booked" : "Schedule Consultation"}
            </h3>
          </div>
          <button 
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="Close form"
          >
            <X className="h-5 w-5 text-neutral-600" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Success Receipt Screen */
            <div className="text-center py-6 space-y-6 animate-fade-in" id="booking-success-box">
              <div className="h-14 w-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8" />
              </div>
              
              <div className="space-y-1.5">
                <h4 className="font-sans text-lg font-black text-neutral-950">Appointment Secured</h4>
                <p className="font-mono text-xs font-bold text-neutral-400">Confirmation Ticket: {ticketId}</p>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed">
                  Congratulations {fullName}! Your request for <span className="font-bold text-neutral-800">{serviceType}</span> is officially locked. Our designer lead from New Delhi will email you setup criteria soon.
                </p>
              </div>

              {/* Styled boarding pass ticket details */}
              <div className="bg-neutral-50 border border-neutral-150 rounded-xl p-4 text-left divide-y divide-neutral-200 space-y-3">
                <div className="pb-2 grid grid-cols-2 text-xs">
                  <div>
                    <span className="text-neutral-400 block uppercase tracking-wide font-semibold text-[10px]">Client</span>
                    <span className="text-neutral-800 font-bold">{fullName}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block uppercase tracking-wide font-semibold text-[10px]">Email</span>
                    <span className="text-neutral-800 truncate block">{email}</span>
                  </div>
                </div>

                <div className="pt-2.5 grid grid-cols-2 text-xs">
                  <div>
                    <span className="text-neutral-400 block uppercase tracking-wide font-semibold text-[10px]">Date</span>
                    <span className="text-neutral-800 font-bold flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-neutral-500" />
                      {prefDate}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block uppercase tracking-wide font-semibold text-[10px]">Time</span>
                    <span className="text-neutral-800 font-bold flex items-center gap-1">
                      <Clock className="h-3 w-3 text-neutral-500" />
                      {prefTime} IST
                    </span>
                  </div>
                </div>

                {notes.trim() && (
                  <div className="pt-2.5 text-xs">
                    <span className="text-neutral-400 block uppercase tracking-wide font-semibold text-[10px]">Design Notes</span>
                    <p className="text-neutral-700 italic mt-0.5 max-w-full truncate">{notes}</p>
                  </div>
                )}
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full bg-neutral-950 text-white rounded-xl py-3 text-sm font-semibold hover:bg-neutral-900 transition-colors active:scale-95 cursor-pointer"
              >
                Close Ticket
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4" id="booking-inputs-form">
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Service Requirement</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full border border-neutral-200 bg-white rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden cursor-pointer"
                  id="booking-service-select"
                >
                  {allServices.map((srv) => (
                    <option key={srv.id} value={srv.title}>{srv.title} — {srv.description}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Sarah Mitchell"
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden"
                    id="booking-fullname"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden"
                    id="booking-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Preferred Consultation Date</label>
                  <input
                    type="date"
                    required
                    value={prefDate}
                    onChange={(e) => setPrefDate(e.target.value)}
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden cursor-pointer"
                    id="booking-date"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Preferred Time Slot (IST)</label>
                  <select
                    value={prefTime}
                    onChange={(e) => setPrefTime(e.target.value)}
                    className="w-full border border-neutral-200 bg-white rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden cursor-pointer"
                    id="booking-time"
                  >
                    <option value="10:00">10:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:30">02:30 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:30">05:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Measurements & Sizing Notes</label>
                  <span className="text-[10px] text-neutral-400">Optional</span>
                </div>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your brand preferences, favorite fabrics, or sizing details (e.g. chest width, measurements, color palettes you like)..."
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden resize-none"
                  id="booking-notes"
                />
              </div>

              <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-150 flex items-start gap-2 text-[11px] text-neutral-500">
                <ShieldAlert className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>
                  Consultations are completely virtual and free of hidden costs. Styling fees can be redeemed directly against future product checkouts.
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-950 hover:bg-neutral-900 text-white rounded-xl py-3.5 text-sm font-semibold flex items-center justify-center space-x-1 shadow-md shadow-neutral-900/10 transition-all cursor-pointer"
                id="booking-submit-btn"
              >
                <span>Confirm Reservation Ticket</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
