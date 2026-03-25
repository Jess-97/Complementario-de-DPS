import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StepScreen({ description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 5R del Reciclaje</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5E20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#C8E6C9',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});