import { Error, Loading } from '@/components';
import { useCart } from '@/context';
import { useProducts } from '@/hooks';
import React from 'react';
import { FlatList } from 'react-native';
import ProductCard from './ProductCard';

export default function ProductList() {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  

  if (loading) {
    return <Loading message="Loading products..." />;
  }

  if (error) {
    return <Error title="Error loading products" message={error} />;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard 
          product={item}
          showTrashIcon={false}
          showQuantityControls={false}
          showAddToCart={true}
          onAddToCart={() => addToCart(item)}
        />
      )}
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