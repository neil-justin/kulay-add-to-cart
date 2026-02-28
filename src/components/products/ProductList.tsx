import { Loading, Error } from '../';
import { useProducts } from '@/hooks';
import React from 'react';
import { FlatList } from 'react-native';
import ProductCard from './ProductCard';

export default function ProductList() {
  const { products, loading, error } = useProducts();

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
      renderItem={({ item }) => <ProductCard product={item} />}
      className="flex-1 bg-gray-50"
      contentContainerStyle={{ paddingTop: 16, paddingBottom: 16 }}
      showsVerticalScrollIndicator={true}
    />
  );
}