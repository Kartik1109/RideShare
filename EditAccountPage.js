import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const EditPage = () => {
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');


    return (
        <View style={styles.container}>

        <Text style={styles.title}>Account Information</Text>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>password:</Text>
            <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter new password"
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>name:</Text>
            <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Data of Birth:</Text>
            <TextInput
            style={styles.input}
            value={DateOfBirth}
            onChangeText={setDateOfBirth}
            placeholder="Enter your date of birth" ////////STILL NEED A BUTTON TO SUBMIT CHANGES TO THE USER DATABASE
            /> 
        </View>
        
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textTransform: 'uppercase',
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: '#333',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
    },
});

export default EditPage;
