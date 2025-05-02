export interface DiamondFilterInterface {
  shape: string;
  caratMin: string;
  caratMax: string;
  color: string;
  clarity: string;
  cut: string;
  priceMin: string;
  priceMax: string;
  fluorescenceIntensity: string;
  lengthMin: string;
  lengthMax: string;
  widthMin: string;
  widthMax: string;
  type: string;
}

export interface DiamondListInterface {
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
}
