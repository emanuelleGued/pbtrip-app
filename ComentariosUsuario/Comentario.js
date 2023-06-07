import React, {useState} from 'react';
import {View, TextInput, Button, Modal, Text, Platform, Alert } from 'react-native';
import Calendar from 'react-native-calendario';

export default function Comentario() {
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  const novoComentario = (text) => {
    setComentario(text);
  };

  const addComentario = () => {            
    if (comentario.trim().length > 0) {
      setComentarios([...comentarios, comentario.trim()]);      
      setComentario('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder = "Digite o seu comentário"
        value = {comentario}
        onChangeText = {novoComentario}
      />
       <Button 
        title = "Comentar"
        onPress = {addComentario}
      />
      
      {comentarios.map(e => (
        <Text>{e}</Text>
      ))}
    </View>
  )
}