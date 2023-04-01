import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native';

import Tipka from '../components/Tipka';

const Prijava = ({ navigation }) => {
  const [KorIme, postaviKorIme] = useState('');
  const [KorSifra, postaviKorSifru] = useState('');

  useEffect(() => {
    console.log('Ekran za prijavu se renderirao');
  });
  
  const changeKorIme = (tekst) => {
    postaviKorIme(tekst);
  };
  const changeKorSifr = (tekst) => {
    postaviKorSifru(tekst);
  };

  const prijava = () => {
    if (KorIme != 'asikavica@pmfst.hr' || KorSifra != 'PROMA') {
      postaviKorIme('');
      postaviKorSifru('');
      Alert.alert(
        'Pogreška!',
        'Neispravno korisničko ime i/ili lozinka! Pokušajte ponovno!'
      );
    } else {
      Alert.alert("Obavijest","Prijavili ste se uspješno!");
      navigation.navigate('Naslovna stranica');
    }
  };

  return (
    <View style={stil.ekran}>
      <View>
        <Image style={stil.slika} source={require('../assets/login.png')} />
      </View>

      <View>
        <Text style={{ color: 'black' }}>KORISNIČKO IME:</Text>
        <TextInput
          style={stil.tekst}
          value={KorIme}
          onChangeText={changeKorIme}
        />
      </View>

      <View>
        <Text style={{ color: 'black' }}>LOZINKA:</Text>
        <TextInput
          secureTextEntry
          style={stil.tekst}
          value={KorSifra}
          onChangeText={changeKorSifr}
        />
      </View>

      <Tipka style={stil.tipka} title="PRIJAVA" onPress={prijava} />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tekst: {
    height: 50,
    width: 185,

    padding: 10,

    borderWidth: 1,

    color: 'black',

    borderColor: 'black',
    borderRadius: 5,

    textAlign: 'center',
    marginVertical: 3,
  },
  slika: {
    width: 100,
    height: 100,
  },
  tipka: {
    backgroundColor: 'green',
  },
});

export default Prijava;
