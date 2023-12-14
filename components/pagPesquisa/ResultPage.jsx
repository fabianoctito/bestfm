import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image, ScrollView, FlatList, Pressable } from "react-native";
import styles from '../Estilos.jsx';
import { retornarInfo } from "../../utils.jsx";
import { useState } from "react";

export default function ResultPage({ route, navigation }) {
    const [resultInfo, setResultInfo] = useState({})
    const { id, nome, artista } = route.params
    const userChoice = {
        id,
        nome,
        artista
    }
    if (id == 1) {
        const coletarRes = async () => retornarInfo(id, nome, artista).then((res) => setResultInfo(res))
        coletarRes()
        return (
            <View style={styles.container}>
                <View style={styles.resultadoInfo}>
                    <Text style={styles.tituloResultadoInfo}>{nome} - {artista}</Text>
                    <Text style={styles.textoResultadoInfo}>No total, {resultInfo.plays} plays e {resultInfo.ouvintes} ouvintes no last.fm!</Text>
                    <Text style={[styles.textoResultadoInfo,{fontSize:15}]}>
                        {resultInfo.tags ? `Tags: ${resultInfo.tags}` : ''}
                    </Text>
                    <View style={styles.botaoVoltarCaixa}>
                        <Pressable style={styles.botaoVoltar} onPress={() => navigation.navigate('Duelo', { userChoice })}><Text>Comparar</Text></Pressable>
                        <Pressable style={styles.botaoVoltar} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
                    </View>
                </View>
            </View>
        )
    } else if (id == 2) {
        const coletarRes = async () => retornarInfo(id, nome).then((res) => setResultInfo(res))
        coletarRes()
        return (
            <View style={styles.container}>
                <View style={styles.resultadoInfo}>
                    <Text style={styles.tituloResultadoInfo}>{nome}</Text>
                    <Text style={styles.textoResultadoInfo}>No total, {resultInfo.plays} plays e {resultInfo.ouvintes} ouvintes no last.fm!</Text>
                    <Text style={styles.textoResultadoInfo}>
                        {resultInfo.bio ? `Sobre: ${resultInfo.bio}` : ''}
                    </Text>
                    <Text style={styles.textoResultadoInfo}>
                        {resultInfo.tour ? `${nome} está em tour no momento!` : `${nome} não está em tour no momento.`}
                    </Text>
                    <Text style={[styles.textoResultadoInfo,{fontSize:15, paddingBottom: 10}]}>
                        {resultInfo.tags ? `Tags: ${resultInfo.tags}` : ''}
                    </Text>
                    <View style={styles.botaoVoltarCaixa}>
                        <Pressable style={styles.botaoVoltar} onPress={() => navigation.navigate('Duelo', { userChoice })}><Text>Comparar</Text></Pressable>
                        <Pressable style={styles.botaoVoltar} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
                    </View>

                </View>
            </View>
        )
    } else if (id == 3) {
        const coletarRes = async () => retornarInfo(id, nome, artista).then((res) => setResultInfo(res))
        coletarRes()
        return (
            <View style={styles.container}>
                <View style={styles.resultadoInfo}>
                    <Text style={styles.tituloResultadoInfo}>{nome} - {artista}</Text>
                    <Text style={styles.textoResultadoInfo}>No total, {resultInfo.plays} plays e {resultInfo.ouvintes} ouvintes no last.fm!</Text>
                    <Text style={styles.textoResultadoInfo}>
                        {resultInfo.tags ? `Tags: ${resultInfo.tags}` : ''}
                    </Text>
                    <Image style={styles.imgResultadoInfo} source={{ uri: resultInfo.image }}></Image>
                    <View style={styles.botaoVoltarCaixa}>
                        <Pressable style={styles.botaoVoltar} onPress={() => navigation.navigate('Duelo', { userChoice })}><Text>Comparar</Text></Pressable>
                        <Pressable style={styles.botaoVoltar} onPress={() => navigation.pop()}><Text>Voltar</Text></Pressable>
                    </View>
                </View>

            </View>
        )
    }
}