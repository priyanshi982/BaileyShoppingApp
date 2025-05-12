import {StyleSheet} from 'react-native';
import {isIOS} from '../../helpers';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#100d28',
    flex: 1,
    paddingTop: isIOS() ? 30 : 0,
  },
  logoStyle: {
    width: 50,
    height: 90,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 16,
    marginLeft: 6,
  },
  availableTitle: {
    marginTop: 52,
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  trialContainer: {
    flex: 1,
    marginTop: 8,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: 'white',
    padding: 12,
  },
  input: {
    height: 52,
    marginVertical: 12,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
  },
  pointStyle: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'ariel',
  },
  loginDetails: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'ariel',
    marginVertical: 24,
  },
  forgotPass: {
    fontSize: 12,
    color: '#002D62',
    fontFamily: 'ariel',
    textAlign: 'right',
  },
  btn: {
    height: 52,
    marginVertical: 12,
    marginTop: 32,
    backgroundColor: '#100d28',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipTxt: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'ariel',
  },
  btnTxt: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'ariel',
  },
  signUp: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: isIOS() ? 20 : 8,
  },
  accTxt: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'ariel',
  },
  signUpTxt: {
    fontSize: 16,
    color: '#002D62',
    fontFamily: 'ariel',
  },
});

export default styles;
