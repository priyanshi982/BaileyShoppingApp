import {StyleSheet} from 'react-native';
import {isIOS} from '../../helpers';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#100d28',
    flex: 1,
  },
  ScrollContainer: {
    backgroundColor: '#100d28',
    marginBottom: 20,
    overflow: 'visible',
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
    fontSize: 58,
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
  skipTxt: {
    fontSize: 18,
    textAlign: 'right',
    margin: 16,
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
  searchBar: {
    marginHorizontal: 20,
    height: 42,
    borderColor: 'white',
    borderRadius: 32,
    fontSize: 16,
    color: 'white',
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 24,
  },
  searchIconContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 36,
    paddingLeft: 12,
    marginTop: 10,
    lineHeight: 20,
  },
  iconStyle: {
    color: 'white',
    fontSize: 24,
  },
  imgStyle: {
    width: 350,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  listContainer: {
    marginLeft: 16,
    marginTop: 24,
    backgroundColor: 'white',
  },
});

export default styles;
