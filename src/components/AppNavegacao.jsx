import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pagInicial/HomeScreen'; import SearchPage from './pagPesquisa/SearchPage'; import DuelPage from './pagDuelo/DuelPage';
import NavegacaoPesquisa from './pagPesquisa/NavegacaoPesquisa';

const Tab = createBottomTabNavigator();

export default function AppNavegacao() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName='Início'>
      <Tab.Screen name="Pesquisa" component={NavegacaoPesquisa} />
        <Tab.Screen name="Início" component={HomeScreen}/>
        <Tab.Screen name="Duelo" component={DuelPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}