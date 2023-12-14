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
    fontSize: 20,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  musicaTop: {
    padding: 5,
    backgroundColor: '#2c666e',
    marginVertical: 4,
    marginHorizontal: 15,
    borderRadius: 4,
    marginTop: 3,
    marginBottom: 13,
  },
  resultados: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#2c666e',
    marginVertical: 4,
    marginHorizontal: 15,
    borderRadius: 4,
    marginTop: 3,
    marginBottom: 13,
    width: '90%',
  },
  textoResultado: {
    fontSize: 17,
  },
  itemResultado: {
    backgroundColor: '#f0edee',
    padding: 6,
    paddingHorizontal: 20,
    marginVertical: 4,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  resultadoInfo: {
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#2c666e',
    marginVertical: 4,
    marginHorizontal: 15,
    borderRadius: 4,
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '90%',
    alignItems: 'center',
  },
  textoResultadoInfo: {
    color: '#f0edee',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  imgResultadoInfo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    marginBottom: 30,
  },
  tituloResultadoInfo: {
    color: '#f0edee',
    fontSize: 20,
    paddingVertical: 6,
    textAlign: 'center',
    fontWeight: 'bold',
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
    marginTop: 10,
  },
  iconezinho: {
    width: 5,
    height: 5,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 20,
    color: 'black'
  },
  itemOpcao: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 2,
    width: '90%',
    padding: 10,
    margin: 5,
    alignItems: 'center',
    alignSelf: 'center'
  },
  botaoVoltarCaixa: {
    flexDirection: "row",
    alignSelf: 'center',
    paddingBottom: 10,
  },
  botaoVoltar: {
    backgroundColor: "#f0edee",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 2,
    marginHorizontal: 5,
    height: 50,
    width: 100,
    borderRadius: 4,
  },
  selecao: {
    width: '100%',
    alignItems: 'center',
  },
  iconeSelecionado: {
    overflow: "hidden",
    color: '#2c666e'
  },
  pesquisa: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 4,
    backgroundColor: 'gray',
  },
  input: {
    backgroundColor: 'gray',
    borderRadius: 6,
    height: 40,
    margin: 12,
    width: '80%',
    borderWidth: 1,
    padding: 10,
    color: 'white',
  },
  opcoes: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  botaoRedir: {
    alignSelf: 'center',
    width: '80%',
    height: 80,
    marginTop: 20,
    padding: 20,
  },
  usersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'cen'
  },
  input2: {
    backgroundColor: '#f0edee',
    borderRadius: 4,
    color: '#2c666e',
    height: 40,
    width: 148,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center',
    marginBottom: 30,
  },
  tituloDuelo:{
    color: '#f0edee',
    textAlign: 'center',
    fontSize: 14,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  imgUsuario:{
    width: 148, 
    height: 148, 
    alignSelf: 'center',
  },
  centerItens:{
    marginTop: 'auto',
  },
  tituloCabec:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0edee',
    textAlign: 'center',
    backgroundColor: '#07393c',
    padding: 8,
  },
  resultComparacao: {
    color: '#f0edee',
    textAlign: 'center',
    fontSize: 20,
  },
  coroa:{
    alignSelf: 'flex-start',
    paddingTop: 8,
    margin: 0,
  }
});


export default styles