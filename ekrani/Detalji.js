import React, { useCallback, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { View, Text, StyleSheet, Button } from 'react-native';

import { promjenaFavorita } from '../store/actions/ponude';

const Detalji = ({ route, navigation }) => {
  const idPonude = Number(route.params.id);
  const svePonude = useSelector((state) => state.ponude.ponude);
  const ponuda = svePonude.find((p) => p.id === idPonude);

  const dispatch = useDispatch();

  const akcijaFavorit = () => {
    dispatch(promjenaFavorita(idPonude));
    navigation.navigate('Pregled ponuda');
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
            <Button title="Promjena favorita" onPress={akcijaFavorit} />
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
