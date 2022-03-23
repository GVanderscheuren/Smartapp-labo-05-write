import { useState } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Note from '../../interfaces/Note';
import card from '../../styles/card';
import core from '../../styles/core';

export default () => {
  const [note, setNote] = useState<Note>({
    title: '',
    content:'',
    author: 'Martijn',
  })

  return (
    <KeyboardAvoidingView
    behavior='position'
    style={[core.backgroundLight, card.card, card.cardFullScreen]}
    >
      <TextInput style={[core.textPlayFair]}
      placeholder="Title"
      value={note?.title}
      onChangeText={(TextInput: string) => {
        setNote((oldNote: Note) => {
        oldNote.title = TextInput
        return {...oldNote}
      })
    }}
    />
    <Text style={[core.textPlayFair]}>Author: {note?.author}</Text>

      <TextInput
      multiline={true}
      placeholder="Content of the note"
      value={note?.content}
      onChangeText={(TextInput: string) => {
        setNote((oldNote: Note) => {
          oldNote.title = TextInput
          return {...oldNote}
        })
      }} />
    </KeyboardAvoidingView>
  );
};
