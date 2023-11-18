import { StyleSheet, Text, TouchableOpacity, View, Alert, Platform, StatusBar } from "react-native";

export default function ItemRank(props) {
    if (props.musica) {
        return (
            <View style={styles.item}>
                {/* <Image style={styles.tinyLogo} source={{uri: 'https://akamai.sscdn.co/letras/360x360/albuns/a/0/c/3/986991605733328.jpg'}}></Image> */}
                <Text style={styles.title}>{props.musica} - {props.artista}</Text>
            </View>)
    }
    else {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{props.artista}</Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 4,
        paddingHorizontal: 20,
        marginVertical: 4,
        marginHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 19,
    },

    tinyLogo: {
        width: 30,
        height: 30,
    },
    musicaTop: {
        alignItems: 'center',
        backgroundColor: 'gray',
        marginVertical: 4,
        marginHorizontal: 16,
    }
});