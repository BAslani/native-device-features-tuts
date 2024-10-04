import AsyncStorage from '@react-native-async-storage/async-storage'

import { Place } from '~/types/types'

export const addPlace = async (place: Place) => {
  const places = await AsyncStorage.getItem('places')
  if (places) {
    const parsedPlaces = JSON.parse(places) as Place[]
    if (!parsedPlaces.find((p: Place) => p.id === place.id)) {
      parsedPlaces.push(place)
    }
    await AsyncStorage.setItem('places', JSON.stringify(parsedPlaces))
  } else {
    await AsyncStorage.setItem('places', JSON.stringify([place]))
  }
}

export const getPlaces = async () => {
  const places = await AsyncStorage.getItem('places')
  if (places) {
    return JSON.parse(places)
  }
  return []
}
