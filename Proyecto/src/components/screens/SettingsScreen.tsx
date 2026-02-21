import { useNavigation } from '@react-navigation/native';
import { View,Text, StyleSheet } from 'react-native';
import CustomButton from '../CustomButton';



export default function SettingsScreen (){
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <Text style= {styles.title}>Pantalla de settings  </Text>
            <CustomButton 
            title= "Volver a Login"
            onClick={() => navigation.navigate("Login")}
           />
        </View>
    );
}

const styles = StyleSheet.create ({
 container: {
    flex: 1,
    backgroundColor: '#7beadd',
    justifyContent: 'center',
    alignItems: 'center',

 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  
},
});
