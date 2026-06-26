/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Product, Service, BlogPost, Review, CartItem } from "./types";
import { PRODUCTS, SERVICES, BLOGS, INITIAL_REVIEWS } from "./data";

// Sub-components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import BookingModal from "./components/BookingModal";
import FullBlogModal from "./components/FullBlogModal";
import ReviewFormModal from "./components/ReviewFormModal";

// Page Views
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";

// Helper Component to reset scroll to top on path transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [pathname]);

  return null;
}

export default function App() {
  // Shopping Cart Persistence
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  // Reviews Persistence
  const [reviews, setReviews] = React.useState<Review[]>(INITIAL_REVIEWS);
  const [isReviewFormOpen, setIsReviewFormOpen] = React.useState(false);

  // Booking System
  const [selectedServiceForBooking, setSelectedServiceForBooking] = React.useState<Service | null>(null);
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);

  // Blog Reader Systems
  const [selectedBlogPost, setSelectedBlogPost] = React.useState<BlogPost | null>(null);
  const [isBlogOpen, setIsBlogOpen] = React.useState(false);

  // 1. Initial State Loaders (Safely in useEffect)
  useEffect(() => {
    // Cart Load
    const savedCart = localStorage.getItem("outfitbay_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (err) {
        // Fallback
      }
    }

    // Reviews Load
    const savedReviews = localStorage.getItem("outfitbay_reviews");
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews));
      } catch (err) {
        // Fallback
      }
    }
  }, []);

  // 2. Shopping Cart Handlers
  const handleAddToCart = (product: Product, size: string) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );

      let updated: CartItem[];
      if (existingIdx > -1) {
        updated = prevCart.map((item, idx) =>
          idx === existingIdx ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updated = [...prevCart, { product, quantity: 1, selectedSize: size }];
      }
      
      localStorage.setItem("outfitbay_cart", JSON.stringify(updated));
      return updated;
    });
  };

  const handleUpdateQuantity = (productId: string, size: string, change: number) => {
    setCart((prevCart) => {
      const updated = prevCart.map((item) => {
        if (item.product.id === productId && item.selectedSize === size) {
          const nextQty = item.quantity + change;
          return { ...item, quantity: Math.max(1, nextQty) };
        }
        return item;
      });
      localStorage.setItem("outfitbay_cart", JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCart((prevCart) => {
      const updated = prevCart.filter(
        (item) => !(item.product.id === productId && item.selectedSize === size)
      );
      localStorage.setItem("outfitbay_cart", JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("outfitbay_cart");
  };

  // 3. Customer Reviews handlers
  const handleSubmitReview = (newReviewFields: Omit<Review, "id" | "date">) => {
    const formatted: Review = {
      ...newReviewFields,
      id: "rev-user-" + Math.floor(1000 + Math.random() * 9000),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }),
    };

    setReviews((prevReviews) => {
      const updated = [formatted, ...prevReviews];
      localStorage.setItem("outfitbay_reviews", JSON.stringify(updated));
      return updated;
    });
  };

  // 4. Modal Booking Openers
  const handleOpenBooking = (srv: Service) => {
    setSelectedServiceForBooking(srv);
    setIsBookingOpen(true);
  };

  // 5. Blog Openers
  const handleOpenBlog = (post: BlogPost) => {
    setSelectedBlogPost(post);
    setIsBlogOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-50 flex flex-col font-sans select-none antialiased text-neutral-800" id="outfitbay-app">
        
        {/* 1. PRIMARY STICKY BLURED HEADER */}
        <Header
          cart={cart}
          setIsCartOpen={setIsCartOpen}
        />

        {/* 2. ROUTED SCREEN CONTROLLER */}
        <main className="flex-1 bg-white">
          <Routes>
            {/* Home Route */}
            <Route 
              path="/" 
              element={
                <Home 
                  reviews={reviews}
                  setReviewFormOpen={setIsReviewFormOpen}
                />
              } 
            />

            {/* About Us Route */}
            <Route 
              path="/about" 
              element={<Aboutus />} 
            />

            {/* Products & Services Route */}
            <Route 
              path="/services" 
              element={
                <Products 
                  products={PRODUCTS}
                  services={SERVICES}
                  onAddToCart={handleAddToCart}
                  onOpenBooking={handleOpenBooking}
                />
              } 
            />

            {/* Backward-compatibility redirect for products path */}
            <Route 
              path="/products" 
              element={<Navigate to="/services" replace />} 
            />

            {/* Blog Route */}
            <Route 
              path="/blog" 
              element={
                <Blog 
                  blogs={BLOGS}
                  onOpenBlog={handleOpenBlog}
                />
              } 
            />

            {/* Contact Route */}
            <Route 
              path="/contact" 
              element={<Contact />} 
            />

            {/* Switch redirect trigger to Home for all unmatched sub-pages */}
            <Route 
              path="*" 
              element={<Navigate to="/" replace />} 
            />
          </Routes>
        </main>

        {/* 3. MULTI-COLUMN DESIGNER FOOTER */}
        <Footer />

        {/* MODAL COVERS */}
        
        {/* A. Shopping Cart Drawer overlay */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* B. Consultation Booking scheduling modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          selectedService={selectedServiceForBooking}
          allServices={SERVICES}
        />

        {/* C. Long-form Blog detail reader modal */}
        <FullBlogModal
          isOpen={isBlogOpen}
          onClose={() => setIsBlogOpen(false)}
          post={selectedBlogPost}
        />

        {/* D. Testimonial user review form */}
        <ReviewFormModal
          isOpen={isReviewFormOpen}
          onClose={() => setIsReviewFormOpen(false)}
          onSubmitReview={handleSubmitReview}
        />

      </div>
    </BrowserRouter>
  );
}
