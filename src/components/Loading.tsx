import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

interface LoadingProps {
  message?: string;
}

export default function Loading({ message = 'Loading...' }: LoadingProps) {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#007AFF" />
      <Text className="text-gray-600 mt-2">{message}</Text>
    </View>
  );
}