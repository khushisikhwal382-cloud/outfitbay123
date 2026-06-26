/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard, Sparkles, CheckCircle } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, size: string, change: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = React.useState("");
  const [discountAmount, setDiscountAmount] = React.useState(0);
  const [promoSuccess, setPromoSuccess] = React.useState(false);
  const [promoError, setPromoError] = React.useState("");
  
  // Checkout states
  const [isCheckoutRequested, setIsCheckoutRequested] = React.useState(false);
  const [shippingName, setShippingName] = React.useState("");
  const [shippingPhone, setShippingPhone] = React.useState("");
  const [shippingAddress, setShippingAddress] = React.useState("");
  const [checkoutComplete, setCheckoutComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState("");

  if (!isOpen) return null;

  const originalTotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  
  const applyPromo = () => {
    const code = promoCode.toUpperCase().trim();
    if (code === "WELCOME10" || code === "OUTFITBAY10") {
      setDiscountAmount(Math.round(originalTotal * 0.10));
      setPromoSuccess(true);
      setPromoError("");
    } else if (code === "FREE500" && originalTotal >= 2000) {
      setDiscountAmount(500);
      setPromoSuccess(true);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try OUTFITBAY10 (10% Off)");
      setPromoSuccess(false);
    }
  };

  const finalTotal = Math.max(0, originalTotal - discountAmount);
  const deliveryCharges = originalTotal > 999 || originalTotal === 0 ? 0 : 99;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingName || !shippingPhone || !shippingAddress) {
      alert("Please fill in all delivery details");
      return;
    }
    const generatedId = "OB-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setCheckoutComplete(true);
  };

  const resetAll = () => {
    onClearCart();
    setPromoCode("");
    setDiscountAmount(0);
    setPromoSuccess(false);
    setIsCheckoutRequested(false);
    setCheckoutComplete(false);
    setShippingName("");
    setShippingPhone("");
    setShippingAddress("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-container">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-350"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full border-l border-neutral-100">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-neutral-950" />
              <h2 className="font-sans text-lg font-bold text-neutral-900">Your Basket</h2>
              <span className="bg-neutral-900 text-white text-xs font-mono px-2 py-0.5 rounded-full font-bold">
                {cart.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="h-5 w-5 text-neutral-600" />
            </button>
          </div>

          {/* Main content body */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {checkoutComplete ? (
              /* Success message screen */
              <div className="flex flex-col items-center justify-center text-center h-full py-12 space-y-6 animate-fade-in" id="checkout-success-pane">
                <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-xl font-black text-neutral-900">Order Confirmed!</h3>
                  <p className="text-sm font-semibold font-mono text-neutral-500">Receipt ID: {orderId}</p>
                  <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                    Thank you for shopping at Outfitbay, {shippingName}. Your premium attire is entering prep. We've sent updates to Gurgaon & Delhi hubs.
                  </p>
                </div>

                <div className="bg-neutral-50 p-4 rounded-xl w-full border border-neutral-150 text-left space-y-3">
                  <span className="font-sans text-xs font-bold text-neutral-800 block uppercase tracking-wider">Delivery Summary</span>
                  <div className="grid grid-cols-3 text-xs gap-y-1.5 text-neutral-600">
                    <span className="col-span-1 font-semibold text-neutral-400">Address:</span>
                    <span className="col-span-2 text-neutral-800 break-words">{shippingAddress}</span>
                    
                    <span className="col-span-1 font-semibold text-neutral-400">Total Paid:</span>
                    <span className="col-span-2 text-emerald-600 font-extrabold text-sm">₹{finalTotal + deliveryCharges}</span>

                    <span className="col-span-1 font-semibold text-neutral-400">ETA:</span>
                    <span className="col-span-2 text-neutral-800 font-medium">Fast Express Delivery (2-3 Business Days)</span>
                  </div>
                </div>

                <button
                  onClick={resetAll}
                  className="w-full bg-neutral-950 py-3.5 rounded-xl font-sans text-sm font-semibold text-white hover:bg-neutral-900 transition-colors shadow-lg shadow-neutral-900/10 active:scale-95 cursor-pointer"
                  id="checkout-reset-btn"
                >
                  Continue Shopping
                </button>
              </div>
            ) : isCheckoutRequested ? (
              /* Checkout Details Form */
              <div className="space-y-6 animate-fade-in" id="checkout-shipping-pane">
                <div className="border-b border-neutral-100 pb-3">
                  <h3 className="font-sans text-md font-bold text-neutral-900">Delivery Information</h3>
                  <p className="text-xs text-neutral-500">Provide shipping details for your Delhi checkout.</p>
                </div>

                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      required
                      value={shippingName}
                      onChange={(e) => setShippingName(e.target.value)}
                      placeholder="e.g. Sarah Mitchell"
                      className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden"
                      id="checkout-name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={shippingPhone}
                      onChange={(e) => setShippingPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden"
                      id="checkout-phone"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wide">Full Delivery Address</label>
                    <textarea
                      required
                      rows={3}
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      placeholder="Flat, building, block, Fashion Avenue, Delhi..."
                      className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:border-neutral-950 outline-hidden resize-none"
                      id="checkout-address"
                    />
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-150 space-y-2">
                    <div className="flex justify-between text-xs text-neutral-600">
                      <span>Total items:</span>
                      <span className="font-bold text-neutral-800">{cart.reduce((s, i) => s + i.quantity, 0)} items</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-neutral-900 border-t border-neutral-200 pt-2">
                      <span>Amount Payable:</span>
                      <span>₹{finalTotal + deliveryCharges}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsCheckoutRequested(false)}
                      className="flex-1 bg-neutral-100 text-neutral-700 py-3 rounded-xl text-sm font-semibold hover:bg-neutral-200 transition-colors"
                      id="checkout-back-btn"
                    >
                      Back to Basket
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-neutral-950 text-white py-3 rounded-xl text-sm font-semibold hover:bg-neutral-900 transition-colors shadow-md cursor-pointer"
                      id="checkout-complete-btn"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            ) : cart.length === 0 ? (
              /* Empty Cart View */
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-4" id="empty-cart-view">
                <div className="h-16 w-16 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-400">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-sans text-md font-bold text-neutral-800">Your basket is empty</h3>
                  <p className="text-xs text-neutral-500 max-w-xs mt-1">
                    Explore our active Ready-to-Wear catalog or customize styling modules to add trend-forward luxury designs.
                  </p>
                </div>
              </div>
            ) : (
              /* Cart Items List */
              <div className="space-y-4 divide-y divide-neutral-100" id="cart-items-list">
                {cart.map((item, index) => (
                  <div key={`${item.product.id}-${item.selectedSize}-${index}`} className="flex pt-4 first:pt-0 gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="h-20 w-16 object-cover rounded-md bg-neutral-50 shrink-0 border border-neutral-100"
                    />
                    
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex justify-between gap-1">
                          <h4 className="font-sans text-xs font-bold text-neutral-900 truncate">
                            {item.product.name}
                          </h4>
                          <span className="font-mono text-xs font-black text-neutral-900 shrink-0">
                            ₹{item.product.price}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-[10px] font-bold bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded">
                            Size: {item.selectedSize}
                          </span>
                          <span className="text-[10px] text-neutral-400">
                            {item.product.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-dotted border-neutral-100">
                        {/* Quantity adjustment buttons */}
                        <div className="flex items-center space-x-2 border border-neutral-200 rounded-md bg-white p-0.5 shadow-2xs">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                            className="p-1 hover:bg-neutral-100 rounded text-neutral-500 cursor-pointer disabled:opacity-40"
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="font-mono text-xs font-bold text-neutral-800 w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                            className="p-1 hover:bg-neutral-100 rounded text-neutral-500 cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Trash Button */}
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                          className="p-1 hover:bg-red-50 text-neutral-400 hover:text-red-600 rounded transition-colors cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom summaries & pricing (Hidden if checkout completed) */}
          {!checkoutComplete && cart.length > 0 && (
            <div className="border-t border-neutral-100 bg-neutral-50 p-6 space-y-4">
              
              {/* Promo code block */}
              {!isCheckoutRequested && (
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-neutral-700 block uppercase tracking-wide">Promo Coupon</label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Try OUTFITBAY10"
                      className="flex-1 bg-white border border-neutral-200 rounded-lg px-3 py-1.5 text-xs uppercase font-semibold focus:border-neutral-950 outline-hidden"
                    />
                    <button
                      onClick={applyPromo}
                      className="bg-neutral-900 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {promoSuccess && (
                    <p className="text-[11px] font-sans text-emerald-600 font-medium">Coupon applied successfully! Saved dynamic credits.</p>
                  )}
                  {promoError && (
                    <p className="text-[11px] font-sans text-red-500">{promoError}</p>
                  )}
                </div>
              )}

              {/* Price Calculations */}
              <div className="space-y-2 text-xs text-neutral-600 border-t border-neutral-150 pt-3">
                <div className="flex justify-between">
                  <span>Bag Subtotal:</span>
                  <span className="font-bold text-neutral-800">₹{originalTotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount Coupon:</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Shipping:</span>
                  {deliveryCharges === 0 ? (
                    <span className="text-emerald-600 font-bold">FREE</span>
                  ) : (
                    <span className="font-bold text-neutral-800">₹{deliveryCharges}</span>
                  )}
                </div>
                
                {deliveryCharges > 0 && (
                  <div className="text-[10px] text-neutral-500 text-right">
                    Add <span className="font-bold">₹{1000 - originalTotal}</span> more to unlock FREE delivery!
                  </div>
                )}

                <div className="flex justify-between text-base font-black text-neutral-950 border-t border-neutral-200 pt-3">
                  <span>Order Total:</span>
                  <span>₹{finalTotal + deliveryCharges}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              {!isCheckoutRequested && (
                <button
                  onClick={() => setIsCheckoutRequested(true)}
                  className="w-full bg-neutral-950 hover:bg-neutral-900 text-white py-3.5 rounded-xl font-sans text-sm font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-neutral-900/15 active:scale-97 transition-all cursor-pointer"
                  id="checkout-trigger-btn"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Proceed to Checkout</span>
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
