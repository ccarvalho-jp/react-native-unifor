import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles'
export default function App() {
  return (
    <View style = {styles.container}>
    <Text style = {styles.texto}>Apresentação</Text>
    <Text style = {styles.textoNormal}> Nome : João Pedro Carvalho</Text>
    <Text style = {styles.textoNormal}> Idade : 19 </Text>
    <Text style = {styles.textoNormal}> Profissão : Estudante </Text>
    <Text style = {styles.textoNormal}> Instituição Unifor</Text>
    </View>
  );
}
