import React from "react";
import {
  ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Card } from "react-native-paper";

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Quem somos? </Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={500}
        style={styles.containerForm}
      >
        <Card style={styles.card}>
          <Card.Title title="Nós somos o PBTrip" />
          <Card.Cover
            source={{
              uri: "https://i.pinimg.com/originals/f0/7d/ff/f07dff6966ac48982773fbb149bfde48.gif",
            }}
          />
          <Card.Content style={styles.cardContent}>
            <Text>Seu App de passeios na Paraíba</Text>
          </Card.Content>
        </Card>
      </Animatable.View>

      <TouchableOpacity style={styles.button}>
        <Button
          style={styles.buttonText}
          title="HomeScreen"
          onPress={() => navigation.navigate("Home")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
  },
  containerForm: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4DD0E1",
  },
  button: {
    marginTop: 14,
    alignSelf: "center",
  },
  buttonText: {
    color: "#0000FF",
    fontSize: 18,
    fontWeight: "bold",
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
    textAlign: "center",
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    color: "#01579B",
    textAlign: "center",
  },
});

export default AboutScreen;
