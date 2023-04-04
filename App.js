import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import SignUp from './SignUp';

const Stack = createStackNavigator();



function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/white.jpg')} 
        style={styles.background}
        resizeMode='cover'
      >
        <View style={styles.innerContainer}>
          <Image source={require('./assets/logo_taxi.png')} style={styles.logo} />
          <Text style={styles.title}>Welcome to RideLink!</Text>
          <TouchableOpacity
            style={[styles.button, {height: 40}]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {height: 40}]}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {height: 40}]}
            onPress={() => navigation.navigate('MainPage')}
          >
            <Text style={styles.buttonText}>Skip to Main Screen</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Page</Text>
      <TouchableOpacity
        style={[styles.button, {height: 40}]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 100
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
    
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '30%', // add this style
  alignItems: 'center', // add this style to center the text horizontally

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
