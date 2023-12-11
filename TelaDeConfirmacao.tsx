import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type ConfirmacaoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TelaDeConfirmacao'
>;

const TelaDeConfirmacao: React.FC = () => {
  const navigation = useNavigation<ConfirmacaoScreenNavigationProp>();

  return (
    <ImageBackground
      source={require('./img/food_pattern.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>Seu pedido está sendo preparado</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaDePedidos')}>
          <Text style={styles.buttonText}>Realizar outro pedido</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBox: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default TelaDeConfirmacao;
