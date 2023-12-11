import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaDePedidos from './TelaDePedidos';
import TelaDePagamento from './TelaDePagamento';
import TelaDeLogin from './TelaDeLogin';
import TelaDeConfirmacao from './TelaDeConfirmacao';

export type RootStackParamList = {
  TelaDeLogin: undefined;
  TelaDePedidos: undefined;
  TelaDePagamento: undefined;
  TelaDeConfirmacao: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaDeLogin">
        <Stack.Screen name="TelaDeLogin" component={TelaDeLogin} />
        <Stack.Screen name="TelaDePedidos" component={TelaDePedidos} />
        <Stack.Screen name="TelaDePagamento" component={TelaDePagamento} />
        <Stack.Screen name="TelaDeConfirmacao" component={TelaDeConfirmacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
