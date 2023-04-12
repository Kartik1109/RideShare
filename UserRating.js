import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStars = Math.round(rating - filledStars);
  const emptyStars = 5 - filledStars - halfStars;

  return (
    <View style={styles.container}>
      {[...Array(filledStars)].map((_, index) => (
        <Ionicons key={index} name="md-star" size={20} color="#F8E71C" />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <Ionicons key={index} name="md-star-half" size={20} color="#F8E71C" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <Ionicons key={index} name="md-star-outline" size={20} color="#F8E71C" />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserRating;
