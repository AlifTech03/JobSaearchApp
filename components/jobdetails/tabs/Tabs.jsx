import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'


const TabButton = ({name, activeTab, handlePress}) => (
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={handlePress}>
    <Text style= { styles.btnText(name, activeTab)}> {name} </Text>
  </TouchableOpacity>
);

const Tabs = ({tabs, activeTab, setactiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({item}) => (
          <TabButton
            name = {item}
            activeTab={ activeTab}
            handlePress= {() => setactiveTab(item)}
          />
        )}
        keyExtractor={(item) => item}
        horizontal = {true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle = {{
          columnGap: SIZES.small
        }}
      />
    </View>
  )
}

export default Tabs