import { NavigationProp, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location'
import React, { useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import OutlinedButton from '../UI/OutlinedButton'

import { RootStackParamList } from '~/navigation'

export default function LocationPicker() {
  const [locationPermissionInformation, requestLocationPermission] = useForegroundPermissions()
  const [pickedLocation, setPickedLocation] = useState<{ latitude: number; longitude: number } | null>(null)
  const naviatetion = useNavigation<NavigationProp<RootStackParamList>>()
  const route = useRoute<RouteProp<RootStackParamList, 'AddPlace'>>()
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = { latitude: route.params.pickedLatitude, longitude: route.params.pickedLongitude }
      setPickedLocation({
        latitude: mapPickedLocation.latitude,
        longitude: mapPickedLocation.longitude
      })
    }
  }, [route, isFocused])

  const veryfyLocationPermission = async () => {
    if (locationPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestLocationPermission()
      return permissionResponse.granted
    }

    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert('Location Permission Denied', 'Please enable location permission to use this feature')
      return false
    }

    return true
  }

  const getLocationHandler = async () => {
    const hasPermission = await veryfyLocationPermission()
    if (!hasPermission) return
    const location = await getCurrentPositionAsync()
    setPickedLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    })
  }
  const pickLocationOnMapHandler = () => {
    naviatetion.navigate('Map')
  }

  return (
    <View className='gap-2'>
      {pickedLocation ? (
        <View className='w-full h-[200px] items-center justify-center bg-primary100 rounded'>
          <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
              latitude: pickedLocation.latitude,
              longitude: pickedLocation.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
          >
            <Marker coordinate={{ latitude: pickedLocation.latitude, longitude: pickedLocation.longitude }} />
          </MapView>
        </View>
      ) : (
        <View className='w-full h-[200px] items-center justify-center bg-primary100 rounded'>
          <Text>No location picked</Text>
        </View>
      )}

      <View className='flex-row justify-around items-center'>
        <OutlinedButton onPress={getLocationHandler} icon='location'>
          Locate User
        </OutlinedButton>
        <OutlinedButton onPress={pickLocationOnMapHandler} icon='map'>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  )
}
