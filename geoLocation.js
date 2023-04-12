

// import * as React from 'react';
// import { WebView } from 'react-native-webview';
// import * as Location from 'expo-location';

// export default function App() {
//     const [location, setLocation] = React.useState(null);
//     const [errorMsg, setErrorMsg] = React.useState(null);

//     React.useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 return;
//             }

//             let location = await Location.getCurrentPositionAsync({});
//             setLocation(location);
//             console.log(location)
//         })();
//     }, []);

//     // Inject the `location` data as a global variable in the `geoLocation.html` page
//     const injectedJavaScript = location
//         ? `window.locationData = ${JSON.stringify(location)};`
//         : '';

//     return (
//         <WebView
//             originWhitelist={['*']}
//             source={require('./geoLocation.html')}
//             injectedJavaScript={injectedJavaScript}
//         />
//     );
// }

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    if (errorMsg) {
        return (
            <View style={styles.container}>
                <Text>{errorMsg}</Text>
            </View>
        );
    } else if (!location) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    } else {
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }} />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        flex: 1,
    },
});


