import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Kafic from '../model/kafic';
import { KAFICI } from '../podatci/pocetni_podatci';

import Tipka from '../components/Tipka'

const Unos = () => {
  const [ime, postaviIme] = useState('');
  const [grad, postaviGrad] = useState('');
  const [satnica, postaviSatnicu] = useState(4.38);
  const [mjesto, postaviMjesto] = useState('');
  const [broj, postaviBroj] = useState(1);

  const changeIme = (tekst) => {
    postaviIme(tekst);
  };
  const changeGrad = (tekst) => {
    postaviGrad(tekst);
  };
  const changeSatnicu = (tekst) => {
    postaviSatnicu(tekst);
  };
  const changeMjesto = (tekst) => {
    postaviMjesto(tekst);
  };
  const changeBroj = (tekst) => {
    postaviBroj(tekst);
  };

  const dodajNovi = () => {
    if (
      ime === '' ||
      grad === '' ||
      satnica < 4.38 ||
      mjesto === '' ||
      broj < 1
    ) {
      return alert `Greška: Ime, grad i mjesto ne smiju biti prazni, satnica mora biti minimalno 4.38€ te broj traženih mjesta mora biti minimalno 1!!! Pokušajte ponovno!`;
    } else {
      const novi = new Kafic(KAFICI.length, ime, grad, satnica, mjesto, broj);
      KAFICI.push(novi);
      postaviIme('');
      postaviGrad('');
      postaviSatnicu(4.38);
      postaviMjesto('');
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
          value={grad}
          onChangeText={changeGrad}
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
          value={mjesto}
          onChangeText={changeMjesto}
        />
      </View>

      <View>
        <Text style={{ color: 'black' }}>Broj potrebnih djelatnika(ica):</Text>
        <TextInput
          style={stil.tekst}
          value={broj}
          onChangeText={changeBroj}
        />
      </View>
      
      <Tipka onPress={dodajNovi}>Dodaj novu ponudu</Tipka>
      
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
    marginVertical: 8,
  },
});

export default Unos;
