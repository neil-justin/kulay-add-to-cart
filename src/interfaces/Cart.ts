export interface CartItem {
  id: number;
  productName: string;
  description: string;
  price: number;
  quantity: number;
}

export interface CartSummary {
  subtotal: number;
  discount: number;
  total: number;
}