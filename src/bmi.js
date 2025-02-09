import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './style';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      Alert.alert('Input Error', 'Please enter both weight and height!');
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0 || weightNum <= 0) {
      Alert.alert('Invalid Input', 'Please enter valid positive numbers.');
      return;
    }

    // Calculate BMI as a number and set it
    const bmiValue = weightNum / (heightNum * heightNum);
    const bmiValueFixed = bmiValue.toFixed(2); // Keep this for display as string
    const bmiValueNumber = parseFloat(bmiValueFixed); // Use number for conditions

    setBmi(bmiValueFixed);

    let category = '';
    if (bmiValueNumber < 18.5) {
      category = 'Underweight';
    } else if (bmiValueNumber >= 18.5 && bmiValueNumber < 24.9) {
      category = 'Normal weight';
    } else if (bmiValueNumber >= 25 && bmiValueNumber < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }

    setCategory(category);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>

      {bmi && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI: {bmi}</Text>
          <Text style={styles.resultText}>Category: {category}</Text>
        </View>
      )}
    </View>
  );
};

export default BMICalculator;
