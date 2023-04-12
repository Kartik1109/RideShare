import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { userID } from './App';

const Main = ({ navigation }) => {
  return (




    <View style={styles.container}>
      <TouchableOpacity // DELETE ACCOUNT BUTTON
        style={[styles.button]}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.linkText}>Settings</Text>
      </TouchableOpacity>
      <Text style={styles.welcomeMessage}>Welcome {userID}</Text>
      <Text style={styles.title}>Main Screen</Text>
      <Text>This is the main screen of the app.</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('OfferRide')}
      >
        <Text style={styles.buttonText}>Offer a Ride</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('RequestRide')}
      >
        <Text style={styles.buttonText}>Request a Ride</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('WWP')}
      >
        <Text style={styles.buttonText}>Wordle Wednesday</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('AlertPage')}

      >
        <Text style={styles.buttonText}>AlertPage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('User_Rating')}

      >
        <Text style={styles.buttonText}>User_Rating</Text>
      </TouchableOpacity>






      <TouchableOpacity onPress={() => navigation.navigate('CoinMeasurement')}>
        <View style={styles.coinContainer}>
          <Image
            source={require('./assets/coin.png')}
            style={styles.coinButton}
            onPress={() => navigation.navigate('CoinMeasurement')}
          />
          <Text style={styles.coinText}>0 coins</Text>



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
  linkText: {
    color: '#007bff',
    marginTop: 20,
    fontSize: 18,
    position: 'absolute',
    top: -250,
    right: -65,
  },
  coinText: {
    marginLeft: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },

  welcomeMessage: {
    position: 'absolute',
    left: 20,
    top: 40,
    fontSize: 18
  }

});

export default Main;
