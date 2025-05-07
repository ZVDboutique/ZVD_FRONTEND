export interface OrderTransactionData {
  id?: number;
  order_id: string;
  buyer_name: string;
  diamond: string;
  qty: string;
  date: string;
  price: string;
  status: string;
}

export interface OrderTransactionRowData {
  id: number;
  order_id: string;
  buyer_name: string;
  diamond: string;
  qty: string;
  date: string;
  price: string;
  status: string;
}
