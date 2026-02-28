import { Text, View } from 'react-native';

export default function ProductsTab() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-black">
        Products Tab
      </Text>
      <Text className="text-lg text-gray-600 mt-2">
        Product listings will go here
      </Text>
    </View>
  );
}