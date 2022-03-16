import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';
import {} from 'expo-device';

export default StyleSheet.create({
  card: {
    padding: 24,
  },

  cardSmall: {
    flex: 1,
    height: 200, //Will be tested
    // width: (Dimensions.get('screen').width - 2 * 16) / 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  cardAdd: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '50%',
  },

  cardDate: {
    color: colors.grey[100],
  },

  cardTitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
  },

  cardAmountOfPages: {
    color: colors.grey[100],
  },
});
