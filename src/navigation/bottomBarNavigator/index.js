import LoginPage from '../../components/loginPage';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../../components/HomePage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductPage from '../../components/productPage';

const Tab = createBottomTabNavigator();

export const BottomBarNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Settings" component={LoginPage} />
        <Tab.Screen name="ProductPage" component={ProductPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
