import { CartItem, Product } from '@/interfaces';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { VOUCHER_CODES } from '../constants';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  voucherCode: string;
  isVoucherValid: boolean;
  applyVoucher: (code: string) => boolean;
  removeVoucher: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [voucherCode, setVoucherCode] = useState<string>('');
  const [isVoucherValid, setIsVoucherValid] = useState<boolean>(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const applyVoucher = (code: string): boolean => {
    if (code.toLowerCase() === VOUCHER_CODES.KULAY10.toLowerCase()) {
      setVoucherCode(code);
      setIsVoucherValid(true);
      return true;
    }
    setVoucherCode('');
    setIsVoucherValid(false);
    return false;
  };

  const removeVoucher = () => {
    setVoucherCode('');
    setIsVoucherValid(false);
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    voucherCode,
    isVoucherValid,
    applyVoucher,
    removeVoucher,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}