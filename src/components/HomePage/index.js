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

const HomePage = props => {
  const {navigation} = props || {};

  return (
    <View style={styles.headerContainer}>
      <HomeHeader />

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
