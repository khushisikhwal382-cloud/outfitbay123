/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Service, BlogPost, Review } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "prod-tshirt",
    name: "Essential Cotton T-Shirt",
    price: 699,
    originalPrice: 899,
    category: "Men's Wear",
    // We can map this to our beautiful men's collection wear
    image: "/src/assets/images/mens_collection_1781759837786.jpg",
    description: "Tailored from 100% long-staple organic cotton. Features an elegant crew neck with ribbed collars, clean mid-weight drape, and breathable premium weave that keeps its structural integrity wash after wash.",
    rating: 4.8,
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    tag: "Everyday Classic"
  },
  {
    id: "prod-hoodie",
    name: "Oversized Hoodie",
    price: 1499,
    originalPrice: 1999,
    category: "Streetwear",
    image: "/src/assets/images/streetwear_style_1781759868082.jpg",
    description: "Crafted in heavy-brushed cotton blend French terry (380 GSM). Intended for a stylish relaxed posture with dropped shoulders, double-lined deep hood without drawcords, and custom-dyed seasonal tones.",
    rating: 5.0,
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    tag: "Best Seller"
  },
  {
    id: "prod-jeans",
    name: "Relaxed Fit Jeans",
    price: 1899,
    category: "Streetwear",
    image: "https://picsum.photos/seed/indigo-denim/600/800",
    description: "Vintage-washed selvedge denim designed for effortless everyday wear. Engineered with a roomy mid-rise waist, straight legs with relaxed cuffs, and double-needle contrast flatlock stitching.",
    rating: 4.6,
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    tag: "Trending"
  },
  {
    id: "prod-shirt",
    name: "Casual Shirt Collection",
    price: 999,
    originalPrice: 1299,
    category: "Women's Wear",
    image: "/src/assets/images/womens_collection_1781759853008.jpg",
    description: "Versatile lightweight cotton linen resort shirt. Outfitted with breathable structured collars, classic mother-of-pearl buttons, and a silhouette that shifts seamlessly from morning offices to evening cafes.",
    rating: 4.7,
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    tag: "New Arrival"
  },
  {
    id: "prod-jacket",
    name: "Urban Street Jacket",
    price: 2299,
    originalPrice: 2999,
    category: "Streetwear",
    image: "https://picsum.photos/seed/streetjacket/600/800",
    description: "An absolute outerwear essential. Built with a highly durable, wind-resistant outer shell and lightweight thermal mesh layer inside. Outfitted with dual storm flaps, tactical pockets, and smart cuffs.",
    rating: 4.9,
    sizes: ["M", "L", "XL"],
    inStock: true,
    tag: "Premium Choice"
  },
  {
    id: "prod-cap",
    name: "Classic Dad Cap",
    price: 499,
    category: "Accessories",
    image: "https://picsum.photos/seed/vintagecap/600/800",
    description: "Washed cotton twill unstructured profile with adjustable self-fabric strap and durable brass closure. Finished with subtle embroidery.",
    rating: 4.5,
    sizes: ["One Size"],
    inStock: true
  },
  {
    id: "prod-sunglasses",
    name: "Retro Acetate Sunglasses",
    price: 899,
    originalPrice: 1199,
    category: "Accessories",
    image: "https://picsum.photos/seed/sunglassessleep/600/800",
    description: "Timeless handcrafted thick-acetate design featuring scratch-resistant category 3 dark lenses with comprehensive UV400 filtration.",
    rating: 4.8,
    sizes: ["One Size"],
    inStock: true,
    tag: "Limited Drop"
  },
  {
    id: "prod-tote",
    name: "Heavy-Duty Canvas Tote",
    price: 399,
    category: "Accessories",
    image: "https://picsum.photos/seed/canvastotebag/600/800",
    description: "Constructed from 16oz ultra-dense canvas with reinforced triple-stitched handles and a generous inner zipped compartment for valuables.",
    rating: 4.7,
    sizes: ["One Size"],
    inStock: true
  }
];

