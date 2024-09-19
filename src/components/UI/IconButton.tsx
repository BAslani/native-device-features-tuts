import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable } from 'react-native'

type Props = {
  icon: keyof typeof Ionicons.glyphMap
  size: number
  color: string
  onPress: () => void
}

export default function IconButton({ icon, size, color, onPress }: Props) {
  return (
    <Pressable className='p-2 justify-center items-center active:opacity-70' onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} onPress={onPress} />
    </Pressable>
  )
}
