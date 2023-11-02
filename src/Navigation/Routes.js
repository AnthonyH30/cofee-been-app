import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Pages/Home'
import OnBoarding from '../Pages/OnBoarding';
import { Animated } from "react-native";

const av = new Animated.Value(0);
av.addListener(() => {return});

const Stack = createStackNavigator();

export default function MyNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="OnBoarding" component={OnBoarding} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}