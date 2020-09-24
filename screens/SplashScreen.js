import React, { Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

 const SplashScreen = () => {
    const navigation = useNavigation();
    firebase.auth().onAuthStateChanged(user =>{
        navigation.navigate(user ? 'UsersListScreen': 'Login')
    })
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default SplashScreen;