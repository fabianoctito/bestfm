import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pagInicial/HomeScreen'; import SearchPage from './pagPesquisa/SearchPage'; import DuelPage from './pagDuelo/DuelPage';
import NavegacaoPesquisa from './pagPesquisa/NavegacaoPesquisa';

const Tab = createBottomTabNavigator();

export default function AppNavegacao() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName='Início'
      screenOptions={{
        tabBarInactiveBackgroundColor: '#07393c',
        tabBarActiveBackgroundColor: '#f0edee',
         tabBarStyle: {
          borderTopColor: '#07393c',
         }
      }}
     
      >
      <Tab.Screen name="Pesquisa" component={NavegacaoPesquisa} 
      options={{
        title: '',
        headerTransparent: true,
        headerShown: false,
      }}
      />
        <Tab.Screen name="Início" component={HomeScreen}
        options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
              }}
        />
        <Tab.Screen name="Duelo" component={DuelPage} 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}