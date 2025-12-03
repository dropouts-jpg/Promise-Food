export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Desi Ghee Specials' | 'Protein Grills' | 'Healthy Handis';
  imageUrl: string;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
}