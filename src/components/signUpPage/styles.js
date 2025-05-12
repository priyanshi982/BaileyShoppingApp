import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#002D62',
    flex: 1,
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
    fontSize: 32,
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
    backgroundColor: '#002D62',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingBottom: 8,
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
