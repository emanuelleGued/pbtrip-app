import React from "react";
import {
  View,
  StatusBar,
  Button,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function IndexScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Animatable.View
        animation="fadeInLeft"
        deLay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}> Bem-Vindo(a) </Text>
        <Text style={styles.subtitle}>Faça login para acessar</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title} class="email" name="email">
          {" "}
          Email{" "}
        </Text>
        <TextInput placeholder="Digite um email ..." style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          class="senha"
          name="senha"
          placeholder="Digite a sua senha ..."
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Button
            style={styles.buttonText}
            title="Acessar"
            onPress={() => navigation.navigate("Acessar")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.buttonregisterText}>Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "600",
    color: "#01579B",
    fontFamily: "Montserrat",
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
  title: {
    fontSize: 20,
    marginTop: 28,
    fontWeight: "bold",
    color: "#4DD0E1",
  },
  subtitle: {
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: "400",
    color: "#26A69A",
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: "#1A237E",
  },
  button: {
    fontSize: 42,
    lineHeight: 40,
    marginLeft: 50,
    backgroundColor: "#ffAA23",
  },
  buttonText: {
    color: "#1A237E",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  buttonregisterText: {
    color: "#FFFFFF",
  },
});
