import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable, Image, FlatList, ScrollView } from "react-native";
import styles2 from '../Estilos.jsx';

export default function DuelPage() {
    const [opcao, setOpcao] = useState([1, 'música'])
    const [pesquisa, setPesquisa] = useState('')

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
                    <Image source={{ uri: 'https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png' }} style={{ width: 148, height: 148, alignSelf: 'center' }}></Image>
                    <TextInput style={styles.input} />
                    {/* DEPOIS MUDAR */}
                </View>

                <View style={styles2.imgUsuario}>
                    <Image source={{ uri: 'https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png' }} style={{ width: 148, height: 148, alignSelf: 'center' }}></Image>
                    <TextInput style={styles.input} />
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