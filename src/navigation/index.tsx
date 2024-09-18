import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AddOlace from '../screens/AddPlace';
import AllPlaces from '../screens/AllPlaces';

export type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AllPlaces">
        <Stack.Screen name="AllPlaces" component={AllPlaces} />
        <Stack.Screen name="AddPlace" component={AddOlace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
