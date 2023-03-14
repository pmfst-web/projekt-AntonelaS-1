import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { KAFICI } from '../podatci/pocetni_podatci';

import { FAVORITI } from '../podatci/favoriti';

import Tipka from '../components/Tipka';

const Detalji = ({ route, navigation }) => {
  const { brojId } = route.params;
  const kafic = KAFICI.find((item) => item.id === brojId);

  const obrisi = () => {
    KAFICI.pop(kafic.id);
    if (kafic.id in FAVORITI) {
      FAVORITI.pop(kafic.id);
    }
    navigation.navigate('Naslovna stranica');
  };

  const uredi = () => {
    let noviBroj = prompt(
      `Unesite novi broj trazenih mjesta za ${kafic.ime_kafica}`
    );
    kafic.broj = noviBroj;
    navigation.navigate('Detalji ponude', { brojId: kafic.id });
  };

  const makni_iz_favorita = () => {
    navigation.navigate('Moji favoriti');
    if (kafic.id in FAVORITI) {
      FAVORITI.pop(kafic);
    } else {
      alert(
        `Ovaj kafić se NE nalazi u Vašim favoritima pa ga NE možete ukloniti iz Vaših favorita!`
      );
    }
  };

  const dodaj_u_favorite = () => {
    navigation.navigate('Moji favoriti');
    if (kafic.id in FAVORITI) {
      alert(`Ovaj kafić ste već spremili u favorite!`);
    } else {
      FAVORITI.push(kafic);
    }
  };

  return (
    <View style={stil.ekran}>
      <Text>
        KAFIĆ ČIJE DETALJE GLEDATE JE {kafic.ime_kafica}
        <Text>.</Text>
      </Text>

      <Text style={stil.opis}>
        1. ID odabranog kafića je{' '}
        <Text style={{ fontWeight: 'bold' }}>
          {kafic.id}
          <Text>.</Text>
        </Text>
      </Text>

      <Text style={stil.opis}>
        2. Ime odabranog kafića je{' '}
        <Text style={{ fontWeight: 'bold' }}>
          {kafic.ime_kafica}
          <Text>.</Text>
        </Text>
      </Text>

      <Text style={stil.opis}>
        3. Grad u kojem se odabrani kafić nalazi je{' '}
        <Text style={{ fontWeight: 'bold' }}>
          {kafic.grad}
          <Text>.</Text>
        </Text>
      </Text>

      <Text style={stil.opis}>
        4. Satnica koja se nudi u € (u odabranom kafiću) iznosi{' '}
        <Text style={{ fontWeight: 'bold' }}>
          {kafic.satnica}
          <Text>.</Text>
        </Text>
      </Text>

      <Text style={stil.opis}>
        5. Odabrani kafić traži djelatnika(icu) za rad kao{' '}
        <Text style={{ fontWeight: 'bold' }}>
          {kafic.trazeno_mjesto}
          <Text>.</Text>
        </Text>
      </Text>

      <Text style={stil.opis}>
        6. Broj djelatnika(ica) koje odabrani kafić traži je{' '}
        <Text style={{ fontWeight: 'bold' }}>
          {kafic.broj}
          <Text>.</Text>
        </Text>
      </Text>

      <View style={stil.tipke}>
        <Tipka onPress={obrisi}> Obriši ponudu</Tipka>
        <Tipka onPress={dodaj_u_favorite}>Dodaj u favorite</Tipka>
        <Tipka onPress={makni_iz_favorita}>Ukloni iz favorita</Tipka>
        <Tipka onPress={uredi}> Uredi ponudu</Tipka>
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  opis: {
    color: 'black',
    padding: 10,
  },
  tipke: {
    flexDirection: 'row',
  },
});

export default Detalji;
