import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Foundation } from '@expo/vector-icons';

import { KAFICI } from '../podatci/pocetni_podatci';

const Pregled = ({ navigation }) => {
  const prikaz_kafica = (podatci) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detalji ponude', { brojId: podatci.item.id })
        }
        style={stil.popis}>
        <Text>{podatci.item.ime_kafica}</Text>
        <Foundation name="magnifying-glass" size={20} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={stil.ekran}>
      <FlatList data={KAFICI} renderItem={prikaz_kafica} />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popis: {
    padding: 20,

    width: 150,

    marginHorizontal: 10,
    marginVertical: 10,

    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Pregled;
