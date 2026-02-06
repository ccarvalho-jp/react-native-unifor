
import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles'
export default function App() {
  return (
    <View style = {styles.container}>
    <Text style = {styles.texto}>Apresentação</Text>
    <Text> Nome : João Pedro Carvalho</Text>
    <Text> Idade : 19 </Text>
    <Text> Profissão : Estudante </Text>
    <Text> Instituição Unifor</Text>
    </View>
  );
}
