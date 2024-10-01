import { NavigationProp } from '@react-navigation/native'
import React from 'react'

import PlaceForm from '~/components/places/PlaceForm'
import { RootStackParamList } from '~/navigation'

export default function AddPlace({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
  const createPlaceHandler = (title: string, imageUri: string, location: { latitude: number; longitude: number }) => {
    navigation.navigate('AllPlaces', {
      place: {
        id: `${new Date().toString()} - ${Math.random()}`,
        title,
        imageUri,
        address: 'No Address',
        location
      }
    })
  }
  return <PlaceForm createPlaceHandler={createPlaceHandler} />
}
