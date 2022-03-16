import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  // BACKGROUNDS
  backgroundDark: {
    backgroundColor: colors.dark,
  },
  backgroundLight: {
    backgroundColor: colors.light,
  },

  backgroundGrey100: {
    backgroundColor: colors.grey[100],
  },

  backgroundGrey500: {
    backgroundColor: colors.grey[500],
  },

  backgroundGrey900: {
    backgroundColor: colors.grey[900],
  },

  // TEXT-COLORS
  textDark: {
    color: colors.dark,
  },

  textLight: {
    color: colors.light,
  },

  container: {
    marginLeft: 5,
    marginRight: 5,
    marginHorizontal: 16,
  },

  //   STYLING
  rounded: {
    borderRadius: 16,
  },
});
