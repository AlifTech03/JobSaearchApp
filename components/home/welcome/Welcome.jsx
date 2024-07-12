import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { TextInput } from 'react-native-gesture-handler'
import { SIZES, icons } from '../../../constants'

const Welcome = () => {
  const [activeJob, setActiveJob] = useState('Full-Time')
  const router = useRouter();
  const jobTypes = ['Full-Time', 'Part-Time', 'Contractor', 'Konorokom ailo']
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Alif</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJob, item)} 
              onPress={() => {
                setActiveJob(item)
                
                router.push(`search/${item}`)
            }}>
              <Text style={styles.tabText(activeJob, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{
            columnGap: SIZES.small,
            paddingHorizontal: SIZES.medium,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Welcome