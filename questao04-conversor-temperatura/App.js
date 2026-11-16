import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [valor, setValor] = useState('');
  const [sentido, setSentido] = useState('C para F');
  const [resultado, setResultado] = useState('');

  function converter() {
    const t = Number(valor.replace(',', '.'));

    if (valor === '' || isNaN(t)) {
      setResultado('Digite uma temperatura válida.');
      return;
    }

    if (sentido === 'C para F') {
      const f = (t * 9) / 5 + 32;
      setResultado(t + ' °C → ' + f.toFixed(1) + ' °F');
    } else {
      const c = ((t - 32) * 5) / 9;
      setResultado(t + ' °F → ' + c.toFixed(1) + ' °C');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Temperatura</Text>

      <Text style={styles.texto}>Conversão escolhida: {sentido}</Text>
      <View style={styles.linha}>
        <View style={styles.opcao}>
          <Button title="°C → °F" onPress={() => setSentido('C para F')} />
        </View>
        <View style={styles.opcao}>
          <Button title="°F → °C" onPress={() => setSentido('F para C')} />
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite a temperatura"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Button title="Converter" color="green" onPress={converter} />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  texto: { fontSize: 16, textAlign: 'center', marginBottom: 10 },
  linha: { flexDirection: 'row', marginBottom: 15 },
  opcao: { flex: 1, marginHorizontal: 5 },
  input: { borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 10 },
  resultado: { fontSize: 18, textAlign: 'center', marginTop: 20 },
});
