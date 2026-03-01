import { useCurrencyConverter } from '@/hooks';
import { CartTotals } from '@/interfaces';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useCart } from '../../context/CartContext';
import { DISCOUNT_RATES } from '../../constants';
import VoucherInput from '../voucher/VoucherInput';

export default function CartSummary() {
  const { cartItems, isVoucherValid } = useCart();
  const { convertUsdToPhp, loading: currencyLoading } = useCurrencyConverter();
  
  const summary: CartTotals = useMemo(() => {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discount = isVoucherValid ? subtotal * DISCOUNT_RATES.KULAY10 : 0;
    const total = subtotal - discount;
    
    return {
      subtotal,
      discount,
      total,
    };
  }, [cartItems, isVoucherValid]);
  
  const phpSubtotal = convertUsdToPhp(summary.subtotal);
  const phpTotal = convertUsdToPhp(summary.total);
  
  return (
    <View className="bg-white rounded-t-2xl shadow-lg mx-0 mb-0 p-6 border border-gray-100">
      <Text className="text-lg font-bold text-slate-800 mb-3">
        Order Summary
      </Text>
      
      <VoucherInput />
      
      <View className="space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className="text-sm text-slate-600">Subtotal</Text>
          <Text className="text-sm text-slate-800 font-semibold">
            {currencyLoading ? '...' : `₱${phpSubtotal.toFixed(2)}`}
          </Text>
        </View>
        
        {summary.discount > 0 && (
          <View className="flex-row justify-between items-center">
            <Text className="text-sm text-emerald-600">Discount</Text>
            <Text className="text-sm text-emerald-600 font-semibold">
              -{currencyLoading ? '...' : `₱${convertUsdToPhp(summary.discount).toFixed(2)}`}
            </Text>
          </View>
        )}
        
        <View className="pt-4 border-t border-gray-200">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold text-slate-800">Total</Text>
            <Text className="text-2xl font-black text-emerald-600">
              {currencyLoading ? '...' : `₱${phpTotal.toFixed(2)}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}