import React, { useState, useContext } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { userID, setUserID } from './App';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'Gw1o4JgAOP1nRJ8kYDFfUSGg00xazm9eOIVEXRSZC6MJK18VSQf3jCvwYEc7EUnR',
    }

    const login_body = JSON.stringify({
      "collection": "UserData",
      "database": "Main",
      "dataSource": "Main",
      "filter": {
        "email": email,
        "password": password
      }
    });

    var login_config = {
      method: 'post',
      url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-ijzkz/endpoint/data/v1/action/findOne',
      headers: headers,
      data: login_body
    };
    axios(login_config)
      .then(function (response) {
        if (response.data.document == null) {
          console.log(response.data.document)
          alert("Email or Password is incorrect. Please try again");
          return
        }
        setUserID(response.data.document.name)
        navigation.navigate('Main')
        console.log(userID)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  linkText: {
    color: '#007bff',
    marginTop: 20,
    fontSize: 18,
  },
});

export default Login;
