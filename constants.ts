import { Category, Metric, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Our Story', href: '#story' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_TAGS = [
  'ORGANIC', 'LOCAL', 'FAIR TRADE', 'SUSTAINABLE', 'HANDMADE', 'FRESH', 'COMMUNITY'
];

export const METRICS: Metric[] = [
  { value: '2023', label: 'Founded' },
  { value: '100%', label: 'Fair Trade' },
  { value: '50+', label: 'Villages Supported' },
  { value: '0', label: 'Middlemen' },
];

export const CATEGORIES: Category[] = [
  {
    id: '1',
    title: 'Organic Produce',
    description: 'Fresh seasonal fruits and vegetables directly from our partner farms.',
    imageUrl: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2574&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Handmade Crafts',
    description: 'Traditional pottery, textiles, and art crafted by skilled village artisans.',
    imageUrl: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=2669&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Village Staples',
    description: 'Pure grains, spices, and pantry essentials processed in the village.',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Community Impact',
    description: 'Workshops and initiatives improving village infrastructure and skills.',
    imageUrl: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2670&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Farm to Family has completely changed how we shop. Knowing our money goes directly to the farmers makes the food taste even better.",
    author: "Aditi Shah",
    role: "Regular Customer",
    avatarUrl: "https://picsum.photos/100/100?random=20",
    rating: 5
  },
  {
    id: '2',
    quote: "The quality of the handmade crafts is exceptional. It's beautiful to see traditional skills finding a modern market through this platform.",
    author: "Rohan Patel",
    role: "Design Enthusiast",
    avatarUrl: "https://picsum.photos/100/100?random=21",
    rating: 5
  }
];