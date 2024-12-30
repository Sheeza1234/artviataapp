import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/type';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import Navbar from '../navbar';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Upload'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  // Function to navigate to different sections
  const navigateTo = (screen: string) => {
    navigation.navigate(screen); // Use the screen passed dynamically
  };

  const navigate = (screen: string) => {
    navigation.navigate(screen); // Use the screen passed dynamically
  };

  return (
    <LinearGradient colors={['#ff7e5f', '#feb47b']} style={styles.container}> 
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Art Gallery</Text>
        </View>

        {/* Grid Buttons */}
        <View style={styles.gridContainer}>
          <TouchableOpacity
            style={styles.gridButton}
            onPress={() => navigateTo('ArtWork')}>
            <Image
              source={require('../../assets/images/artist-icon.png')}
              style={styles.icon}
            />
            <Text style={styles.gridButtonText}>Art View</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridButton}
            onPress={() => navigateTo('Artist')}>
            <Image
              source={require('../../assets/images/comunication-icon.png')} // Replace with actual icon
              style={styles.icon}
            />
            <Text style={styles.gridButtonText}>
              Interactive Communication
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridButton}
            onPress={() => navigateTo('Review')}>
            <Image
              source={require('../../assets/images/search-icon.jpg')} // Replace with actual icon
              style={styles.icon}
            />
            <Text style={styles.gridButtonText}>Review Artist</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridButton}
            onPress={() => navigateTo('Review')}>
            <Image
              source={require('../../assets/images/search-icon.png')} // Replace with actual icon
              style={styles.icon}
            />
            <Text style={styles.gridButtonText}>Review Artist</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridButton}
            onPress={() => navigate('Upload')}>
            <Image
              source={require('../../assets/images/feedback-icon.png')} // Replace with actual icon
              style={styles.icon}
            />
            <Text style={styles.gridButtonText}>Upload Artwork</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridButton}
            onPress={() => navigateTo('RelatedExhibitions')}>
            <Image
              source={require('../../assets/images/exibition-icon.png')} // Replace with actual icon
              style={styles.icon}
            />
            <Text style={styles.gridButtonText}>Related Exhibitions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Navbar at the bottom */}
      <Navbar />
    </LinearGradient> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, // Give space for the navbar
  },
  header: {
    backgroundColor: '#FF6B6B',
    padding: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Ensure buttons spread across the screen
    padding: 20,
    width: '100%', // Ensure it takes full width
  },
  gridButton: {
    width: '45%',
    height: 150, // Adjust height to make it more consistent
    marginBottom: 20, // Space between grid items
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center', // Center items vertically
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 60,
    height: 60,
  },
  gridButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  navbar: {
    position: 'absolute', // Fix navbar at the bottom
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  navButtonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default HomeScreen;
