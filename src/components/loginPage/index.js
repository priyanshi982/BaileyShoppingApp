import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import SignUpPage from '../signUpPage';
import {useDispatch} from 'react-redux';
import {isUserLogin} from '../../redux/reducers/userLoginReducer';

const LoginPage = props => {
  const {navigation} = props || {};
  const [txt, setTxt] = useState('Welcome!');
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const signUp = () => {
    setTxt('Welcome Back!');
  };

  const skipClicked = () => {
    dispatch(isUserLogin({isLogined: true}));
    navigation?.navigate('HomePage');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {/* <Image
          style={styles.logoStyle}
          source={require('../../../assets/images/onlyLogo.png')}
        /> */}
        <TouchableOpacity onPress={skipClicked}>
          <Text style={styles.skipTxt}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.availableTitle}>
        <Text style={styles.pointStyle}>{txt}</Text>
      </View>

      <View style={styles.trialContainer}>
        <Text style={styles.loginDetails}>Login Details</Text>
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

        <TouchableOpacity onPress={signUp}>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={signUp}>
          <Text style={styles.btnTxt}>Login Details</Text>
        </TouchableOpacity>
        <View style={styles.signUp}>
          <Text style={styles.accTxt}>Does not have a account? </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.signUpTxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SignUpPage
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        txt={txt}
        signUp={signUp}
      />
    </View>
  );
};

export default LoginPage;
