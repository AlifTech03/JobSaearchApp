import { View, Text } from 'react-native'
import React from 'react'
import { useRouter, Stack } from 'expo-router';
import { COLORS, SIZES, images, icons, } from '../constants/index';
import {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
} from '../components/index'
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';



const Home = () => {
  const router = useRouter();
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.lightWhite,
    }}>
      <StatusBar backgroundColor={COLORS.lightWhite} />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite
          },
          headerTitle: '',
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn
            iconUrl={icons.menu}
            dimension={'60%'} />,

          headerRight: () => <ScreenHeaderBtn
            iconUrl={images.profile}
            dimension={'100%'} />
        }}

      />
      <ScrollView showsVerticalScrollIndicator={false}
        style={{ flex: 1}}
      >
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </ScrollView>
    </View>
  )
}

export default Home