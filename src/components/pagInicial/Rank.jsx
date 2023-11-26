import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { consultarTopArtistas, consultarTopTracks } from '../../utils.jsx';
import styles from '../Estilos.jsx'
import ItemRank from "./ItemRank.jsx";

export default function Rank(props) {
    const [rankArtista, setRankArtista] = useState([]);
    const [rankTrack, setRankTrack] = useState([]);

    useEffect(() => {
        consultarTopArtistas().then((artistas) => setRankArtista(artistas))
        consultarTopTracks().then((tracks) => setRankTrack(tracks))
    }, [])

    if (props.id == '1') {
        return (
            <FlatList
                data={rankArtista}
                renderItem={({ item }) => <ItemRank artista={item.name} num={rankArtista.findIndex((i) => { return (i == item) })} />}
                keyExtractor={item => item.name}
            />
        )
    }
    else if (props.id == '2') {
        return (
            <FlatList
                data={rankTrack}
                renderItem={({ item }) => <ItemRank musica={item.name} artista={item.artist.name} num={rankTrack.findIndex((i) => { return (i == item) })} />}
                keyExtractor={item => item.name}
            />
        )
    }
}