import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import CustomPassword from '../CustomPassword';
import { useState } from 'react';

export default function LoginScreen() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleOnLogin = () => {
    console.log("prueba login desde app");
   
  }

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
               <CustomInput 
              placeholder={'Name'} 
              onChange={()=>{}}
              value={""} 
              typeInput={'text'}              
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
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  buttonsWrapper: {
    marginTop: 15,
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});