import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './Styles'

export default function App() {
  const abrirGitHub = () => {
    Linking.openURL('https://github.com/ccarvalho-jp');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Apresentação</Text>
      <Text style={styles.textoNormal}><Text style={styles.texto}>Nome:</Text> João Pedro Carvalho</Text>
      <Text style={styles.textoNormal}><Text style={styles.texto}>Idade:</Text> 19</Text>
      <Text style={styles.textoNormal}><Text style={styles.texto}>Profissão:</Text> Estudante</Text>
      <Text style={styles.textoNormal}><Text style={styles.texto}>Instituição:</Text> Unifor</Text>
      <TouchableOpacity onPress={abrirGitHub}>
        <Text style={styles.textoNormal}><Text style={styles.texto}>GitHub:</Text> ccarvalho-jp</Text>
      </TouchableOpacity>
    </View>
  );
}
