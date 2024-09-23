import React from 'react'
import { Text, Pressable } from 'react-native'

type Props = {
  onPress: () => void
  children: React.ReactNode
}

export default function Button({ onPress, children }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className='active:opacity-70 px-3 py-2 m-1 bg-primary800 shadow-sm shadow-black rounded-sm'
    >
      <Text className='text-center text-base text-primary50'>{children}</Text>
    </Pressable>
  )
}
