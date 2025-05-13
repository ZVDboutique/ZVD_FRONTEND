export interface StockData {
  id?: number;
  type: string;
  lab: string;
  location: string;
  shapeName: string;
  caratWeight: number;
  colorGrade: string;
  clarityGrade: string;
  cutQuality: string;
  polishGrade: string;
  symmetry: string;
  price: number;
  measurementLength?: number;
  measurementWidth?: number;
  measurementDepth?: number;
  depth: number;
  lwRatio: number;
  shade: string;
  companyCode: number;
  diameter?: number;
  imageUrl?: string;
  hexvalue?: string;
  customer_id?: number;
}

export interface StockFormData {
  id?: number;
  type: string;
  lab: string;
  location: string;
  shapeName: string;
  caratWeight: string; // Using string for form inputs
  colorGrade: string;
  clarityGrade: string;
  cutQuality: string;
  polishGrade: string;
  symmetry: string;
  price: string; // Using string for form inputs
  measurementLength: string; // Using string for form inputs
  measurementWidth: string; // Using string for form inputs
  measurementDepth: string; // Using string for form inputs
  depth: string; // Using string for form inputs
  lwRatio: string; // Using string for form inputs
  shade: string;
  companyCode: string; // Using string for form inputs
  diameter: string; // Using string for form inputs
  imageUrl: string;
  hexvalue: string;
  customer_id: string; // Using string for form inputs
}
