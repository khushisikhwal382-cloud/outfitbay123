/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number; // For discount display
  category: "Men's Wear" | "Women's Wear" | "Streetwear" | "Accessories";
  image: string;
  description: string;
  rating: number;
  sizes: string[];
  inStock: boolean;
  tag?: string; // e.g. "Best Seller", "New Arrival"
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon reference
  details: string[];
  duration?: string;
  priceText?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string[]; // Highly detailed paragraphs
  publishDate: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar?: string;
  date: string;
  verifiedPurchase: boolean;
  categoryPurchased?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface StylingBooking {
  id: string;
  fullName: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  createdAt: string;
}
