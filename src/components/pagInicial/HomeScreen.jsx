import { useEffect, useState } from "react";
import { StyleSheet, Text,  Image, TouchableOpacity, View, TextInput, ScrollView, FlatList, StatusBar } from "react-native";
import styles from '../Estilos.jsx';
import Rank from "./Rank";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View><Text style={styles.titulo}>SEJA BEM VINDO AO BEST.FM</Text></View>
            <View className='tables'>
                <View style={styles.musicaTop}>
                    <Text style={styles.titulo}>TOP 10 ARTISTAS</Text>
                    <Rank id='1'/>
                </View>

                <View style={styles.musicaTop}>
                    <Text style={styles.titulo}>TOP 10 MÚSICAS</Text>
                    <Rank id='2'/>
                </View>
            </View>
        </ScrollView>
    );
}
