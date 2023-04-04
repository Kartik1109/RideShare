import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Screen</Text>
      <Text>This is the main screen of the app.</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => navigation.navigate('OfferRide')}
      >
        <Text style={styles.buttonText}>Offer a Ride</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => navigation.navigate('RequestRide')}
      >
        <Text style={styles.buttonText}>Request a Ride</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '60%', // add this style
    alignItems: 'center', // add this style to center the text horizontally
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Main;
