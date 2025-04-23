import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BaseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Base Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default BaseScreen;

