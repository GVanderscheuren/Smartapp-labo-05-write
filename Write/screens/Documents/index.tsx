import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { Text, View } from 'react-native';
import colors from '../../styles/colors';
import Edit from './Edit';
import New from './New';
import Overview from './Overview';

export default function Documents() {
  const Stack = createStackNavigator();

  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    cardStyle: {
      backgroundColor: colors.dark,
    },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
}
