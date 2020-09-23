import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Text, ErrorContainer, ErrorText } from './styles';
import  Input  from '../../components/Input';
import  ButtonLong  from '../../components/Button';
import * as firebase from 'firebase'

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const fetching = false;
    const background = true;
    const width = '50%';
    const handleChange = () =>{
        firebase.auth().signInWithEmailAndPassword(user,password).catch((error) => setErrorMessage(error))
    }

    const handleChangeText = (vl) => {
        console.log(vl)
        setPassword(password)
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
                disabled={fetching}
                onPress={handleChange}
            />
            <ButtonLong
                width={width}
                title="Registrarse"
                invert
                loading={!fetching}
                disabled={fetching}
                onPress={handleChange}
            />
        </View>
    );
};

export default LoginForm;

