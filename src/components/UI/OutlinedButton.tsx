import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, Pressable } from 'react-native'

type Props = {
  icon: keyof typeof Ionicons.glyphMap
  children: string
  onPress: () => void
}

export default function OutlinedButton({ icon, children, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className='px-3 py-2 m-1 justify-center items-center border-[1px] border-primary500 flex-row active:opacity-70'
    >
      <Ionicons name={icon} size={18} color='#1aacf0' className='mr-2' />
      <Text className='text-primary500'>{children}</Text>
    </Pressable>
  )
}
