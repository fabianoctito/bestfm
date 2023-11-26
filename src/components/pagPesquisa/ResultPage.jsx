import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image, ScrollView, FlatList, Pressable} from "react-native";

export default function ResultPage({ route, navigation }){
    const { nome, artista} = route.params
    return(
        <View>
        <Text>{nome} - {artista}</Text>
        <Pressable style={styles.botao} onPress={()=>navigation.pop()}><Text>Voltar</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
        botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: "20%",
        borderRadius: 4,
        backgroundColor: 'gray',
    },
});