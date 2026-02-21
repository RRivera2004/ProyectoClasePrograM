import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { TabsParamList } from "../navigation/TabsNavigation";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../CustomButton";

type Props = NativeStackScreenProps<TabsParamList, 'Home'>;

export default function HomeScreen (){
    //destructuring de parametro de ruta: sacando una propiedad de un objeto
    //const {email}= route.params
const navigation = useNavigation<any> ();


    return(
        <View style ={styles.container}>
            <View style= {styles.card}>
            <Text style= {styles.title}>Bienvenido a home </Text>
            <CustomButton 
            title= "Ir a Settings"
            onClick={() => navigation.navigate("Profile")} 
            />

        </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor:'#8ab4f3',
        justifyContent: 'center',
        alignItems: "center",
        padding: 20,
    },
    card: {
        width: '100%',
        backgroundColor: '#ba7d7d',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#191919',
    },
});