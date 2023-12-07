import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable, Image, FlatList, ScrollView } from "react-native";
import { procurarUser, coletarInfoUser } from "../../utils.jsx";
import styles2 from '../Estilos.jsx';

export default function DuelPage({ route }) {
    const [escolha, setEscolha] = useState({})
    const [usuario1, setUsuario1] = useState('')
    const [usuario2, setUsuario2] = useState('')
    const [imgUser1, setImgUser1] = useState('https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png')
    const [imgUser2, setImgUser2] = useState('https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png') 
    // DPS TIRAR ISSO E COLOCAR NUM ARRAY COM USUARIO SLA

    const searchUs1 = (e) => {
        
        procurarUser(e).then((response)=>{setImgUser1(response)
        console.log(response)})
    }

    useEffect(() => {
        if (route.params) setEscolha(route.params.userChoice)
    }, [route.params])

    return (
        <View>
            <View style={styles2.botaoRedir}>
                <Pressable style={styles2.botaoVoltar}>
                    <Text>
                        VOLTAR
                    </Text>
                </Pressable>
            </View>
            <View style={styles.usersContainer}>
                <View style={styles2.imgUsuario}>
                    <Image source={{ uri: imgUser1 }} style={{ width: 148, height: 148, alignSelf: 'center' }}></Image>
                    <TextInput style={styles.input}
                        onChangeText={e => { setUsuario1(e); searchUs1(e)}}
                        placeholder={`1º usuário`}
                        value={usuario1}
                        inputMode="text" />
                    {/* DEPOIS MUDAR */}
                </View>

                <View style={styles2.imgUsuario}>
                    <Image source={{ uri: imgUser2 }} style={{ width: 148, height: 148, alignSelf: 'center' }}></Image>
                    <TextInput style={styles.input}
                        onChangeText={e => { setUsuario1(e); searchUs1(e)}}
                        placeholder={`2º usuário`}
                        value={usuario2}
                        inputMode="text" />
                    {/* DEPOIS MUDAR */}
                </View>
            </View>

            <View>
                <Pressable style={styles2.botaoVoltar}>
                    <Text>
                        COMPARAR
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    usersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'cen'
    }, input: {
        height: 40,
        width: "75%",
        borderWidth: 1,
        padding: 10,
        alignSelf: 'center'
    },
})