import { NavigationProp } from '@react-navigation/native'
import React from 'react'

import PlaceForm from '~/components/places/PlaceForm'
import { RootStackParamList } from '~/navigation'

export default function AddPlace({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
  const createPlaceHandler = (
    title: string,
    imageUri: string,
    address: string,
    location: { latitude: number; longitude: number }
  ) => {
    console.log('TITLE: ', title)
    console.log('IMAGE: ', imageUri)
    console.log('ADDRESS: ', address)
    console.log('LOCATION: ', location)

    navigation.navigate('AllPlaces', {
      place: {
        id: `${new Date().toString()} - ${Math.random()}`,
        title,
        imageUri,
        address,
        location
      }
    })
  }
  return <PlaceForm createPlaceHandler={createPlaceHandler} />
}
