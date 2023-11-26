import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar, Image, ScrollView, FlatList, Pressable} from "react-native";
// import styles from '../Estilos.jsx'
export default function Resultado(props) {
    if(props.res == []) return
    return(
        <FlatList
                data={props.res}
                renderItem={({ item }) => <Pressable onPress={()=>handleSelected(item.name, item.artist)} style={styles.itemOpcao}><Text>{item.name} - {item.artist}</Text></Pressable>}
                keyExtractor={item => item.url}
            />
    )
}

const styles = StyleSheet.create({
    itemOpcao: {
        backgroundColor: 'cyan',
        width: '90%',
        padding: 10,
        margin: 5,
        alignItems: 'center',
        alignSelf: 'center'
    }

});