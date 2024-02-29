
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button, ImageBackground, StyleSheet ,TouchableHighlight,Modal,TouchableOpacity,TextInput} from 'react-native';
import axios from 'axios';
import backgroundImage from '../assets/7889361.jpg'
import Icon from 'react-native-vector-icons/Ionicons';
import suger from '../assets/world-diabetes-day-sugar-wooden-bowl-dark-surface.jpg'
import rice from '../assets/sack-rice-seed-with-white-rice-small-wooden-spoon-rice-plant.jpg'
import flour from '../assets/ingredient-bags-full-flour.jpg'



const HomeScreen = ({ navigation }) => {
    const [phones, setPhones] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [selectedPhone, setSelectedPhone] = useState(null);
    const [updatedModel, setUpdatedModel] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedPrice, setUpdatedPrice] = useState('');

    useEffect(() => {
        // axios.get('http://your-backend-url/phones').then(response => {
        //   setPhones(response.data);
        // }).catch(error => {
        //   console.error('Error fetching phones:', error);
        // });
        const mockPhones = [
            { id: 1, model: 'Suger', description: '25kg', qty: '10', image: suger },
            { id: 2, model: 'Nadu Rice', description: '50kg', qty: '15', image: rice },
            { id: 3, model: 'Flour', description: '10kg', qty: '25', image: flour },
            // Add more mock data as needed
        ];

        
        setPhones(mockPhones);
    }, []);

    const handleAddPhone = () => {
        navigation.navigate('AddFood');
    };

    const handleUpdate = (id) => {
        
        setSelectedPhone(null);
    };

    const handleDelete = (id) => {
        // Filter out the selected phone from the phones state array
        const updatedPhones = phones.filter(phone => phone.id !== id);
        // Update the state to reflect the changes
        setPhones(updatedPhones);
        // Alert.alert('Success', 'Phone deleted successfully');
        setShowAlert(true); 
    };

    const renderPhoneItem = ({ item }) => (
        <View style={styles.phoneItem}>
            <View style={styles.card}>
                <Image source={ item.image } style={styles.image} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.model}>{item.model}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.description}>{item.qty}</Text>
                    <View style={styles.buttonContainer}>
                        {/* <Icon name="create-outline" size={24} color="blue" onPress={() => handleUpdate(item.id)} /> */}
                        <TouchableOpacity onPress={() => setSelectedPhone(item)}>
                            <Icon name="create-outline" size={24} color="blue" />
                        </TouchableOpacity>
                        <Modal visible={selectedPhone !== null} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.card2}>
                        <TextInput
                            placeholder="Item"
                            value={updatedModel}
                            onChangeText={setUpdatedModel}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Description"
                            value={updatedDescription}
                            onChangeText={setUpdatedDescription}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Qty"
                            value={updatedPrice}
                            onChangeText={setUpdatedPrice}
                            style={styles.input}
                        />
                        <View style={styles.buttonContainer2}>
                            <TouchableOpacity onPress={handleUpdate} style={[styles.button, styles.updateButton]}>
                                <Text style={styles.buttonText}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedPhone(null)} style={[styles.button, styles.cancelButton]}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
                        <Icon name="trash-outline" size={24} color="red" onPress={() => handleDelete(item.id)} />
                        <Modal
                    visible={showAlert}
                    transparent
                    animationType="fade"
                    onRequestClose={() => setShowAlert(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.alertContainer}>
                            <Text style={styles.alertTitle}>Item Deleted</Text>
                            <Text style={styles.alertMessage}>The item has been successfully Deleted..!</Text>
                            <TouchableOpacity onPress={() => setShowAlert(false)}>
                                <Text style={styles.alertButton}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        
        
        <ImageBackground source={backgroundImage} style={styles.container}>

            <View style={styles.buttonContainer}>
                <Text style={styles.heading}>STORE</Text>
                <TouchableHighlight
                    style={{ backgroundColor: 'pink', height:40, width: 100, alignItems: 'center', justifyContent: 'center' }}
                    underlayColor="#70A843"
                    onPress={handleAddPhone}
                >
                    <Text style={styles.btnText}>Add Item</Text>
                </TouchableHighlight>
            </View>

          
            <FlatList
                data={phones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderPhoneItem}
                //numColumns={2} // Set the number of columns to 2
                // contentContainerStyle={styles.flatListContainer}
               // style={{flexDirection: 'row'}}
               
                // numColumns={2}  // Set the number of columns to 2
                 //showsHorizontalScrollIndicator={false}
            />

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover', // or 'stretch' for different image behavior
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'yellow', // Text color
    },

    buttonContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },

    phoneItem: {
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    card: {
        backgroundColor: '#FFFFFF', // White background color
        borderRadius: 10,
        padding: 10,
        //width: '100%', // Adjust width as needed
        width: 300,
        alignSelf: 'center',
    },
    image: {
        width: '100',
        height: 200,
        marginBottom: 10,
        alignItems: 'center',
        resizeMode: 'cover'
    },
    descriptionContainer: {
        alignItems: 'center',
    },
    model: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        fontSize: 14,
    },
    flatListContainer: {
        alignItems: 'center',
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
    card2: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    input: {
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: '#FFFFFF',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
    },
    updateButton: {
        backgroundColor: 'blue',
    },
    cancelButton: {
        backgroundColor: 'red',
    },
});

export default HomeScreen;
