export interface ClientListInterface {
  id: number;
  first_name: string;
  last_name: string;
  customer_type_id: number;
  primary_contact: string;
  secondary_contact: string;
  primary_email: string;
  secondary_email: string;
  whatsapp_number: string;
  pan_card_number: string;
  is_kyc_done: boolean;
  is_part_of_company: boolean;
  company_id: number;
  isvoid: boolean;
  created_at: string;
  updated_at: string;
  username: string;
  password: string;
  is_notify: boolean;
  isemailconfirmed: boolean;
  ismobilenoconfirmed: boolean;
}
