import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; import SearchPage from './SearchPage'; import DuelPage from './DuelPage';

const Tab = createBottomTabNavigator();

export default function AppNavegacao() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Pesquisa" component={SearchPage} />
        <Tab.Screen name="Duelo" component={DuelPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}