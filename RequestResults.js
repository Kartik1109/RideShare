import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import findMany from './findMany';
import axios from 'axios'

export var offers = null;
export const setOffers = (o) => { offers = o }

const RequestResults = () => {

    const handleRequest = () => { }

    console.log(offers)

    return (
        <FlatList
            data={offers}
            renderItem={({ item }) => <TouchableOpacity onPress={handleRequest}>
                <Text>{item.offererName}</Text>
                <Text>{item.source}</Text>
                <Text>{item.capacity}</Text>
                <Text>{item.genderPreference}</Text>
            </TouchableOpacity>}
        />
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
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    radioButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonSelected: {
        backgroundColor: '#333',
        borderColor: '#333',
    },
    radioButtonText: {
        fontSize: 16,
        color: '#333',
    },
    radioButtonTextSelected: {
        color: '#fff',
    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    genderButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        width: '30%',
        alignItems: 'center',
    },
    genderButtonText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 16,
    },
    selectedGenderButton: {
        backgroundColor: '#333',
        borderColor: '#333',
    },
    selectedGenderButtonText: {
        color: '#fff',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
        width: '60%', // add this style
        alignItems: 'center', // add this style to center the text horizontally
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default RequestResults;
