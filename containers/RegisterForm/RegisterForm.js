import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Text, ErrorContainer, ErrorText } from './styles';
import  Input  from '../../components/Input';
import  ButtonLong  from '../../components/Button';
import  Label  from '../../components/Label';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase'

const RegisterForm = () => {
    const [userName, setUserName] = useState('');
    const [userLastname, setUserLastname] = useState('');
    const [password, setPassword] = useState();
    const [userAge, setUserAge] = useState();
    const [userPosition, setUserPosition] = useState();
    const [userEmailAddress, setUserEmailAddress] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const navigation = useNavigation();
    const fetching = false;
    const background = true;
    const width = '50%';
    const handleChange = () =>{
        return
        //firebase.auth().signInWithEmailAndPassword(user,password).catch((error) => setErrorMessage(error))
    }

    const handleSignUp = () => {
       firebase.auth().createUserWithEmailAndPassword(userEmailAddress, password)
       .then(credentials => {
         fetching = true
           navigation.navigate('UsersListScreen')
           return credentials.user.updateProfile({
               'displayName' : userName,
               'photoURL' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/330px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg'
           })
       } )
       .catch(error => setErrorMessage(error))
    }

    return(
        <View>
            <Label value="Nombre" color="#000"/>
            <Input 
            style={{marginBottom: 20}}
            onChangeText={(userName) => setUserName(userName)}
            value={userName}
            />
            <Label value="Apellido" color="#000"/>
            <Input 
            style={{marginBottom: 20}} 
            onChangeText={(userLastname) => setUserLastname(userLastname)}
            value={userLastname}/>
            <Label value="Edad" color="#000"/>
              <Input 
            style={{marginBottom: 20}} 
            onChangeText={(userAge) => setUserAge(userAge)}
              value={userAge}/>
              <Label value="Correo" color="#000"/>
               <Input 
            style={{marginBottom: 20}}
            onChangeText={(userEmailAddress) => setUserEmailAddress(userEmailAddress)}
            value={userEmailAddress}
            />
            <Label value="Cargo" color="#000"/>
              <Input 
            style={{marginBottom: 20}} 
            onChangeText={(userPosition) => setUserPosition(userPosition)}
              value={userPosition}/>
              <Label value="Contraseña" color="#000"/>
              <Input 
            style={{marginBottom: 20}} 
            onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
              value={password}/>
            <View>
                {errorMessage && <Text>{errorMessage.message}</Text>}   
            </View>  
            <ButtonLong
                width={width}
                title="Registrar"
                invert
                loading={fetching}
                disabled={fetching}
                onPress={handleSignUp}
            />
        </View>
    );
};

export default RegisterForm;

