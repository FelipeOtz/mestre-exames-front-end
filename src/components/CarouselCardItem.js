import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = 250
export const ITEM_WIDTH = 250

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: 310,
    position: 'relative',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 310,
  },
  body: {
    width: '100%',
    color: "#FFF",
    fontSize: 18,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: '5%',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default CarouselCardItem