import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CostumButton'; 

export default function App(){

   const handleOnLogin = () => {
    console.log ("prueba desde app");
    alert("Alerta desde app");

    const handleOnLogout = () => {
      alert ("alerta logout desde app")

    }
 
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
      <CustomButton  title= {'Login'} onClick={handleOnLogin} />

      <CustomButton title={'Salir'} onClick={handleOnLogout} />
       
    
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f4f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
}