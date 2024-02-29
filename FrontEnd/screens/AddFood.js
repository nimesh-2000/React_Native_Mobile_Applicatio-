// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { NativeBaseProvider, ScrollView,Center, VStack, Input, TextArea, Button } from "native-base";
// import { FloatingAction } from "react-native-floating-action";
// import AddVehicleForm from './../components/AddVehicleForm';

// export default function AddVehicle(props) {

//   return (
//     <AddVehicleForm />
//   );
// }


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, FlatList, Alert, ImageBackground,Modal,TouchableOpacity,TouchableHighlight } from 'react-native';
import axios from 'axios';
import cartImage from '../assets/7889361.jpg'
//import backgroundImage from '../assets/7889361.jpg'
//import DocumentPicker from 'react-native-image-picker';

const AddPhoneScreen = ({ navigation }) => {
    const [phones, setPhones] = useState([]);
    const [phoneModel, setPhoneModel] = useState('');
    const [description, setDescription] = useState('');
    const [qty, setQty] = useState('');
    const [image, setImage] = useState(null);
    const [pickedDocument, setPickedDocument] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        fetchPhones();
    }, []);

    const fetchPhones = () => {
        // axios.get('http://your-backend-url/phones')
        //   .then(response => {
        //     setPhones(response.data);
        //   })
        //   .catch(error => {
        //     console.error('Error fetching phones:', error);
        //   });
    };

    const handleAddPhone = () => {
        // const formData = new FormData();
        // formData.append('image', {
        //   uri: image,
        //   name: 'image.jpg',
        //   type: 'image/jpeg',
        // });
        // formData.append('model', phoneModel);
        // formData.append('description', description);

        // axios.post('http://your-backend-url/phones/add', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // })
        //   .then(() => {
        //     Alert.alert('Success', 'Phone added successfully');
        //     fetchPhones(); // Refresh phone list after adding a phone
        //   })
        //   .catch(error => {
        //     console.error('Error adding phone:', error);
        //     Alert.alert('Error', 'Failed to add phone');
        //   });
        setShowAlert(true);
    };

    const pickImage = () => {

    }

    const pickDocument = async () => {
        try {
          const result = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
          });
    
          console.log(result);
    
          setPickedDocument(result);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker
            console.log('User cancelled the picker');
          } else {
            throw err;
          }
        }
      };

    const handleDeletePhone = (id) => {
        // axios.delete(`http://your-backend-url/phones/${id}`)
        //   .then(() => {
        //     Alert.alert('Success', 'Phone deleted successfully');
        //     fetchPhones(); // Refresh phone list after deleting a phone
        //   })
        //   .catch(error => {
        //     console.error('Error deleting phone:', error);
        //     Alert.alert('Error', 'Failed to delete phone');
        //   });
    };

    const renderItem = ({ item }) => (
        <View style={styles.phoneItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
                <Text>Model: {item.model}</Text>
                <Text>Description: {item.description}</Text>
            </View>
            <Button title="Delete" onPress={() => handleDeletePhone(item.id)} />
        </View>
    );

    return (
        // <View style={styles.container}>
        <ImageBackground source={cartImage} style={styles.container}>
            <View style={styles.card}>
                <Text style={{color:'white',fontWeight:'bold', fontSize:20}}>Add Item</Text>
                <TextInput
                    placeholder="Item"
                    value={phoneModel}
                    onChangeText={setPhoneModel}
                    style={styles.input}
                    placeholderTextColor="white"
                />
                <TextInput
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    style={styles.input}
                    placeholderTextColor="white"
                />
                <TextInput
                    placeholder="QTY"
                    value={qty}
                    onChangeText={setQty}
                    style={styles.input}
                    placeholderTextColor="white"
                />
                
      
                
                <TouchableHighlight
                    style={[styles.btn, { backgroundColor: 'pink',marginTop:'5%',marginBottom:'5%', height: '10%', width: '40%', alignItems: 'center', justifyContent: 'center',borderRadius: 5, }]}
                    underlayColor="#70A843"
                    onPress={handleAddPhone}
                >
                    <Text style={styles.btnText}>Add Item</Text>
                </TouchableHighlight>
                <Button title="Back" onPress={() => navigation.navigate('Home')}  /> 

                <Modal
                    visible={showAlert}
                    transparent
                    animationType="fade"
                    onRequestClose={() => setShowAlert(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.alertContainer}>
                            <Text style={styles.alertTitle}>Item Added</Text>
                            <Text style={styles.alertMessage}>The item has been successfully added..!</Text>
                            <TouchableOpacity onPress={() => setShowAlert(false)}>
                                <Text style={styles.alertButton}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

            <FlatList
                data={phones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />

            {/* <Button title="Back" onPress={() => navigation.navigate('Home')} /> */}
        </ImageBackground>
        // </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover', // or 'stretch' for different image behavior
    },
    card: {
        backgroundColor: '#30336b',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        width: '80%',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color:"white"
    },
    // input: {
    //     width: '80%',
    //     height: 40,
    //     borderWidth: 1,
    //     borderColor: 'gray',
    //     marginBottom: 10,
    //     paddingHorizontal: 10,
    // },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    phoneItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    details: {
        flex: 1,
        marginRight: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    alertContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    alertTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    alertMessage: {
        fontSize: 16,
        marginBottom: 20,
    },
    alertButton: {
        fontSize: 16,
        color: 'blue',
    },
});

export default AddPhoneScreen;
