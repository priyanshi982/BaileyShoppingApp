import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import HomeHeader from '../homeHeader';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import NewArrivals from '../newArrivals';
import {newArrivedProducts} from '../../data';
import HomeBanner from '../homeBanner';
import {
  AppOpenAd,
  TestIds,
  AdEventType,
  BannerAd,
  BannerAdSize,
} from 'react-native-google-mobile-ads';

const HomePage = props => {
  const {navigation} = props || {};

  // const adUnitId = __DEV__
  //   ? TestIds.APP_OPEN
  //   : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

  // const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
  //   keywords: ['fashion', 'clothing'],
  // });

  // // Preload an app open ad
  // appOpenAd.load();

  // // Show the app open ad when user brings the app to the foreground.
  // appOpenAd.show();

  return (
    <View style={styles.headerContainer}>
      <HomeHeader />

      <BannerAd
        unitId={TestIds.BANNER} // Replace with your actual Ad Unit ID in production
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />

      <ScrollView
        style={styles.ScrollContainer}
        contentContainerStyle={{backgroundColor: '#100d28'}}>
        <View>
          <TextInput
            style={styles.searchBar}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Search here"
            placeholderTextColor={'gray'}
            InputModeOptions="search"
          />
          <TouchableOpacity style={styles.searchIconContainer}>
            <EvilIcons name="search" style={styles.iconStyle} />
          </TouchableOpacity>
        </View>

        <HomeBanner renderData={newArrivedProducts} heading={'New Arrivals'} />

        <NewArrivals
          renderData={newArrivedProducts}
          heading={'New Arrivals'}
          navigation={navigation}
        />

        <HomeBanner renderData={newArrivedProducts} heading={'New Arrivals'} />

        <NewArrivals
          renderData={newArrivedProducts}
          heading={'New Arrivals'}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default HomePage;
