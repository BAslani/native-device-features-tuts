import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

import { Place } from '~/types/types'

type Props = {
  place: Place
  onSelect: () => void
}

export default function PlaceItem({ place, onSelect }: Props) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  )
}
