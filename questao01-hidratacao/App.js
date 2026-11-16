import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const valor = Number(peso.replace(',', '.'));

    if (peso === '' || isNaN(valor) || valor <= 0) {
      setResultado('Digite um peso válido (maior que zero).');
      return;
    }

    const litros = (valor * 35) / 1000;
    setResultado(valor + ' kg → ' + litros.toFixed(2) + ' litros por dia');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consumo de Água</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Button title="Calcular" onPress={calcular} />

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
