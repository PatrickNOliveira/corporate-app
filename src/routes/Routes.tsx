import {createStackNavigator, StackNavigationOptions} from "@react-navigation/stack";
import * as React from "react";
import {Colors} from "../common/constants/Colors"
import {useSelector} from "react-redux";
import {RootState} from "../common/redux/RootState";
import {Home} from "../components/templates/Home/Home";

const Stack = createStackNavigator();

export function Routes() {
    const usuarioLogado = useSelector((state: RootState) => state.usuarioLogado);
    const navigationOptions: StackNavigationOptions = {
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            alignItems: 'center',
            color: '#FFF',
        },
        headerStyle: {
            backgroundColor: Colors.PRIMARY,
        },
    }
    return (
        <Stack.Navigator initialRouteName={
            "Home"
        }>
            <Stack.Screen options={{
                headerShown: false
            }} name="Index" component={Home} />
            {/*<Stack.Screen options={navigationOptions} name="Criar Conta" component={CadastrarSe} />*/}
        </Stack.Navigator>
    );
}

