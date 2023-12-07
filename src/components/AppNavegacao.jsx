import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './Estilos.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pagInicial/HomeScreen'; import DuelPage from './pagDuelo/DuelPage';
import NavegacaoPesquisa from './pagPesquisa/NavegacaoPesquisa';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppNavegacao() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName='Pesquisa'
        screenOptions={{
          tabBarInactiveBackgroundColor: '#07393c',
          tabBarActiveBackgroundColor: '#f0edee',
          tabBarStyle: {
          borderTopColor: 'black',

          }
        }}

      >
        <Tab.Screen name="Pesquisa" component={NavegacaoPesquisa}

          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              //const iconName = focused ? "list-ol" : "view-list-outline";
              //size = focused ? size * 1.5 : size;
              color = focused ? color = "black" : color = "#f0edee";
              return (
                <FontAwesome
                  name="search"
                  size={24}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen name="Início" component={HomeScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              //const iconName = focused ? "list-ol" : "view-list-outline";
              //size = focused ? size * 1.5 : size;
              color = focused ? color = "black" : color = "#f0edee";
              return (
                <Entypo
                  name="home"
                  size={24}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen name="Duelo" component={DuelPage}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              //const iconName = focused ? "list-ol" : "view-list-outline";
              //size = focused ? size * 1.5 : size;
              color = focused ? color = "black" : color = "#f0edee";
              return (
                <MaterialCommunityIcons
                  name="sword-cross"
                  size={24}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}