import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import CriarPost from "../screens/CriarPost/CriarPost";
import EditarPost from "../screens/EditarPost/EditarPost";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="/home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="/home" component={Home} />
                <Stack.Screen name="/login" component={Login} />
                <Stack.Screen name="/criar-post" component={CriarPost} />
                <Stack.Screen name="/editar-post" component={EditarPost} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}