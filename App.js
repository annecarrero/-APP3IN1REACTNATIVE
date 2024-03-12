import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AnnelyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>escolha uma opção:</Text>
      <Button
        title="calcular idade"
        onPress={() => navigation.navigate('Idade')}
        color="#b81414" 
      />
      <Button
        title="calcular área do triângulo"
        onPress={() => navigation.navigate('Triangulo')}
        color="#b81414" 
      />
      <Button
        title="calcular área do quadrado"
        onPress={() => navigation.navigate('Quadrado')}
        color="#b81414" 
      />
    </View>
  );
}

function IdadeScreen() {
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIdade = () => {
    const idadeInt = parseInt(idade);
    if (idadeInt >= 0 && idadeInt <= 12) {
      setResultado('Criança');
    } else if (idadeInt >= 13 && idadeInt <= 17) {
      setResultado('Adolescente');
    } else if (idadeInt >= 18 && idadeInt <= 20) {
      setResultado('Jovem');
    } else if (idadeInt >= 21 && idadeInt <= 60) {
      setResultado('Adulto');
    } else {
      setResultado('Idoso');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>digite a idade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setIdade}
        value={idade}
      />
      <Button title="calcular" onPress={calcularIdade} color="#b81414" /> 
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

function TrianguloScreen() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');

  const calcularAreaTriangulo = () => {
    const baseFloat = parseFloat(base);
    const alturaFloat = parseFloat(altura);
    const areaCalculada = (baseFloat * alturaFloat) / 2;
    setArea(areaCalculada.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>digite a base e a altura:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setBase}
        value={base}
        placeholder="Base"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setAltura}
        value={altura}
        placeholder="Altura"
      />
      <Button title="calcular" onPress={calcularAreaTriangulo} color="#b81414" /> 
      <Text style={styles.result}>área: {area}</Text>
    </View>
  );
}

function QuadradoScreen() {
  const [lado, setLado] = useState('');
  const [area, setArea] = useState('');

  const calcularAreaQuadrado = () => {
    const ladoFloat = parseFloat(lado);
    const areaCalculada = ladoFloat * ladoFloat;
    setArea(areaCalculada.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>digite o lado do quadrado:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setLado}
        value={lado}
        placeholder="Lado"
      />
      <Button title="calcular" onPress={calcularAreaQuadrado} color="#b81414" /> 
      <Text style={styles.result}>área: {area}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Annely">
        <Stack.Screen name="Annely" component={AnnelyScreen} />
        <Stack.Screen name="Idade" component={IdadeScreen} />
        <Stack.Screen name="Triangulo" component={TrianguloScreen} />
        <Stack.Screen name="Quadrado" component={QuadradoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b814147b', 
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#b81414', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#b81414', 
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 200,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#b81414', 
  },
});

