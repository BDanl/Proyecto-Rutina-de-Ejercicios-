import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FullBodyRoutine = () => {
  return (
    <View style={styles.container}>
      <Text>Full Body Routine</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default FullBodyRoutine;