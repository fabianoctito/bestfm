import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image, ScrollView, FlatList, Pressable } from "react-native";
import styles from '../Estilos.jsx'
export default function Resultado(props) {
    console.log(props)
    if (props.id == 1) {
        if (props.resultado[0].plays > props.resultado[1].plays) {
            return (
                <View>
                    <Text>{props.us1} escutou {props.nome} de {props.artista} {props.resultado[0].plays - props.resultado[1].plays} vezes mais que {props.us2}</Text>
                </View>
            )
        }
        else if (props.resultado[0].plays < props.resultado[1].plays) {
            return (
                <View>
                    <Text>{props.us2} escutou {props.nome} de {props.artista} {props.resultado[1].plays - props.resultado[0].plays} vezes mais que {props.us1}</Text>
                </View>
            )
        }
        else{
            return (
                <View>
                    <Text>{props.us1} escutou {props.nome} de {props.artista}a mesma quantidade de {props.us2}, {props.resultado[0].plays} vezes!</Text>
                </View>
            )
        }
    }

}