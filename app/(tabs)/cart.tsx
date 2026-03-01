import { CartList, CartSummary, EmptyCart } from '@/components';
import { Product } from '@/interfaces';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

const mockCartItems: Product[] = [
  {
    id: 1,
    productName: "Fjallraven - Foldsack No. 1 Backpack",
    description: "Your perfect pack for everyday use and walks in the forest.",
    price: 109.95,
    quantity: 2,
  },
  {
    id: 2,
    productName: "Mens Casual Premium Slim Fit T-Shirts",
    description: "Slim-fitting style, contrast raglan long sleeve.",
    price: 22.3,
    quantity: 1,
  },
];

export default function CartTab() {
  const [cartItems] = useState<Product[]>(mockCartItems);

  return (
    <View className="flex-1 bg-gray-50">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <View className="flex-1">
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            <CartList items={cartItems} />
            <View className="h-32" />
          </ScrollView>
          <View className="absolute bottom-0 left-0 right-0 bg-gray-50 pt-2">
            <CartSummary items={cartItems} />
          </View>
        </View>
      )}
    </View>
  );
}