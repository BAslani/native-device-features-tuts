import { RouteProp, useIsFocused } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'

import PlacesList from '~/components/places/PlacesList'
import { RootStackParamList } from '~/navigation'
import { Place } from '~/types/types'

export default function AllPlaces({ route }: { route: RouteProp<RootStackParamList, 'AllPlaces'> }) {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([])
  const isFocused = useIsFocused()
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces(currPlaces => [...currPlaces, route.params.place])
    }
  }, [isFocused, route])

  return <PlacesList places={loadedPlaces} />
}
