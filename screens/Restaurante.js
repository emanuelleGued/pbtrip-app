import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  useEffect,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Comentario from "../ComentariosUsuario/Comentario";
import { Card } from "react-native-paper";

export default function Restaurante({ route }) {
  const rest = route.params.restaurante;
  console.log(route.params.restaurante);

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
            <Text style={styles.message}> {rest.titulo}</Text>

            <Image src={rest.menu} />
            <Card style={styles.card}>
              <Card.Title title={rest.nome} />
              <Card.Cover style={styles.menu} source={rest.menu} />
            </Card>

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
  menu: {
    height: 550,
    width: 350,
  },
  card: {
    height: 550,
    width: 350,
    alignItems: "center",
    borderRadius: 3,
    elevation: 3,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  message: {
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
