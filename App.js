/**
 * MainApp
 *
 * @format
 */

import React from 'react';
import {BottomBarNavigator} from './src/navigation/bottomBarNavigator';
import {useSelector} from 'react-redux';

const App = () => {
  const {loginData} = useSelector(state => state?.userLoginReducer);
  // const isLoginPage = data?.isLogined;

  console.log('data-->', loginData);
  return (
    <>
      {/* {!isLoginPage && <StackNavigator />} */}
      <BottomBarNavigator />
    </>
  );
};

export default App;
