import React, {useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

const SignUpPage = props => {
  const {modalVisible, setModalVisible, txt = 'false', signUp} = props || {};

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.headerContainer}>
        <View style={styles.availableTitle}>
          <Text style={styles.pointStyle}>{txt}</Text>
        </View>

        <View style={styles.trialContainer}>
          <Text style={styles.loginDetails}>SignUp Details</Text>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Email or Username"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Password"
            keyboardType="visible-password"
          />

          <TouchableOpacity style={styles.btn} onPress={signUp}>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SignUpPage;
