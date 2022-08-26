import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Register from './src/Register';
import Ethanol from './src/Ethanol';
import Methanol from './src/Methanol';
import Propanol from './src/Propanol';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{title:"Sign Up"}}/>
        <Stack.Screen name="Home" component={Home} options={{title:"Dashboard"}}/>
        <Stack.Screen name="Ethanol" component={Ethanol} options={{title:"Ethanol"}}/>
        <Stack.Screen name="Methanol" component={Methanol} options={{title:"Methanol"}}/>
        <Stack.Screen name="Propanol" component={Propanol} options={{title:"Propanol"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
