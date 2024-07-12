import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import React, { useState, useCallback } from "react";

// import SafeAreaView from "../../SafeAreaView";
import {
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  ScreenHeaderBtn,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import useFetch from "../../hook/useFetch";


const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, error } = useFetch("job-details", {
    job_id: params.id,
  });
  const tabs = ["About", "Qualifications", "Responsabilities"];
  const [activeTab, setactiveTab] = useState(tabs[0]);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [data]);

  const displayTabContent = () => {
    switch(activeTab){
      case "About":

        break;
      case "Qualifications":
        return <Specifics
            title="Qualifications"
            points = {'tingitng'}
        />
        
      case "Responsabilities":
        break;
      default:

        
    }


  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension={"60%"}
              handlepress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension={"60%"} />
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        ) : error ? (
          <Text> Something Went Wrong !</Text>
        ) : data.length === 0 ? (
          <Text> No Data Available !!!</Text>
        ) : (
          <View
            style={{
              padding: SIZES.small,
            }}
          >
            <Company
              company_logo={data[0].employer_logo}
              job_title={data[0].job_title}
              location={data[0].job_country}
              company_name={data[0].employer_name}
            />

            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setactiveTab={setactiveTab}
            />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default JobDetails;
