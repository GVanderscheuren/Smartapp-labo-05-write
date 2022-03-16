import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Note from '../interfaces/Note';
import core from '../styles/core';
import card from '../styles/card';

export default ({ note }: { note?: Note }) => {
  if (!note) {
    return (
      <View
        style={[
          core.backgroundGrey500,
          core.rounded,
          card.card,
          card.cardAdd,
          card.cardSmall,
        ]}
      >
        <Ionicons name="add" />
      </View>
    );
  } else {
    return (
      <View
        style={[core.backgroundLight, core.rounded, card.card, card.cardSmall]}
      >
        <Text style={card.cardDate}>{new Date().toLocaleDateString('nl-BE')}</Text>
        <Text style={card.cardTitle}>{'An ode to JS'}</Text>
        <Text style={card.cardAmountOfPages}>{2} pages</Text>
      </View>
    );
  }
};
