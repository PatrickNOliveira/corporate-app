import React, {useEffect} from 'react'
import { Snackbar } from 'react-native-paper';
import {View, Text} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {useSelector} from "react-redux";
import {RootState} from "../redux/RootState";
import {useSnackbar} from "../hooks/useSnackbar";

type Props = {
    children: JSX.Element
}
export const SnackbarProvider = ({children}: Props) => {
    const snackbarState = useSelector(
        (state: RootState) => state.snackbar,
    )
    const snackbar = useSnackbar()
    useEffect(() => {
        if (snackbarState.visible) {
            setTimeout(() => {
                snackbar.hide();
            }, 4000)
        }
    }, [snackbarState.visible])
    return <SafeAreaProvider>
        {children}
        <Snackbar
            visible={snackbarState.visible}
            onDismiss={() => {}}
            style={{backgroundColor: snackbarState.variant === 'error' ? 'red' : 'green'}}
        >
            <View><Text style={{color: '#FFF'}}>{snackbarState.message}</Text></View>
        </Snackbar>
    </SafeAreaProvider>
}