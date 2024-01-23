import { StyleSheet, Image, View, Dimensions } from 'react-native'
import React from 'react'

const maps_api_key = process.env.EXPO_MAPS_API_KEY

const MapPreview = ({ location }) => {
  console.log(location)
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=300x300&maptype=roadmap&markers=color:red%7Clabel:I%7C${location.latitude},${location.longitude},${location.latitude + 0.01},${location.longitude}&path=color:0x0000ff%7C${location.latitude},${location.longitude}%7C${location.latitude + 0.01},${location.longitude}&key=${maps_api_key}`
  return (
    <View style={styles.mapPreview}>
      <Image
        style={styles.mapImage}
        source={{ uri: mapPreviewUrl }}
      />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapImage: {
    width: 300,
    height: 300,
  }
})