// import {View, Text} from 'react-native';
// import React from 'react';
// import Login from './screens/Login';
// import Register from './screens/Register';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Home from './screens/Home';
// import AddVehicle from './screens/AddVehicle';
// import VehicleForm from './components/VehicleForm';
// import 'react-native-gesture-handler';


// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Register" component={Register} />
//         <Stack.Screen
//           name="Root"
//           component={Root}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="Details" component={VehicleForm} options={{headerShown: true}}/>
//       </Stack.Navigator>


//     </NavigationContainer>
//   );
// }

// function Root() {
//   return (
//     <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'home'
//                 : 'home-outline';
//             } else if (route.name === 'Add') {
//               iconName = focused ? 'create' : 'create-outline';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#469AFF',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >

//       <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
//       <Tab.Screen options={{ headerShown: false }} name="Add" component={AddVehicle} />
//     </Tab.Navigator>
//   );
// }


import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseConfigProvider } from 'native-base';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from './HomeScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
//import AddPhoneScreen from './screens/AddPhoneScreen';
import AddFood from './screens/AddFood';
// import AddPhoneScreen from './screens/AddPhoneScreen';
// import LoginScreen from './LoginScreen';



const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's assume login is successful
    setIsLoggedIn(true);
  };

  return (
    // <NativeBaseConfigProvider>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {isLoggedIn ? (
    //       <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    //     ) : (
    //       <Stack.Screen
    //         name="Login"
    //         component={LoginScreen}
    //         options={{ title: 'Login' }}
    //         initialParams={{ onLogin: handleLogin }}
    //       />
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
    // </NativeBaseConfigProvider>


    <>
      {/* <StatusBar style="light"></StatusBar> */}
      {/* <NativeBaseConfigProvider> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {isLoggedIn ? (
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
            // {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            // <Stack.Screen name="AddPhone" component={AddPhoneScreen} options={{ title: 'Add Phone' }} /> */}
          ) : (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: 'Login' }}
              initialParams={{ onLogin: handleLogin }}
            />
          )}
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="AddFood" component={AddFood} options={{ title: 'AddFood' }} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </NativeBaseConfigProvider> */}
    </>
  );
}

// export default App;
