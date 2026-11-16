import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [produto, setProduto] = useState('');
  const [preco, setPreco] = useState('');
  const [desconto, setDesconto] = useState('');
  const [resultado, setResultado] = useState('');

  function aplicarDesconto() {
    const p = Number(preco.replace(',', '.'));
    const d = Number(desconto.replace(',', '.'));

    if (produto === '' || preco === '' || desconto === '') {
      setResultado('Preencha todos os campos.');
      return;
    }
    if (isNaN(p) || p < 0) {
      setResultado('O preço não pode ser negativo.');
      return;
    }
    if (isNaN(d) || d < 0 || d > 100) {
      setResultado('O desconto deve estar entre 0% e 100%.');
      return;
    }

    const economia = (p * d) / 100;
    const precoFinal = p - economia;

    setResultado(
      produto + '\nEconomia: R$ ' + economia.toFixed(2) + '\nPreço final: R$ ' + precoFinal.toFixed(2)
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Desconto</Text>

      <TextInput style={styles.input} placeholder="Nome do produto" value={produto} onChangeText={setProduto} />
      <TextInput style={styles.input} placeholder="Preço original (R$)" keyboardType="numeric" value={preco} onChangeText={setPreco} />
      <TextInput style={styles.input} placeholder="Desconto (%)" keyboardType="numeric" value={desconto} onChangeText={setDesconto} />

      <Button title="Aplicar desconto" onPress={aplicarDesconto} />

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
