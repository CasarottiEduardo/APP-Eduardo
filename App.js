import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Apostila03 from "./components/apostila_03/index";
import Apostila03a from "./components/apostila_03_avancado/index";
import Apostila04 from "./components/apostila_04/index";
export default function App() {
  return (
    <View style={styles.container}>
      <Apostila04/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    justifyContent: "center",
  },
});
