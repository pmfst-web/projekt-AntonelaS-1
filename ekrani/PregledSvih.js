import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListaElement from '../components/ListaElement';

import { useSelector } from 'react-redux';

const PregledSvih = ({ route, navigation }) => {
  const ponudePregled = useSelector((state) => state.ponude.filterPonude);

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
    width: '100%',
    alignItems: 'center',
  },
});

export default PregledSvih;
