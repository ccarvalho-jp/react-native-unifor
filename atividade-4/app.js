import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles'
export default function App() {
  return (
      <View style = {styles.container}>
    <Text style = {styles.texto}>Apresentação</Text>
        <Text style = {styles.textoNormal}><Text style = {styles.texto}> Nome: </Text> João Pedro Carvalho</Text>
        <Text style = {styles.textoNormal}><Text style = {styles.texto}> Idade: </Text> 19</Text>
    <Text style = {styles.textoNormal}><Text style = {styles.texto}> Profissão: </Text> Estudante</Text>
    <Text style = {styles.textoNormal}><Text style = {styles.texto}> Instituição: </Text> Unifor</Text>
    </View>
  );
}
