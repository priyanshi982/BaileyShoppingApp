import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {setFavProduct} from '../../redux/reducers/favReducer';

const NewArrivals = props => {
  const {navigation, renderData, heading, isFav = false} = props || {};
  const dispatch = useDispatch();

  const navigateToProductPage = () => {
    navigation.navigate('ProductPage');
  };

  const onPressFav = item => {
    dispatch(setFavProduct(item));
  };

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
        <TouchableOpacity
          onPress={() => onPressFav(item)}
          style={styles.favContainer}>
          <MaterialIcons
            name={isFav ? 'favorite' : 'favorite-border'}
            style={styles.favStyle}
          />
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
