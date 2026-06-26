/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useSEO } from "../hooks/useSEO";
import { Search, Scissors, Sparkles, Layers, Truck, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { Product, Service } from "../types";
import ProductCard from "../components/ProductCard";

interface ProductsProps {
  products: Product[];
  services: Service[];
  onAddToCart: (product: Product, size: string) => void;
  onOpenBooking: (service: Service) => void;
}

export default function Products({
  products,
  services,
  onAddToCart,
  onOpenBooking,
}: ProductsProps) {
  useSEO(
    "Fashion Services & Curated Products | Outfitbay Crate Delhi",
    "Explore custom denim alterations, clothing customizer, Delhi styling consults, and priority seasonal drops from Outfitbay Crate."
  );
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const categories = ["All", "Men's Wear", "Women's Wear", "Streetwear", "Accessories"];

  // Filter products based on search and selected category tab
  const filteredProducts = products.filter((prod) => {
    const matchesCategory = selectedCategory === "All" || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Mapper for Lucide Icons in services list
  const iconMap: Record<string, any> = {
    Scissors: Scissors,
    Sparkles: Sparkles,
    Layers: Layers,
    Truck: Truck,
  };

  return (
    <div className="space-y-20 pb-20 px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in" id="products-services-container">
      
      {/* SECTION A: PREMIUM OUTFITS SHOP */}
      <section className="space-y-8" id="products-catalog-section">
        
        {/* Banner with heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 pt-4">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400">Ready-to-Wear Collection</span>
          <h1 className="font-sans text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            Curated Styles & Fashion Services
          </h1>
          <p className="font-sans text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
            Every piece is drafted from heavyweight high-density fabrics and vintage dyes to provide unmatched self-expression values.
          </p>
        </div>

        {/* Filter controls sub-dashboard */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-neutral-100 pb-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto" id="category-navigation-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? "bg-neutral-900 border-neutral-900 text-white shadow-xs"
                    : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                }`}
                id={`cat-filter-${cat.replace(/\s+/g, '-').replace("'", "")}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box input */}
          <div className="relative w-full md:w-72" id="search-box-cover">
            <span className="absolute inset-y-0 left-3 flex items-center text-neutral-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search garments..."
              className="w-full bg-white border border-neutral-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:border-neutral-900 outline-hidden"
              id="product-search-input"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50/50 rounded-2xl border border-dashed border-neutral-200" id="no-search-results">
            <p className="text-sm font-semibold text-neutral-500">No modern apparel matches your filter keywords.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="mt-4 text-xs font-bold text-neutral-900 underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" id="products-catalog-grid">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

      </section>

      {/* SECTION B: TAILORED SERVICES PORTFOLIO */}
      <section className="space-y-12 border-t border-neutral-100 pt-16" id="brand-services-section">
        
        {/* Services Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400">Specialist Solutions</span>
          <h2 className="font-sans text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            Exclusive Clothing Services
          </h2>
          <p className="font-sans text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
            We extend our garment craft beyond ready-made fits. Schedule a session with our designer pool for bespoke tailoring or styling consultation.
          </p>
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" id="services-grid-list">
          {services.map((srv) => {
            const Icon = iconMap[srv.iconName] || Scissors;
            return (
              <div
                key={srv.id}
                className="group relative flex flex-col bg-neutral-950 text-white rounded-2xl p-6 border border-neutral-900 shadow-md transition-all hover:scale-101 hover:shadow-xl"
                id={`service-card-${srv.id}`}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-neutral-800 group-hover:bg-neutral-600 transition-colors" />

                <div className="flex items-center justify-between mb-4 mt-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="h-5 w-5 shrink-0" />
                  </div>
                  {srv.duration && (
                    <span className="font-mono text-[10px] font-bold tracking-wider text-neutral-400 bg-white/5 px-2.5 py-1 rounded">
                      {srv.duration}
                    </span>
                  )}
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="font-sans text-base font-bold text-white tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                    {srv.description}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {srv.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5 text-[11px] text-neutral-300">
                        <span className="text-white font-extrabold mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-neutral-400 truncate">
                    {srv.priceText}
                  </span>
                  
                  <button
                    onClick={() => onOpenBooking(srv)}
                    className="cursor-pointer group flex items-center space-x-1.5 bg-white text-neutral-950 px-3.5 py-2 rounded-lg text-xs font-bold hover:bg-neutral-100 transition-all active:scale-95 shrink-0"
                    id={`book-service-${srv.id}`}
                  >
                    <span>Book Service</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
}
