import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Text, ErrorContainer, ErrorText } from './styles';
import  Input  from '../../components/Input';
import  ButtonLong  from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const fetching = true;
    const background = true;
    const width = '50%';
    const navigation = useNavigation();

    const handleChange = () =>{
        firebase.auth().signInWithEmailAndPassword(user,password).catch((error) => setErrorMessage(error))
    }

    const handleRegisterChange = () => {
        navigation.navigate('RegisterScreen')
    }
    return(
        <View>
            <Input 
            style={{marginBottom: 20}}
            placeholder="Usuario"
            onChangeText={(user) => setUser(user)}
            value={user}
            />
            <Input 
            style={{marginBottom: 50}} 
            placeholder="Contraseña" 
            onChangeText={(password) => setPassword(password)}
             secureTextEntry={true}
              value={password}/>
            <View>
                {errorMessage && <Text>{errorMessage.message}</Text>}   
            </View>  
            <ButtonLong
                width={width}
                title="Iniciar sesión"
                invert
                loading={!fetching}
                disabled={false}
                onPress={handleChange}
            />
            <ButtonLong
                width={width}
                title="Registrarse"
                invert
                loading={!fetching}
                disabled={false}
                onPress={handleRegisterChange}
            />
        </View>
    );
};

export default LoginForm;

