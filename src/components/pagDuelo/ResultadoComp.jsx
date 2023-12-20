import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image, ScrollView, FlatList, Pressable } from "react-native";
import styles from '../Estilos.jsx';
import { Foundation } from '@expo/vector-icons';
export default function Resultado(props) {
    if (props.resultado == null) return
    if (props.resultado == 406) {
        return (
            <View>
                <Text style={styles.resultComparacao}>Escolha usuários válidos!</Text>
            </View>
        )
    }
    if (props.id == 1) {
        if (props.resultado == 404) {
            return (
                <View>
                    <Text style={styles.resultComparacao}>Escolha uma música mais em comum para comparar!</Text>
                </View>
            )
        }
        else if (props.resultado[0].plays > props.resultado[1].plays) {
            return (
                <View>
                    <View>
                        <Foundation style={styles.coroa} name="crown" size={64} color="#f0edee" />
                        <Text style={styles.ganhador}>{props.us1}</Text>
                    </View>
                    <View>
                        <Text style={styles.resultComparacao}>{props.us1} escutou "{props.nome}" de {props.artista} {props.resultado[0].plays - props.resultado[1].plays} vezes a mais que {props.us2}</Text>
                    </View>

                </View>
            )
        }
        else if (props.resultado[0].plays < props.resultado[1].plays) {
            return (
                <View>
                    <View>
                        <Foundation style={styles.coroa} name="crown" size={64} color="#f0edee" />
                        <Text style={styles.ganhador}>{props.us2}</Text>
                    </View>
                    <Text style={styles.resultComparacao}>{props.us2} escutou "{props.nome}" de {props.artista} {props.resultado[1].plays - props.resultado[0].plays} vezes a mais que {props.us1}</Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text style={styles.resultComparacao}>{props.us1} escutou "{props.nome}" de {props.artista} a mesma quantidade de {props.us2}, {props.resultado[0].plays} vezes!</Text>
                </View>
            )
        }
    }
    else if (props.id == 2) {
        if (props.resultado == 404) {
            return (
                <View>
                    <Text style={styles.resultComparacao}>Escolha um artista mais em comum para comparar!</Text>
                </View>
            )
        }
        else if (props.resultado[0].plays > props.resultado[1].plays) {
            return (
                <View>
                    <View>
                        <Foundation style={styles.coroa} name="crown" size={64} color="#f0edee" />
                        <Text style={styles.ganhador}>{props.us1}</Text>
                    </View>
                    <Text style={styles.resultComparacao}>{props.us1} escutou "{props.nome}" {props.resultado[0].plays - props.resultado[1].plays} vezes a mais que {props.us2}</Text>
                </View>
            )
        }
        else if (props.resultado[0].plays < props.resultado[1].plays) {
            return (
                <View>
                    <View>
                        <Foundation style={styles.coroa} name="crown" size={64} color="#f0edee" />
                        <Text style={styles.ganhador}>{props.us2}</Text>
                    </View>
                    <Text style={styles.resultComparacao}>{props.us2} escutou "{props.nome}" {props.resultado[1].plays - props.resultado[0].plays} vezes a mais que {props.us1}</Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text style={styles.resultComparacao}>{props.us1} escutou "{props.nome}" {props.resultado[0].plays} vezes, a mesma quantidade de {props.us2}!</Text>
                </View>
            )
        }
    } if (props.id == 3) {
        if (props.resultado == 404) {
            return (
                <View>
                    <Text style={styles.resultComparacao}>Escolha um álbum mais em comum para comparar!</Text>
                </View>
            )
        }
        else if (props.resultado[0].plays > props.resultado[1].plays) {
            return (
                <View>
                    <View>
                        <Foundation style={styles.coroa} name="crown" size={64} color="#f0edee" />
                        <Text style={styles.ganhador}>{props.us1}</Text>
                    </View>
                    <Text style={styles.resultComparacao}>{props.us1} escutou "{props.nome}" de {props.artista} {props.resultado[0].plays - props.resultado[1].plays} vezes a mais que {props.us2}</Text>
                </View>
            )
        }
        else if (props.resultado[0].plays < props.resultado[1].plays) {
            return (
                <View>
                    <View>
                        <Foundation style={styles.coroa} name="crown" size={64} color="#f0edee" />
                        <Text style={styles.ganhador}>{props.us2}</Text>
                    </View>
                    <Text style={styles.resultComparacao}>{props.us2} escutou {props.nome} de {props.artista} {props.resultado[1].plays - props.resultado[0].plays} vezes a mais que {props.us1}</Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text style={styles.resultComparacao}>{props.us1} escutou {props.nome} de {props.artista} {props.resultado[0].plays} vezes, a mesma quantidade de {props.us2}!</Text>
                </View>
            )
        }
    }
}