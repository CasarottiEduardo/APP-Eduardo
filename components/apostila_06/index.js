import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Apostila06() {
  const [massa, setMassa] = useState("0");
  const [altura, setAltura] = useState("0");
  const [resultado, setResultado] = useState(0);
  const [descricao, setDescricao] = useState("");

  function Calcular() {
    const valor = parseFloat(massa) / (parseFloat(altura) * parseFloat(altura));
    setResultado(valor);
    setDescricao(getDescricaoIMC(valor));
  }

  function getDescricaoIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso Normal";
    } else if (imc >= 25 && imc < 30) {
      return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
      return "Obesidade Grau 1";
    } else if (imc >= 35 && imc < 40) {
      return "Obesidade Grau 2";
    } else {
      return "Obesidade Grau 3";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo 6</Text>
      <View style={styles.entradaImc}>
        <TextInput
          placeholder="Massa"
          placeholderTextColor="lightgray"
          keyboardType="numeric"
          style={styles.input}
          value={massa}
          onChangeText={(entrada) => setMassa(entrada)}
        />

        <TextInput
          placeholder="Altura"
          placeholderTextColor="lightgray"
          keyboardType="numeric"
          style={styles.input}
          value={altura}
          onChangeText={(entrada) => setAltura(entrada)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => Calcular()}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
      <Text style={styles.resultado}>Resultado: {descricao}</Text>
    </View>
  );
}
