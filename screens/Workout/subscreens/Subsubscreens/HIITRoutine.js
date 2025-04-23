import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HIITRoutine = () => {
  return (
    <View style={styles.container}>
      <Text>HIIT Routine</Text>
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
});

export default HIITRoutine;
