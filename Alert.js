import React from 'react';
import { View, Button, Alert } from 'react-native';

const AlertPage = () => {
  const showAlert = () => {
    Alert.alert(
      'This message will be automatically shown once the car pool is confirmed.',
      'Here will be the details: Ride Confirmed, Car 8906 approaching in 5 mins',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="This is a time dependant Alert Page. As soon as a ride is confirmed this alert will be automatically shown. For now click me" onPress={showAlert} />
    </View>
  );
};


export default AlertPage;
