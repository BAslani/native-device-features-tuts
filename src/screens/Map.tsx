import { NavigationProp, RouteProp } from '@react-navigation/native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Alert } from 'react-native'
import MapView, { MapPressEvent, Marker } from 'react-native-maps'

import IconButton from '~/components/UI/IconButton'
import { RootStackParamList } from '~/navigation'

export default function Map({
  route,
  navigation
}: {
  route: RouteProp<RootStackParamList, 'Map'>
  navigation: NavigationProp<RootStackParamList>
}) {
  const initialLocation = route.params && {
    latitude: route.params.initialLatitude,
    longitude: route.params.initialLongitude
  }

  const [selectedLocation, setSelectedLocation] = useState<{ latitude: number; longitude: number } | null>(
    initialLocation || null
  )

  const region = {
    latitude: initialLocation?.latitude || 37.78825,
    longitude: initialLocation?.longitude || -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const selectLocationHandler = (e: MapPressEvent) => {
    if (initialLocation) return
    const lat = e.nativeEvent.coordinate.latitude
    const long = e.nativeEvent.coordinate.longitude
    setSelectedLocation({
      latitude: lat,
      longitude: long
    })
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert('No location selected', 'Please select a location on the map')
    } else {
      navigation.navigate('AddPlace', {
        pickedLatitude: selectedLocation.latitude,
        pickedLongitude: selectedLocation.longitude
      })
    }
  }, [navigation, selectedLocation])

  useLayoutEffect(() => {
    if (initialLocation) return
    navigation.setOptions({
      headerRight: ({ tintColor }: { tintColor: string }) => (
        <IconButton color={tintColor || 'black'} icon='save' size={24} onPress={savePickedLocationHandler} />
      )
    })
  }, [navigation, savePickedLocationHandler, initialLocation])

  return (
    <MapView style={{ flex: 1 }} initialRegion={region} onPress={selectLocationHandler}>
      {selectedLocation && (
        <Marker
          coordinate={{ latitude: selectedLocation.latitude, longitude: selectedLocation.longitude }}
          title='picked location'
        />
      )}
    </MapView>
  )
}
