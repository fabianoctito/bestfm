import { StyleSheet } from 'react-native';
import { StatusBar } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#0a090c',
    },
    item: {
        backgroundColor: '#f0edee',
        padding: 4,
        paddingHorizontal: 20,
        marginVertical: 4,
        marginHorizontal: 8,
        flexDirection: 'row', 
        alignItems: 'center',
        borderRadius: 5,
    },
    texto: {
        fontSize: 15,
    },
    tinyLogo: {
        width: 30,
        height: 30,
      },
      musicaTop: {
        padding: 5,
        backgroundColor: '#2c666e',
        marginVertical: 4,
        marginHorizontal: 10,
        borderRadius: 4,
        marginTop: 3,
      },
      titulo: {
        fontSize: 17,
        color: '#f0edee',
        textAlign: 'center',
        // fontWeight: 100, FICA CRASHANDO O APP
        margin: 1,
      },
      numero: {
        fontSize: 20,
        marginRight: 10,
      },
      logo: {
        width: 160,
        height: 140,
        margin: 5,
      },
      cabecalho: {
        height: 190,
        alignItems: 'center',
        alignContent: 'center',
      },
});

export default styles