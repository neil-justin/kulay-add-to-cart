import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { VOUCHER_CODES } from '../../constants';
import { useCart } from '../../context/CartContext';

export default function VoucherInput() {
  const [inputCode, setInputCode] = useState('');
  const [error, setError] = useState('');
  const { voucherCode, isVoucherValid, applyVoucher, removeVoucher } = useCart();

  const handleApplyVoucher = () => {
    const success = applyVoucher(inputCode.trim());
    if (success) {
      setInputCode('');
      setError('');
    } else {
      setError(`Invalid voucher code. Try "${VOUCHER_CODES.KULAY10}"`);
    }
  };

  const handleRemoveVoucher = () => {
    removeVoucher();
    setInputCode('');
    setError('');
  };

  return (
    <View className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
      <Text className="text-lg font-semibold text-gray-800 mb-3">
        Voucher Code
      </Text>
      
      {isVoucherValid ? (
        <View className="flex-row items-center justify-between">
          <View className="flex-1 flex-row items-center">
            <Ionicons name="checkmark-circle" size={20} color="#059669" />
            <Text className="text-green-600 font-medium ml-2">
              {voucherCode} applied (10% off)
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleRemoveVoucher}
            className="bg-red-500 px-3 py-2 rounded-md ml-3"
          >
            <Text className="text-white font-medium">Remove</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View className="flex-row mb-2">
            <TextInput
              value={inputCode}
              onChangeText={setInputCode}
              placeholder="Enter voucher code"
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 bg-gray-50"
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={handleApplyVoucher}
              disabled={!inputCode.trim()}
              className={`px-4 py-2 rounded-r-md ${
                inputCode.trim()
                  ? 'bg-blue-500'
                  : 'bg-gray-300'
              }`}
            >
              <Text className={`font-medium ${
                inputCode.trim() ? 'text-white' : 'text-gray-500'
              }`}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
          
          {error && (
            <Text className="text-red-500 text-sm mt-1">
              {error}
            </Text>
          )}
          
          
          <Text className="text-gray-500 text-sm mt-1">
            Use code "{VOUCHER_CODES.KULAY10}" for 10% off
          </Text>
        </View>
      )}
    </View>
  );
};