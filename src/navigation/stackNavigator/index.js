import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../../components/loginPage';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../../components/HomePage';
import ProductPage from '../../components/productPage';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
