import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...stil.tipka, ...props.style }}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: 140,
    height: 40,
    backgroundColor: 'grey',
  },
});

export default Tipka;
