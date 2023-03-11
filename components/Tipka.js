import React from 'react';
import {
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity} from 'react-native';

const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={stil.dodir}>
      <View style={stil.tipka}>
        <Text style={stil.tekst}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tekst: {
    color:'white',
    fontWeight:'bold',
    alignItems:'center'
  },
  tipka: {
    padding:5,
    width:80,
    alignItems:'center',
    backgroundColor:'grey',
    marginTop:20,
  },
  dodir: {
    alignItems:'center'
  },
});

export default Tipka;