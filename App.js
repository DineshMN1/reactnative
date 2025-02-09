import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import BMICalculator from './src/bmi';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <BMICalculator />
    </SafeAreaView>
  );
};

export default App;
