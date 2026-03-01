import { CartList, CartSummary, EmptyCart } from '@/components';
import { useCart } from '@/context';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function CartTab() {
  const { cartItems } = useCart();

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
            <CartSummary />
          </View>
        </View>
      )}
    </View>
  );
}