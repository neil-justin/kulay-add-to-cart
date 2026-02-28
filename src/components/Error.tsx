import React from 'react';
import { Text, View } from 'react-native';

interface ErrorProps {
  title?: string;
  message: string;
}

export default function Error({ title = 'Error', message }: ErrorProps) {
  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-red-500 text-center text-lg font-semibold mb-2">
        {title}
      </Text>
      <Text className="text-gray-600 text-center">
        {message}
      </Text>
    </View>
  );
}