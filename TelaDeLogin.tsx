import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // Import the type from App.tsx
import { useNavigation } from '@react-navigation/native';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TelaDeLogin'
>;

const TelaDeLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>(); // Add this line

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    navigation.navigate('TelaDePedidos'); // Add this line
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <ImageBackground
      source={require('./img/food_pattern.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={!isPasswordVisible}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Text style={styles.eyeIconText}>{isPasswordVisible ? '❌' : '✅'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
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
    padding: 16,
  },
  input: {
    height: 40,
    alignSelf: 'center',
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  passwordContainer: {
    alignSelf: 'center',
    width: '80%',
  },
  eyeIcon: {
    position: 'absolute',
    right: -20,
    bottom: 15,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 0, 1)',
    borderRadius: 100,
  },
  eyeIconText: {
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
  },
});
export default TelaDeLogin;