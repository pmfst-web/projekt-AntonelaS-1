import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Tipka from '../components/Tipka';

import slika from '../assets/kafici.JPG';

const Naslovna = ({ props, navigation }) => {
  return (
    <View style={stil.ekran}>
      <Image source={slika} style={{ width: 150, height: 150 }} />

      <Text style={stil.upute_naslov}>{'UPUTE: '}</Text>
      <Text style={stil.upute_tekst}>
        {
          'Ako želiš pronaći posao u kafiću ili ako želiš ponuditi posao u kafiću koji nitko neće moći odbiti onda je ovo stranica za tebe!!!'
        }
      </Text>
      <View style={stil.tipke}>
        <Tipka onPress={() => navigation.navigate('Pregled ponuda')}>
          Pregled ponuda
        </Tipka>
        <Tipka onPress={() => navigation.navigate('Moji favoriti')}>
          Moji favoriti
        </Tipka>
        <Tipka onPress={() => navigation.navigate('Unos nove ponude')}>
          Unos ponude
        </Tipka>
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upute_naslov: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  upute_tekst: {
    color: 'black',
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  tipke: {
    flexDirection: 'row',
  },
});

export default Naslovna;
