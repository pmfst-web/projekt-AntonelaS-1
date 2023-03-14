import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';
import Naslovna from './ekrani/Naslovna';
import Pregled from './ekrani/Pregled';
import Detalji from './ekrani/Detalji';
import Unos from './ekrani/Unos';
import Favoriti from './ekrani/Favoriti';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Naslovna stranica" component={Naslovna} />

        <Stack.Screen
          name="Pregled ponuda"
          component={Pregled}
          options={({ route, navigation }) => {
            return {
              headerRight: () => {
                return (
                  <Entypo
                    onPress={() => navigation.navigate('Unos nove ponude')}
                    name="new-message"
                    size={20}
                  />
                );
              },
            };
          }}
        />

        <Stack.Screen
          name="Detalji ponude"
          component={Detalji}
          options={({ route, navigation }) => {
            return {
              headerRight: () => {
                return (
                  <Entypo
                    onPress={() => navigation.navigate('Naslovna stranica')}
                    name="home"
                    size={20}
                  />
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
                    name="magnifying-glass"
                    size={20}
                  />
                );
              },
            };
          }}
        />
        <Stack.Screen
          name="Moji favoriti"
          component={Favoriti}
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
  );
}
export default App;
