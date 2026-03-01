import { useCart } from '@/context';
import React from 'react';
import { Text } from 'react-native';

export default function CartTabLabel() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  
  return (
    <Text style={{ fontSize: 10, textAlign: 'center' }}>
      Cart{totalItems > 0 && (
        <Text style={{ color: 'darkgreen', fontWeight: '600' }}>
          {' '}({totalItems})
        </Text>
      )}
    </Text>
  );
}