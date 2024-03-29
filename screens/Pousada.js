import React, { useState } from "react";
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
import { Calendar } from "react-native-calendars";
import Comentario from "../ComentariosUsuario/Comentario";

export default function Pousada({ navigation }) {
  const [data, setData] = useState({});
  const dataSelecionada = (novadata) => {
    setData({
      ...data,
      [novadata.dateString]: {
        selected: true,
      },
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />

        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          styles={styles.containerHeader}
        >
          <View style={styles.calendario}>
            <Calendar markedDates={data} onDayPress={dataSelecionada} />
          </View>

          <View style={styles.containerComment}>
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
  calendario: {
    flex: 1,
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
