import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image, ScrollView, FlatList, Pressable } from "react-native";
import styles2 from '../Estilos.jsx';

export default function ResultPage({ route, navigation }) {
    const { id, nome, artista, ouvintes, imagem } = route.params
    if (id == 1) {
        return (
            <View>
                <Text>{nome} - {artista} - {ouvintes} ouvintes no last.fm</Text>
                <Pressable style={styles.botao} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
            </View>
        )
    } else if (id == 2) {
        return (
            <View>
                <Text>{nome} - {ouvintes} ouvintes no last.fm</Text>
                <Pressable style={styles.botao} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
            </View>
        )
    } else if (id == 3) {
        return (
            <View>
                <Text>{nome} - {artista}</Text>
                <Pressable style={styles.botao} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
                <Image style={{width: 200, height: 200}} source={{uri: imagem['#text']}}></Image>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: "20%",
        borderRadius: 4,
        backgroundColor: 'gray',
    },
});