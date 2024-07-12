import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlepress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnContainer} onPress={handlepress}>
        <Image
          source={iconUrl}
          resizeMode='cover'
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ScreenHeaderBtn