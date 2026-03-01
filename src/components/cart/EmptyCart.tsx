import React from 'react';
import { Text, View } from 'react-native';

export default function EmptyCart() {
  return (
    <View className="flex-1 items-center justify-center px-6">
      <View className="bg-white rounded-2xl shadow-lg p-8 items-center border border-gray-100 max-w-xs w-full web:w-1/3 web:max-w-sm">
        <View className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center mb-6">
          <Text className="text-2xl">🛒</Text>
        </View>
        
        <Text className="text-xl font-bold text-slate-800 mb-3">
          Your cart is empty
        </Text>
        
        <Text className="text-sm text-slate-600 text-center">
          Add some products to your cart to see them here
        </Text>
      </View>
    </View>
  );
}