import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch('search', {
    query: 'React Native Developer',
    pages: 1,
    num_pages: 1,
  })

  const handleCardPress = (item) => {

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Popular Jobs </Text>
        <TouchableOpacity >
          <Text style={styles.headerBtn}> Show All </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ?
          (<ActivityIndicator color={COLORS.primary} size={SIZES.xLarge}  />)
          : error ? (<Text> Something went wrong </Text>) : <FlatList
            data= {data}
            renderItem={({ item }) => (
              <PopularJobCard 
              item={item}
              selectedJob = {item.job_id}
              handleCardPress = {() => handleCardPress(item)}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              columnGap: SIZES.medium,
              paddingHorizontal: SIZES.medium
            }}
          />}
      </View>
    </View>
  )
}

export default Popularjobs