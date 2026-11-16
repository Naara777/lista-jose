import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularMedia() {
    const n1 = Number(nota1.replace(',', '.'));
    const n2 = Number(nota2.replace(',', '.'));
    const n3 = Number(nota3.replace(',', '.'));

    if (nome === '' || nota1 === '' || nota2 === '' || nota3 === '') {
      setResultado('Preencha todos os campos.');
      return;
    }

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) ||
        n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
      setResultado('As notas devem estar entre 0 e 10.');
      return;
    }

    const media = (n1 + n2 + n3) / 3;
    const situacao = media >= 7 ? 'Aprovado' : 'Reprovado';

    setResultado(nome + ' - Média: ' + media.toFixed(1) + ' - ' + situacao);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Média do Estudante</Text>

      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Nota 1" keyboardType="numeric" value={nota1} onChangeText={setNota1} />
      <TextInput style={styles.input} placeholder="Nota 2" keyboardType="numeric" value={nota2} onChangeText={setNota2} />
      <TextInput style={styles.input} placeholder="Nota 3" keyboardType="numeric" value={nota3} onChangeText={setNota3} />

      <Button title="Calcular média" onPress={calcularMedia} />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 10 },
  resultado: { fontSize: 18, textAlign: 'center', marginTop: 20 },
});
