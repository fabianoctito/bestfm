import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image } from "react-native";
import styles from '../Estilos.jsx'
export default function ItemRank(props) {
    if (props.musica) {
        return (
            <View style={styles.item}>
                {/* <Image style={styles.tinyLogo} source={{uri: 'https://akamai.sscdn.co/letras/360x360/albuns/a/0/c/3/986991605733328.jpg'}}></Image> */}
                <Text style={styles.numero}>{props.num + 1}</Text>
                <Text style={styles.texto}>{props.musica} - {props.artista}</Text>
            </View>)
    }
    else {
        return (
            <View style={styles.item}>
                <Text style={styles.numero}>{props.num + 1}</Text>
                <Text style={styles.texto}>{props.artista}</Text>
            </View>)
    }
}