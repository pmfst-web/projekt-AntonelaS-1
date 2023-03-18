import * as React from 'react';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';

import Tipka from '../components/Tipka';

const Naslovna = ({ navigation }) => {
  return (
    <ScrollView vertical={true} style={stil.ekran}>
      <View>
        <Image style={stil.slika} source={require('../assets/kafici.PNG')} />
      </View>

      <View>
        <Text style={stil.upute_naslov}>{'UPUTE: '}</Text>
        <Text style={stil.upute_tekst}>
          {
            'Ako želiš pronaći posao u kafiću ili ako želiš ponuditi posao u kafiću koji nitko neće moći odbiti onda je ovo stranica za tebe!!!'
          }
        </Text>
      </View>

      <View style={stil.tipke}>
        <Tipka
          title="Pregled svih ponuda"
          onPress={() => navigation.navigate('Pregled ponuda')}
        />

        <Tipka
          title="Unos nove ponude"
          onPress={() => navigation.navigate('Unos nove ponude')}
        />
      </View>
    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slika: {
    width: 333,
    height: 200,
  },
  tipke: {
    flex: 1,
    flexDirection: 'row',
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
});

export default Naslovna;
