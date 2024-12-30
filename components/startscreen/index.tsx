import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Svg, { Circle, Path, G } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/type';
import LinearGradient from 'react-native-linear-gradient';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'login'>;

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen() {
  const navigation = useNavigation<NavigationProps>();

  // Navigate to login screen after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('login');
    }, 3000);

    // Cleanup the timeout when component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);
  const handlelogin=()=>
  {
    navigation.navigate('login')
  }

  return (
    <LinearGradient
      colors={['#FF6B6B', '#FF7E5F', '#FEB47B']} // Colorful gradient
      style={styles.container}>
      <SafeAreaView style={styles.content}>
        <View style={styles.logoContainer}>
          <Svg width="200" height="200" viewBox="0 0 200 200">
            <Circle cx="100" cy="100" r="95" fill="#FF6B6B" />
            <G transform="translate(40, 40)">
              <Path
                d="M60 0C26.86 0 0 26.86 0 60s26.86 60 60 60 60-26.86 60-60S93.14 0 60 0zm0 110c-27.57 0-50-22.43-50-50s22.43-50 50-50 50 22.43 50 50-22.43 50-50 50z"
                fill="#FFF"
              />
              <Path
                d="M60 20c-22.06 0-40 17.94-40 40s17.94 40 40 40 40-17.94 40-40-17.94-40-40-40zm0 70c-16.54 0-30-13.46-30-30s13.46-30 30-30 30 13.46 30 30-13.46 30-30 30z"
                fill="#4ECDC4"
              />
              <Path
                d="M80 60c0 11.05-8.95 20-20 20s-20-8.95-20-20 8.95-20 20-20 20 8.95 20 20"
                fill="#45B7A7"
              />
            </G>
          </Svg>
        </View>
        <Text style={styles.title}>ArtVista</Text>
        <Text style={styles.tagline}>Explore the world of art</Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText} onPress={handlelogin}>Start Your Journey</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 20,
    color: '#f2f2f2',
    marginBottom: 30,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FF7E5F',
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
