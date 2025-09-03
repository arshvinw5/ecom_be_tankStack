import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Details() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Details {id}</Text>
    </View>
  );
}
