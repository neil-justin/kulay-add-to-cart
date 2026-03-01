import { useCart } from '@/context';
import { CartItem } from '@/interfaces';
import React from 'react';
import { FlatList } from 'react-native';
import { ProductCard } from '../products';

interface CartListProps {
  items: CartItem[];
}

export default function CartList({ items }: CartListProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemoveItem = (item: CartItem) => {
    removeFromCart(item.id);
  };

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          showTrashIcon={true}
          showQuantityControls={true}
          showAddToCart={false}
          onQuantityChange={(newQuantity) => handleQuantityChange(item, newQuantity)}
          onRemove={() => handleRemoveItem(item)}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      className="flex-1 bg-gray-50"
      contentContainerStyle={{
        paddingTop: 16,
        paddingBottom: 16,
        paddingHorizontal: 16,
      }}
      showsVerticalScrollIndicator={true}
    />
  );
}