import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');
  const [estudantes, setEstudantes] = useState([]);
  const [mensagem, setMensagem] = useState('');

  function cadastrar() {
    if (nome === '' || matricula === '' || email === '' || curso === '') {
      setMensagem('Preencha todos os campos.');
      return;
    }

    const existe = estudantes.find((e) => e.matricula === matricula);
    if (existe) {
      setMensagem('Matrícula já cadastrada.');
      return;
    }

    const novo = { nome: nome, matricula: matricula, email: email, curso: curso };
    setEstudantes([...estudantes, novo]);
    setMensagem('Estudante cadastrado!');

    setNome('');
    setMatricula('');
    setEmail('');
    setCurso('');
  }

  function remover(mat) {
    setEstudantes(estudantes.filter((e) => e.matricula !== mat));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro de Estudantes</Text>

      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Matrícula" keyboardType="numeric" value={matricula} onChangeText={setMatricula} />
      <TextInput style={styles.input} placeholder="E-mail" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Curso" value={curso} onChangeText={setCurso} />

      <Button title="Cadastrar" onPress={cadastrar} />
      <Text style={styles.mensagem}>{mensagem}</Text>

      {estudantes.map((e) => (
        <View key={e.matricula} style={styles.card}>
          <Text style={styles.nome}>{e.nome}</Text>
          <Text>Matrícula: {e.matricula}</Text>
          <Text>E-mail: {e.email}</Text>
          <Text>Curso: {e.curso}</Text>
          <Button title="Remover" color="red" onPress={() => remover(e.matricula)} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 10 },
  mensagem: { fontSize: 16, textAlign: 'center', marginVertical: 10 },
  card: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10, backgroundColor: '#f2f2f2' },
  nome: { fontSize: 18, fontWeight: 'bold' },
});
