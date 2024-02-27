
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,ImageBackground } from 'react-native';
import { NativeBaseProvider, VStack, Heading, Input, Button, HStack } from 'native-base';
import backgroundImage from '../assets/7889361.jpg'
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // axios.post('http://your-backend-url/login', {
    //   email,
    //   password,
    // })
    // .then(response => {
    //   // Handle successful login response
    //   console.log(response.data);
    //   // Navigate to HomeScreen or perform other actions
    // })
    // .catch(error => {
    //   // Handle login error
    //   console.error('Login error:', error);
    //   // Display error message to user
    // });
    navigation.navigate('Home');
  };

  return (

    <NativeBaseProvider>
      <VStack style={style.container} space={5} >
        <Heading style={{...style.heading,textAlign: 'center'}} size="xl" color="pink.500" bold>
        WELCOME {'\n'}TO
        {'\n'}
        FOOD STORE
        </Heading>
        <Image
          style={{ marginBottom: '10%' }}
        // source={require('../assets/img/login.png')}
        />
        <Input mx="3" placeholder="Email" w="80%"
          value={email}
          onChangeText={setEmail}
          borderColor="pink.300"      // Default border color        
        />
        <Input
          type={false ? 'text' : 'password'}
          mx="3"
          placeholder="Password"
          w="80%"
          value={password}
          onChangeText={setPassword}
          borderColor="pink.300"
        />
        <Button
          style={style.btn}
          // onPress={() => {
          //   // navigation.navigate('Root');
          // }}
          onPress={handleLogin}
          w="50%">
          Login
        </Button>

        <HStack style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: '15%' }}>Don’t have an account?</Text>
          <Button
            style={{ marginTop: '15%' }}
            variant="link"
            onPress={() => {
              // navigation.navigate('Register');
            }}>
            Register
          </Button>
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    flex: 1,
    
  },

  heading: {
    marginBottom: 30
  },

  btn: {
    backgroundColor: "pink",
  },
  
});

export default LoginScreen;

