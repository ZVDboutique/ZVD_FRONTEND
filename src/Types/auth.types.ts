export interface LoginRequest {
  email: string;
  password?: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface AuthError {
  message: string;
  status: number;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  customer_type_id: string;
  primaryEmail: string;
  secondaryEmail: string;
  primaryContact: string;
  contactPersonName: string;
  secondaryContact: string;
  whatsappNumber: string;
  password: string;
  confirmPassword: string;
  isKycDone: boolean;
  showAdharConfiramtionModal: boolean;
  isPartOfCompany: boolean;
  isNotify: boolean;
  panCardNumber: string;
  doc_type_name: string;
  otp: string;
  companyName: string;
  diamondHub: string;
  companyAddress: string;
  companyEmail: string;
  companyContact: string;
  contactPersonEmail: string;
  contactPersonPhone: string;
}

export interface CompanyInformationInterface {
  companyName: string;
  companyAddress: string;
  companyEmail: string;
  companyContact: string;
  contactPersonName: string;
  contactPersonEmail: string;
  contactPersonPhone: string;
}

export interface KYCInterface {
  kycType: string;
  kycTypeNumber: string;
}
