import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import core from '../styles/core';

export default ({ title, params }: { title: string; params: any }) => {
  return (
    //   TODO: make buttons dynamic (params)
    <View style={[core.backgroundDark, header.container]}>
      {params && params.lAction && (
        <TouchableOpacity>
          <Text style={[core.textLight]}>Left action</Text>
        </TouchableOpacity>
      )}
      {/* TODO: make tite */}
      <Text style={[core.textLight]}>Navigation header</Text>

      {params && params.rAction && (
        <TouchableOpacity>
          <Text style={[core.textLight]}>Right action</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 80,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
});
