import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, } from "react-native";
import Rank from "./Rank";

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Image></Image> */}

            <Text>SEJA BEM VINDO AO BEST.FM</Text>
            <View className='tables'>
                <View className='artTable'>
                    <Text>TOP 10 ARTISTAS</Text>
                    <Rank id='1'/>
                </View>

                <View className='musTable'>
                    <Text>TOP 10 MÚSICAS</Text>
                </View>

                <View className='albTable'>
                    <Text>TOP 10 ÁLBUNS</Text>
                </View>
            </View>
        </View>
    );
}