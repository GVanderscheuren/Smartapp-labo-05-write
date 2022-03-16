import { StyleSheet, TextInput } from 'react-native';
import colors from '../styles/colors';

export default () => {
  return (
    <TextInput
      style={styles.textSearch}
      placeholder={'Search'}
      placeholderTextColor={colors.grey[100]}
    />
  );
};

const styles = StyleSheet.create({
  textSearch: {
    backgroundColor: colors.grey[500],
    color: colors.grey[100],
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: 'center',
    marginVertical: 8,
    borderRadius: 8,
  },
});
