import React, { useState } from 'react';

import { View, TouchableOpacity } from 'react-native';

import { PONUDE } from './podaci/pocetni_podaci';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MaterialIcons } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';

import { createStore, combineReducers } from 'redux';

import ponudaReducer from './store/reducers/ponude';

import { Provider } from 'react-redux';

import Naslovna from './ekrani/Naslovna';
import Pregled from './ekrani/Pregled';
import Detalji from './ekrani/Detalji';
import Unos from './ekrani/Unos';
import Prijava from './ekrani/Prijava';

const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const tabEkrani = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Sve ponude"
        component={Pregled}
        initialParams={{ prikaz: 'svi' }}
      />
      <Tab.Screen
        name="Moji favoriti"
        component={Pregled}
        initialParams={{ prikaz: 'fav' }}
      />
    </Tab.Navigator>
  );
};

// Spajanje svih reducera u jedan objekt
const glavniReducer = combineReducers({
  ponude: ponudaReducer,
});
// Stvaramo centralni spremnik
const store = createStore(glavniReducer);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Stranica za prijavu"
            component={Prijava}
            options={{
              title: 'Stranica za prijavu',
            }}
          />
          <Stack.Screen
            name="Naslovna stranica"
            component={Naslovna}
            options={{
              title: 'Naslovna stranica',
            }}
          />
          <Stack.Screen
            name="Pregled ponuda"
            component={tabEkrani}
            options={({ route, navigation }) => {
              return {
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Unos nove ponude')}>
                      <View>
                        <MaterialIcons name="add" size={26} />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }}
          />
          <Stack.Screen
            name="Detalji ponude"
            component={Detalji}
            options={({ route, navigation }) => {
              const idPonude = Number(route.params.id);
              const ponuda = PONUDE.find((p) => p.id === idPonude);
              return {
                headerTitle: ponuda?.ime,
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Naslovna stranica')}>
                      <View>
                        <MaterialIcons name="home" size={26} />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }}
          />
          <Stack.Screen
            name="Unos nove ponude"
            component={Unos}
            options={({ route, navigation }) => {
              return {
                headerRight: () => {
                  return (
                    <Entypo
                      onPress={() => navigation.navigate('Pregled ponuda')}
                      name="list"
                      size={20}
                    />
                  );
                },
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
