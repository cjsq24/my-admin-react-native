import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { Center, Box, Text } from 'native-base'
import MapView, { Marker } from 'react-native-maps';

export default function Location({ navigation, route }) {
   const { state } = route.params
   const [coordinates, setCoordinates] = useState({
      latitude: (state?.latitude) ? parseFloat(state.latitude) : 9.529727905405265,
      longitude: (state.longitude) ? parseFloat(state.longitude) : -69.23165488483751,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034
   })


   return (
      <Center flex={1}>
         <Text>Hola</Text>
         <MapView
            style={StyleSheet.absoluteFillObject}
            region={coordinates}>
            <Marker
               coordinate={coordinates}
               title='Titulo de market'
               image={require('../../assets/images/marker.png')}
            />
         </MapView>
      </Center>
   );
}