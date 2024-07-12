import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hook/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { useRouter } from 'expo-router';
const Nearbyjobs = () => {
  router = useRouter()
  const { data, isLoading, error } = useFetch('search', {
    query: 'React Native Developer',
    pages: 1,
    num_pages: 1,
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Nearby Jobs </Text>
        <TouchableOpacity >
          <Text style={styles.headerBtn}> Show All </Text>
        </TouchableOpacity>
      </View>

      {isLoading ?
        (<ActivityIndicator animating={true} color={COLORS.gray} size={SIZES.xLarge} />)
        : error ? (<Text> Something went wrong</Text>) :
          data.map((job) => (
          <NearbyJobCard
            key={`nearby-jobs- ${job?.job_id}`}
            job={job}
            handleNavigator = {() => router.push(`/job-details/${job.job_id}`)}
          />
          ))}
    </View>
  )
}

export default Nearbyjobs