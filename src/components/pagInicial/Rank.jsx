import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, FlatList, StatusBar } from "react-native";
import { consultarRank } from '../dados.jsx'
// import ItemRank from "./itemRank.jsx";

// const [itens, setItens] = useState([]);


const DATA = [
    {
        musica: 'water',
        artista: 'tahyla'
    },
    {
        musica: 'urias',
        artista: 'her mind'
    },
    {
        musica: 'pipa',
        artista: 'silvio santos'
    },
    {
        musica: 'urias',
        artista: 'her mind'
    },
    {
        musica: 'urias',
        artista: 'her mind'
    },
    {
        musica: 'urias',
        artista: 'her mind'
    },
    {
        musica: 'urias',
        artista: 'her mind'
    },
    {
        musica: 'urias',
        artista: 'her mind'
    },
    {
        musica: 'urias',
        artista: 'her mind'
    },
    {
        musica: 'urias',
        artista: 'her mind'
    },

]

export default function Rank(props) {

    if (props.id == '2') {
        const Item = (props) => (
            <View style={styles.item}>
                {/* <Image style={styles.tinyLogo} source={{uri: 'https://akamai.sscdn.co/letras/360x360/albuns/a/0/c/3/986991605733328.jpg'}}></Image> */}
                <Text style={styles.title}>  {props.musica} - {props.artista}</Text>
            </View>
        );

        async function pegarTracks() {
            try {
                const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&format=json&api_key=32c7f2300cd26210d0ffcb714ce26ca7&limit=10');
                const json = await response.json();
                // console.log(json.tracks.track[0].name)
                // console.log(json.tracks.track[0].artist.name)
                
                return json.tracks.track;
            } catch (error) {
                console.error(error);
            }
        }

        //  const DATA = await pegarTracks()
         
        return (
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item musica={item.name} artista={item.artist.name} />}
                // keyExtractor={item => item.musica}
            />
        )
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
        paddingHorizontal: 50,
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
