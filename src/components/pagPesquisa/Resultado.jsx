import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image, ScrollView, FlatList, Pressable } from "react-native";
import styles from '../Estilos.jsx'
export default function Resultado(props) {
    if (!props.res[0]) return
    if (props.id == 1 && props.res[1] == 1) {
        return (
            <View>
                {
                    props.res[0].map((item) => (
                        <Pressable key={item.url} onPress={() => props.naveg.push('ResultPage', { id: props.id, nome: item.name, artista: item.artist })} style={styles.itemOpcao}><Text><Text style={{ fontWeight: 'bold' }}>{item.name}</Text> - {item.artist}</Text></Pressable>
                    ))}
            </View>
        )
    }
    else if (props.id == 2 && props.res[1] == 2) {
        return (
            <View>
                {
                    props.res[0].map((item) => (
                        <Pressable key={item.url} onPress={() => props.naveg.push('ResultPage', { id: props.id, nome: item.name })} style={styles.itemOpcao}><Text style={{ fontWeight: 'bold' }}>{item.name}</Text></Pressable>
                    ))}
            </View>
        )
    }
    else if (props.id == 3 && props.res[1] == 3) {
        return (
            <View>
                {
                    props.res[0].map((item) => (
                        <Pressable key={item.url} onPress={() => props.naveg.push('ResultPage', { id: props.id, nome: item.name, artista: item.artist })} style={styles.itemOpcao}><Text><Text style={{ fontWeight: 'bold' }}>{item.name}</Text> - {item.artist}</Text></Pressable>
                    ))}
            </View>
        )
    }
}