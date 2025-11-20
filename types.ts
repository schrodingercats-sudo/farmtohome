import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Metric {
  value: string;
  label: string;
  icon?: LucideIcon;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  rating: number;
}
