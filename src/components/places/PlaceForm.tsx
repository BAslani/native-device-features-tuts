import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState('')

  const changeTitleHandler = (text: string) => {
    setEnteredTitle(text)
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
    </ScrollView>
  )
}
