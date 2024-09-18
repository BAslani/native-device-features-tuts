import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddPlace() {
  return (
    <View style={styles.container}>
      <Text>Add Place screen</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
