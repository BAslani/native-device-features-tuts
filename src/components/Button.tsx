import React, { forwardRef } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ButtonProps = {
  title: string
} & TouchableOpacityProps

export const Button = forwardRef<TouchableOpacity, ButtonProps>(({ title, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity ref={ref} {...touchableProps} className={`${styles.button} ${touchableProps.className}`}>
      <Text className={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
})

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-2',
  buttonText: 'text-white text-md font-semibold text-center'
}
