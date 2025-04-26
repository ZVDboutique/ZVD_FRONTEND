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

export interface DiamondStockData {
  diamondId: number;
  shapeName: string;
  caratWeight: number;
  cutQuality: string;
  colorGrade: string;
  clarityGrade: string;
  certificateUrl: string;
  imageUrl: string;
  fluorescenceIntensity: string;
  length: number;
  width: number;
  depth: number;
  diameter: number;
  price: number;
  stockQuantity: number;
  isAvailable: boolean;
  shapeId: number;
  updatedBy: number;
  isVoid: boolean;
  isVerified: boolean;
  isCertified: boolean;
  name: string;
  id?: number;
}
