import { View } from "react-native";
import { useEffect, useState } from "react";
import { consultarTopArtistas, consultarTopTracks } from '../../utils.jsx';
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
            <View>
                {
                    rankArtista.map((item) => (
                        <ItemRank key={rankArtista.findIndex((i) => { return (i == item) })} artista={item.name} num={rankArtista.findIndex((i) => { return (i == item) })} />
                    ))
                }
            </View>
        )
    }
    else if (props.id == '2') {
        return (
            <View>
                {
                    rankTrack.map((item) => (
                        <ItemRank key={rankTrack.findIndex((i) => { return (i == item) })} musica={item.name} artista={item.artist.name} num={rankTrack.findIndex((i) => { return (i == item) })} />
                    ))
                }
            </View>
        )
    }
}