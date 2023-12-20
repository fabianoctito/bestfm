import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable, Image, FlatList, ScrollView } from "react-native";
import { procurarUser, handleComparar } from "../../utils.jsx";
import ResultadoComp from "./ResultadoComp.jsx";
import styles from '../Estilos.jsx';

export default function DuelPage({ route,navigation }) {
    const [escolha, setEscolha] = useState({})
    const [usuario1, setUsuario1] = useState('')
    const [usuario2, setUsuario2] = useState('')
    const [imgUser1, setImgUser1] = useState('https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png')
    const [imgUser2, setImgUser2] = useState('https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png')
    const [resultado, setResultado] = useState(null)

    const mostrarTitulo = (id, nome, artista) => {
        if (id == 1) {
            return `Comparação da música "${nome}" de ${artista} entre:`
        } else if (id == 2) {
            return `Comparação de ${nome} entre: `
        } else if (id == 3) {
            return `Comparação do álbum "${nome}" de ${artista} entre:`
        }
        else {
            return `Escolha uma música, artista ou álbum na aba de pesquisa para fazer a comparação!`
        }
    }

    const searchUs = (e, num) => {
        setResultado(null)
        if (num == 1) {
            procurarUser(e).then((response) => {
                setImgUser1(response)
            })
        }
        else {
            procurarUser(e).then((response) => {
                setImgUser2(response)
            })
        }
    }

    useEffect(() => {
        if (route.params) setEscolha(route.params.userChoice)
        setResultado(null)
    }, [route.params])

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.tituloCabec}>DUELO</Text>
                <Text style={styles.tituloDuelo} >{mostrarTitulo(escolha.id, escolha.nome, escolha.artista)}</Text>
            </View>

            <View style={styles.usersContainer}>
                <View>
                    <Image source={{ uri: imgUser1 }} style={styles.imgUsuario}></Image>
                    <TextInput style={styles.input2}
                        onChangeText={e => { setUsuario1(e); searchUs(e, 1) }}
                        placeholder={`1º usuário`}
                        value={usuario1}
                        inputMode="text" />
                </View>

                <View>
                    <Image source={{ uri: imgUser2 }} style={styles.imgUsuario}></Image>
                    <TextInput style={styles.input2}
                        onChangeText={e => { setUsuario2(e); searchUs(e, 2) }}
                        placeholder={`2º usuário`}
                        value={usuario2}
                        inputMode="text" />
                </View>
            </View>

            <View>
                {escolha.nome ?
                    <Pressable style={[styles.botaoVoltar, { alignSelf: 'center', marginBottom: 5, }]} onPress={() => handleComparar(usuario1, usuario2, escolha).then((response) => setResultado(response))}><Text>Comparar</Text></Pressable> :
                    <Pressable style={[styles.botaoVoltar, { alignSelf: 'center', marginBottom: 5, }]} onPress={() => navigation.navigate('Pesquisa')}><Text>Escolher item</Text></Pressable>
                }



            </View>
            <View>
                {
                    resultado ? <ResultadoComp id={escolha.id} nome={escolha.nome} artista={escolha.artista} us1={usuario1} us2={usuario2} resultado={resultado} /> : null
                }
            </View>
        </ScrollView>
    );
}