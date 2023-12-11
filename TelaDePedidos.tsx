import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type PedidoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TelaDePedidos'
>;

const TelaDePedidos: React.FC = () => {
  const navigation = useNavigation<PedidoScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o seu pedido</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TelaDePagamento')}>
        <Text style={styles.buttonText}>Hamburger</Text>
        <Text style={styles.buyText}>Comprar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TelaDePagamento')}>
        <Text style={styles.buttonText}>Pizza</Text>
        <Text style={styles.buyText}>Comprar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TelaDePagamento')}>
        <Text style={styles.buttonText}>Yakisoba</Text>
        <Text style={styles.buyText}>Comprar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TelaDePagamento')}>
        <Text style={styles.buttonText}>Sorvete</Text>
        <Text style={styles.buyText}>Comprar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TelaDePagamento')}>
        <Text style={styles.buttonText}>Milkshake</Text>
        <Text style={styles.buyText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDEDE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  buyText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default TelaDePedidos;