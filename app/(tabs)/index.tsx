import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from '@/navigator/appnavigator'

const App = () => {
  return (
    <SafeAreaProvider>

      <AppNavigator />

    </SafeAreaProvider>
  )
}

export default App;
