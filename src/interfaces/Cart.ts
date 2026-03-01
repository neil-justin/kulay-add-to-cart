import { Product } from './Product';

export type CartItem = Product & {
  quantity: number;
};

export interface CartTotals {
  subtotal: number;
  discount: number;
  total: number;
}