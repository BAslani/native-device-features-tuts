import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import PlaceItem from './PlaceItem'

import { RootStackParamList } from '~/navigation'
import { Place } from '~/types/types'

type Props = {
  places: Place[]
}

export default function PlacesList({ places }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const selectPlaceHandler = (id: string) => {
    navigation.navigate('PlaceDetails', { placeId: id })
  }

  if (!places || places.length === 0) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text className='text-base text-primary100'>No places found</Text>
      </View>
    )
  }
  return (
    <FlatList
      className='m-6 w-[90%]'
      data={places}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onSelect={selectPlaceHandler} />}
    />
  )
}
