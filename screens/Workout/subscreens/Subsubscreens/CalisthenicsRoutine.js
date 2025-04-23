import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalisthenicsRoutine = () => {
  return (
    <View style={styles.container}>
      <Text>Calisthenics Routine</Text>
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

export default CalisthenicsRoutine;
