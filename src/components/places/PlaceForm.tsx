import React, { useCallback, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'
import Button from '../UI/Button'

type Props = {
  createPlaceHandler: (title: string, imageUri: string, location: { latitude: number; longitude: number }) => void
}

export default function PlaceForm({ createPlaceHandler }: Props) {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [pickedImage, setPickedImage] = useState<string | null>(null)
  const [pickedLocation, setPickedLocation] = useState<{ latitude: number; longitude: number } | null>(null)

  const changeTitleHandler = (text: string) => {
    setEnteredTitle(text)
  }

  const takeImageHandler = (imageUri: string) => {
    setPickedImage(imageUri)
  }

  const pickLocationHandler = useCallback((location: { latitude: number; longitude: number }) => {
    setPickedLocation(location)
  }, [])

  const savePlaceHandler = () => {
    if (enteredTitle && pickedImage && pickedLocation) {
      createPlaceHandler(enteredTitle, pickedImage, pickedLocation)
      setEnteredTitle('')
      setPickedImage(null)
      setPickedLocation(null)
    }
  }
  return (
    <ScrollView className='flex-1 p-6'>
      <View>
        <Text className='font-bold mb-1 text-primary700'>Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          className='my-2 px-1 py-2 text-base border-b-primary700 border-b-2 bg-primary100'
        />
      </View>
      <View className='gap-2'>
        <ImagePicker onImagePicked={takeImageHandler} />
        <LocationPicker onLocationPicked={pickLocationHandler} />
        <Button onPress={savePlaceHandler}>Add Place</Button>
      </View>
    </ScrollView>
  )
}
