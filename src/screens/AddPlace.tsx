import { NavigationProp } from '@react-navigation/native'
import React from 'react'

import PlaceForm from '~/components/places/PlaceForm'
import { RootStackParamList } from '~/navigation'

export default function AddPlace({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
  const createPlaceHandler = (title: string, imageUri: string, location: { latitude: number; longitude: number }) => {
    console.log('Title:', title)
    console.log('Image:', imageUri)
    console.log('Location:', location)
    navigation.navigate('AllPlaces')
  }
  return <PlaceForm createPlaceHandler={createPlaceHandler} />
}