export const SERVICES: Service[] = [
  {
    id: "serv-custom",
    title: "Custom Clothing",
    description: "Personalized designs for individuals and brands.",
    iconName: "Scissors",
    details: [
      "Custom size patterns & premium fabrics catalog",
      "One-on-one consultation with master custom builders",
      "Prototyping & sample inspection before full production",
      "Ideal for bespoke occasion wear or unified corporate apparel"
    ],
    priceText: "Quotes based on design"
  },
  {
    id: "serv-styling",
    title: "Styling Consultation",
    description: "Get recommendations based on your unique style.",
    iconName: "Sparkles",
    details: [
      "Personalized archetype mapping (colors, tone & body geometry)",
      "Occasion-specific moodboards & lookbooks crafted for you",
      "Interactive 45-minute virtual fashion session with professional stylist",
      "Complete Outfit suggestions ready for checkout"
    ],
    duration: "45 Mins",
    priceText: "₹499 / Session (Redeemable)"
  },
  {
    id: "serv-bulk",
    title: "Bulk Orders",
    description: "Special pricing packages for groups and businesses.",
    iconName: "Layers",
    details: [
      "Steep progressive discounts up to 40% off retail pricing",
      "Strict quality control with expedited air delivery options",
      "Low minimum order quantities starting at only 20 pieces",
      "Dedicated account manager for step-by-step order tracking"
    ],
    priceText: "Volume-based discounts"
  },
  {
    id: "serv-delivery",
    title: "Delivery & Returns",
    description: "Fast doorstep shipping and easy exchange policies.",
    iconName: "Truck",
    details: [
      "Complimentary standard shipping across major Indian cities",
      "Same-day or next-day expedited metropolitan deliveries",
      "Hassle-free 14-day return frame with free local home pickup",
      "Instant refunds loaded back to original source without complex loops"
    ],
    priceText: "Free over ₹999 purchase"
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "blog-trends",
    title: "Top Fashion Trends of 2026",
    summary: "Discover colors, fits, and styles shaping modern fashion right now.",
    publishDate: "June 12, 2026",
    readTime: "5 min read",
    category: "Trends",
    author: {
      name: "Rohan Sen",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      role: "Lead Trend Analyst"
    },
    image: "https://picsum.photos/seed/fashion-trends-2026/800/500",
    content: [
      "The year 2026 brings an exciting reset to how we relate to our clothing. Following years of extreme, isolated loungewear vs hyper-formal cycles, fashion is unifying under the theme of 'Everyday Confidence'. Modern comfort combined with razor-sharp aesthetic intention is the new baseline.",
      "First, let us talk silhouettes. Symmetrical oversized styling is transitioning. Instead of amorphous forms, structural volume is taking priority: think heavy-weight, wide-shoulder hoodies styled with crisply tailored trousers. High-density fabrics like 380 GSM and above allow clothes to drop naturally and retain structured shapes.",
      "In terms of palette, earth-inspired neutral shades remain the backbone of luxury streetwear. But what makes 2026 distinct is the rise of soft sage greens, warm umber, washed denim blues, and rich slate. Monochromatic styling with small high-lux hardware accents (like customized metal toggles, high-contrast zippers, and raw corduroy finishes) is defining the city aesthetic.",
      "Sustainable premium cotton meets eco-poly blends to ensure clothing is light, has micro-ventilation, and feels incredibly comfortable in varying climates. Brands like Outfitbay are pioneering this exact blend of tactical comfort with highly-polished utility styling."
    ]
  },
  {
    id: "blog-minimal",
    title: "How to Build a Minimal Wardrobe",
    summary: "Simple steps to create highly versatile outfits with fewer, high-quality items.",
    publishDate: "May 28, 2026",
    readTime: "4 min read",
    category: "Guides",
    author: {
      name: "Meera Nair",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      role: "Capsule Consultant"
    },
    image: "https://picsum.photos/seed/minimalist-wardrobe/800/500",
    content: [
      "The fast-fashion cycle has led many to feel surrounded by clothes but with 'nothing to wear'. The solution lies within the discipline of capsule styling. A minimal wardrobe isn't about boring grey shapes; it is about building a powerful matrix of items where every piece complements the other.",
      "The Golden Rule of Capsule Wardropes is 90% versatility: every single piece should be easily wearable in at least 4 distinct outfit combinations. When choosing items, start with active modular layers rather than complete statement outfits.",
      "We recommend focusing your minimal build on 5 fundamental blocks: a mid-weight pristine cotton t-shirt (white, sand, or slate), a structured tailored shirt, highly-durable relaxed straight jeans, a premium transition layer like a French-terry hoodie, and one high-character utility jacket.",
      "When you choose minimalist items, prioritize structural fabrics and impeccable necklines. A good shirt should not sag or twist out of shape after one wash cycle. By selecting premium, robust basics, you reduce clothing waste, save decision energy every morning, and project a pristine, confident presence effortlessly."
    ]
  },
  {
    id: "blog-quality",
    title: "Choosing Quality Clothing",
    summary: "Tips to identify durable, natural, and comfortable fabrics.",
    publishDate: "May 10, 2026",
    readTime: "6 min read",
    category: "Sustainability",
    author: {
      name: "Kabir Dev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      role: "Fabric Sourcing Director"
    },
    image: "https://picsum.photos/seed/fabric-quality/800/500",
    content: [
      "True luxury isn't a shiny logo; it is the physical sensation of premium raw materials against your skin and the confidence that they will last for years. To evaluate clothing quality in modern boutiques, one must look beyond the color and pattern.",
      "Step 1: The Touch and Resilience Test. Reach for the garment and inspect its springiness. Cotton mixed with minor trace elements of premium modal or elastane should bounce right back to its shape after stretching. Cotton French Terry should have uniform, dense, untangled loops on the under-weave.",
      "Step 2: Inspect the Seams. Gently stretch the main panels on both sides of a stitch line. If you see light or separation between the stitches, it is a weak single-stitch prone to splitting under tension. Look for double-flatlock seams, clean overlocking, and reinforced bar-tacks (heavy stitched rectangles) at stressful points like pocket flaps and zipper starts.",
      "Step 3: Materials Label. Strive for high natural content. Cotton, linen, wool, and modern regenerated bamboo are highly breathable, comfortable, and self-regulating. Minor synthetics (like premium nylon blends in winter jackets) are entirely fine for windproofing, but warm-weather t-shirts and shirts should stay rich in premium, long-staple cotton fibers."
    ]
  },
  {
    id: "blog-streetwear",
    title: "Streetwear Essentials",
    summary: "Must-have pieces, layering techniques, and colors for a contemporary urban look.",
    publishDate: "April 15, 2026",
    readTime: "4 min read",
    category: "Styling",
    author: {
      name: "Rohan Sen",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      role: "Lead Trend Analyst"
    },
    image: "https://picsum.photos/seed/streetwear-style/800/500",
    content: [
      "Streetwear has evolved from alternative community subcultures to absolute world-class luxury benchmarks. Today, walking down Delhi, Tokyo, or Brooklyn, you see the same trend-forward uniform: clean streetwear silhouettes that manage to be deeply relaxed while looking sharp.",
      "To rock contemporary streetwear without looking sloppy, you must balance dimensions. The golden ratio is 'one loud oversized element, one structured stabilizing element'. For example, if you wear a generous Oversized Hoodie, style it with crisp straight-leg jeans rather than baggy sweatpants. Frame it with high-contrast minimalist sneakers.",
      "Layering is your greatest style weapon. A plain vintage-colored tee sticking out of a cropped, heavyweight zipper hoodie adds visual depth and breaks the length of your trunk nicely. Accessories like structured acetate sunglasses or heavy-cotton bucket hats anchor the fit instantly.",
      "At Outfitbay, our Streetwear capsule is curated entirely around these mix-and-match principles, giving you maximum character while preserving comfort for the hot concrete street."
    ]
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Sarah M.",
    rating: 5,
    comment: "Great quality and affordable styles. My favorite clothing store! The Oversized Hoodie has been through 15 wash cycles now and has literally kept its exact thickness and color. Truly premium fabrics.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    date: "June 02, 2026",
    verifiedPurchase: true,
    categoryPurchased: "Streetwear"
  },
  {
    id: "rev-2",
    name: "Arjun Sharma",
    rating: 5,
    comment: "Extremely fast shipping to South Delhi. I ordered the Relaxed Fit Jeans on Tuesday morning and they was here by Wednesday afternoon. Fitting is absolutely perfect and matches the measurements chart exactly.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    date: "May 25, 2026",
    verifiedPurchase: true,
    categoryPurchased: "Streetwear"
  },
  {
    id: "rev-3",
    name: "Pooja Gupta",
    rating: 4,
    comment: "The Custom Clothing team was amazing. They helped create customized hoodies for our creative agency branding. The print and stitch is flawless, and the pricing was super reasonable.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    date: "May 14, 2026",
    verifiedPurchase: true,
    categoryPurchased: "Custom Clothing"
  },
  {
    id: "rev-4",
    name: "Rohan Verma",
    rating: 5,
    comment: "The Essential Cotton T-Shirt feels twice as expensive as it is. It's heavily weighted, has a snug neckline that doesn't stretch out, and comes in fantastic earthy tones. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    date: "June 10, 2026",
    verifiedPurchase: true,
    categoryPurchased: "Men's Wear"
  }
];
