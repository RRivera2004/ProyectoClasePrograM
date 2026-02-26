import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import TabsNavigator from "./TabsNavigation";

export type RootStackParamsList ={
    Login: undefined,
    //Home:{email: string},
    Tabs: {email: string},
};

const Stack = createNativeStackNavigator<RootStackParamsList> ();

export default function StackNavigator (){

   return(
    <Stack.Navigator initialRouteName='Login' 
         screenOptions={{headerShown: true}}
         >

    <Stack.Screen
    name="Login"
    component={LoginScreen}
    options={{title:'Inicio de Sesion'}}
    />
    <Stack.Screen
    name= "Tabs"
    component = {TabsNavigator}
    options={{headerShown: false}}
    />
    </Stack.Navigator>

   );
}
