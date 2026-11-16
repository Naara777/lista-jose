import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [produto, setProduto] = useState('');
  const [inicial, setInicial] = useState('');
  const [movimento, setMovimento] = useState('');
  const [estoque, setEstoque] = useState(0);
  const [mensagem, setMensagem] = useState('');

  function definirInicial() {
    const qtd = Number(inicial);
    if (produto === '' || inicial === '' || isNaN(qtd) || qtd < 0) {
      setMensagem('Informe o produto e uma quantidade inicial válida.');
      return;
    }
    setEstoque(qtd);
    setMensagem('Estoque inicial definido.');
  }

  function adicionar() {
    const qtd = Number(movimento);
    if (movimento === '' || isNaN(qtd) || qtd <= 0) {
      setMensagem('Digite uma quantidade maior que zero.');
      return;
    }
    setEstoque(estoque + qtd);
    setMensagem(estoque + ' + ' + qtd + ' → ' + (estoque + qtd) + ' unidades');
  }

  function retirar() {
    const qtd = Number(movimento);
    if (movimento === '' || isNaN(qtd) || qtd <= 0) {
      setMensagem('Digite uma quantidade maior que zero.');
      return;
    }
    if (qtd > estoque) {
      setMensagem('Não é possível retirar mais do que o disponível.');
      return;
    }
    setEstoque(estoque - qtd);
    setMensagem(estoque + ' − ' + qtd + ' → ' + (estoque - qtd) + ' unidades');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Controle de Estoque</Text>

      <TextInput style={styles.input} placeholder="Nome do produto" value={produto} onChangeText={setProduto} />
      <TextInput style={styles.input} placeholder="Quantidade inicial" keyboardType="numeric" value={inicial} onChangeText={setInicial} />
      <Button title="Definir estoque inicial" onPress={definirInicial} />

      <Text style={styles.estoque}>{produto}: {estoque} unidades</Text>
      {estoque < 5 && <Text style={styles.alerta}>Atenção: estoque baixo!</Text>}

      <TextInput style={styles.input} placeholder="Quantidade da movimentação" keyboardType="numeric" value={movimento} onChangeText={setMovimento} />
      <View style={styles.botao}>
        <Button title="Adicionar estoque" color="green" onPress={adicionar} />
      </View>
      <View style={styles.botao}>
        <Button title="Retirar estoque" color="red" onPress={retirar} />
      </View>

      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 10 },
  estoque: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 15 },
  alerta: { color: 'red', textAlign: 'center', marginBottom: 10 },
  botao: { marginBottom: 10 },
  mensagem: { fontSize: 18, textAlign: 'center', marginTop: 10 },
});
