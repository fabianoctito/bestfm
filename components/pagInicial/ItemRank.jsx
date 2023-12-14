import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image } from "react-native";
import styles from '../Estilos.jsx'
export default function ItemRank(props) {
    if (props.musica) {
        return (
            <View style={styles.item}>
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