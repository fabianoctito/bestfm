import { Text, Image, View, ScrollView } from "react-native";
import styles from '../Estilos.jsx';
import Rank from "./Rank";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.cabecalho}>
                <Image style={styles.logo} source={require('../img/logo.png')}></Image>
                <Text style={styles.titulo}>SEJA BEM VINDO AO BEST.FM</Text>
            </View>
            <View className='tables'>
                <View style={styles.musicaTop}>
                    <Text style={styles.titulo}>TOP 10 ARTISTAS GLOBAIS</Text>
                    <Rank id='1' />
                </View>
                <View style={styles.musicaTop}>
                    <Text style={styles.titulo}>TOP 10 MÚSICAS GLOBAIS</Text>
                    <Rank id='2' />
                </View>
            </View>
        </ScrollView>
    );
}