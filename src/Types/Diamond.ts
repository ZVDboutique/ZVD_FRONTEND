export interface DiamondData {
  id?: number;
  diamond_name: string;
  carat: string;
  cut: string;
  color: string;
  clarity: string;
  price: string;
  image: File | null;
  status?: string;
}

export interface DiamondRowData {
  id: number;
  image: string;
  diamond_name: string;
  carat: string;
  cut: string;
  color: string;
  clarity: string;
  price: string;
  status: string;
}
