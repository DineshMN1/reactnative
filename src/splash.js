import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BMICalculator from './bmi';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true); // State for showing the splash

  useEffect(() => {
    // Hide splash screen after 3 seconds
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return showSplash ? (
    <View style={styles.splash}>
      <Text style={styles.text}>Dinesh MN</Text>
    </View>
  ) : (
    <BMICalculator /> // Navigate to BMI Calculator after splash
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SplashScreen;
