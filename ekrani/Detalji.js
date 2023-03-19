import React, { useCallback, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { View, Text, StyleSheet } from 'react-native';

import { promjenaFavorita } from '../store/actions/ponude';

import Tipka from '../components/Tipka';

import { PONUDE } from '../podaci/pocetni_podaci';

import { FAVORITI } from '../podaci/favoriti';

const Detalji = ({ route, navigation }) => {
  const idPonude = Number(route.params.id);
  const svePonude = useSelector((state) => state.ponude.ponude);
  const ponuda = svePonude.find((p) => p.id === idPonude);

  const dispatch = useDispatch();

  const akcijaFavorit = () => {
    dispatch(promjenaFavorita(idPonude));
    navigation.navigate('Pregled ponuda');
  };

  const obrisi = () => {
    if (ponuda.id in FAVORITI) {
      alert`Ne možete izbrisati ovu ponudu jer Vam se nalazi u favoritima`;
    } else {
      PONUDE.pop(ponuda.id);
    }
    navigation.navigate('Naslovna stranica');
  };

  const uredi = () => {
    let noviBroj = prompt(`Unesite novi broj trazenih mjesta za ${ponuda.ime}`);
    ponuda.broj = noviBroj;
    navigation.navigate('Detalji ponude', { id: ponuda.id });
  };

  return (
    <View style={stil.ekran}>
      <View style={stil.tablica}>
        <View>
          <View>
            <Text>ID ponude je {ponuda.id}</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Ime kafića je {ponuda.ime}</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Mjesto u kojem se kafić nalazi je {ponuda.mjesto}</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Satnica (h/euro) koja se nudi iznosi {ponuda.satnica}</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Pozicija koja se traži je {ponuda.pozicija}</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Broj traženih djelatnika je {ponuda.broj}</Text>
          </View>
        </View>

        <View>
          <View>
            <Tipka title="Promjena favorita" onPress={akcijaFavorit} />
          </View>
        </View>

        <View>
          <View>
            <Tipka title="Obriši ponudu" onPress={obrisi} />
          </View>
        </View>

        <View>
          <View>
            <Tipka title="Uredi ponudu" onPress={uredi} />
          </View>
        </View>
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
  tablica: {
    width: '80%',
    flex: 1,
  },
});

export default Detalji;
