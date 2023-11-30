import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable, Image, FlatList, ScrollView } from "react-native";
import { realizarPesquisa } from '../../utils.jsx';
import styles from '../Estilos.jsx';
import Resultado from "./Resultado.jsx";

export default function SearchPage({ navigation }) {
    const [opcao, setOpcao] = useState([1, 'música'])
    const [pesquisa, setPesquisa] = useState('')
    const [resultadoLista, setResultadoLista] = useState([])

    useEffect(() => {
        // console.log(resultadoLista)
    }, [resultadoLista])

    return (
        <ScrollView>
            <View style={styles.pesquisa}>
                <TextInput
                    style={styles.input}
                    onChangeText={setPesquisa}
                    value={pesquisa}
                    placeholder={`Procure por ${opcao[1]}`}
                    inputMode="text"
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
                <Resultado id={opcao[0]} naveg={navigation} res={resultadoLista} />
            </View>
        </ScrollView>
    );
}