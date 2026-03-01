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
          <View className="flex-1">
            <CartList items={cartItems} />
          </View>
          <View className="bg-gray-50 max-h-[40vh] sm:max-h-[30vh]">
            <ScrollView showsVerticalScrollIndicator={true} bounces={false}>
              <CartSummary />
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
}