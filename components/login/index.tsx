import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/type';
import { MaterialIcons } from '@expo/vector-icons'; // Icon library
import LinearGradient from 'react-native-linear-gradient'; // For colorful background
import { FontAwesome } from '@expo/vector-icons'; // New icon library

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface LoginScreenProps { }

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false); // State to toggle password visibility
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    try {
      const firebaseApp = auth();
      if (firebaseApp) {
        console.log('Firebase initialized');
      } else {
        console.error('Firebase not initialized');
      }
    } catch (error) {
      console.error('Error during Firebase initialization:', error);
    }
  }, []);

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both email and password');
    } else {
      try {
        await auth().signInWithEmailAndPassword(email, password);
        Alert.alert('Success', 'Login successful!');
        navigation.navigate('Home');
      } catch (error) {
        console.error('Login Error:', error);
        Alert.alert('Error', 'Failed to login. Please check your credentials.');
      }
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <LinearGradient
        colors={['#FF6B6B', '#FF7E5F', '#FEB47B']} // Colorful gradient background
        style={styles.gradientBackground} // New gradient container style
      >
        <View style={styles.loginContainer}>
          {/* App Logo */}
          <Image
            source={require('../../assets/images/logo.png')} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>AvistaApp</Text>

          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={24} color="#FF6B6B" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={24} color="#FF6B6B" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword} // Toggle password visibility
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <MaterialIcons
                name={showPassword ? 'visibility' : 'visibility-off'}
                size={24}
                color="#FF6B6B"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleButton}>
            <FontAwesome name="facebook" size={24} color="#fff" style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Sign in with Facebook</Text>
          </TouchableOpacity>

          <View style={styles.registerPrompt}>
            <Text style={styles.registerText}>Don't have an account?</Text>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={styles.registerLink}> Register here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20, // To avoid touching edges
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    maxWidth: 400, // Optional: To limit width on large screens
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF6B6B',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    marginRight: 10,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    justifyContent: 'center',
  },
  googleIcon: {
    marginRight: 10,
  },
  googleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerPrompt: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#333',
  },
  registerLink: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
