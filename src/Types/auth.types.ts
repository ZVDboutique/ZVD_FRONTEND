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
  primaryEmail: string;
  secondaryEmail: string;
  primaryContact: string;
  secondaryContact: string;
  whatsAppNumber: string;
  password: string;
  confirmPassword: string;
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
