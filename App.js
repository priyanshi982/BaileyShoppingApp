/**
 * MainApp
 *
 * @format
 */

import React from 'react';
import {BottomBarNavigator} from './src/navigation/bottomBarNavigator';
import {Provider, useSelector} from 'react-redux';
// import mainStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {StackNavigator} from './src/navigation/stackNavigator';
import store from './src/redux/store';

const App = () => {
  // const {store, persistor} = mainStore;
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BottomBarNavigator />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
