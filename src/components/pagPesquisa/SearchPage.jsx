import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable, Image, FlatList, ScrollView } from "react-native";
import { realizarPesquisa } from '../../utils.jsx';
import styles from '../Estilos.jsx';
import Resultado from "./Resultado.jsx";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SearchPage({ navigation }) {
    const [opcao, setOpcao] = useState([1, 'música'])
    const [pesquisa, setPesquisa] = useState('')
    const [resultadoLista, setResultadoLista] = useState([])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.pesquisa}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setPesquisa}
                    value={pesquisa}
                    placeholder={`Procure por ${opcao[1]}`}
                    inputMode="text"
                />
                <Pressable style={styles.botao}
                    onPress={() => realizarPesquisa(opcao[0], pesquisa).then((res) => setResultadoLista(res))}>
                    <FontAwesome name="search" size={20} color="white"/></Pressable>
            </View>

            <View style={styles.opcoes}>
                <Pressable style={styles.opcoesFundo} onPress={() => { setOpcao([1, 'música']) }}><MaterialCommunityIcons name="music-note" size={40} color='white' style={opcao[1] == 'música' ? styles.iconeSelecionado : styles.icone} /></Pressable>
                <Pressable style={styles.opcoesFundo} onPress={() => { setOpcao([2, 'artista']) }}><MaterialCommunityIcons name="microphone-variant" size={40} color='white'  style={opcao[1] == 'artista' ? styles.iconeSelecionado : styles.icone} /></Pressable>
                <Pressable style={styles.opcoesFundo} onPress={() => { setOpcao([3, 'álbum']) }}><MaterialCommunityIcons name="album" size={40} color='white' style={opcao[1] == 'álbum' ? styles.iconeSelecionado : styles.icone} /></Pressable>
            </View>

            <View style={styles.selecao}>
                <Resultado id={opcao[0]} naveg={navigation} res={resultadoLista} />
            </View>
        </ScrollView>
    );
}