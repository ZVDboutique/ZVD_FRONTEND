export interface DiamondData {
  id?: number;
  diamond_name: string;
  carat: string;
  cut: string;
  color: string;
  clarity: string;
  price: string;
  imageUrl: string;
  status: string;
  shape: string;
  certificate_url: string;
  fluorescence: string;
  length: string;
  width: string;
  depth: string;
  diameter: string;
  stock_quantity: string;
  is_certified: boolean;
}

export interface DiamondRowData {
  id: number;
  diamond_name: string;
  carat: string;
  cut: string;
  color: string;
  clarity: string;
  price: string;
  image: string;
  status: string;
  shape?: string;
  certificate_url?: string;
  fluorescence?: string;
  length?: string;
  width?: string;
  depth?: string;
  diameter?: string;
  stock_quantity?: string;
  is_certified?: boolean;
}

export interface DiamondStockData {
  diamondId: number;
  name: string;
  caratWeight: number;
  cutQuality: string;
  colorGrade: string;
  clarityGrade: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  shapeName?: string;
  certificateUrl?: string;
  fluorescenceIntensity?: string;
  length?: number;
  width?: number;
  depth?: number;
  diameter?: number;
  stockQuantity?: number;
  shapeId?: number;
  isCertified?: boolean;
}
