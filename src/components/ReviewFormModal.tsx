/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { FormEvent } from "react";
import { X, Star, ThumbsUp, CheckCircle } from "lucide-react";
import { Review } from "../types";

interface ReviewFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: Omit<Review, "id" | "date">) => void;
}

export default function ReviewFormModal({
  isOpen,
  onClose,
  onSubmitReview,
}: ReviewFormModalProps) {
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [comment, setComment] = React.useState("");
  const [category, setCategory] = React.useState("Streetwear");
  const [isSuccess, setIsSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      alert("Please provide your name and some feedback lines.");
      return;
    }

    onSubmitReview({
      name: name.trim(),
      rating,
      comment: comment.trim(),
      verifiedPurchase: true,
      categoryPurchased: category,
      avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 999999)}?auto=format&fit=crop&q=80&w=150`
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setName("");
      setRating(5);
      setComment("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden" id="review-modal-outer">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Card body */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 flex flex-col animate-zoom-in">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50 shrink-0">
          <h3 className="font-sans text-md font-extrabold text-neutral-900">
            Write a Review
          </h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-neutral-600" />
          </button>
        </div>

        {/* Form area */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4 animate-fade-in" id="review-success-panel">
              <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-base font-bold text-neutral-900 block">Thank You!</span>
                <p className="text-xs text-neutral-500">
                  Your verified review has been posted and added dynamically to the carousel. You power the community!
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Star selector */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Your Rating</span>
                <div className="flex space-x-1.5">
                  {[1, 2, 3, 4, 5].map((starIdx) => (
                    <button
                      key={starIdx}
                      type="button"
                      onClick={() => setRating(starIdx)}
                      className="p-1 cursor-pointer transition-transform active:scale-125"
                      aria-label={`Rate ${starIdx} stars`}
                    >
                      <Star 
                        className={`h-7 w-7 ${
                          starIdx <= rating 
                            ? "fill-amber-400 text-amber-400" 
                            : "text-neutral-200 hover:text-neutral-300"
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Your Profile Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Mitchell"
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden"
                  id="review-form-name"
                />
              </div>

              {/* Category */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Category Purchased</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-neutral-200 bg-white rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden cursor-pointer"
                  id="review-form-cat"
                >
                  <option value="Men's Wear">Men's Wear</option>
                  <option value="Women's Wear">Women's Wear</option>
                  <option value="Streetwear">Streetwear</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Custom Clothing">Custom Clothing</option>
                </select>
              </div>

              {/* Comment text */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wider">Review Comments</label>
                <textarea
                  rows={4}
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share details of your experience with fabrics, sizing, shipping speed, and styles of Outfitbay..."
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden resize-none"
                  id="review-comment-textarea"
                />
              </div>

              {/* Notice */}
              <div className="flex items-center space-x-1.5 text-[10px] text-neutral-400 bg-neutral-50 p-2.5 rounded-lg">
                <ThumbsUp className="h-3.5 w-3.5" />
                <span>Posted instantly in public sandbox feed.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-950 hover:bg-neutral-900 text-white rounded-xl py-3 text-sm font-semibold transition-all cursor-pointer"
                id="review-submit-action"
              >
                Publish Feedback
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
