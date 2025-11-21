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

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  description: string;
  origin: string;
  farmerName: string;
  nutrition: string[];
  gallery: string[];
}

export interface User {
  name: string;
  email: string;
  avatar?: string | null;
  address?: string;
  isAdmin?: boolean;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  items: number;
}