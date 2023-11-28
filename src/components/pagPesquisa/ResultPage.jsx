import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image, ScrollView, FlatList, Pressable } from "react-native";
import styles2 from '../Estilos.jsx';
import { retornarInfo } from "../../utils.jsx";
import { useState } from "react";

export default function ResultPage({ route, navigation }) {
    const [resultInfo, setResultInfo] = useState({})

    const { id, nome, artista } = route.params
    if (id == 1) {
        return (
            <View>
                {/* <Text>{nome} - {artista} - {ouvintes} ouvintes no last.fm</Text>
                <Pressable style={styles.botao} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable> */}
            </View>
        )
    } else if (id == 2) {
        const coletarRes = async () => retornarInfo(id,nome).then((res)=>setResultInfo(res))
        coletarRes()
        return (
            <View>
                <Text>{nome}</Text>
                <Text>No total, {resultInfo.plays} e {resultInfo.ouvintes} ouvintes no last.fm!</Text>
                <Text>
                    {resultInfo.bio ? resultInfo.bio: ''}
                </Text>
                <Pressable style={styles.botao} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
            </View>
        )
    } else if (id == 3) {
        return (
            <View>
                {/* <Text>{nome} - {artista}</Text>
                <Pressable style={styles.botao} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
                <Image style={{width: 200, height: 200}} source={{uri: imagem['#text']}}></Image> */}
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