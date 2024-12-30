import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../navbar';
import LinearGradient from 'react-native-linear-gradient';

interface Artist {
    id: string;
    name: string;
    image: any;  // Adjusted type to handle require() images directly
}

const ArtistListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    // Dummy artist data with names and images
    const artists: Artist[] = [
        { id: '1', name: 'Vincent van Gogh', image: require('../../assets/images/artist1.jpg') },
        { id: '2', name: 'Pablo Picasso', image: require('../../assets/images/artist2.jpg') },
        { id: '3', name: 'Leonardo da Vinci', image: require('../../assets/images/artist3.jpg') },
        { id: '4', name: 'Frida Kahlo', image: require('../../assets/images/artist1.jpg') },
        { id: '5', name: 'Salvador Dalí', image: require('../../assets/images/artist5.jpg') },
        { id: '6', name: 'Claude Monet', image: require('../../assets/images/artist1.jpg') },
        { id: '7', name: 'Georgia O\'Keeffe', image: require('../../assets/images/artist2.jpg') },
        { id: '8', name: 'Jackson Pollock', image: require('../../assets/images/artist3.jpg') },
    ];

    const renderArtistItem = ({ item }: { item: Artist }) => {
        return (
            <View style={styles.artistCard}>
                <Image source={item.image} style={styles.artistImage} />
                <View style={styles.artistInfo}>
                    <Text style={styles.artistName}>{item.name}</Text>
                    <TouchableOpacity
                        style={styles.messageButton}
                        onPress={() => navigation.navigate('Chat', { artistId: item.id, artistName: item.name })}
                    >
                        <Icon name="comments" size={20} color="white" />
                        <Text style={styles.messageButtonText}>Message</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <LinearGradient colors={['#FF6B6B', '#FF7E5F', '#FEB47B']} style={styles.container}>
            <Text style={styles.header}>Chat with Artist</Text>
            <FlatList
                data={artists}
                renderItem={renderArtistItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
            />
            <Navbar />
        </LinearGradient>
    );
};

const { width } = Dimensions.get('window'); // Get the width of the screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
    },
    header: {
        fontSize: 50,
        borderRadius: 10,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        backgroundColor: '#4ECDC4',
        color: '#fff', // Set text color to contrast with background
        paddingVertical: 10,
    },
    artistCard: {
        flexDirection: 'row',
        // padding:20,
        width:'90%',
        marginLeft:20,
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    artistImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 10,
    },
    artistInfo: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 10,
    },
    artistName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    messageButton: {
        flexDirection: 'row',
        backgroundColor: '#FF6B6B',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    messageButtonText: {
        color: 'white',
        fontSize: 14,
        marginLeft: 10,
    },
    flatListContainer: {
        paddingBottom: 100, // Ensure space for the fixed navbar
    },
    navbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: width, // Full screen width
        zIndex: 1,
    },
});

export default ArtistListScreen;
