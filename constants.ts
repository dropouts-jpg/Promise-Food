import { MenuItem, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'specials', name: 'Desi Ghee Specials' },
  { id: 'grills', name: 'Protein Grills' },
  { id: 'handis', name: 'Healthy Handis' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Shahi Mutton Biryani',
    description: 'Aromatic basmati rice cooked with tender mutton in pure desi ghee.',
    price: 1250,
    category: 'Desi Ghee Specials',
    imageUrl: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Chicken Malai Boti',
    description: 'Creamy, melt-in-your-mouth chicken marinated in organic spices.',
    price: 850,
    category: 'Protein Grills',
    imageUrl: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Paneer Makhani Handi',
    description: 'Fresh cottage cheese simmered in a rich tomato and butter gravy.',
    price: 950,
    category: 'Healthy Handis',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Nihari Khaas',
    description: 'Slow-cooked beef stew with bone marrow, finished with golden onions.',
    price: 1100,
    category: 'Desi Ghee Specials',
    imageUrl: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
  },
  {
    id: '5',
    name: 'Seekh Kebab Platter',
    description: 'Minced meat skewers grilled to perfection over charcoal.',
    price: 1350,
    category: 'Protein Grills',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Chicken Karahi',
    description: 'Wok-cooked chicken with ginger, garlic, and fresh green chilies.',
    price: 1100,
    category: 'Healthy Handis',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
  },
];

export const WHATSAPP_NUMBER = "923001234567";