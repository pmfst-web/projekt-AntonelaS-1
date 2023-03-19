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
      alert`Ne možete izbrisati ovu ponudu jer Vam se nalazi u favoritima!`;
    } else if (ponuda.broj > 0) {
      alert`Ne možete izbrisati ovu ponudu jer je još aktivna!`;
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
            <Text style={stil.opis}>1. ID ponude je</Text>
            <Text style={stil.podaci}>{ponuda.id}</Text>
          </View>
        </View>

        <View>
          <View>
            <Text style={stil.opis}>2. Ime kafića je</Text>
            <Text style={stil.podaci}>{ponuda.ime}</Text>
          </View>
        </View>

        <View>
          <View>
            <Text style={stil.opis}>3. Mjesto u kojem se kafić nalazi je</Text>
            <Text style={stil.podaci}>{ponuda.mjesto}</Text>
          </View>
        </View>

        <View>
          <View>
            <Text style={stil.opis}>
              4. Satnica (h/euro) koja se nudi iznosi
            </Text>
            <Text style={stil.podaci}>{ponuda.satnica}</Text>
          </View>
        </View>

        <View>
          <View>
            <Text style={stil.opis}>5. Pozicija koja se traži je</Text>
            <Text style={stil.podaci}>{ponuda.pozicija}</Text>
          </View>
        </View>

        <View>
          <View>
            <Text style={stil.opis}>6. Broj traženih djelatnika je</Text>
            <Text style={stil.podaci}>{ponuda.broj}</Text>
          </View>
        </View>

        <View style={stil.tipke}>
          <Tipka title="Promjena favorita" onPress={akcijaFavorit} />
          <Tipka style={stil.obrisi} title="Obriši ponudu" onPress={obrisi} />
          <Tipka title="Uredi ponudu" onPress={uredi} />
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
  opis: {
    textAlign: 'center',
    fontSize: 18,
  },
  podaci: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  tipke: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  obrisi: {
    backgroundColor: 'red',
  },
});

export default Detalji;
