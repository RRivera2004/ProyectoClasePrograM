import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';
import CustomPassword from './src/components/CustomPassword';

export default function App() {
  const handleOnLogin = () => {
    console.log("prueba login desde app");
    alert("Alerta login desde app");
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

          <CustomInput />
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
    backgroundColor: '#f00865',
  },
  buttonsWrapper: {
    marginTop: 15,
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});