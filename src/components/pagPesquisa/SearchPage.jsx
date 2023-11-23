import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-web";
import RNPickerSelect from 'react-native-picker-select';


export default function SearchPage() {
    const [opcao, setOpcao] = useState('')

    useEffect(() =>{
        console.log(opcao)
    }, [opcao])
    return (
        <ScrollView>
            <View style={styles.pesquisa}>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    // MUDAR PLACEHOLDER QUANDO MUDAR O RADIO
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
                <Pressable style={styles.botao}><Text>ok</Text></Pressable>
            </View>
            <View style={styles.opcoes}>
            <Pressable onPress={()=>{setOpcao('musga')}}><Image style={styles.icone} source={require('../img/musga.png')}/></Pressable>
            <Pressable onPress={()=>{setOpcao('artita')}}><Image style={styles.icone} source={require('../img/mic.png')}/></Pressable>
            <Pressable onPress={()=>{setOpcao('albun')}}><Image style={styles.icone} source={require('../img/album.png')}/></Pressable>
            </View>
            <View style={styles.selecao}>
            <View style={styles.itemOpcao}>
                <Text>ARTISTA/ALBUM/MUSICA</Text>
            </View>
            <View style={styles.itemOpcao}>
                <Text>ARTISTA/ALBUM/MUSICA</Text>
            </View>
            <View style={styles.itemOpcao}>
                <Text>ARTISTA/ALBUM/MUSICA</Text>
            </View>
            <View style={styles.itemOpcao}>
                <Text>ARTISTA/ALBUM/MUSICA</Text>
            </View>
            <View style={styles.itemOpcao}>
                <Text>ARTISTA/ALBUM/MUSICA</Text>
            </View>
            <View style={styles.itemOpcao}>
                <Text>ARTISTA/ALBUM/MUSICA</Text>
            </View>
            <View style={styles.itemOpcao}>
                <Text>ARTISTA/ALBUM/MUSICA</Text>
            </View>
            <View style={styles.itemOpcao}>
                <Text>ARTISTA/ALBUM/MUSICA</Text>
            </View>
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
    opcoes:{
        flexDirection: "row",
        justifyContent: 'space-evenly'
    }
});