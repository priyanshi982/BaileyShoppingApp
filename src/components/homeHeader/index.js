import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const HomeHeader = props => {
  const {navigation} = props || {};
  return (
    <View style={styles.header}>
      <Image
        style={styles.logoStyle}
        source={require('../../assets/images/wideLogo.png')}
      />
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="favorite"
          style={{color: 'white', margin: 12, fontSize: 28}}
        />
        <MaterialCommunityIcons
          name="cart-heart"
          style={{color: 'white', fontSize: 30}}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
