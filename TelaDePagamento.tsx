{/*npm install @react-native-picker/picker --save*/ }
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type PagamentoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TelaDePagamento'
>;

const TelaDePagamento: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const navigation = useNavigation<PagamentoScreenNavigationProp>();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Concluindo pedido</Text>
      <Text style={styles.subtitle}>Método de pagamento</Text>
      <Picker
        selectedValue={paymentMethod}
        onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Dinheiro" value="cash" />
        <Picker.Item label="Cartão de crédito" value="creditCard" />
        <Picker.Item label="Cartão de débito" value="debitCard" />
        <Picker.Item label="PayPal" value="paypal" />
        <Picker.Item label="Pix" value="pix" />
      </Picker>
      <Text style={styles.subtitle}>Endereço</Text>
      <Picker
        selectedValue={state}
        onValueChange={(itemValue) => setState(itemValue)}
        style={styles.picker}>
        <Picker.Item label="São Paulo" value="saoPaulo" />
        <Picker.Item label="Rio de Janeiro" value="rioDeJaneiro" />
      </Picker>
      <TextInput
        placeholder="Cidade"
        value={city}
        onChangeText={(text) => setCity(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Bairro"
        value={neighborhood}
        onChangeText={(text) => setNeighborhood(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Rua"
        value={street}
        onChangeText={(text) => setStreet(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Número"
        value={houseNumber}
        onChangeText={(text) => setHouseNumber(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TelaDeConfirmacao')}>
        <Text style={styles.buttonText}>Concluir pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    padding: 10,
    borderRadius: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TelaDePagamento;