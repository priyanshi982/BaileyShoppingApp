import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NewArrivals = props => {
  const {navigation, renderData, heading} = props || {};

  const navigateToProductPage = () => {
    navigation.navigate('ProductPage');
  };

  const onPress = () => {};

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.listContainer}
        onPress={navigateToProductPage}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: item?.imageSource,
          }}
        />
        <TouchableOpacity style={styles.favContainer}>
          <MaterialIcons name="favorite" style={styles.favIcon(true)} />
        </TouchableOpacity>

        <Text style={styles.titleTxt}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingTxt}>{heading}</Text>
      <FlatList
        data={renderData}
        renderItem={({item}) => renderItem(item)}
        horizontal
      />
    </View>
  );
};

export default NewArrivals;
