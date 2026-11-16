import { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const produtos = [
  { id: 1, nome: 'Sanduíche', preco: 8 },
  { id: 2, nome: 'Suco', preco: 5 },
  { id: 3, nome: 'Pastel', preco: 6 },
  { id: 4, nome: 'Café', preco: 3 },
];

export default function App() {
  const [pedido, setPedido] = useState([]);

  function adicionar(produto) {
    const item = pedido.find((i) => i.id === produto.id);
    if (item) {
      setPedido(pedido.map((i) => (i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i)));
    } else {
      setPedido([...pedido, { ...produto, quantidade: 1 }]);
    }
  }

  function remover(id) {
    setPedido(pedido.filter((i) => i.id !== id));
  }

  let total = 0;
  pedido.forEach((i) => {
    total = total + i.preco * i.quantidade;
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lanchonete</Text>

      <Text style={styles.subtitulo}>Cardápio</Text>
      {produtos.map((p) => (
        <View key={p.id} style={styles.linha}>
          <Text style={styles.texto}>{p.nome} - R$ {p.preco.toFixed(2)}</Text>
          <Button title="+1" onPress={() => adicionar(p)} />
        </View>
      ))}

      <Text style={styles.subtitulo}>Resumo do pedido</Text>
      {pedido.length === 0 && <Text>Nenhum item no pedido.</Text>}
      {pedido.map((i) => (
        <View key={i.id} style={styles.linha}>
          <Text style={styles.texto}>
            {i.quantidade}x {i.nome} = R$ {(i.preco * i.quantidade).toFixed(2)}
          </Text>
          <Button title="Remover" color="red" onPress={() => remover(i.id)} />
        </View>
      ))}

      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitulo: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  linha: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  texto: { fontSize: 16, flex: 1 },
  total: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
});
