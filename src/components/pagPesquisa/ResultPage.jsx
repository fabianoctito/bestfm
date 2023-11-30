import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image, ScrollView, FlatList, Pressable } from "react-native";
import styles2 from '../Estilos.jsx';
import { retornarInfo } from "../../utils.jsx";
import { useState } from "react";

export default function ResultPage({ route, navigation }) {
    const [resultInfo, setResultInfo] = useState({})
    const { id, nome, artista } = route.params
    
    if (id == 1) {
        const coletarRes = async () => retornarInfo(id, nome, artista).then((res) => setResultInfo(res))
        coletarRes()
        return (
            <View>
                <View>
                    <Text>{nome} - {artista}</Text>
                    <Text>No total, {resultInfo.plays} plays e {resultInfo.ouvintes} ouvintes no last.fm!</Text>
                    <Text>
                        {resultInfo.tags ? `Tags: ${resultInfo.tags}` : ''}
                    </Text>
                    <Pressable style={styles.botaoVoltar} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
                </View>
            </View>
        )
    } else if (id == 2) {
        const coletarRes = async () => retornarInfo(id, nome).then((res) => setResultInfo(res))
        coletarRes()
        return (
            <View>
                <Text>{nome}</Text>
                <Text>No total, {resultInfo.plays} plays e {resultInfo.ouvintes} ouvintes no last.fm!</Text>
                <Text>
                    {resultInfo.bio ? `Sobre: ${resultInfo.bio}` : ''}
                </Text>
                <Text>
                    {resultInfo.tour ? `${nome} está em tour no momento!` : `${nome} não está em tour no momento.`}
                </Text>
                <Text>
                    {resultInfo.tags ? `Tags: ${resultInfo.tags}` : ''}
                </Text>
                <Pressable style={styles.botaoVoltar} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
            </View>
        )
    } else if (id == 3) {
        const coletarRes = async () => retornarInfo(id, nome, artista).then((res) => setResultInfo(res))
        coletarRes()
        return (
            <View>
                <View>
                    <Text>{nome} - {artista}</Text>
                    <Text>No total, {resultInfo.plays} plays e {resultInfo.ouvintes} ouvintes no last.fm!</Text>
                    <Text>
                        {resultInfo.tags ? `Tags: ${resultInfo.tags}` : ''}
                    </Text>
                    <Image style={{ width: 200, height: 200 }} source={{ uri: resultInfo.image }}></Image>

                </View>
                <Pressable style={styles.botaoVoltar} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    botaoVoltar: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: "20%",
        borderRadius: 4,
        backgroundColor: 'gray',
    },
});