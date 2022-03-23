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
import { statementReturnType, test } from './utils/db';
import { SQLResultSet, SQLTransaction } from 'expo-sqlite';
import { statement, transaction } from './utils/db';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
  });

  const generateAppTable = async (): Promise<void> => {
    const tx: SQLTransaction = await transaction();
    const response: SQLResultSet | void = await statement(
      tx,
      'CREATE TABLE IF NOT EXISTS notes (id integer primary key autoincrement, value text, timestamp text)',
    ).catch((err) => console.log(err));

    const tx2: SQLTransaction = await transaction();
    const insert = await statement(
      tx2,
      'INSERT INTO `notes` (id, value, timestamp) values (?, ?, ?)',
      [undefined, 'How to fly', new Date().toDateString()],
    );

    const r: SQLResultSet | void = await statement(
      tx2,
      'SELECT * FROM notes',
    ).catch((err) => console.log(err));
  };

  useEffect(() => {
    // Android bottom color
    if (osName === 'Android') setBackgroundColorAsync(colors.dark);

    generateAppTable();
  }, []);

  // FONT INLADEN: fonts zijn overal nodig, pas nadat fonts geladen zijn kan de app verder runnen
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar style="inverted" />

          <AppNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}
