import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient'; // Import the linear gradient module
import { RootStackParamList } from '@/type';
import Navbar from '../navbar';

interface Artwork {
    id: string;
    title: string;
    abstract: string;
    image: number | { uri: string }; // URL to the artwork image
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'ArtWorkDetails'>;

const artworks: Artwork[] = [
    {
        id: '1',
        title: 'Starry Night',
        abstract: 'A mesmerizing depiction of the night sky by Vincent van Gogh.',
        image: require('../../assets/images/Starrynight.jpg'),
    },
    {
        id: '2',
        title: 'The Persistence of Memory',
        abstract: 'Salvador Dalí’s iconic melting clocks painting.',
        image: require('../../assets/images/presistance.jpg'),
    },
    {
        id: '3',
        title: 'Mona Lisa',
        abstract: 'Leonardo da Vinci’s world-renowned portrait.',
        image: require('../../assets/images/monalisa.jpg'),
    },
    {
        id: '4',
        title: 'The Age of Bear',
        abstract: 'Salvador Dalí’s iconic melting clocks painting.',
        image: require('../../assets/images/art.jpg'),
    },
    {
        id: '5',
        title: 'Art View',
        abstract: 'Leonardo da Vinci’s world-renowned portrait.',
        image: require('../../assets/images/arti.jpg'),
    },
    {
        id: '6',
        title: 'Ancient eye',
        abstract: 'Lenorada do vincis world-reowned portrait',
        image: require('../../assets/images/images.jpg')
    }
];

const ArtworkViewingScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProps>();

    const handleArtworkPress = (artwork: Artwork) => {
        navigation.navigate('ArtWorkDetails', { artwork });
    };

    const renderArtworkItem = ({ item }: { item: Artwork }) => (
        <TouchableOpacity style={styles.card} onPress={() => handleArtworkPress(item)}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.abstract}>{item.abstract}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <LinearGradient
            colors={['#ff9a9e', '#fad0c4']} // Linear gradient colors
            style={styles.gradientContainer} // Apply to the whole container
        >
            <Text style={styles.header}>Digital Art Gallery</Text>
            <FlatList
                data={artworks}
                renderItem={renderArtworkItem}
                keyExtractor={(item) => item.id}
                numColumns={2} // Display in grid format
                contentContainerStyle={styles.gallery}
                showsVerticalScrollIndicator={false}
            />
            <Navbar />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    header: {
        fontSize: 40,
        height: '8%',
        fontWeight: 'bold',
        borderRadius: 15,
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
        backgroundColor: '#FF6B6B', // Background color for the header
    },
    gallery: {
        paddingHorizontal: 10,
    },
    card: {
        flex: 1,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    abstract: {
        fontSize: 14,
        color: '#555',
    },
});

export default ArtworkViewingScreen;
