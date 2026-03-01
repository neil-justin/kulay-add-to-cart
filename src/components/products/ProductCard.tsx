import { useCurrencyConverter } from '@/hooks';
import { Product } from '@/interfaces';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface ProductCardProps {
  product: Product;
  showTrashIcon?: boolean;
  showQuantityControls?: boolean;
  showAddToCart?: boolean;
  onQuantityChange?: (newQuantity: number) => void;
  onRemove?: () => void;
  onAddToCart?: () => void;
}

export default function ProductCard({ 
  product, 
  showTrashIcon = false,
  showQuantityControls = false,
  showAddToCart = false,
  onQuantityChange,
  onRemove,
  onAddToCart
}: ProductCardProps) {
  const { convertUsdToPhp, loading: currencyLoading } = useCurrencyConverter();
  
  const phpPrice = convertUsdToPhp(product.price);
  const quantity = product.quantity ?? 1;
  
  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && onQuantityChange) {
      onQuantityChange(newQuantity);
    }
  };
  
  return (
    <View className="bg-white rounded-2xl shadow-lg mx-auto mb-6 p-6 border border-gray-100 max-w-sm w-full web:w-1/2 web:max-w-none">
      <View className="flex-row justify-between items-start">
        <View className={`flex-1 ${showTrashIcon ? 'pr-4' : ''}`}>
          <Text 
            className="text-lg font-bold text-slate-800 mb-3" 
            numberOfLines={2}
          >
            {product.productName}
          </Text>
          
          <Text 
            className="text-sm text-slate-600 mb-4" 
            numberOfLines={showQuantityControls ? 1 : 3}
          >
            {product.description}
          </Text>
        </View>
        
        {showTrashIcon && (
          <View className="items-end">
            <Pressable 
              className="bg-red-600 hover:bg-red-700 rounded-xl p-2 cursor-pointer transition-colors duration-200"
              onPress={onRemove}
            >
              <Ionicons name="trash" size={16} color="white" />
            </Pressable>
          </View>
        )}
      </View>
      
      <View className="pt-4 border-t border-gray-200">
        {showQuantityControls ? (
          <View className="flex-row items-center justify-between">
            <Text className="text-2xl font-black text-emerald-600">
              {currencyLoading ? '...' : `₱${phpPrice.toFixed(2)}`}
            </Text>
            
            <View className="flex-row items-center">
              <Pressable 
                className={`rounded-lg w-8 h-8 items-center justify-center cursor-pointer transition-colors duration-200 ${
                  quantity <= 1 
                    ? 'bg-gray-100' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onPress={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Ionicons 
                  name="remove" 
                  size={18} 
                  color={quantity <= 1 ? '#9CA3AF' : '#374151'} 
                />
              </Pressable>
              
              <Text className="text-lg font-semibold text-slate-800 mx-4">
                {quantity}
              </Text>
              
              <Pressable 
                className="bg-emerald-600 hover:bg-emerald-700 rounded-lg w-8 h-8 items-center justify-center cursor-pointer transition-colors duration-200"
                onPress={() => handleQuantityChange(1)}
              >
                <Ionicons name="add" size={18} color="white" />
              </Pressable>
            </View>
          </View>
        ) : (
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-2xl font-black text-emerald-600">
                {currencyLoading ? '...' : `₱${phpPrice.toFixed(2)}`}
              </Text>
            </View>
            
            {showAddToCart && (
              <Pressable 
                className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-5 py-3 cursor-pointer transition-colors duration-200"
                onPress={onAddToCart}
              >
                <Text className="text-white font-semibold text-sm">
                  Add to Cart
                </Text>
              </Pressable>
            )}
          </View>
        )}
      </View>
    </View>
  );
}
