/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { CartItem } from "../types";

interface HeaderProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
  cart: CartItem[];
  setIsCartOpen: (isOpen: boolean) => void;
}

export default function Header({
  cart,
  setIsCartOpen,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "services", label: "Products & Services", path: "/services" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ];

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Helper to determine if a route is active
  const isRouteActive = (itemPath: string) => {
    if (itemPath === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(itemPath);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex cursor-pointer items-center space-x-2"
          id="logo-trigger"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white font-mono text-xl font-black tracking-tighter">
            O
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xl font-extrabold tracking-tight text-neutral-900 leading-none">
              Outfitbay
            </span>
            <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase font-medium">
              CRATE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const active = isRouteActive(item.path);
            return (
              <Link
                key={item.id}
                id={`nav-tab-${item.id}`}
                to={item.path}
                className={`relative py-2 font-sans text-sm font-medium transition-all duration-200 ${
                  active 
                    ? "text-neutral-950" 
                    : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-neutral-900 animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button
            id="cart-trigger-btn"
            onClick={() => setIsCartOpen(true)}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-xs transition-all hover:bg-neutral-50 active:scale-95"
            aria-label="Open Cart"
          >
            <ShoppingBag className="h-5 w-5 text-neutral-700 transition-colors group-hover:text-neutral-950" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white ring-2 ring-white animate-bounce-short">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-xs md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-neutral-700" />
            ) : (
              <Menu className="h-5 w-5 text-neutral-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-neutral-100 bg-white px-6 py-4 md:hidden animate-slide-down shadow-lg">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const active = isRouteActive(item.path);
              return (
                <Link
                  key={item.id}
                  id={`mobile-nav-tab-${item.id}`}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full py-3 text-left font-sans text-base font-semibold border-b border-neutral-50 last:border-0 ${
                    active 
                      ? "text-neutral-950 pl-2 border-l-2 border-neutral-900 bg-neutral-50/50" 
                      : "text-neutral-500 hover:text-neutral-950"
                  } transition-all`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
