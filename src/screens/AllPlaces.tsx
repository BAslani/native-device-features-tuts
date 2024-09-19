import React from 'react'

import PlacesList from '~/components/places/PlacesList'

// type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'AddPlace'>

export default function AllPlaces() {
  // const navigation = useNavigation<OverviewScreenNavigationProps>()

  return <PlacesList places={[]} />
}
