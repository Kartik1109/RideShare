import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

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
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => navigation.navigate('WWP')}
      >
        <Text style={styles.buttonText}>Wordle Wednesday</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'purple' }]}
        onPress={() => navigation.navigate('AlertPage')}
      >
        <Text style={styles.buttonText}>AlertPage</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('CoinMeasurement')}>
     <View style={styles.coinContainer}>
  <Image
    source={require('./assets/coin.png')}
    style={styles.coinButton}
    onPress={() => navigation.navigate('CoinMeasurement')}
  />
  <Text style={styles.coinText}>100 coins</Text>
</View>
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
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: -480,
    right: -180,
  },
  coinButton: {
    width: 40,
    height: 40,
  },
  coinText: {
    marginLeft: 0,
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Main;
