import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

import { Place } from '~/types/types'

type Props = {
  place: Place
  onSelect: (placeId: string) => void
}

export default function PlaceItem({ place, onSelect }: Props) {
  return (
    <Pressable
      onPress={() => onSelect(place.id)}
      className='flex flex-row items-start justify-between rounded-md my-3 bg-primary500 shadow active:opacity-90'
    >
      <Image source={{ uri: place.imageUri }} className='flex-[1] rounded-tl-md rounded-bl-md h-[100px]' />
      <View className='flex-[2] p-3'>
        <Text className='font-bold text-lg color-gray-700'>{place.title}</Text>
        <Text className='text-xs color-gray-700'>{place.address}</Text>
      </View>
    </Pressable>
  )
}
