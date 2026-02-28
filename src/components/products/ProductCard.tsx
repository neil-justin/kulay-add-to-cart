import { useCurrencyConverter } from '@/hooks';
import { Product } from '@/interfaces';
import React from 'react';
import { Text, View } from 'react-native';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { convertUsdToPhp, loading: currencyLoading } = useCurrencyConverter();
  
  const phpPrice = convertUsdToPhp(product.price);
  
  return (
    <View className="bg-white rounded-2xl shadow-lg mx-auto mb-6 p-6 border border-gray-100 max-w-sm w-full web:w-1/2 web:max-w-none">
      <View>
        <Text 
          className="text-lg font-bold text-slate-800 mb-3" 
          numberOfLines={2}
        >
          {product.productName}
        </Text>
        
        <Text 
          className="text-sm text-slate-600 mb-4" 
          numberOfLines={3}
        >
          {product.description}
        </Text>
        
        <View className="pt-4 border-t border-gray-200">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-2xl font-black text-emerald-600">
                {currencyLoading ? '...' : `₱${phpPrice.toFixed(2)}`}
              </Text>
            </View>
            
            <View className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-5 py-3 cursor-pointer transition-colors duration-200">
              <Text className="text-white font-semibold text-sm">
                Add to Cart
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
