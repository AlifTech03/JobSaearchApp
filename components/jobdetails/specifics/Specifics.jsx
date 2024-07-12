import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = (
  {title, poinst}
) => {
  return (
    <View style= {styles.container}>
      <Text>{title}</Text>
    </View>
  )
}

export default Specifics