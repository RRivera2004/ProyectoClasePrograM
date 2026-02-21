import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import CustomPassword from '../CustomPassword';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<any> ();

 const handleOnLogin = () => {
    //navegar a una pantalla dentro del mismo stack navigator
    //navagation.navigate ("Home")

    //navegar a una pantalla que espera parametros por ruta dentro del mismo stack navigator
    //navigation.navigate ("Home", {email})
  
  //navegar a una tab especifica
   navigation.navigate ("Tabs", {screen: "Home"});

 };
  
  const handleOnLogout = () => {
    alert("Alerta logout desde app");
  }

  const handleOnForgotPassword = () => {
    alert("Alerta de olvidé mi contraseña");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Open up App</Text>
        <StatusBar style="auto" />
        <View style={styles.buttonsWrapper}>

           <CustomInput
              placeholder={'Ingrese su correo'} 
              onChange={setEmail} 
              value={email} 
              typeInput={'email'}              
              />
               <CustomInput 
              placeholder={'Password'} 
              onChange={setPassword} 
              value={password} 
              typeInput={'password'}              
              />
              
            <CustomButton
            title={'Login'}
            onClick={handleOnLogin}
          />
          <CustomButton
            title={'Salir'}
            onClick={handleOnLogout}
            variant={'secondary'} />

          <CustomPassword
            title={'Olvidé mi contraseña'}
            onClick={handleOnForgotPassword}
          />
        </View>
      </View>
    </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: "80%",
    height: "80%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  buttonsWrapper: {
    marginTop: 15,
    height: "50%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});