import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Foundation } from '@expo/vector-icons';

const ListaElement = (props) => {
  return (
    <TouchableOpacity style={{ alignItems: 'center' }} onPress={props.onPress}>
      <View style={{ ...stil.tipka, ...props.style }}>
        <View style={stil.ime}>
          <Text>{props.natpis}</Text>
        </View>
        <View style={stil.ikona}>
          <Foundation name="magnifying-glass" size={16} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    width: 300,
    maxWidth: '75%',
    height: 50,

    alignItems: 'center',

    borderWidth: 1,

    marginVertical: 5,

    flexDirection: 'row',
  },
  ime: {
    flex: 1,
    padding: 5,
  },
  ikona: {
    width: '40%',
    alignItems: 'center',
  },
});

export default ListaElement;
