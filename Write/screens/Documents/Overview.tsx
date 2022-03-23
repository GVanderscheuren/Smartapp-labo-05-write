import { SQLResultSet, SQLTransaction } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import SearchBar from '../../components/searchBar';
import Note from '../../interfaces/Note';
import core from '../../styles/core';
import { statement, transaction } from '../../utils/db';

export default () => {
  // const testNotes: Note[] = [
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  //   {
  //     title: 'The flight of penguins',
  //     author: 'GV',
  //     content: 'You stupid, penguins can not fly...',
  //   },
  // ];

  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const tx: SQLTransaction = await transaction();
    const result: SQLResultSet = await statement(tx, 'SELECT * FROM `notes`');
    // setNotes(result.rows._array);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const renderTodo = ({ item }: { item: any }) => {
    const n: Note = {
      id: item.id,
      title: item.title,
      author: 'ML',
      content: item.content,
    };

    return (
      <SafeAreaView style={core.container}>
        <SearchBar />
        <FlatList
          data={notes}
          renderItem={renderTodo}
          numColumns={2}
          ListHeaderComponent={<Card />}
          ListFooterComponentStyle={{ width: '50%' }}
        />
      </SafeAreaView>
    );
  };
};
