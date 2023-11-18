import { useEffect, useState } from "react";
import { StyleSheet, Text,  Image, TouchableOpacity, View, TextInput, ScrollView, FlatList, StatusBar } from "react-native";
import Rank from "./Rank";

export default function HomeScreen() {
    return (
        <ScrollView>
            <View><Text>SEJA BEM VINDO AO BEST.FM</Text></View>
            <View className='tables'>
                <View className='artTable' style={styles.musicaTop}>
                    <Text>TOP 10 ARTISTAS</Text>
                    <Rank id='1'/>
                </View>

                <View className='musTable' style={styles.musicaTop}>
                    <Text>TOP 10 MÚSICAS</Text>
                    <Rank id='2'/>

                </View>
            </View>
        </ScrollView>
    );
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
