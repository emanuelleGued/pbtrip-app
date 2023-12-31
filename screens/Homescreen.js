import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.home}>
      <ImageBackground
        source={require("../Imagens/gif2.gif")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titulo}>PBTrip</Text>
        <StatusBar barStyle="dark-content" />
      </ImageBackground>

      <Button
        style={styles.button}
        title="Login"
        onPress={() => navigation.navigate("Index")}
      />
      <Button
        style={styles.button}
        title="Quem somos?"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    fontSize: 42,
    lineHeight: 40,
    backgroundColor: "#A9D0F5",
  },
  image: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  button: {
    fontSize: 42,
    lineHeight: 40,
    marginLeft: 50,
    backgroundColor: "#ffAA23",
  },
  titulo: {
    flex: 1,
    textAlign: "center",
    color: "#086A87",
    fontFamily: "Verdana",
    fontSize: 50,
    fontWeight: "bold",
  },
});
