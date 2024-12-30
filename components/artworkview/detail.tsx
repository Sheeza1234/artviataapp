import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';


import { RootStackParamList } from '@/type'; // Replace with your type definitions if needed

type ArtworkDetailScreenRouteProp = RouteProp<RootStackParamList, 'ArtWorkDetails'>;
type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'ArtWorkDetails'>;

const ArtworkDetailScreen: React.FC = () => {
    const route = useRoute<ArtworkDetailScreenRouteProp>();
    const navigation = useNavigation<NavigationProps>();
    const { artwork } = route.params;

    return (
        <LinearGradient
            colors={['#ff9a9e', '#fad0c4']}
            style={styles.gradientContainer}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image
                    source={
                        typeof artwork.image === 'number'
                            ? artwork.image // Local asset
                            : { uri: artwork.image.uri } // Online URL
                    }
                    style={styles.artworkImage}
                />

                <Text style={styles.title}>{artwork.title}</Text>
                <Text style={styles.abstract}>{artwork.abstract}</Text>

                {/* Additional Metadata */}
                <View style={styles.metadataContainer}>
                    <Text style={styles.metadataTitle}>Details:</Text>
                    <Text style={styles.metadata}>🎨 Artist: {artwork.artist || 'Unknown'}</Text>
                    <Text style={styles.metadata}>📅 Year: {artwork.year || 'Unknown'}</Text>
                    <Text style={styles.metadata}>📂 Category: {artwork.category || 'General'}</Text>
                </View>

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>← Back to Gallery</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
    },
    artworkImage: {
        width: '100%',
        height: 350,
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    abstract: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        marginBottom: 20,
        textAlign: 'justify',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    metadataContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        marginBottom: 20,
        width: '100%',
    },
    metadataTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    metadata: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
        marginVertical: 5,
        paddingLeft: 5,
    },
    backButton: {
        backgroundColor: '#FF6B6B',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ArtworkDetailScreen;
