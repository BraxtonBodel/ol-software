import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import Router from './router';
import store from './redux';
import * as firebase from 'firebase';

export default function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyCHYogCTHtuO3ZjA9-MCvxrcZ2KqdLU73g",
    authDomain: "ol-software-253d2.firebaseapp.com",
    databaseURL: "https://ol-software-253d2.firebaseio.com",
    projectId: "ol-software-253d2",
    storageBucket: "ol-software-253d2.appspot.com",
    messagingSenderId: "718457237527",
    appId: "1:718457237527:web:5e8c14d4c4df67ec832c52"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  return (
    <ReduxProvider store={store}>
          <SafeAreaProvider>
            <Router />
          </SafeAreaProvider>
    </ReduxProvider>
  );
}
