import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);
  const [votosC, setVotosC] = useState(0);

  const total = votosA + votosB + votosC;
  const maior = Math.max(votosA, votosB, votosC);

  let resultado = '';
  if (total === 0) {
    resultado = 'Nenhum voto ainda.';
  } else {
    const lideres = [];
    if (votosA === maior) lideres.push('Ana');
    if (votosB === maior) lideres.push('Bruno');
    if (votosC === maior) lideres.push('Carla');

    if (lideres.length > 1) {
      resultado = 'Empate na liderança: ' + lideres.join(' e ');
    } else {
      resultado = 'Mais votado: ' + lideres[0];
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Eleição Estudantil</Text>

      <Text style={styles.texto}>Ana: {votosA} votos</Text>
      <Button title="Votar em Ana" onPress={() => setVotosA(votosA + 1)} />

      <Text style={styles.texto}>Bruno: {votosB} votos</Text>
      <Button title="Votar em Bruno" onPress={() => setVotosB(votosB + 1)} />

      <Text style={styles.texto}>Carla: {votosC} votos</Text>
      <Button title="Votar em Carla" onPress={() => setVotosC(votosC + 1)} />

      <Text style={styles.total}>Total de votos: {total}</Text>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  texto: { fontSize: 18, marginTop: 15, marginBottom: 5 },
  total: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 25 },
  resultado: { fontSize: 18, textAlign: 'center', marginTop: 10 },
});
