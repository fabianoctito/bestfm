import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './Estilos.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pagInicial/HomeScreen'; import DuelPage from './pagDuelo/DuelPage';
import Icon from '@mdi/react';
import { mdiFormatListBulleted } from '@mdi/js';
import NavegacaoPesquisa from './pagPesquisa/NavegacaoPesquisa';

const Tab = createBottomTabNavigator();

export default function AppNavegacao() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName='Duelo'
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
            // tabBarIcon: () => {
            //   <Icon path={mdiFormatListBulleted} focused={true} size={25} color={'black'} />
            // },
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