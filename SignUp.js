import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform sign up logic here

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'Gw1o4JgAOP1nRJ8kYDFfUSGg00xazm9eOIVEXRSZC6MJK18VSQf3jCvwYEc7EUnR',
    }

    const checkDuplicates_body = JSON.stringify({
      "collection": "UserData",
      "database": "Main",
      "dataSource": "Main",
      "filter": {
        "email": email
      }
    });

    const insertNewUser_body = JSON.stringify({
      "collection": "UserData",
      "database": "Main",
      "dataSource": "Main",
      "document": {
        "email": email,
        "name": name,
        "password": password
      }
    })

    var checkDuplicates_config = {
      method: 'post',
      url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-ijzkz/endpoint/data/v1/action/findOne',
      headers: headers,
      data: checkDuplicates_body
    };

    var inserNewUser_config = {
      method: 'post',
      url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-ijzkz/endpoint/data/v1/action/insertOne',
      headers: headers,
      data: insertNewUser_body
    };

    axios(checkDuplicates_config)
      .then(function (response) {
        if (response.data.document != null) {
          console.log(response.data.document)
          alert("account with that email already exists");
          return
        }
        axios(inserNewUser_config).then(function (res) {
          console.log(JSON.stringify(res));
          navigation.navigate('Login');
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.secondaryButtonText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default SignUp;
