import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [saldo, setSaldo] = useState(1000);
  const [valor, setValor] = useState('');
  const [mensagem, setMensagem] = useState('');

  function depositar() {
    const v = Number(valor.replace(',', '.'));
    if (valor === '' || isNaN(v) || v <= 0) {
      setMensagem('Digite um valor maior que zero.');
      return;
    }
    setSaldo(saldo + v);
    setMensagem('Depósito de R$ ' + v.toFixed(2) + ' realizado.');
  }

  function sacar() {
    const v = Number(valor.replace(',', '.'));
    if (valor === '' || isNaN(v) || v <= 0) {
      setMensagem('Digite um valor maior que zero.');
      return;
    }
    if (v > saldo) {
      setMensagem('Saldo insuficiente.');
      return;
    }
    setSaldo(saldo - v);
    setMensagem('Saque de R$ ' + v.toFixed(2) + ' realizado.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulador Bancário</Text>

      <Text style={styles.saldo}>Saldo: R$ {saldo.toFixed(2)}</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <View style={styles.botao}>
        <Button title="Depositar" color="green" onPress={depositar} />
      </View>
      <View style={styles.botao}>
        <Button title="Sacar" color="red" onPress={sacar} />
      </View>

      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  saldo: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 10 },
  botao: { marginBottom: 10 },
  mensagem: { fontSize: 18, textAlign: 'center', marginTop: 10 },
});
