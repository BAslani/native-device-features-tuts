import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import React, { useState } from 'react'
import { Alert, Image, Text, View } from 'react-native'

import OutlinedButton from '../UI/OutlinedButton'

export default function ImagePicker() {
  const [pickedImage, setPickedImage] = useState<string | null>(null)
  const [cameraPermissionInformation, requestCameraPermission] = useCameraPermissions()

  const verifyCameraPermission = async () => {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCameraPermission()
      return permissionResponse.granted
    }

    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert('Camera Permission Denied', 'Please enable camera permission to use this feature')
      return false
    }

    return true
  }

  const takeImageHandler = async () => {
    const hasPermission = await verifyCameraPermission()
    if (!hasPermission) return
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    })
    if (!image.canceled) {
      setPickedImage(image.assets[0].uri)
    }
  }
  return (
    <View className='gap-2'>
      <View className='w-full h-[200px] items-center justify-center bg-primary100 rounded'>
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} className='w-full h-full' />
        ) : (
          <View>
            <Text>No image picked</Text>
          </View>
        )}
      </View>
      <OutlinedButton icon='camera' onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  )
}
