import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';
import AboutScreen from './screens/Aboutscreen';
import IndexScreen from './screens/IndexScreen';
import ListScreen from './screens/ListScreen';
import TelaCidade from './screens/TelaCidade';
import Restaurante from './screens/Restaurante';
import Pousada from './screens/Pousada';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Acessar" component={ListScreen}/>
        <Stack.Screen name="Cidade" component={TelaCidade} />
        <Stack.Screen name="Restaurante" component={Restaurante} />
        <Stack.Screen name="Pousada" component={Pousada} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


