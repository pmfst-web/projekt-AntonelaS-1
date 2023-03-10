import * as React from 'react';
import {
  View,
  Text,
  StyleSheet} from 'react-native';

import {KAFICI} from '../podatci/pocetni_podatci';

const Detalji = ({route, navigation}) => {
    const {brojId}=route.params;
    const kafic=KAFICI.find(item=>item.id===brojId);

  return (
    <View style={stil.ekran}>
    <Text>KAFIĆ ČIJE DETALJE GLEDATE JE {kafic.ime_kafica}<Text>.</Text></Text>

    <Text style={stil.opis}>1. ID odabranog kafića je <Text style={{fontWeight:"bold"}}>{kafic.id}<Text>.</Text></Text></Text>
      
    <Text style={stil.opis}>2. Ime odabranog kafića je <Text style={{fontWeight:"bold"}}>{kafic.ime_kafica}<Text>.</Text></Text></Text>

    <Text style={stil.opis}>3. Grad u kojem se odabrani kafić nalazi je <Text style={{fontWeight:"bold"}}>{kafic.grad}<Text>.</Text></Text></Text>

    <Text style={stil.opis}>4. Satnica koja se nudi u € (u odabranom kafiću) iznosi <Text style={{fontWeight:"bold"}}>{kafic.satnica}<Text>.</Text></Text></Text>

    <Text style={stil.opis}>5. Odabrani kafić traži djelatnika(icu) za rad kao <Text style={{fontWeight:"bold"}}>{kafic.trazeno_mjesto}<Text>.</Text></Text></Text>

    <Text style={stil.opis}>6. Broj djelatnika(ica) koje odabrani kafić traži je <Text style={{fontWeight:"bold"}}>{kafic.broj}<Text>.</Text></Text></Text>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex:1,
    alignItems:'center',
    justifyContent:"space-evenly",
  },
  opis:{
    color:"black",
    padding:10
  }
});

export default Detalji;
