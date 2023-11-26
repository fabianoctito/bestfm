import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-web";
import Resultado from "./Resultado.jsx";
import { realizarPesquisa, apresentarResultado } from '../../utils.jsx';

export default function SearchPage() {
    const [opcao, setOpcao] = useState([1, 'música'])
    const [pesquisa, setPesquisa] = useState('')
    const [resultadoLista, setResultadoLista] = useState('')

    useEffect(() => {
        console.log(resultadoLista)
    }, [resultadoLista])

    return (
        <ScrollView>
            <View style={styles.pesquisa}>
                <TextInput
                    style={styles.input}
                    onChangeText={setPesquisa}
                    value={pesquisa}
                    placeholder={`Procure por ${opcao[1]}`}
                    keyboardType="numeric"
                />
                <Pressable style={styles.botao}
                onPress={() => realizarPesquisa(opcao[0], pesquisa).then((res) => setResultadoLista(res))}><Text>lupa</Text></Pressable>
            </View>

            <View style={styles.opcoes}>
                <Pressable onPress={() => { setOpcao([1, 'música']) }}><Image style={opcao[1] == 'música' ? styles.iconeSelecionado : styles.icone} source={require('../img/musica.png')} /></Pressable>
                <Pressable onPress={() => { setOpcao([2, 'artista']) }}><Image style={opcao[1] == 'artista' ? styles.iconeSelecionado : styles.icone} source={require('../img/artista.png')} /></Pressable>
                <Pressable onPress={() => { setOpcao([3, 'álbum']) }}><Image style={opcao[1] == 'álbum' ? styles.iconeSelecionado : styles.icone} source={require('../img/album.png')} /></Pressable>
            </View>

            <View style={styles.selecao}>
                {/* <Resultado res={resultadoLista}/> */}

                <View style={styles.itemOpcao}>
                    <Text>ARTISTA/ALBUM/MUSICA</Text>
                </View>

            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    itemOpcao: {
        backgroundColor: 'cyan',
        width: '90%',
        padding: 10,
        margin: 5,
        alignItems: 'center',
    },
    selecao: {
        width: '100%',
        alignItems: 'center',
    },
    iconeSelecionado: {
        height: 40,
        width: 40,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"
    },
    pesquisa: {
        flexDirection: "row",
        alignItems: 'center'
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: "70%",
        borderRadius: 4,
        backgroundColor: 'gray',
    },
    input: {
        height: 40,
        margin: 12,
        width: "75%",
        borderWidth: 1,
        padding: 10,
    },
    icone: {
        height: 40,
        width: 40,
    },
    opcoes: {
        flexDirection: "row",
        justifyContent: 'space-evenly'
    }
});