import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const backgroundImage = require('./assets/Black_colour.jpg');
const logoImage = require('./assets/logo_taxi.png');

const Ridelink = () => {
  const fadeInRef = useRef(null);
  const bounceRef = useRef(null);

  useEffect(() => {
    fadeInRef.current.fadeIn(5000);
    bounceRef.current.bounceIn(5000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Animatable.View ref={fadeInRef} style={styles.content}>
          <Animatable.Image source={logoImage} style={styles.logo} animation="pulse" easing="ease-out" iterationCount="infinite" />
          <Animatable.Text style={styles.title} animation="fadeInDown" duration={1000} delay={500}>
            Welcome to Ridelink!
          </Animatable.Text>
          <Animatable.Text style={styles.subtitle} animation="fadeInUp" duration={1000} delay={1000}>
            Get started by logging in or signing up.
          </Animatable.Text>
        </Animatable.View>
        <TouchableOpacity style={styles.button}>
          <Animatable.Text style={styles.buttonText} animation="pulse" easing="ease-out" iterationCount="infinite">
            Next
          </Animatable.Text>
        </TouchableOpacity>
        <Animatable.View ref={bounceRef} style={styles.carContainer}>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  carContainer: {
    position: 'absolute',
    bottom: -150,
    right: -50,
  },
  car: {
    width: 200,
    height: 200,
  },
});



export default Ridelink;
