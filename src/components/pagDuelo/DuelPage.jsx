import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable, Image, FlatList, ScrollView } from "react-native";
import { procurarUser, coletarInfoUser } from "../../utils.jsx";
import styles from '../Estilos.jsx';

export default function DuelPage({ route }) {
    const [escolha, setEscolha] = useState({})
    const [usuario1, setUsuario1] = useState('')
    const [usuario2, setUsuario2] = useState('')
    const [imgUser1, setImgUser1] = useState('https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png')
    const [imgUser2, setImgUser2] = useState('https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png')
    // DPS TIRAR ISSO E COLOCAR NUM ARRAY COM USUARIO SLA

    const mostrarTitulo = (id, nome, artista) => {
        if (id == 1) {
            return `Comparação da música "${nome}" de ${artista} entre:`
        } else if (id == 2) {
            return `Comparação de ${artista} entre: `
        } else if (id == 3) {
            return `Comparação do álbum "${nome}" de ${artista} entre:`
        }
        else {
            return `Vá na página de pesquisa e procure por alguma música/artista/álbum para comparar!`
        }
    }

    const searchUs = (e, num) => {
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
    }, [route.params])

    useEffect(() => {
        console.log(imgUser1)
    }, [imgUser1])

    return (
        <View style={styles.container}>
            <View>
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
                    {/* DEPOIS MUDAR */}
                </View>

                <View>
                    <Image source={{ uri: imgUser2 }} style={styles.imgUsuario}></Image>
                    <TextInput style={styles.input2}
                        onChangeText={e => { setUsuario2(e); searchUs(e, 2) }}
                        placeholder={`2º usuário`}
                        value={usuario2}
                        inputMode="text" />
                    {/* DEPOIS MUDAR */}
                </View>
            </View>

            <View>
                <Pressable style={[styles.botaoVoltar, { alignSelf: 'center' }]}>
                    <Text>
                        COMPARAR
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

