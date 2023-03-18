import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Ponuda from '../model/ponuda';
import { PONUDE } from '../podaci/pocetni_podaci';

import Tipka from '../components/Tipka';

const Unos = () => {
  const [ime, postaviIme] = useState('');
  const [mjesto, postaviMjesto] = useState('');
  const [satnica, postaviSatnicu] = useState(4.38);
  const [pozicija, postaviPoziciju] = useState('');
  const [broj, postaviBroj] = useState(1);

  const changeIme = (tekst) => {
    postaviIme(tekst);
  };
  const changeMjesto = (tekst) => {
    postaviMjesto(tekst);
  };
  const changeSatnicu = (tekst) => {
    postaviSatnicu(tekst);
  };
  const changePoziciju = (tekst) => {
    postaviPoziciju(tekst);
  };
  const changeBroj = (tekst) => {
    postaviBroj(tekst);
  };

  const dodajNovi = () => {
    if (
      ime === '' ||
      mjesto === '' ||
      satnica < 4.38 ||
      pozicija === '' ||
      broj < 1
    ) {
      return alert`Greška: Ime, mjesto i pozicija ne smiju biti prazni, satnica mora biti minimalno 4.38€ te broj traženih mjesta mora biti minimalno 1!!! Pokušajte ponovno!`;
    } else {
      const novi = new Ponuda(
        PONUDE.length,
        ime,
        mjesto,
        satnica,
        pozicija,
        broj
      );
      PONUDE.push(novi);
      postaviIme('');
      postaviMjesto('');
      postaviSatnicu(4.38);
      postaviPoziciju('');
      postaviBroj(1);
    }
  };

  return (
    <View style={stil.ekran}>
      <View>
        <Text style={{ color: 'black' }}>Ime kafića:</Text>
        <TextInput style={stil.tekst} value={ime} onChangeText={changeIme} />
      </View>

      <View>
        <Text style={{ color: 'black' }}>Grad:</Text>
        <TextInput
          style={stil.tekst}
          value={mjesto}
          onChangeText={changeMjesto}
        />
      </View>

      <View>
        <Text style={{ color: 'black' }}>Satnica:</Text>
        <TextInput
          style={stil.tekst}
          value={satnica}
          onChangeText={changeSatnicu}
        />
      </View>

      <View>
        <Text style={{ color: 'black' }}>Djelatnost:</Text>
        <TextInput
          style={stil.tekst}
          value={pozicija}
          onChangeText={changePoziciju}
        />
      </View>

      <View>
        <Text style={{ color: 'black' }}>Broj potrebnih djelatnika(ica):</Text>
        <TextInput style={stil.tekst} value={broj} onChangeText={changeBroj} />
      </View>

      <Tipka title="OK" onPress={dodajNovi} />
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
});

export default Unos;
