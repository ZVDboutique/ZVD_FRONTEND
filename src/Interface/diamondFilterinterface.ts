export interface DiamondFilterInterface {
  shape: any;
  caratMin: any;
  caratMax: any;
  color: any;
  clarity: any;
  cut: any;
  priceMin: any;
  priceMax: any;
  fluorescenceIntensity: any;
  lengthMin: any;
  lengthMax: any;
  widthMin: any;
  widthMax: any;
  type: any;
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

export interface ShapeInterface {
  id: number;
  shape_Name: string;
  diamond_Id: number;
}
export interface ClarityGradeInterface {
  id: number;
  clarity_grade: string;
  diamond_id: number;
}
export interface ColorGradeInterface {
  id: number;
  color_grade: string;
  diamond_id: number;
}

export interface FluorescenceInterface {
  id: number;
  intensity: string;
  diamond_id: number;
}

export interface PriceInterface {
  id: number;
  diamond_Id: number;
  shape_Id: number;
  price: number;
  created_At: string;
}

export interface CutInterface {
  id: number;
  cut_Quality: string;
  diamond_Id: number;
}

export interface MeasurementInterface {
  id: number;
  diamond_Id: number;
  length: number;
  width: number;
  depth: number;
  diameter: number;
}
