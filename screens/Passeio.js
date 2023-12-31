import { ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import Comentario from "../ComentariosUsuario/Comentario";

export default function Passeio({ navigation, route }) {
  const rot = route.params.passeio;
  console.log(route.params.passeio);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />

        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          styles={styles.containerHeader}
        >
          <View style={styles.containerComment}>
            <Text style={styles.message}> {rot.titulo}</Text>
            <Text style={styles.rot}> {rot.roteiro}</Text>

            <Comentario />
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
  },
  scrollView: {
    flex: 1,
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingLeft: "5%",
    justifyContent: "space-between",
    backgroundColor: "#4DD0E1",
    padding: 20,
    borderRadius: 10,
  },
  message: {
    fontFamily: "Montserrat",
    fontSize: 24,
    fontWeight: "600",
    color: "#01579B",
    textAlign: "center",
  },
  rot: {
    fontFamily: "Montserrat",
    fontSize: 24,
    fontWeight: "600",
    color: "#01579B",
    textAlign: "center",
  },

  containerComment: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
});
