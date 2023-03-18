import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListaElement from '../components/ListaElement';

import { useSelector } from 'react-redux';

const Pregled = ({ route, navigation }) => {
  const prikaz = route.params.prikaz;
  const ponudePregled = useSelector((state) => {
    if (prikaz === 'svi') {
      return state.ponude.filterPonude;
    } else if (prikaz === 'fav') {
      return state.ponude.favoritPonude;
    }
    return null;
  });

  const prikazElelementa = (podaci) => {
    return (
      <ListaElement
        onPress={() =>
          navigation.navigate('Detalji ponude', { id: podaci.item.id })
        }
        natpis={podaci.item.ime}
      />
    );
  };

  return (
    <View style={stil.ekran}>
      <View style={stil.lista}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={ponudePregled}
          renderItem={prikazElelementa}
          numColumns={1}
        />
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Pregled;
