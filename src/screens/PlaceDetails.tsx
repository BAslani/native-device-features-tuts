import { NavigationProp, RouteProp } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { getPlaces } from 'utils/storage'

import OutlinedButton from '~/components/UI/OutlinedButton'
import { RootStackParamList } from '~/navigation'
import { Place } from '~/types/types'

export default function PlaceDetails({
  route,
  navigation
}: {
  route: RouteProp<RootStackParamList, 'PlaceDetails'>
  navigation: NavigationProp<RootStackParamList>
}) {
  const selectedPlaceId = route.params.placeId
  const [placeDetails, setPlaceDetails] = useState<Place | null>(null)

  const showOnMapHandler = () => {
    if (placeDetails) {
      navigation.navigate('Map', {
        initialLatitude: placeDetails?.location.latitude,
        initialLongitude: placeDetails?.location.longitude
      })
    }
  }

  useEffect(() => {
    const loadPlace = async () => {
      const places = await getPlaces()
      const selectedPlace = places.find((place: Place) => place.id === selectedPlaceId)
      setPlaceDetails(selectedPlace)
    }
    loadPlace()
  }, [selectedPlaceId])

  return (
    <ScrollView>
      <Image source={{ uri: placeDetails?.imageUri }} className='w-full min-h-[300px] h-[35%]' />
      <View className='justify-center items-center'>
        <View className='p-5'>
          <Text className='color-primary500 text-center font-bold text-base'>{placeDetails?.address}</Text>
        </View>
        <OutlinedButton icon='map' onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  )
}
