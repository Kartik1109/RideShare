// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
// import { WebView } from 'react-native-webview';

// export default function MapScreen() {
//     const [webViewRef, setWebViewRef] = useState(null);


//     useEffect(() => {
//         // Add a listener to the WebView to receive messages from the web page
//         const handleWebViewMessage = (event) => {
//             const data = JSON.parse(event.nativeEvent.data);
//             if (data.type === 'location') {
//                 const { latitude, longitude } = data.payload;
//                 const pos = { lat: latitude, lng: longitude };
//                 webViewRef.injectJavaScript(`setMarker(${latitude}, ${longitude})`);
//                 webViewRef.postMessage(JSON.stringify({ type: 'pan', payload: pos }));
//             } else if (data.type === 'error') {
//                 console.warn(data.payload);
//             }
//         };
//         if (webViewRef) {
//             webViewRef.onMessage = handleWebViewMessage;
//         }
//     }, [webViewRef]);

//     const handleLocationButtonPress = () => {
//         if (webViewRef) {
//             webViewRef.postMessage(JSON.stringify({ type: 'location' }));
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <WebView
//                 ref={(ref) => setWebViewRef(ref)}
//                 source={{ uri: 'https://example.com/map.html' }}
//                 originWhitelist={['*']}
//             />
//             <TouchableOpacity style={styles.locationButton} onPress={handleLocationButtonPress}>
//                 <Text style={styles.locationButtonText}>Pan to Current Location</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     locationButton: {
//         position: 'absolute',
//         top: 16,
//         left: 16,
//         backgroundColor: 'white',
//         padding: 8,
//         borderRadius: 8,
//         shadowColor: 'black',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 2,
//         elevation: 2,
//     },
//     locationButtonText: {
//         color: 'black',
//     },
// });

// import * as React from 'react';
// import { WebView } from 'react-native-webview';

// export default function App() {
//     return (
//         <WebView
//             originWhitelist={['*']}
//             source={require('./geoLocation.html')}
//         />
//     );
//}

import * as React from 'react';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';

export default function App() {
    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);

    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location)
        })();
    }, []);

    // Inject the `location` data as a global variable in the `geoLocation.html` page
    const injectedJavaScript = location
        ? `window.locationData = ${JSON.stringify(location)};`
        : '';

    return (
        <WebView
            originWhitelist={['*']}
            source={require('./geoLocation.html')}
            injectedJavaScript={injectedJavaScript}
        />
    );
}

