import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import marcadores from "../dados/marcadores";

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: -7.2123286,
          longitude: -36.8373446,
          latitudeDelta: 2.5922,
          longitudeDelta: 6.0421,
        }}
      >
        {marcadores.cidades.map((cidade, index) => (
          <Marker
            key={index}
            coordinate={cidade.localizacao}
            title={cidade.titulo}
            description={cidade.descricao}
            restaurante={cidade.restaurante}
            passeios={cidade.passeios}
            pousadas={cidade.pousadas}
            onPress={() => {
              navigation.navigate("Cidade", { cidade });
            }}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
