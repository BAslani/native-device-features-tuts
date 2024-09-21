import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import AddOlace from '../screens/AddPlace'
import AllPlaces from '../screens/AllPlaces'

import IconButton from '~/components/UI/IconButton'
import Map from '~/screens/Map'

export type RootStackParamList = {
  AllPlaces: undefined
  AddPlace: { pickedLatitude: number; pickedLongitude: number }
  Map: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#221c30'
  }
}

export default function RootStack() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer theme={myTheme}>
        <Stack.Navigator
          initialRouteName='AllPlaces'
          screenOptions={{
            headerStyle: { backgroundColor: '#1aacf0' },
            headerTintColor: '#221c30'
          }}
        >
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={tintColor || 'black'}
                  icon='add'
                  size={24}
                  onPress={() => {
                    navigation.navigate('AddPlace')
                  }}
                />
              )
            })}
          />
          <Stack.Screen name='AddPlace' component={AddOlace} options={{ title: 'Add a new Place' }} />
          <Stack.Screen name='Map' component={Map} options={{ title: 'Map' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
