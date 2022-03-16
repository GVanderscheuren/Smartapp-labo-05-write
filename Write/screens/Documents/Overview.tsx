import { FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import SearchBar from '../../components/searchBar';
import Note from '../../interfaces/Note';
import core from '../../styles/core';

export default () => {
  const testNotes: Note[] = [
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
    {
      title: 'The flight of penguins',
      author: 'GV',
      content: 'You stupid, penguins can not fly...',
    },
  ];

  const renderTodo = ({ item }: { item: Note }) => (
    <Card note={item} key={item.id} />
  );

  return (
    <SafeAreaView style={core.container}>
      <SearchBar />
      <FlatList
        data={testNotes}
        renderItem={renderTodo}
        numColumns={2}
        ListHeaderComponent={<Card />}
        ListFooterComponentStyle={{ width: '50%' }}
      />
    </SafeAreaView>
  );
};
