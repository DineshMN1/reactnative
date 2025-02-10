import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import BMICalculator from './src/bmi';
import SplashScreen from './src/splash';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="BMICalculator" component={BMICalculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}