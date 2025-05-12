import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const HomeBanner = props => {
  const {navigation, renderData, heading, imgStyle} = props || {};

  const renderItem = item => {
    return (
      <TouchableOpacity style={styles.listContainer}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: item.imageSource,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={renderData}
        renderItem={({item}) => renderItem(item)}
        horizontal
        isAutoScrolling
        scrollIndicatorInsets={false}
      />
    </View>
  );
};

export default HomeBanner;
