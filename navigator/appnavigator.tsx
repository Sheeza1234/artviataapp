import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StartScreen from '@/components/startscreen'
import LoginScreen from '@/components/login'
import RegisterScreen from '@/components/register'
import HomeScreen from '@/components/home'
import ArtworkViewingScreen from '@/components/artworkview'
import ArtworkDetailScreen from '@/components/artworkview/detail'
import UploadArtPage from '@/components/uploadimage'
import ChatScreen from '@/components/communication/chatscreen'
import ArtistListScreen from '@/components/communication'
import ReviewArtistScreen from '@/components/review '


const { Navigator, Screen } = createStackNavigator()

const AppNavigator = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
         <Screen name="Start" component={StartScreen}/>
         <Screen name="login" component={LoginScreen}/>
         <Screen name="Register" component={RegisterScreen}/>
         <Screen name="Home" component={HomeScreen}/>
         <Screen
          name="ArtWork"
          component={ArtworkViewingScreen}
          options={{ title: 'Art Gallery' }}
        />
        <Screen
          name="ArtWorkDetails"
          component={ArtworkDetailScreen}
          options={{ title: 'Artwork Details' }}
        />
        <Screen name="Upload" component={UploadArtPage}/>
        <Screen name="Artist" component={ArtistListScreen}/>
        <Screen name="Chat" component={ChatScreen}/>
        <Screen name="Review" component={ReviewArtistScreen}/>
  


        </Navigator>
    )
}

export default AppNavigator;
