import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '../components/Button';
import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'AddPlace'>;

export default function AllPlaces() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View className="flex-1 p-6">
      <Text>All Places</Text>
      <Button onPress={() => navigation.navigate('AddPlace')} title="Add Place" />
    </View>
  );
}
