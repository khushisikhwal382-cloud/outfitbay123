/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, ShoppingBag, ShieldCheck } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0] || "M");
  const [isAdded, setIsAdded] = React.useState(false);

  const handleAddPress = () => {
    onAddToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-150 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-0.5"
      id={`product-card-${product.id}`}
    >
      {/* Badge container */}
      {product.tag && (
        <span className="absolute top-4 left-4 z-10 rounded-full bg-neutral-950 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
          {product.tag}
        </span>
      )}

      {/* Image container & Zoom on hover */}
      <div className="relative aspect-3/4 overflow-hidden bg-neutral-50 grayscale-4 group-hover:grayscale-0 transition-all duration-500">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
          id={`product-image-${product.id}`}
        />
        
        {/* Inline shadow cover */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Details pane */}
      <div className="flex flex-1 flex-col p-5 space-y-3.5">
        
        {/* Category & Status rating */}
        <div className="flex items-center justify-between text-neutral-400">
          <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-neutral-500">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="font-mono text-xs font-bold text-neutral-700">{product.rating}</span>
          </div>
        </div>

        {/* Title and descriptions of materials */}
        <div>
          <h3 className="font-sans text-sm font-extrabold text-neutral-900 leading-tight">
            {product.name}
          </h3>
          <p className="mt-1 font-sans text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Dynamic size layout selection */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="space-y-1.5" id={`size-selector-${product.id}`}>
            <span className="text-[10px] uppercase font-bold tracking-wide text-neutral-400 block">Select Size</span>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`flex h-7 min-w-8 items-center justify-center rounded-md text-[11px] font-bold border transition-all cursor-pointer ${
                    selectedSize === sz
                      ? "bg-neutral-950 border-neutral-950 text-white"
                      : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
          
          {/* Price Tag with discount mock calculation */}
          <div className="flex flex-col">
            <span className="font-mono text-base font-black text-neutral-950 leading-none">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="font-mono text-[11px] text-neutral-400 line-through mt-1 leading-none">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Quick Add To Bag Action */}
          <button
            onClick={handleAddPress}
            className={`cursor-pointer flex items-center space-x-1 rounded-lg px-3.5 py-2 text-xs font-semibold shadow-2xs transition-all active:scale-95 ${
              isAdded 
                ? "bg-emerald-600 text-white shadow-emerald-200" 
                : "bg-neutral-950 hover:bg-neutral-900 text-white"
            }`}
            id={`add-btn-${product.id}`}
          >
            <ShoppingBag className="h-3.5 w-3.5 shrink-0" />
            <span>{isAdded ? "Added!" : "Add To Bag"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
