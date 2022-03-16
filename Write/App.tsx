import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './screens/AppNavigation';
import { setBackgroundColorAsync } from 'expo-navigation-bar';
import { osName } from 'expo-device';
import { useEffect } from 'react';
import colors from './styles/colors';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
  });

  useEffect(() => {
    if (osName === 'Android') setBackgroundColorAsync(colors.dark);
  }, []);

  // FONT INLADEN: fonts zijn overal nodig, pas nadat fonts geladen zijn kan de app verder runnen
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <AppNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}
