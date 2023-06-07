import {  FlatList, ScrollView,  StyleSheet,  Text,  View,  StatusBar, Button,  useEffect} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Comentario from '../ComentariosUsuario/Comentario';



export default function Restaurante({ navigation }) {
 

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />

        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          styles={styles.containerHeader}>

          
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
    backgroundColor: '#E0F7FA',
  },
  scrollView: {
    flex: 1,
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingLeft: '5%',
    justifyContent: 'space-between',
    backgroundColor: '#4DD0E1',
    padding: 20,
    borderRadius: 10,
  },
  message: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: '600',
    color: '#01579B',
    textAlign: 'center'
  },
  desc: {
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: '400',
    color: '#26A69A',
    textAlign: 'center'
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#FFFFFF',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    color: '#01579B',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#294273',
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 16,
    textAlign: 'right'
  },
  containerComment: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  }
});