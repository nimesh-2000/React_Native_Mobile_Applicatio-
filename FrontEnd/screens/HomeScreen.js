
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button, ImageBackground, StyleSheet ,TouchableHighlight} from 'react-native';
import axios from 'axios';
import backgroundImage from '../assets/7889361.jpg'
import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({ navigation }) => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // axios.get('http://your-backend-url/phones').then(response => {
        //   setPhones(response.data);
        // }).catch(error => {
        //   console.error('Error fetching phones:', error);
        // });
        const mockPhones = [
            { id: 1, model: 'Phone Model 1', description: 'Description 1', image: 'image_url_1' },
            { id: 2, model: 'Phone Model 2', description: 'Description 2', image: 'image_url_2' },
            { id: 3, model: 'Phone Model 3', description: 'Description 3', image: 'image_url_3' },
            // Add more mock data as needed
        ];

        
        setPhones(mockPhones);
    }, []);

    const handleAddPhone = () => {
        navigation.navigate('AddFood');
    };

    const handleUpdate = (id) => {
        // Implement the logic to handle updating the item with the specified id
    };

    const handleDelete = (id) => {
        // Implement the logic to handle deleting the item with the specified id
    };

    const renderPhoneItem = ({ item }) => (
        <View style={styles.phoneItem}>
            <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.model}>{item.model}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.buttonContainer}>
                        <Icon name="create-outline" size={24} color="blue" onPress={() => handleUpdate(item.id)} />
                        <Icon name="trash-outline" size={24} color="red" onPress={() => handleDelete(item.id)} />
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
                    <Text style={styles.btnText}>Add Food</Text>
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
        width: 100,
        height: 100,
        marginBottom: 10,
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
});

export default HomeScreen;
