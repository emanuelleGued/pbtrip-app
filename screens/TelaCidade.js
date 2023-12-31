import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  useEffect,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Card } from "react-native-paper";

export default function TelaCidade({ navigation, route }) {
  const cidade = route.params.cidade;
  console.log(route.params.cidade);

  const restaurante = cidade.restaurante;
  const passeios = cidade.passeios;
  const pousadas = cidade.pousadas;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />

        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          styles={styles.containerHeader}
        >
          <Text style={styles.message}> {cidade.titulo}</Text>
          <Text style={styles.desc}> {cidade.descricao}</Text>

          <Text style={styles.sectionTitle}>Restaurantes</Text>
          <FlatList
            data={restaurante}
            renderItem={({ item }) =>
              restaurante.map((restaurante) => (
                <Card style={styles.card}>
                  <Card.Title title={restaurante.nome} />
                  <Card.Cover source={restaurante.imagem} />
                  <Card.Content style={styles.cardContent}>
                    <Text>{restaurante.descricao}</Text>
                    <Text>{restaurante.endereco}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button
                      style={styles.botao}
                      styleDisabled={{ color: "red" }}
                      title="Unfollow"
                    >
                      Cancel
                    </Button>

                    <Button
                      style={styles.botao}
                      styleDisabled={{ color: "red" }}
                      title="Follow"
                      onPress={() =>
                        navigation.navigate("Restaurante", { restaurante })
                      }
                    >
                      Ok
                    </Button>
                  </Card.Actions>
                </Card>
              ))
            }
            keyExtractor={(item) => item.id}
            horizontal={true}
          />

          <Text style={styles.sectionTitle}>Passeios</Text>
          <FlatList
            data={passeios}
            renderItem={({ item }) =>
              passeios.map((passeio) => (
                <Card style={styles.card}>
                  <Card.Title title={passeio.nome} />
                  <Card.Cover source={passeio.imagem} />
                  <Card.Content style={styles.cardContent}>
                    <Text>{passeio.descricao}</Text>
                    <Text>{passeio.endereco}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button
                      style={styles.botao}
                      styleDisabled={{ color: "red" }}
                      title="Unfollow"
                    >
                      Cancel
                    </Button>
                    <Button
                      style={styles.botao}
                      styleDisabled={{ color: "red" }}
                      onPress={() =>
                        navigation.navigate("Passeio", { passeio })
                      }
                      title="Follow"
                    >
                      Ok
                    </Button>
                  </Card.Actions>
                </Card>
              ))
            }
            keyExtractor={(item) => item.id}
            horizontal={true}
          />

          <Text style={styles.sectionTitle}>Pousadas</Text>
          <FlatList
            data={pousadas}
            renderItem={({ item }) =>
              pousadas.map((pousada) => (
                <Card style={styles.card}>
                  <Card.Title title={pousada.nome} />
                  <Card.Cover source={pousada.imagem} />
                  <Card.Content style={styles.cardContent}>
                    <Text>{pousada.descricao}</Text>
                    <Text>{pousada.endereco}</Text>
                  </Card.Content>
                  <Card.Actions>
                    <Button
                      style={styles.botao}
                      styleDisabled={{ color: "red" }}
                      title="Unfollow"
                    >
                      Cancel
                    </Button>
                    <Button
                      style={styles.botao}
                      styleDisabled={{ color: "red" }}
                      onPress={() => navigation.navigate("Pousada")}
                      title="Follow"
                    >
                      Ok
                    </Button>
                  </Card.Actions>
                </Card>
              ))
            }
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
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
  botao: {
    fontSize: 20,
    color: "green",
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
  desc: {
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "400",
    color: "#26A69A",
    textAlign: "center",
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    color: "#01579B",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#294273",
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 16,
    textAlign: "right",
  },
});
