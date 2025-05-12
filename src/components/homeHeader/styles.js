import {StyleSheet} from 'react-native';
import {isIOS} from '../../helpers';

const styles = StyleSheet.create({
  logoStyle: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  header: {
    paddingTop: isIOS() ? 60 : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 12,
    paddingLeft: 10,
    backgroundColor: '#100d28',
    zIndex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
