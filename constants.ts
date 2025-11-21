import { Category, Metric, Testimonial, NavLink, Product } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Our Story', href: '/story' },
  { label: 'Impact', href: '/impact' },
  { label: 'Contact', href: '/contact' },
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

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Organic Gir Kesar Mangoes",
    price: 800,
    unit: "doz",
    category: "Organic Produce",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=2574&auto=format&fit=crop",
    description: "Known as the 'Queen of Mangoes', our Gir Kesar variety is grown organically in the foothills of Girnar. These mangoes are characterized by their bright orange pulp and intense sweetness. Harvested at the perfect ripeness to ensure maximum flavor.",
    origin: "Junagadh, Gujarat",
    farmerName: "Ramesh Bhai",
    nutrition: ["Rich in Vitamin A & C", "High Fiber Content", "Natural Sugars"],
    gallery: [
        "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=2574&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=2574&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=2574&auto=format&fit=crop"
    ]
  },
  {
    id: '2',
    name: "Handwoven Cotton Dupatta",
    price: 1200,
    unit: "piece",
    category: "Handmade Crafts",
    image: "https://images.unsplash.com/photo-1606744881471-17bbb15ad5dc?q=80&w=2670&auto=format&fit=crop",
    description: "Exquisite handwoven cotton dupatta featuring traditional motifs. Created using age-old weaving techniques passed down through generations. The fabric is soft, breathable, and dyed using natural vegetable colors.",
    origin: "Bhuj, Kutch",
    farmerName: "Artisan Geeta Ben",
    nutrition: ["100% Organic Cotton", "Natural Dyes", "Hand Wash Only"],
    gallery: [
        "https://images.unsplash.com/photo-1606744881471-17bbb15ad5dc?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=2574&auto=format&fit=crop"
    ]
  },
  {
    id: '3',
    name: "Village Churned Ghee",
    price: 1500,
    unit: "kg",
    category: "Village Staples",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2574&auto=format&fit=crop",
    description: "Pure A2 Cow Ghee made using the traditional Bilona method. Fresh milk is curdled in clay pots and hand-churned to extract butter, which is then slow-cooked over a wood fire. This process preserves the nutrients and gives it a distinct aroma.",
    origin: "Anand, Gujarat",
    farmerName: "Gopal Dairy Coop",
    nutrition: ["Rich in Omega-3", "A2 Protein", "Boosts Immunity"],
    gallery: [
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2574&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1624790405901-4b8f52497c2b?q=80&w=2574&auto=format&fit=crop"
    ]
  },
  {
    id: '4',
    name: "Terracotta Water Pot",
    price: 450,
    unit: "piece",
    category: "Handmade Crafts",
    image: "https://images.unsplash.com/photo-1520540037842-b80df61df169?q=80&w=2574&auto=format&fit=crop",
    description: "Naturally cools water without electricity. Hand-molded from locally sourced clay and fired in traditional kilns. The porous nature of the clay allows for natural evaporation, keeping the water cool and alkaline.",
    origin: "Patan, Gujarat",
    farmerName: "Prajapati Brothers",
    nutrition: ["Natural Cooling", "Balances pH Level", "Eco-friendly"],
    gallery: [
        "https://images.unsplash.com/photo-1520540037842-b80df61df169?q=80&w=2574&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1490915785914-0af2806c22b6?q=80&w=2574&auto=format&fit=crop"
    ]
  },
  {
    id: '5',
    name: "Organic Turmeric Powder",
    price: 350,
    unit: "500g",
    category: "Village Staples",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2580&auto=format&fit=crop",
    description: "High-curcumin turmeric powder ground from sun-dried roots. Grown without synthetic pesticides or fertilizers. It has a vibrant golden color and a potent earthy aroma, perfect for cooking and medicinal use.",
    origin: "Sangli, Maharashtra",
    farmerName: "Organic Co-op Society",
    nutrition: ["High Curcumin (>5%)", "Anti-inflammatory", "Antioxidant Rich"],
    gallery: [
        "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2580&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611245484736-7972a54b2135?q=80&w=2574&auto=format&fit=crop"
    ]
  },
  {
    id: '6',
    name: "Fresh Farm Spinach",
    price: 40,
    unit: "bunch",
    category: "Organic Produce",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2660&auto=format&fit=crop",
    description: "Crunchy, vibrant green spinach leaves harvested daily at sunrise. Grown in nutrient-rich soil using organic compost. Excellent for salads, smoothies, or cooking.",
    origin: "Vadodara Outskirts",
    farmerName: "Local Green Farm",
    nutrition: ["Iron Rich", "Vitamin K", "Low Calorie"],
    gallery: [
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2660&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550956244-c248cb487486?q=80&w=2574&auto=format&fit=crop"
    ]
  }
];