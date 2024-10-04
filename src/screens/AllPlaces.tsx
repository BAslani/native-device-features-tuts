import AsyncStorage from '@react-native-async-storage/async-storage'
import { RouteProp, useIsFocused } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { addPlace, getPlaces } from 'utils/storage'

import Button from '~/components/UI/Button'
import PlacesList from '~/components/places/PlacesList'
import { RootStackParamList } from '~/navigation'
import { Place } from '~/types/types'

export default function AllPlaces({ route }: { route: RouteProp<RootStackParamList, 'AllPlaces'> }) {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([])
  const isFocused = useIsFocused()

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('places')
      setLoadedPlaces([])
    } catch (e) {
      console.log(e)
    }

    console.log('Done.')
  }

  useEffect(() => {
    const loadPlaces = async () => {
      const places = await getPlaces()
      setLoadedPlaces(places)
    }

    loadPlaces()
  }, [])

  useEffect(() => {
    if (isFocused && route.params) {
      if (!loadedPlaces.find((p: Place) => p.id === route.params.place.id)) {
        setLoadedPlaces(currPlaces => [...currPlaces, route.params.place])
        addPlace(route.params.place)
      }
    }
  }, [isFocused, route])

  return (
    <View className='flex-1 items-center justify-center'>
      <PlacesList places={loadedPlaces} />
      {loadedPlaces.length > 0 && <Button onPress={removeValue}>clear</Button>}
    </View>
  )
}
